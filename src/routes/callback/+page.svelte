<svelte:head>
  <html lang="ja" />
  <title>beatmania IIDX SP ☆12(Lv12) 歴代全一 Top Scores/Rankers Viewer</title>
  <meta name="description" content="beatmania IIDX(弐寺/투덱) SP ☆12(Lv12) 歴代全一(역대/Rekidai)スコア(Score)/ランカー(Top Ranker)を表示します。" />
  <meta name="keywords" content="beatmania,IIDX,iidx,弐寺,투덱,☆12,Lv12,歷代,歴代全一,歴代スコア,역대,TOP RANKER,TOP RANKERS,rekidai,KONAMI,コナミ">
  <meta name="google-site-verification" content="TZhDInm_qqk0-YS_IeFxjcn6jbrmfEccgvRL8cFjm3k" />
  <meta property="og:title" content="beatmania IIDX SP ☆12(Lv12) 歴代">
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
    const params = Object.fromEntries(new URLSearchParams(location.search).entries());
    const state: string = localStorage.getItem('state');
    localStorage.removeItem('state');
    if (state == null) {
      localStorage.setItem('state', 'error');
      window.open(location.href, '_system', 'hidden=yes,location=no');
    }
    if (params.state == 'error') {
      location.href = 'auth.html';
    }
    if (params.state != state) {
      localStorage.setItem('state', 'error');
      window.open(location.href, '_system', 'hidden=yes,location=no');
    }

    fetch('https://check-user-mhqxry7zeq-an.a.run.app', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: params.code
    }).then(response => {
      if (!response.ok) {
        localStorage.setItem('auth', 'ng');
        setTimeout(() => {
          location.href = 'auth.html';
        }, 300);
      }

      return response.text();
    }).then(result => {
      if (result === 'ok') {
        localStorage.setItem('auth', 'ok');
        localStorage.setItem('expires', Date.now() + 7 * 24 * 60 * 60 * 1000);
        location.href = 'https://rekidai-info.github.io';
      } else {
        if (result === 'ng') {
          alert('If you want to see the Rekidai score table, at least contribute to the creation of the Rekidai score table.\n\n歴代表を見たいのなら、歴代表の作成にほんの少しでも貢献してください。');
        }

        localStorage.setItem('auth', 'ng');
        location.href = 'auth.html';
      }
    }).catch(error => {
      console.error(error);
    });
  </script>
</main>
