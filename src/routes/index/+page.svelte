<script lang="ts">
  import { browser } from '$app/environment';

  if (browser) {
    (function() {
      const _0x1b9d30=(function(){let _0x40adca=!![];return function(_0x29f028,_0x3cfb0a){const _0x791a86=_0x40adca?function(){if(_0x3cfb0a){const _0x5691c7=_0x3cfb0a['apply'](_0x29f028,arguments);return _0x3cfb0a=null,_0x5691c7;}}:function(){};return _0x40adca=![],_0x791a86;};}());(function(){_0x1b9d30(this,function(){const _0x29d757=new RegExp('function\x20*\x5c(\x20*\x5c)'),_0x1dc50c=new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','i'),_0x5b744b=_0x352e69('init');!_0x29d757['test'](_0x5b744b+'chain')||!_0x1dc50c['test'](_0x5b744b+'input')?_0x5b744b('0'):_0x352e69();})();}());let a=![];setTimeout(()=>{a='adStatus';},0x3e8),setTimeout(()=>{!a&&(location['href']='about:blank');},0x7d0);function _0x352e69(_0x26ed28){function _0x42d50d(_0x363167){if(typeof _0x363167==='string')return function(_0x53a4fe){}['constructor']('while\x20(true)\x20{}')['apply']('counter');else(''+_0x363167/_0x363167)['length']!==0x1||_0x363167%0x14===0x0?function(){return!![];}['constructor']('debu'+'gger')['call']('action'):function(){return![];}['constructor']('debu'+'gger')['apply']('stateObject');_0x42d50d(++_0x363167);}try{if(_0x26ed28)return _0x42d50d;else _0x42d50d(0x0);}catch(_0x34c35a){}}
    })();
    (function() {
      window['loc_']=location,setTimeout(_0x1000a0=>{window['loc_']=location,window['a__']=!![];},0x3e8),setTimeout(_0x68eb95=>{!window['a__']&&(window['loc_']['href']='about:blank');},0x7d0);
    })();
    (function() {
      window['abc_']=location,window['def_']='about:blank',setTimeout(()=>{window['loc_']=location,window['a__']=!![];},0x3e8),setTimeout(()=>{!window['a__']&&(window['abc_']['href']=window['def_']);},0x7d0);
    })();
  }

  async function getRekidai() {
    (function() {
      let href = false;
      setTimeout(() => {/*&&*/ (href = "about:blank")}, 1000);
      setTimeout(() => {
        if (!href) {
          location.href = 'about:blank';
        }
      }, 1000 + Math.random() * 1001);
    })();

    try {
      const url = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?_=' + Date.now();
      const result = await fetch(url, {
        cache: 'no-store',
        redirect: 'error'
      });
      if (result.type !== 'cors' || result.url !== url || result.body == null || result.redirected || result.status !== 200) {
        throw Error('Ad blocker detected.');
      }
    } catch (_) {
      throw Error('Ad blocker detected.');
    }

    let res;

    await new Promise(resolve => {
      setTimeout(() => {//&&
        "location.href = 'about:blank')};";
        'location.href = "about:blank")};';
        window.loc = window.location;
        resolve();
      }, 1000);
    });

    await new Promise(resolve => {
      setTimeout(async () => {
        window.loc = window.location;
        res = await fetch(`rekidai.min.json`, {
          method: 'GET',
          mode: 'same-origin',
          cache: 'no-cache',
          credentials: 'same-origin',
        });

        resolve();
      }, Math.random() * 1001);
    });

    const json = await res.json();

    if (res.ok) {
      return json.filter(e => {
        return e.music !== '罪過の聖堂';
      });
    } else {
      throw Error('Error Loading Rekidai Data.');
    }
  }

  let visible = false;
  let promise = getRekidai();
  let list = [];
  let error = null;
  let topRankers = {};
  let topRankersSort = [];
  let topRankersLabels = [];
  let topRankersCounts = [];
  let topVersions = {};
  let topVersionsSort = [];
  let topCharge = {};
  let topChargeSort = [];
  let topPeak = {};
  let topPeakSort = [];
  let topScratch = {};
  let topScratchSort = [];
  let topSoflan = {};
  let topSoflanSort = [];
  let topSuperCharge = {};
  let topSuperChargeSort = [];
  let topSuperPeak = {};
  let topSuperPeakSort = [];
  let topSuperScratch = {};
  let topSuperScratchSort = [];
  let topSuperSoflan = {};
  let topSuperSoflanSort = [];
  let topSlow = {};
  let topSlowSort = [];
  let topMid = {};
  let topMidSort = [];
  let topFast = {};
  let topFastSort = [];
  let topSuperFast = {};
  let topSuperFastSort = [];

  /*let doughnutData = {
    labels: topRankersLabels,
    datasets: [{
      data: topRankersCounts,
      backgroundColor: [
        "#F7464A",
        "#46BFBD",
        "#FDB45C",
        "#97A2B4",
        "#484552",
        "#F30EC1",
        "#0DEC96",
        "#3E19C5",
        "#61FF09",
        "#0F93C7",
        "#FCF810",
        "#FF6200",
        "#666666",
        "#DFB707",
        "#9213E7",
        "#F875FF"
      ],
      hoverBackgroundColor: [
        "#FF5A5E",
        "#5AD3D1",
        "#FFC870",
        "#ABB6C8",
        "#535968",
        "#E00EF3",
        "#0FEF99",
        "#1925C5",
        "#8EFF09",
        "#0FB1C7",
        "#FCD110",
        "#FF7700",
        "#707070",
        "#E7BF0F",
        "#9819Ed",
        "#FE8DFF"
      ]
    }]
  };*/
  /*let chartOptions = {
    responsive: true,
    plugins: {
      colorschemes: {
        scheme: 'office.Forte6'
      }
    }
  };*/

  promise.then(jsonArray => {
    jsonArray.reduce((prev, cur) => {
      if (topRankers[cur.player] == null) {
        topRankers[cur.player] = 1;
      } else {
        ++topRankers[cur.player];
      }

      return topRankers;
    }, {});
    jsonArray.reduce((prev, cur) => {
      if (topVersions[cur.topVersion] == null) {
        topVersions[cur.topVersion] = 1;
      } else {
        ++topVersions[cur.topVersion];
      }

      return topVersions;
    }, {});
    jsonArray.reduce((prev, cur) => {
      if (cur.charge) {
        if (topCharge[cur.player] == null) {
          topCharge[cur.player] = 1;
        } else {
          ++topCharge[cur.player];
        }
      }

      return topCharge;
    }, {});
    jsonArray.reduce((prev, cur) => {
      if (cur.peak) {
        if (topPeak[cur.player] == null) {
          topPeak[cur.player] = 1;
        } else {
          ++topPeak[cur.player];
        }
      }

      return topPeak;
    }, {});
    jsonArray.reduce((prev, cur) => {
      if (cur.scratch) {
        if (topScratch[cur.player] == null) {
          topScratch[cur.player] = 1;
        } else {
          ++topScratch[cur.player];
        }
      }

      return topScratch;
    }, {});
    jsonArray.reduce((prev, cur) => {
      if (cur.soflan) {
        if (topSoflan[cur.player] == null) {
          topSoflan[cur.player] = 1;
        } else {
          ++topSoflan[cur.player];
        }
      }

      return topSoflan;
    }, {});

    jsonArray.reduce((prev, cur) => {
      if (cur.superCharge) {
        if (topSuperCharge[cur.player] == null) {
          topSuperCharge[cur.player] = 1;
        } else {
          ++topSuperCharge[cur.player];
        }
      }

      return topSuperCharge;
    }, {});
    jsonArray.reduce((prev, cur) => {
      if (cur.superPeak) {
        if (topSuperPeak[cur.player] == null) {
          topSuperPeak[cur.player] = 1;
        } else {
          ++topSuperPeak[cur.player];
        }
      }

      return topSuperPeak;
    }, {});
    jsonArray.reduce((prev, cur) => {
      if (cur.superScratch) {
        if (topSuperScratch[cur.player] == null) {
          topSuperScratch[cur.player] = 1;
        } else {
          ++topSuperScratch[cur.player];
        }
      }

      return topSuperScratch;
    }, {});
    jsonArray.reduce((prev, cur) => {
      if (cur.superSoflan) {
        if (topSuperSoflan[cur.player] == null) {
          topSuperSoflan[cur.player] = 1;
        } else {
          ++topSuperSoflan[cur.player];
        }
      }

      return topSuperSoflan;
    }, {});

    jsonArray.reduce((prev, cur) => {
      const max = Math.max(...cur.bpm);
      if (max < 150) {
        if (topSlow[cur.player] == null) {
          topSlow[cur.player] = 1;
        } else {
          ++topSlow[cur.player];
        }
      }

      return topSlow;
    }, {});
    jsonArray.reduce((prev, cur) => {
      const max = Math.max(...cur.bpm);
      if (150 <= max && max < 170) {
        if (topMid[cur.player] == null) {
          topMid[cur.player] = 1;
        } else {
          ++topMid[cur.player];
        }
      }

      return topMid;
    }, {});
    jsonArray.reduce((prev, cur) => {
      const max = Math.max(...cur.bpm);
      if (170 <= max && max < 190) {
        if (topFast[cur.player] == null) {
          topFast[cur.player] = 1;
        } else {
          ++topFast[cur.player];
        }
      }

      return topFast;
    }, {});
    jsonArray.reduce((prev, cur) => {
      const max = Math.max(...cur.bpm);
      if (190 <= max) {
        if (topSuperFast[cur.player] == null) {
          topSuperFast[cur.player] = 1;
        } else {
          ++topSuperFast[cur.player];
        }
      }

      return topSuperFast;
    }, {});

    Object.keys(topRankers).forEach(e => {
      topRankersSort.push({ player: e, counts: topRankers[e], percentage: 100 * topRankers[e] / jsonArray.length });
    });
    Object.keys(topVersions).forEach(e => {
      topVersionsSort.push({ version: e, counts: topVersions[e], percentage: 100 * topVersions[e] / jsonArray.length });
    });

    const topChargeLen = jsonArray.filter(e => e.charge).length;
    Object.keys(topCharge).forEach(e => {
      topChargeSort.push({ player: e, counts: topCharge[e], percentage: 100 * topCharge[e] / topChargeLen });
    });
    const topPeakLen = jsonArray.filter(e => e.peak).length;
    Object.keys(topPeak).forEach(e => {
      topPeakSort.push({ player: e, counts: topPeak[e], percentage: 100 * topPeak[e] / topPeakLen });
    });
    const topScratchLen = jsonArray.filter(e => e.scratch).length;
    Object.keys(topScratch).forEach(e => {
      topScratchSort.push({ player: e, counts: topScratch[e], percentage: 100 * topScratch[e] / topScratchLen });
    });
    const topSoflanLen = jsonArray.filter(e => e.soflan).length;
    Object.keys(topSoflan).forEach(e => {
      topSoflanSort.push({ player: e, counts: topSoflan[e], percentage: 100 * topSoflan[e] / topSoflanLen });
    });

    const topSuperChargeLen = jsonArray.filter(e => e.superCharge).length;
    Object.keys(topSuperCharge).forEach(e => {
      topSuperChargeSort.push({ player: e, counts: topSuperCharge[e], percentage: 100 * topSuperCharge[e] / topSuperChargeLen });
    });
    const topSuperPeakLen = jsonArray.filter(e => e.superPeak).length;
    Object.keys(topSuperPeak).forEach(e => {
      topSuperPeakSort.push({ player: e, counts: topSuperPeak[e], percentage: 100 * topSuperPeak[e] / topSuperPeakLen });
    });
    const topSuperScratchLen = jsonArray.filter(e => e.superScratch).length;
    Object.keys(topSuperScratch).forEach(e => {
      topSuperScratchSort.push({ player: e, counts: topSuperScratch[e], percentage: 100 * topSuperScratch[e] / topSuperScratchLen });
    });
    const topSuperSoflanLen = jsonArray.filter(e => e.superSoflan).length;
    Object.keys(topSuperSoflan).forEach(e => {
      topSuperSoflanSort.push({ player: e, counts: topSuperSoflan[e], percentage: 100 * topSuperSoflan[e] / topSuperSoflanLen });
    });

    const topSlowLen = jsonArray.filter(e => { const max = Math.max(...e.bpm); return max < 150; }).length;
    Object.keys(topSlow).forEach(e => {
      topSlowSort.push({ player: e, counts: topSlow[e], percentage: 100 * topSlow[e] / topSlowLen });
    });
    const topMidLen = jsonArray.filter(e => { const max = Math.max(...e.bpm); return 150 <= max && max < 170; }).length;
    Object.keys(topMid).forEach(e => {
      topMidSort.push({ player: e, counts: topMid[e], percentage: 100 * topMid[e] / topMidLen });
    });
    const topFastLen = jsonArray.filter(e => { const max = Math.max(...e.bpm); return 170 <= max && max < 190; }).length;
    Object.keys(topFast).forEach(e => {
      topFastSort.push({ player: e, counts: topFast[e], percentage: 100 * topFast[e] / topFastLen });
    });
    const topSuperFastLen = jsonArray.filter(e => { const max = Math.max(...e.bpm); return 190 <= max; }).length;
    Object.keys(topSuperFast).forEach(e => {
      topSuperFastSort.push({ player: e, counts: topSuperFast[e], percentage: 100 * topSuperFast[e] / topSuperFastLen });
    });

    topRankersSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return +1;
        }
      } else if (lhs.counts < rhs.counts) {
        return +1;
      } else {
        return -1;
      }
    });
    topVersionsSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.version == rhs.version) {
          return 0;
        }
        if (lhs.version < rhs.version) {
          return -1;
        } else {
          return +1;
        }
      } else if (lhs.counts < rhs.counts) {
        return +1;
      } else {
        return -1;
      }
    });

    topChargeSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return +1;
        }
      } else if (lhs.counts < rhs.counts) {
        return +1;
      } else {
        return -1;
      }
    });
    topPeakSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return +1;
        }
      } else if (lhs.counts < rhs.counts) {
        return +1;
      } else {
        return -1;
      }
    });
    topScratchSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return +1;
        }
      } else if (lhs.counts < rhs.counts) {
        return +1;
      } else {
        return -1;
      }
    });
    topSoflanSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return +1;
        }
      } else if (lhs.counts < rhs.counts) {
        return +1;
      } else {
        return -1;
      }
    });

    topSuperChargeSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return +1;
        }
      } else if (lhs.counts < rhs.counts) {
        return +1;
      } else {
        return -1;
      }
    });
    topSuperPeakSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return +1;
        }
      } else if (lhs.counts < rhs.counts) {
        return +1;
      } else {
        return -1;
      }
    });
    topSuperScratchSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return +1;
        }
      } else if (lhs.counts < rhs.counts) {
        return +1;
      } else {
        return -1;
      }
    });
    topSuperSoflanSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return +1;
        }
      } else if (lhs.counts < rhs.counts) {
        return +1;
      } else {
        return -1;
      }
    });

    topSlowSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return +1;
        }
      } else if (lhs.counts < rhs.counts) {
        return +1;
      } else {
        return -1;
      }
    });
    topMidSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return +1;
        }
      } else if (lhs.counts < rhs.counts) {
        return +1;
      } else {
        return -1;
      }
    });
    topFastSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return +1;
        }
      } else if (lhs.counts < rhs.counts) {
        return +1;
      } else {
        return -1;
      }
    });
    topSuperFastSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return +1;
        }
      } else if (lhs.counts < rhs.counts) {
        return +1;
      } else {
        return -1;
      }
    });

    topRankersSort.forEach((e, i) => {
      topRankersLabels.push(e.player);
      topRankersCounts.push(e.counts);

      if (i <= 0) {
        topRankersSort[i].rank = 1;
      } else {
        if (topRankersSort[i - 1].counts == topRankersSort[i].counts) {
          topRankersSort[i].rank = topRankersSort[i - 1].rank;
        } else {
          const count = topRankersSort.filter(e => e.rank == topRankersSort[i - 1].rank).length;
          topRankersSort[i].rank = topRankersSort[i - 1].rank + count;
        }
      }
    });
    topVersionsSort.forEach((e, i) => {
      if (i <= 0) {
        topVersionsSort[i].rank = 1;
      } else {
        if (topVersionsSort[i - 1].counts == topVersionsSort[i].counts) {
          topVersionsSort[i].rank = topVersionsSort[i - 1].rank;
        } else {
          const count = topVersionsSort.filter(e => e.rank == topVersionsSort[i - 1].rank).length;
          topVersionsSort[i].rank = topVersionsSort[i - 1].rank + count;
        }
      }
    });
    topChargeSort.forEach((e, i) => {
      if (i <= 0) {
        topChargeSort[i].rank = 1;
      } else {
        if (topChargeSort[i - 1].counts == topChargeSort[i].counts) {
          topChargeSort[i].rank = topChargeSort[i - 1].rank;
        } else {
          const count = topChargeSort.filter(e => e.rank == topChargeSort[i - 1].rank).length;
          topChargeSort[i].rank = topChargeSort[i - 1].rank + count;
        }
      }
    });
    topPeakSort.forEach((e, i) => {
      if (i <= 0) {
        topPeakSort[i].rank = 1;
      } else {
        if (topPeakSort[i - 1].counts == topPeakSort[i].counts) {
          topPeakSort[i].rank = topPeakSort[i - 1].rank;
        } else {
          const count = topPeakSort.filter(e => e.rank == topPeakSort[i - 1].rank).length;
          topPeakSort[i].rank = topPeakSort[i - 1].rank + count;
        }
      }
    });
    topScratchSort.forEach((e, i) => {
      if (i <= 0) {
        topScratchSort[i].rank = 1;
      } else {
        if (topScratchSort[i - 1].counts == topScratchSort[i].counts) {
          topScratchSort[i].rank = topScratchSort[i - 1].rank;
        } else {
          const count = topScratchSort.filter(e => e.rank == topScratchSort[i - 1].rank).length;
          topScratchSort[i].rank = topScratchSort[i - 1].rank + count;
        }
      }
    });
    topSoflanSort.forEach((e, i) => {
      if (i <= 0) {
        topSoflanSort[i].rank = 1;
      } else {
        if (topSoflanSort[i - 1].counts == topSoflanSort[i].counts) {
          topSoflanSort[i].rank = topSoflanSort[i - 1].rank;
        } else {
          const count = topSoflanSort.filter(e => e.rank == topSoflanSort[i - 1].rank).length;
          topSoflanSort[i].rank = topSoflanSort[i - 1].rank + count;
        }
      }
    });

    topSuperChargeSort.forEach((e, i) => {
      if (i <= 0) {
        topSuperChargeSort[i].rank = 1;
      } else {
        if (topSuperChargeSort[i - 1].counts == topSuperChargeSort[i].counts) {
          topSuperChargeSort[i].rank = topSuperChargeSort[i - 1].rank;
        } else {
          const count = topSuperChargeSort.filter(e => e.rank == topSuperChargeSort[i - 1].rank).length;
          topSuperChargeSort[i].rank = topSuperChargeSort[i - 1].rank + count;
        }
      }
    });
    topSuperPeakSort.forEach((e, i) => {
      if (i <= 0) {
        topSuperPeakSort[i].rank = 1;
      } else {
        if (topSuperPeakSort[i - 1].counts == topSuperPeakSort[i].counts) {
          topSuperPeakSort[i].rank = topSuperPeakSort[i - 1].rank;
        } else {
          const count = topSuperPeakSort.filter(e => e.rank == topSuperPeakSort[i - 1].rank).length;
          topSuperPeakSort[i].rank = topSuperPeakSort[i - 1].rank + count;
        }
      }
    });
    topSuperScratchSort.forEach((e, i) => {
      if (i <= 0) {
        topSuperScratchSort[i].rank = 1;
      } else {
        if (topSuperScratchSort[i - 1].counts == topSuperScratchSort[i].counts) {
          topSuperScratchSort[i].rank = topSuperScratchSort[i - 1].rank;
        } else {
          const count = topSuperScratchSort.filter(e => e.rank == topSuperScratchSort[i - 1].rank).length;
          topSuperScratchSort[i].rank = topSuperScratchSort[i - 1].rank + count;
        }
      }
    });
    topSuperSoflanSort.forEach((e, i) => {
      if (i <= 0) {
        topSuperSoflanSort[i].rank = 1;
      } else {
        if (topSuperSoflanSort[i - 1].counts == topSuperSoflanSort[i].counts) {
          topSuperSoflanSort[i].rank = topSuperSoflanSort[i - 1].rank;
        } else {
          const count = topSuperSoflanSort.filter(e => e.rank == topSuperSoflanSort[i - 1].rank).length;
          topSuperSoflanSort[i].rank = topSuperSoflanSort[i - 1].rank + count;
        }
      }
    });

    topSlowSort.forEach((e, i) => {
      if (i <= 0) {
        topSlowSort[i].rank = 1;
      } else {
        if (topSlowSort[i - 1].counts == topSlowSort[i].counts) {
          topSlowSort[i].rank = topSlowSort[i - 1].rank;
        } else {
          const count = topSlowSort.filter(e => e.rank == topSlowSort[i - 1].rank).length;
          topSlowSort[i].rank = topSlowSort[i - 1].rank + count;
        }
      }
    });
    topMidSort.forEach((e, i) => {
      if (i <= 0) {
        topMidSort[i].rank = 1;
      } else {
        if (topMidSort[i - 1].counts == topMidSort[i].counts) {
          topMidSort[i].rank = topMidSort[i - 1].rank;
        } else {
          const count = topMidSort.filter(e => e.rank == topMidSort[i - 1].rank).length;
          topMidSort[i].rank = topMidSort[i - 1].rank + count;
        }
      }
    });
    topFastSort.forEach((e, i) => {
      if (i <= 0) {
        topFastSort[i].rank = 1;
      } else {
        if (topFastSort[i - 1].counts == topFastSort[i].counts) {
          topFastSort[i].rank = topFastSort[i - 1].rank;
        } else {
          const count = topFastSort.filter(e => e.rank == topFastSort[i - 1].rank).length;
          topFastSort[i].rank = topFastSort[i - 1].rank + count;
        }
      }
    });
    topSuperFastSort.forEach((e, i) => {
      if (i <= 0) {
        topSuperFastSort[i].rank = 1;
      } else {
        if (topSuperFastSort[i - 1].counts == topSuperFastSort[i].counts) {
          topSuperFastSort[i].rank = topSuperFastSort[i - 1].rank;
        } else {
          const count = topSuperFastSort.filter(e => e.rank == topSuperFastSort[i - 1].rank).length;
          topSuperFastSort[i].rank = topSuperFastSort[i - 1].rank + count;
        }
      }
    });

    visible = true;
    list = jsonArray;
    error = null;

    list.sort((lhs, rhs) => {
      if (lhs.date == null && rhs.date == null) {
        return 0;
      }
      if (lhs.date == null) {
        return +1;
      }
      if (rhs.date == null) {
        return -1;
      }

      const repLhs = lhs.date.replaceAll('*', '0');
      const repRhs = rhs.date.replaceAll('*', '0');

      if (repLhs < repRhs) {
        return +1;
      }
      if (repLhs > repRhs) {
        return -1;
      }

      return lhs.music.localeCompare(rhs.music, navigator.languages[0] || navigator.language, { numeric: true, ignorePunctuation: true });
    });
  }).catch(e => {
    visible = true;
    list = [];
    error = e;
  });

  function calcRate(notes, score) {
    if (score <= 0) {
      return '0%';
    }

    const MAX = notes * 2;

    if (score >= MAX) {
      return '100%';
    }

    return Number(score / MAX * 100).toFixed(2) + '%';
  }

  function calcRatePlus(notes, score) {
    if (score <= 0) {
      return '0%';
    }

    const MAX = notes * 2;

    if (score >= MAX) {
      return '100%';
    }

    const base = Math.floor(score / MAX * 100);

    return base + '%+' + Math.ceil(score - MAX * base / 100);
  }

  function calcRateMinus(notes, score) {
    if (score <= 0) {
      return '0%';
    }

    const MAX = notes * 2;

    if (score >= MAX) {
      return '100%';
    }

    const base = Math.ceil(score / MAX * 100);

    return base + '%-' + Math.ceil(MAX * base / 100 - score);
  }

  function calcRecord(notes, score) {
    if (score <= 0) {
      return 'F';
    }

    const MAX = notes * 2;

    if (score >= MAX) {
      return 'MAX';
    }

    const maxMinus = Math.ceil(MAX * 17 / 18);
    const aaaPlus = Math.ceil(MAX * 8 / 9);
    const aaaMinus = Math.ceil(MAX * 15 / 18);
    const aaPlus = Math.ceil(MAX * 7 / 9);
    const aaMinus = Math.ceil(MAX * 13 / 18);
    const aPlus = Math.ceil(MAX * 6 / 9);
    const aMinus = Math.ceil(MAX * 11 / 18);
    const bPlus = Math.ceil(MAX * 5 / 9);
    const bMinus = Math.ceil(MAX * 9 / 18);
    const cPlus = Math.ceil(MAX * 4 / 9);
    const cMinus = Math.ceil(MAX * 7 / 18);
    const dPlus = Math.ceil(MAX * 3 / 9);
    const dMinus = Math.ceil(MAX * 5 / 18);
    const ePlus = Math.ceil(MAX * 2 / 9);
    const eMinus = Math.ceil(MAX * 3 / 18);

    if (score >= maxMinus) {
      return 'MAX-' + (MAX - score);
    } else if (score >= aaaPlus) {
      return 'AAA+' + (score - aaaPlus)
    } else if (score >= aaaMinus) {
      return 'AAA-' + (aaaPlus - score);
    } else if (score >= aaPlus) {
      return 'AA+' + (score - aaPlus);
    } else if (score >= aaMinus) {
      return 'AA-' + (aaPlus - score);
    } else if (score >= aPlus) {
      return 'A+' + (score - aPlus);
    } else if (score >= aMinus) {
      return 'A-' + (aPlus - score);
    } else if (score >= bPlus) {
      return 'B+' + (score - bPlus);
    } else if (score >= bMinus) {
      return 'B-' + (bPlus - score);
    } else if (score >= cPlus) {
      return 'C+' + (score - cPlus);
    } else if (score >= cMinus) {
      return 'C-' + (cPlus - score);
    } else if (score >= dPlus) {
      return 'D+' + (score - dPlus);
    } else if (score >= dMinus) {
      return 'D-' + (dPlus - score);
    } else if (score >= ePlus) {
      return 'E+' + (score - ePlus);
    } else if (score >= eMinus) {
      return 'E-' + (ePlus - score);
    } else {
      return 'F';
    }
  }

  function calcMaxMinus(notes, score) {
    const MAX = notes * 2;

    return MAX - score;
  }

  function typewriter(node, { speed = 50 }) {
    const text = 'Loading...';
    const duration = 1000 * text.length / speed;

    return {
      duration,
      tick: t => {
        const i = Math.min(Math.trunc(text.length * t) % (text.length + 1), text.length);
        node.textContent = text.slice(0, i);
      }
    };
  }
