let result = [];
let trs = Array.from(document.querySelector('.waffle.no-grid').childNodes[1].childNodes).slice(2, 439);

trs.forEach((tr) => {
    let tds = Array.from(tr.childNodes).slice(1, 11);
    let obj = {
        version: tds[0].textContent,
        music: tds[1].textContent,
        notes: parseInt(tds[5].textContent, 10),
        bpm: tds[6].textContent.split('~').map(s => parseInt(s, 10)),
        textage: tds[5].firstElementChild != null && tds[5].firstElementChild.href != null ? decodeURI(tds[5].firstElementChild.href.replaceAll('https://www.google.com/url?q=', '').replaceAll('https://www.google.com/url?q%3D', '').replaceAll('http://', 'https://')).replaceAll('%3D', '=') : null,
        musicMovie: tds[6].firstElementChild != null && tds[6].firstElementChild.href != null ? decodeURI(tds[6].firstElementChild.href.replaceAll('https://www.google.com/url?q=', '').replaceAll('https://www.google.com/url?q%3D', '').replaceAll('http://', 'https://')).replaceAll('%3D', '=') : null,
        score: parseInt(tds[2].textContent.split('/')[0], 10),
        scoreResult: tds[1].firstElementChild != null && tds[1].firstElementChild.href != null ? decodeURI(tds[1].firstElementChild.href.replaceAll('https://www.google.com/url?q=', '').replaceAll('https://www.google.com/url?q%3D', '').replaceAll('http://', 'https://')).replaceAll('%3D', '=') : null,
        topVersion: tds[7].textContent,
        player: tds[8].textContent,
        date: tds[9].textContent.replaceAll('/', '-')
    };

    if (obj.textage != null && obj.textage.indexOf('&sa') >= 0) {
        obj.textage = obj.textage.substring(0, obj.textage.indexOf('&sa'));
    }
    if (obj.musicMovie != null && obj.musicMovie.indexOf('&sa') >= 0) {
        obj.musicMovie = obj.musicMovie.substring(0, obj.musicMovie.indexOf('&sa'));
    }
    if (obj.scoreResult != null && obj.scoreResult.indexOf('&sa') >= 0) {
        obj.scoreResult = obj.scoreResult.substring(0, obj.scoreResult.indexOf('&sa'));
    }

    if (obj.textage != null && obj.textage.indexOf('%26sa') >= 0) {
        obj.textage = obj.textage.substring(0, obj.textage.indexOf('%26sa'));
    }
    if (obj.musicMovie != null && obj.musicMovie.indexOf('%26sa') >= 0) {
        obj.musicMovie = obj.musicMovie.substring(0, obj.musicMovie.indexOf('%26sa'));
    }
    if (obj.scoreResult != null && obj.scoreResult.indexOf('%26sa') >= 0) {
        obj.scoreResult = obj.scoreResult.substring(0, obj.scoreResult.indexOf('%26sa'));
    }

    if (obj.version != null) {
        obj.version = obj.version.trim();
    }
    if (obj.music != null) {
        obj.music = obj.music.trim();
    }
    if (obj.textage != null) {
        obj.textage = obj.textage.trim();
    }
    if (obj.musicMovie != null) {
        obj.musicMovie = obj.musicMovie.trim();
    }
    if (obj.scoreResult != null) {
        obj.scoreResult = obj.scoreResult.trim();
    }
    if (obj.topVersion != null) {
        obj.topVersion = obj.topVersion.trim();
    }
    if (obj.player != null) {
        obj.player = obj.player.trim();
    }
    if (obj.date != null) {
        obj.date = obj.date.trim();
    }

    if (new RegExp(String.fromCharCode(160), "g").test(obj.music)) {
        debugger;
    }
    if (/\u{C2A0}/.test(obj.music)) {
        debugger;
    }

    result.push(obj);
});

console.log(JSON.stringify(result));
