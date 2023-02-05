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
  <p>
    <b>Anyone can edit the IIDX SP ☆12(Lv12) rekidai data.</b><br><br>
    If you want to update rekidai data, please fork <a href="https://github.com/rekidai-info/rekidai-info.github.io" target="_blank" rel="noopener noreferrer">https://github.com/rekidai-info/rekidai-info.github.io</a>, edit <a href="https://github.com/rekidai-info/rekidai-info.github.io/blob/main/static/rekidai.json" target="_blank" rel="noopener noreferrer">rekidai.json</a>, and submit a Pull Request. That's all.<br>
    All you need to do is <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer">create a GitHub account</a>, and you <b>DO NOT</b> need to install any git tools.<br>
    The rekidai.json file can be edited in your browser, and Pull Requests can be made in your browser.<br><br>
  
    Please submit at least one Pull Request to view this site.<br><br>
  </p>
  <hr>
  <p>
    <b>誰でも IIDX SP ☆12(Lv12) 歴代データを修正できます。</b><br><br>
    歴代データを更新したい場合、<a href="https://github.com/rekidai-info/rekidai-info.github.io" target="_blank" rel="noopener noreferrer">https://github.com/rekidai-info/rekidai-info.github.io</a> をフォークし、<a href="https://github.com/rekidai-info/rekidai-info.github.io/blob/main/static/rekidai.json" target="_blank" rel="noopener noreferrer">rekidai.json</a> を編集し、Pull Request を提出してください。<br>
    必要なのは<a href="https://github.com/signup" target="_blank" rel="noopener noreferrer">GitHub のアカウントを作成</a>する事のみで、<b>git などのツールをインストールする必要はありません。</b><br>
    rekidai.json ファイルはブラウザ上で編集が可能で、Pull Request もブラウザ上で提出できます。<br><br>
  
    本サイトを閲覧するには、一度以上 Pull Request を提出してください。<br><br>
  
    <a href="https://amzn.to/3jqk39S" target="_blank" rel="noopener noreferrer">Amazon Wish List</a>
  </p>

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