</script>

<svelte:head>
  <html lang="ja" />
  <title>beatmania IIDX SP ☆12 歴代全一 トップスコア/ランカービューア/beatmania IIDX SP Lv12 All-time Top Scores/Rankers Viewer/beatmania IIDX SP☆12 역대 전일 탑스코어/랭커뷰어</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="beatmania IIDX SP ☆12 歴代全一スコア/ランカーを表示します。 beatmania IIDX SP ☆12 All-time highest scores/rankers are shown. beatmania IIDX SP☆12 역대 전일 점수/랭커를 표시합니다." />
  <meta name="keywords" content="beatmania,IIDX,iidx,弐寺,투덱,☆12,Lv12,歷代,歴代全一,歴代スコア,역대,TOP RANKER,TOP RANKERS,rekidai,KONAMI,コナミ">
  <meta name="google-site-verification" content="TZhDInm_qqk0-YS_IeFxjcn6jbrmfEccgvRL8cFjm3k" />
  <meta property="og:title" content="beatmania IIDX SP ☆12 歴代">
  <meta property="og:site_name" content="beatmania IIDX SP Lv12 Rekidai Top Score Database">
  <meta property="og:url" content="https://rekidai-info.github.io">
  <meta property="og:description" content="The top scores of beatmania IIDX in the past are listed.">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://rekidai-info.github.io/ogimage.jpg">
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-7FLKW9GYQ6"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-7FLKW9GYQ6');
  </script>
