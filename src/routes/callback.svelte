<svelte:head>
  <html lang="ja" />
  <title>beatmania IIDX SP ☆12(Lv12) 歴代</title>
  <meta name="description" content="IIDX SP ☆12 歴代" />
  <meta name="keywords" content="beatmania,IIDX,弐寺,투덱,☆12,Lv12,歷代,역대,rekidai,KONAMI,コナミ">
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
      location.href = 'auth.html';
    }

    fetch('https://check-twitter-user-mhqxry7zeq-an.a.run.app', {
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
        location.href = 'auth.html';
      }

      return response.text();
    }).then(result => {
      if (result === 'ok') {
        localStorage.setItem('auth', 'ok');
        localStorage.setItem('expires', Date.now() + 7 * 24 * 60 * 60 * 1000);
        location.href = 'https://rekidai-info.github.io';
      } else {
        localStorage.setItem('auth', 'ng');
        location.href = 'auth.html';
      }
    }).catch(error => {
      console.error(error);
    });
  </script>
</main>
