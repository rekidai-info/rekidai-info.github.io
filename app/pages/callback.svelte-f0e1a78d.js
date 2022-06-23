import{S as q,i as C,s as K,e as n,t as x,k as O,K as G,c as r,a as T,d as t,h as A,m as X,b as e,L as F,J as o,g as D,n as E}from"../chunks/index-a46a7a9d.js";function N(M){let c,l,m,h,d,p,u,g,f,y,s,v,w,b,_,I,S,k;return{c(){c=n("html"),l=n("meta"),m=n("meta"),h=n("meta"),d=n("meta"),p=n("meta"),u=n("meta"),g=n("meta"),f=n("meta"),y=n("meta"),s=n("script"),w=n("script"),b=x(`window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date()), gtag('config', 'G-7FLKW9GYQ6');`),_=O(),I=n("main"),S=n("script"),k=x(`var params = Object.fromEntries(new URLSearchParams(location.search).entries()),
    state = localStorage.getItem('state');
localStorage.removeItem('state'), null == state && (localStorage.setItem('state', 'error'), window.open(location.href, '_system', 'hidden=yes,location=no')), 'error' == params.state && (location.href = 'auth.html'), params.state != state && (localStorage.setItem('state', 'error'), window.open(location.href, '_system', 'hidden=yes,location=no')), fetch('https://check-user-mhqxry7zeq-an.a.run.app', {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {// 'Content-Type': 'application/x-www-form-urlencoded'
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  body: params.code
}).then(a => (a.ok || (localStorage.setItem('auth', 'ng'), setTimeout(() => {
  location.href = 'auth.html';
}, 300)), a.text())).then(a => {
  'ok' === a ? (localStorage.setItem('auth', 'ok'), localStorage.setItem('expires', Date.now() + 604800000), location.href = 'https://rekidai-info.github.io') : ('ng' == a && alert('If you want to see the Rekidai score table, at least contribute to the creation of the Rekidai score table.\\n\\n\u6B74\u4EE3\u8868\u3092\u898B\u305F\u3044\u306E\u306A\u3089\u3001\u6B74\u4EE3\u8868\u306E\u4F5C\u6210\u306B\u307B\u3093\u306E\u5C11\u3057\u3067\u3082\u8CA2\u732E\u3057\u3066\u304F\u3060\u3055\u3044\u3002'), localStorage.setItem('auth', 'ng'), location.href = 'auth.html');
}).catch(a => {
  console.error(a);
});`),this.h()},l(i){const a=G('[data-svelte="svelte-167zodi"]',document.head);c=r(a,"HTML",{lang:!0}),T(c).forEach(t),l=r(a,"META",{name:!0,content:!0}),m=r(a,"META",{name:!0,content:!0}),h=r(a,"META",{name:!0,content:!0}),d=r(a,"META",{property:!0,content:!0}),p=r(a,"META",{property:!0,content:!0}),u=r(a,"META",{property:!0,content:!0}),g=r(a,"META",{property:!0,content:!0}),f=r(a,"META",{property:!0,content:!0}),y=r(a,"META",{property:!0,content:!0}),s=r(a,"SCRIPT",{src:!0});var j=T(s);j.forEach(t),w=r(a,"SCRIPT",{});var L=T(w);b=A(L,`window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date()), gtag('config', 'G-7FLKW9GYQ6');`),L.forEach(t),a.forEach(t),_=X(i),I=r(i,"MAIN",{});var R=T(I);S=r(R,"SCRIPT",{lang:!0});var P=T(S);k=A(P,`var params = Object.fromEntries(new URLSearchParams(location.search).entries()),
    state = localStorage.getItem('state');
localStorage.removeItem('state'), null == state && (localStorage.setItem('state', 'error'), window.open(location.href, '_system', 'hidden=yes,location=no')), 'error' == params.state && (location.href = 'auth.html'), params.state != state && (localStorage.setItem('state', 'error'), window.open(location.href, '_system', 'hidden=yes,location=no')), fetch('https://check-user-mhqxry7zeq-an.a.run.app', {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {// 'Content-Type': 'application/x-www-form-urlencoded'
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  body: params.code
}).then(a => (a.ok || (localStorage.setItem('auth', 'ng'), setTimeout(() => {
  location.href = 'auth.html';
}, 300)), a.text())).then(a => {
  'ok' === a ? (localStorage.setItem('auth', 'ok'), localStorage.setItem('expires', Date.now() + 604800000), location.href = 'https://rekidai-info.github.io') : ('ng' == a && alert('If you want to see the Rekidai score table, at least contribute to the creation of the Rekidai score table.\\n\\n\u6B74\u4EE3\u8868\u3092\u898B\u305F\u3044\u306E\u306A\u3089\u3001\u6B74\u4EE3\u8868\u306E\u4F5C\u6210\u306B\u307B\u3093\u306E\u5C11\u3057\u3067\u3082\u8CA2\u732E\u3057\u3066\u304F\u3060\u3055\u3044\u3002'), localStorage.setItem('auth', 'ng'), location.href = 'auth.html');
}).catch(a => {
  console.error(a);
});`),P.forEach(t),R.forEach(t),this.h()},h(){e(c,"lang","ja"),document.title="beatmania IIDX SP \u260612(Lv12) \u6B74\u4EE3\u5168\u4E00 Top Scores/Rankers Viewer",e(l,"name","description"),e(l,"content","beatmania IIDX(\u5F10\u5BFA/\uD22C\uB371) SP \u260612(Lv12) \u6B74\u4EE3\u5168\u4E00(\uC5ED\uB300)\u30B9\u30B3\u30A2(Score)/\u30E9\u30F3\u30AB\u30FC(Top Ranker)\u3092\u8868\u793A\u3057\u307E\u3059\u3002"),e(m,"name","keywords"),e(m,"content","beatmania,IIDX,\u5F10\u5BFA,\uD22C\uB371,\u260612,Lv12,\uF98C\u4EE3,\u6B74\u4EE3\u5168\u4E00,\u6B74\u4EE3\u30B9\u30B3\u30A2,\uC5ED\uB300,TOP RANKER,TOP RANKERS,rekidai,KONAMI,\u30B3\u30CA\u30DF"),e(h,"name","google-site-verification"),e(h,"content","TZhDInm_qqk0-YS_IeFxjcn6jbrmfEccgvRL8cFjm3k"),e(d,"property","og:title"),e(d,"content","beatmania IIDX SP \u260612(Lv12) \u6B74\u4EE3"),e(p,"property","og:site_name"),e(p,"content","beatmania IIDX SP Lv12 Rekidai Top Score Database"),e(u,"property","og:url"),e(u,"content","https://rekidai-info.github.io"),e(g,"property","og:description"),e(g,"content","The top scores of beatmania IIDX in the past are listed."),e(f,"property","og:type"),e(f,"content","website"),e(y,"property","og:image"),e(y,"content","https://rekidai-info.github.io/ogimage.jpg"),s.async=!0,F(s.src,v="https://www.googletagmanager.com/gtag/js?id=G-7FLKW9GYQ6")||e(s,"src",v),e(S,"lang","ts")},m(i,a){o(document.head,c),o(document.head,l),o(document.head,m),o(document.head,h),o(document.head,d),o(document.head,p),o(document.head,u),o(document.head,g),o(document.head,f),o(document.head,y),o(document.head,s),o(document.head,w),o(w,b),D(i,_,a),D(i,I,a),o(I,S),o(S,k)},p:E,i:E,o:E,d(i){t(c),t(l),t(m),t(h),t(d),t(p),t(u),t(g),t(f),t(y),t(s),t(w),i&&t(_),i&&t(I)}}}class z extends q{constructor(c){super(),C(this,c,null,N,K,{})}}export{z as default};
