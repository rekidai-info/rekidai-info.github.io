<svelte:head>
  <html lang="ja" />
  <title>beatmania IIDX SP ☆12(Lv12) 歴代</title>
  <meta name="description" content="beatmania IIDX SP ☆12 歴代" />
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
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5426520865079088" crossorigin="anonymous"></script>
</svelte:head>

<main>
  <p><b>Anyone can edit the rekidai data.</b><br>If you want to update rekidai data, please fork <a href="https://github.com/rekidai-info/rekidai-info.github.io" target="_blank" rel="noopener noreferrer">https://github.com/rekidai-info/rekidai-info.github.io</a>, edit <a href="https://github.com/rekidai-info/rekidai-info.github.io/blob/main/static/rekidai.json" target="_blank" rel="noopener noreferrer">rekidai.json</a>, and submit a Pull Request. That's all.<br><br>To view beatmania IIDX SP ☆12(Lv12) rekidai scores, GitHub authentication is required.<br>Please agree to the terms of use.<br><b style="background:linear-gradient(transparent 60%, #FF66CC 60%);">Those who do not contribute to updating rekidai.json for a certain period of time will fail authentication.</b><br>GitHub authentication is required <b style="background:linear-gradient(transparent 60%, #66CCFF 60%);">once a week</b>.<br><br>beatmania IIDX SP ☆12(Lv12) の歴代スコアを見るためには、GitHub 認証が必要です。<br><b style="background:linear-gradient(transparent 60%, #FF66CC 60%);">一定期間 rekidai.json の更新に貢献しない方は認証が失敗します。</b><br>GitHub 認証は<b style="background:linear-gradient(transparent 60%, #66CCFF 60%);">週に一度</b>必要です。<br><br>If you want to see the table, please contribute to updating rekidai.json, even if only a little.<br>歴代表が見たいなら、少しでも rekidai.json の更新に貢献してください。<br><br>If you have contributed at least once to updating rekidai.json, please sign up with that GitHub account.<br>rekidai.json の更新に一度でも貢献したのなら、その GitHub アカウントでサインアップしてください。</p>
  <form id="auth" action="https://github.com/login/oauth/authorize" method="GET">
    <input type="hidden" name="client_id" value="318d31204d4bea1c1c01">
    <input type="hidden" name="redirect_uri" id="redirect" value="https://rekidai-info.github.io/callback.html">
    <input type="hidden" name="scope" value="">
    <input type="hidden" name="state" id="state" value="state">
    <input type="submit" value="Sign up with GitHub" style="color: #EEEEEE; background-color: #00527A; border-radius: 8px; font-size: 1.1em; padding: 4px;">
  </form><br>
  <script lang="ts">
    document.getElementById('auth').addEventListener('submit', () => {
      const state: string = Math.random().toString(36).slice(-8);
      localStorage.clear();
      localStorage.setItem('state', state);
      document.getElementById('state').value = state;
    });
  </script>
</main>
