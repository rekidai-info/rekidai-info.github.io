<svelte:head>
  <html lang="ja" />
  <title>IIDX SP ☆12 歴代</title>
  <meta name="keywords" content="☆12,Lv12,歷代,역대,rekidai">
  <meta name="google-site-verification" content="TZhDInm_qqk0-YS_IeFxjcn6jbrmfEccgvRL8cFjm3k" />
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-7FLKW9GYQ6"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-7FLKW9GYQ6');
  </script>
</svelte:head>

<main>
  <script>
    const params = Object.fromEntries(new URLSearchParams(location.search).entries());
    if (params.state != sessionStorage.getItem('state')) {
      location.href = 'about:blank';
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
        location.href = 'about:blank';
      }

      return response.text();
    }).then(result => {
      if (result === 'ok') {
        localStorage.setItem('auth', 'ok');
        localStorage.setItem('expires', Date.now() + 7 * 24 * 60 * 60 * 1000);
        location.href = 'https://rekidai-info.github.io';
      } else {
        localStorage.setItem('auth', 'ng');
        location.href = 'about:blank';
      }
    }).catch(error => {
      console.error(error);
    });
  </script>
</main>