</svelte:head>

<main>
  <script lang="ts">
    /*const auth: string = localStorage.getItem('auth');

    if (navigator.userAgent == null || navigator.userAgent == '') {
      location.href = 'auth.html';
    } else if (navigator.userAgent.indexOf('bot') >= 0 || navigator.userAgent.indexOf('Bot') >= 0 || navigator.userAgent.indexOf('Yeti') >= 0 || navigator.userAgent.indexOf('Slurp') >= 0 || navigator.userAgent.indexOf('Baidu') >= 0) {
    } else if (navigator.language !== null && navigator.language !== 'ja') {
    } else if (auth == null) {
      location.href = 'auth.html';
    } else if (auth == 'ng' || auth !== 'ok') {
      location.href = 'auth.html';
    } else {
      const expires = localStorage.getItem('expires');
      if (expires == null) {
        location.href = 'auth.html';
      } else {
        try {
          const expiresMillis = parseInt(expires, 10);
          if (isNaN(expiresMillis) || !isFinite(expiresMillis) || expiresMillis < Date.now()) {
            location.href = 'auth.html';
          } else if (expiresMillis >= Date.now() + 7 * 24 * 60 * 60 * 1000) {
            location.href = 'auth.html';
          } else if (new Date(expiresMillis - 7 * 24 * 60 * 60 * 1000) <= new Date(2022, 5, 17, 20, 30, 0)) {
            location.href = 'auth.html';
          }
        } catch (e) {
          console.error(e);
          location.href = 'auth.html';
        }
      }
    }*/
  </script>

  {#if !visible}
    <p id="loading" style="display: inline;" transition:typewriter>Loading...</p><img src="bars-rotate-fade.svg" alt="Loading..." style="vertical-align: top;">
  {:else}
    {#if error == null}
      <p id="top">If you want to update rekidai data, please fork <a href="https://github.com/rekidai-info/rekidai-info.github.io" target="_blank" rel="noopener noreferrer">https://github.com/rekidai-info/rekidai-info.github.io</a>, edit <a href="https://github.com/rekidai-info/rekidai-info.github.io/blob/main/static/rekidai.json" target="_blank" rel="noopener noreferrer">rekidai.json</a>, and submit a Pull Request. No CLI tools are required; everything can be done in the browser.<br><a href="#rank">Rank</a> / <a href="https://www.youtube.com/channel/UCKYQ3LNcSoxXJB6IlZiYU5A" target="_blank" rel="noopener noreferrer">KKM*</a>(<a href="https://toon.at/donate/iidxkkm" target="_blank" rel="noopener noreferrer">Donate</a>) / <a href="https://www.youtube.com/channel/UCoK-bEjP7R93N-rIz-4G9JA" target="_blank" rel="noopener noreferrer">CHEPY</a>(<a href="https://toon.at/donate/637741368394473819" target="_blank" rel="noopener noreferrer">Donate</a>) / <a href="https://www.youtube.com/c/MACAODIIDX" target="_blank" rel="noopener noreferrer">DON*</a>(<a href="https://streamlabs.com/macaodiidx" target="_blank" rel="noopener noreferrer">Donate1</a>,  <a href="https://toon.at/donate/macaod_iidx" target="_blank" rel="noopener noreferrer">Donate2</a>) / <a href="https://www.youtube.com/channel/UCGlQnUCwUI0kl31denBkrEQ" target="_blank" rel="noopener noreferrer">CHARM</a>(<a href="https://toon.at/donate/iidx_charm" target="_blank" rel="noopener noreferrer">Donate</a>) / <a href="https://twitter.com/rekidai_info" target="_blank" rel="noopener noreferrer">Developer</a>(<a href="https://amzn.to/3jqk39S" target="_blank" rel="noopener noreferrer">Donate</a>)</p>

      <hr>

      <input type="text" id="search" placeholder="Search Rekidai in KR, EN or JP" style="width: 210px; margin-bottom: 4px;">
      <script lang="ts">
        const input = document.getElementById('search');
        if (input != null) {
          const search = () => {
            const table = document.getElementById('rekidai');
            if (table == null) {
              return;
            }

            const rows = table.getElementsByTagName('tr');

            Array.prototype.forEach.call(rows, (row, i) => {
              if (i <= 0) {
                return;
              }

              const textContent = row.textContent;

              if (textContent.toUpperCase().indexOf(input.value.toUpperCase()) < 0) {
                row.style.display = 'none';
              } else {
                row.style.display = '';
              }
            });
          };

          input.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
              search();
            }
          });
        }
      </script>

      <script async src="table-sort.min.js"></script>
      <table id="rekidai" class="table-sort table-arrows remember-sort">
        <thead>
          <tr>
            <th>Music</th>
            <th class="order-by-desc">Score</th>
            <th class="data-sort">Record</th>
            <th>Player</th>
            <th class="order-by-desc">Rate</th>
            <th class="order-by-desc">Rate Plus</th>
            <th class="order-by-desc">Rate Minus</th>
            <th class="order-by-desc">Notes</th>
            <th class="order-by-desc">BPM</th>
            <th>Top Ver</th>
            <th>Charge</th>
            <th>Peak</th>
            <th>Scratch</th>
            <th>Sof-Lan</th>
            <th>Version</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {#each list as rekidai (rekidai.music)}
            <tr>
              {#if rekidai.scoreResult == null}
                <td>{rekidai.music}</td>
              {:else}
                <td><a href="{rekidai.scoreResult}" target="_blank" rel="noopener noreferrer">{rekidai.music}</a></td>
              {/if}
              <td style="text-align: center;">{rekidai.score}</td>
              <td style="text-align: center;" data-sort={calcMaxMinus(rekidai.notes, rekidai.score)}>{calcRecord(rekidai.notes, rekidai.score)}</td>
              <td data-player="{rekidai.player}">{rekidai.player}</td>
              <td style="text-align: center;">{calcRate(rekidai.notes, rekidai.score)}</td>
              <td style="text-align: center;">{calcRatePlus(rekidai.notes, rekidai.score)}</td>
              <td style="text-align: center;">{calcRateMinus(rekidai.notes, rekidai.score)}</td>
              {#if rekidai.textage == null}
                <td style="text-align: center;">{rekidai.notes}</td>
              {:else}
                <td style="text-align: center;"><a href="{rekidai.textage}" target="_blank" rel="noopener noreferrer">{rekidai.notes}</a></td>
              {/if}
              {#if rekidai.musicMovie == null}
                <td style="text-align: center;">{rekidai.bpm.join('~')}</td>
              {:else}
                <td style="text-align: center;"><a href="{rekidai.musicMovie}" target="_blank" rel="noopener noreferrer">{rekidai.bpm.join('~')}</a></td>
              {/if}
              <td>{rekidai.topVersion}</td>
              {#if rekidai.superCharge}
                <td style="text-align: center;">Super Charge</td>
              {:else if rekidai.charge}
                <td style="text-align: center;">Charge</td>
              {:else}
                <td style="text-align: center;"></td>
              {/if}
              {#if rekidai.superPeak}
                <td style="text-align: center;">Super Peak</td>
              {:else if rekidai.peak}
                <td style="text-align: center;">Peak</td>
              {:else}
                <td style="text-align: center;"></td>
              {/if}
              {#if rekidai.superScratch}
                <td style="text-align: center;">Super Scratch</td>
              {:else if rekidai.scratch}
                <td style="text-align: center;">Scratch</td>
              {:else}
                <td style="text-align: center;"></td>
              {/if}
              {#if rekidai.superSoflan}
                <td style="text-align: center;">Super Sof-Lan</td>
              {:else if rekidai.soflan}
                <td style="text-align: center;">Sof-Lan</td>
              {:else}
                <td style="text-align: center;"></td>
              {/if}
              <td>{rekidai.version}</td>
              <td style="text-align: center;">{rekidai.date}</td>
              {#if rekidai.musicKR != null}
                <p style="display: none;">{rekidai.musicKR}</p>
              {/if}
              {#if rekidai.musicEN != null}
                <p style="display: none;">{rekidai.musicEN}</p>
              {/if}
              {#if rekidai.musicJP != null}
                <p style="display: none;">{rekidai.musicJP}</p>
              {/if}
            </tr>
          {/each}
        </tbody>
      </table>

      <hr>

      <div style="float: left; margin-bottom: 1em;">
        <table id="rank" class="table-sort table-arrows remember-sort" style="float: left; margin-right: 1em;">
          <caption>Top Ranker</caption>
          <thead>
            <th>Rank</th>
            <th>Player</th>
            <th>Count</th>
            <th class="data-sort">Percentage</th>
          </thead>
          <tbody>
            {#each topRankersSort as topRanker (topRanker.player)}
              <tr>
                <td>{topRanker.rank}</td>
                <td>{topRanker.player}</td>
                <td>{topRanker.counts}</td>
                <td data-sort={topRanker.percentage}>{Number(topRanker.percentage).toFixed(2) + '%'}</td>
              </tr>
            {/each}
          </tbody>
        </table>

        <table id="version" class="table-sort table-arrows remember-sort" style="float: left;">
          <caption>Top Version</caption>
          <thead>
            <th>Rank</th>
            <th>Version</th>
            <th>Count</th>
            <th class="data-sort">Percentage</th>
          </thead>
          <tbody>
            {#each topVersionsSort as topVersion (topVersion.version)}
              <tr>
                <td>{topVersion.rank}</td>
                <td>{topVersion.version}</td>
                <td>{topVersion.counts}</td>
                <td data-sort={topVersion.percentage}>{Number(topVersion.percentage).toFixed(2) + '%'}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>

      <hr style="clear: both; display: block;">

      <div style="float: left; margin-bottom: 1em;">
        <table id="charge" class="table-sort table-arrows remember-sort" style="float: left; margin-right: 1em;">
          <caption>Top Charge</caption>
          <thead>
            <th>Rank</th>
            <th>Player</th>
            <th>Count</th>
            <th class="data-sort">Percentage</th>
          </thead>
          <tbody>
            {#each topChargeSort as topCharge (topCharge.player)}
              <tr>
                <td>{topCharge.rank}</td>
                <td>{topCharge.player}</td>
                <td>{topCharge.counts}</td>
                <td data-sort={topCharge.percentage}>{Number(topCharge.percentage).toFixed(2) + '%'}</td>
              </tr>
            {/each}
          </tbody>
        </table>
        <table id="peak" class="table-sort table-arrows remember-sort" style="float: left; margin-right: 1em;">
          <caption>Top Peak</caption>
          <thead>
            <th>Rank</th>
            <th>Player</th>
            <th>Count</th>
            <th class="data-sort">Percentage</th>
          </thead>
          <tbody>
            {#each topPeakSort as topPeak (topPeak.player)}
              <tr>
                <td>{topPeak.rank}</td>
                <td>{topPeak.player}</td>
                <td>{topPeak.counts}</td>
                <td data-sort={topPeak.percentage}>{Number(topPeak.percentage).toFixed(2) + '%'}</td>
              </tr>
            {/each}
          </tbody>
        </table>
        <table id="scratch" class="table-sort table-arrows remember-sort" style="float: left; margin-right: 1em;">
          <caption>Top Scratch</caption>
          <thead>
            <th>Rank</th>
            <th>Player</th>
            <th>Count</th>
            <th class="data-sort">Percentage</th>
          </thead>
          <tbody>
            {#each topScratchSort as topScratch (topScratch.player)}
              <tr>
                <td>{topScratch.rank}</td>
                <td>{topScratch.player}</td>
                <td>{topScratch.counts}</td>
                <td data-sort={topScratch.percentage}>{Number(topScratch.percentage).toFixed(2) + '%'}</td>
              </tr>
            {/each}
          </tbody>
        </table>
        <table id="soflan" class="table-sort table-arrows remember-sort" style="float: left;">
          <caption>Top Sof-Lan</caption>
          <thead>
            <th>Rank</th>
            <th>Player</th>
            <th>Count</th>
            <th class="data-sort">Percentage</th>
          </thead>
          <tbody>
            {#each topSoflanSort as topSoflan (topSoflan.player)}
              <tr>
                <td>{topSoflan.rank}</td>
                <td>{topSoflan.player}</td>
                <td>{topSoflan.counts}</td>
                <td data-sort={topSoflan.percentage}>{Number(topSoflan.percentage).toFixed(2) + '%'}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>

      <hr style="clear: both; display: block;">

      <div style="float: left; margin-bottom: 1em;">
        <table id="super-charge" class="table-sort table-arrows remember-sort" style="float: left; margin-right: 1em;">
          <caption>Top Super Charge</caption>
          <thead>
            <th>Rank</th>
            <th>Player</th>
            <th>Count</th>
            <th class="data-sort">Percentage</th>
          </thead>
          <tbody>
            {#each topSuperChargeSort as topSuperCharge (topSuperCharge.player)}
              <tr>
                <td>{topSuperCharge.rank}</td>
                <td>{topSuperCharge.player}</td>
                <td>{topSuperCharge.counts}</td>
                <td data-sort={topSuperCharge.percentage}>{Number(topSuperCharge.percentage).toFixed(2) + '%'}</td>
              </tr>
            {/each}
          </tbody>
        </table>
        <table id="super-peak" class="table-sort table-arrows remember-sort" style="float: left; margin-right: 1em;">
          <caption>Top Super Peak</caption>
          <thead>
            <th>Rank</th>
            <th>Player</th>
            <th>Count</th>
            <th class="data-sort">Percentage</th>
          </thead>
          <tbody>
            {#each topSuperPeakSort as topSuperPeak (topSuperPeak.player)}
              <tr>
                <td>{topSuperPeak.rank}</td>
                <td>{topSuperPeak.player}</td>
                <td>{topSuperPeak.counts}</td>
                <td data-sort={topSuperPeak.percentage}>{Number(topSuperPeak.percentage).toFixed(2) + '%'}</td>
              </tr>
            {/each}
          </tbody>
        </table>
        <table id="super-scratch" class="table-sort table-arrows remember-sort" style="float: left; margin-right: 1em;">
          <caption>Top Super Scratch</caption>
          <thead>
            <th>Rank</th>
            <th>Player</th>
            <th>Count</th>
            <th class="data-sort">Percentage</th>
          </thead>
          <tbody>
            {#each topSuperScratchSort as topSuperScratch (topSuperScratch.player)}
              <tr>
                <td>{topSuperScratch.rank}</td>
                <td>{topSuperScratch.player}</td>
                <td>{topSuperScratch.counts}</td>
                <td data-sort={topSuperScratch.percentage}>{Number(topSuperScratch.percentage).toFixed(2) + '%'}</td>
              </tr>
            {/each}
          </tbody>
        </table>
        <table id="super-soflan" class="table-sort table-arrows remember-sort" style="float: left;">
          <caption>Top Super Sof-Lan</caption>
          <thead>
            <th>Rank</th>
            <th>Player</th>
            <th>Count</th>
            <th class="data-sort">Percentage</th>
          </thead>
          <tbody>
            {#each topSuperSoflanSort as topSuperSoflan (topSuperSoflan.player)}
              <tr>
                <td>{topSuperSoflan.rank}</td>
                <td>{topSuperSoflan.player}</td>
                <td>{topSuperSoflan.counts}</td>
                <td data-sort={topSuperSoflan.percentage}>{Number(topSuperSoflan.percentage).toFixed(2) + '%'}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>

      <hr style="clear: both; display: block;">

      <div style="float: left; margin-bottom: 1em;">
        <table id="slow" class="table-sort table-arrows remember-sort" style="float: left; margin-right: 1em;">
          <caption>Top BPM[0, 150)</caption>
          <thead>
            <th>Rank</th>
            <th>Player</th>
            <th>Count</th>
            <th class="data-sort">Percentage</th>
          </thead>
          <tbody>
            {#each topSlowSort as topSlow (topSlow.player)}
              <tr>
                <td>{topSlow.rank}</td>
                <td>{topSlow.player}</td>
                <td>{topSlow.counts}</td>
                <td data-sort={topSlow.percentage}>{Number(topSlow.percentage).toFixed(2) + '%'}</td>
              </tr>
            {/each}
          </tbody>
        </table>
        <table id="mid" class="table-sort table-arrows remember-sort" style="float: left; margin-right: 1em;">
          <caption>Top BPM[150, 170)</caption>
          <thead>
            <th>Rank</th>
            <th>Player</th>
            <th>Count</th>
            <th class="data-sort">Percentage</th>
          </thead>
          <tbody>
            {#each topMidSort as topMid (topMid.player)}
              <tr>
                <td>{topMid.rank}</td>
                <td>{topMid.player}</td>
                <td>{topMid.counts}</td>
                <td data-sort={topMid.percentage}>{Number(topMid.percentage).toFixed(2) + '%'}</td>
              </tr>
            {/each}
          </tbody>
        </table>
        <table id="fast" class="table-sort table-arrows remember-sort" style="float: left; margin-right: 1em;">
          <caption>Top BPM[170, 190)</caption>
          <thead>
            <th>Rank</th>
            <th>Player</th>
            <th>Count</th>
            <th class="data-sort">Percentage</th>
          </thead>
          <tbody>
            {#each topFastSort as topFast (topFast.player)}
              <tr>
                <td>{topFast.rank}</td>
                <td>{topFast.player}</td>
                <td>{topFast.counts}</td>
                <td data-sort={topFast.percentage}>{Number(topFast.percentage).toFixed(2) + '%'}</td>
              </tr>
            {/each}
          </tbody>
        </table>
        <table id="super-fast" class="table-sort table-arrows remember-sort" style="float: left;">
          <caption>Top BPM[190, 400]</caption>
          <thead>
            <th>Rank</th>
            <th>Player</th>
            <th>Count</th>
            <th class="data-sort">Percentage</th>
          </thead>
          <tbody>
            {#each topSuperFastSort as topSuperFast (topSuperFast.player)}
              <tr>
                <td>{topSuperFast.rank}</td>
                <td>{topSuperFast.player}</td>
                <td>{topSuperFast.counts}</td>
                <td data-sort={topSuperFast.percentage}>{Number(topSuperFast.percentage).toFixed(2) + '%'}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>

      <!--<hr style="clear: both; display: block;">

      <MDBRow>
        <MDBCol md="8" class="mx-auto">
          <Doughnut data={doughnutData} options={chartOptions} />
        </MDBCol>
      </MDBRow>-->

      <hr style="clear: both; display: block;">
      <a href="#top">Top</a>

      <script lang="ts">
        if (location.hash == '#top') {
          document.querySelector('#top').scrollIntoView(true);
        } else if (location.hash == '#rekidai') {
          document.querySelector('#rekidai').scrollIntoView(true);
        } else if (location.hash == '#rank') {
          document.querySelector('#rank').scrollIntoView(true);
        } else if (location.hash == '#version') {
          document.querySelector('#version').scrollIntoView(true);
        } else if (location.hash == '#charge') {
          document.querySelector('#charge').scrollIntoView(true);
        } else if (location.hash == '#peak') {
          document.querySelector('#peak').scrollIntoView(true);
        } else if (location.hash == '#scratch') {
          document.querySelector('#scratch').scrollIntoView(true);
        } else if (location.hash == '#soflan') {
          document.querySelector('#soflan').scrollIntoView(true);
        } else if (location.hash == '#super-charge') {
          document.querySelector('#super-charge').scrollIntoView(true);
        } else if (location.hash == '#super-peak') {
          document.querySelector('#super-peak').scrollIntoView(true);
        } else if (location.hash == '#super-scratch') {
          document.querySelector('#super-scratch').scrollIntoView(true);
        } else if (location.hash == '#super-soflan') {
          document.querySelector('#super-soflan').scrollIntoView(true);
        } else if (location.hash == '#slow') {
          document.querySelector('#slow').scrollIntoView(true);
        } else if (location.hash == '#mid') {
          document.querySelector('#mid').scrollIntoView(true);
        } else if (location.hash == '#fast') {
          document.querySelector('#fast').scrollIntoView(true);
        } else if (location.hash == '#super-fast') {
          document.querySelector('#super-fast').scrollIntoView(true);
        }
      </script>
    {:else}
      <p style="color: red">{error.message}</p>
    {/if}
  {/if}
</main>

<style>
  main {
    -webkit-font-smoothing: antialiased;
    font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
    font-feature-settings: "palt";
    letter-spacing: 0.07em;
  }

  table tr:hover {
    background-color: #DDDDDD;
  }

  td[data-player="KKM*"] {
    background-color: #C9B037;
  }
  td[data-player="U*TAKA"] {
    background-color: #B4B4B4;
  }
  td[data-player="DOLCE."] {
    font-weight: bold;
  }
  td[data-player="DON*"] {
    background-color: #F08BF3;
  }
  td[data-player="CHEPY"] {
    color: white;
    background-color: #173660;
  }
</style>
