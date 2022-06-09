<svelte:head>
  <html lang="ja" />
  <title>beatmania IIDX SP ☆12(Lv12) 歴代</title>
  <meta name="description" content="IIDX SP ☆12 歴代" />
  <meta name="keywords" content="beatmania,IIDX,弐寺,투덱,☆12,Lv12,歷代,역대,rekidai,KONAMI,コナミ">
  <meta name="google-site-verification" content="TZhDInm_qqk0-YS_IeFxjcn6jbrmfEccgvRL8cFjm3k" />
  <meta property="og:title" content="IIDX SP ☆12 歴代">
  <meta property="og:site_name" content="beatmania IIDX SP Lv12 Rekidai Top Score Database">
  <meta property="og:url" content="https://rekidai-info.github.io">
  <meta property="og:description" content="The top scores of beatmania IIDX in the past are listed.">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://rekidai-info.github.io/favicon.ico">
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-7FLKW9GYQ6"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-7FLKW9GYQ6');
  </script>
</svelte:head>

<main>
  <p>To view beatmania IIDX SP ☆12(Lv12) rekidai scores, Twitter authentication is required.<br>The following image will be displayed.<br>Please agree to the terms of use.<br>Twitter authentication is required <b>once a week</b>.<br><br>beatmania IIDX SP ☆12(Lv12) の歴代スコアを見るためには、Twitter 認証が必要です。<br>Twitter の仕様上、アプリケーションに「ツイート（非公開を含む）」と「アカウント（非公開を含む）」の「参照権限（読み取りだけができる権限です）」が付与されていますが、Twitter ID の取得しか行いません。<br>Twitter 認証は<b>週に一度</b>必要です。</p>
  <form id="auth" action="https://twitter.com/i/oauth2/authorize" method="GET">
    <input type="hidden" name="response_type" value="code">
    <input type="hidden" name="client_id" value="VjMtaWRud3o2ZjZ5WDJFQ1NCdlM6MTpjaQ">
    <input type="hidden" name="redirect_uri" value="https://rekidai-info.github.io/callback.html">
    <input type="hidden" name="state" id="state" value="state">
    <input type="hidden" name="scope" value="tweet.read users.read">
    <input type="hidden" name="code_challenge" value="challenge">
    <input type="hidden" name="code_challenge_method" value="plain">
    <input type="submit" value="Authenticate" style="background-color: #00527A; border-radius: 8px; font-size: 1.1em; padding: 4px;">
  </form><br>
  <img src="auth.png" alt="Twitter authentication"><br>
  <script lang="ts">
    document.getElementById('auth').addEventListener('submit', () => {
      const state: string = Math.random().toString(36).slice(-8);
      localStorage.clear();
      localStorage.setItem('state', state);
      document.getElementById('state').value = state;
    });
  </script>
</main>
