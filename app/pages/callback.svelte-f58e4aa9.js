import{S as C,i as R,s as G,e as r,t as D,k as X,K as F,c as o,a as _,d as t,h as M,m as K,b as e,L as O,J as n,g as A,n as v}from"../chunks/index-a46a7a9d.js";function Y(j){let c,l,m,h,d,p,u,g,f,y,s,b,I,k,T,w,S,E;return{c(){c=r("html"),l=r("meta"),m=r("meta"),h=r("meta"),d=r("meta"),p=r("meta"),u=r("meta"),g=r("meta"),f=r("meta"),y=r("meta"),s=r("script"),I=r("script"),k=D(`window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date()), gtag('config', 'G-7FLKW9GYQ6');`),T=X(),w=r("main"),S=r("script"),E=D(`var params = Object.fromEntries(new URLSearchParams(location.search).entries()),
    state = localStorage.getItem('state');
localStorage.removeItem('state'), params.state != state && (location.href = 'auth.html'), fetch('https://check-twitter-user-mhqxry7zeq-an.a.run.app', {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {// 'Content-Type': 'application/x-www-form-urlencoded'
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  body: params.code
}).then(a => (a.ok || (localStorage.setItem('auth', 'ng'), location.href = 'auth.html'), a.text())).then(a => {
  'ok' === a ? (localStorage.setItem('auth', 'ok'), localStorage.setItem('expires', Date.now() + 604800000), location.href = 'https://rekidai-info.github.io') : (localStorage.setItem('auth', 'ng'), location.href = 'auth.html');
}).catch(a => {
  console.error(a);
});`),this.h()},l(i){const a=F('[data-svelte="svelte-5h3l1m"]',document.head);c=o(a,"HTML",{lang:!0}),_(c).forEach(t),l=o(a,"META",{name:!0,content:!0}),m=o(a,"META",{name:!0,content:!0}),h=o(a,"META",{name:!0,content:!0}),d=o(a,"META",{property:!0,content:!0}),p=o(a,"META",{property:!0,content:!0}),u=o(a,"META",{property:!0,content:!0}),g=o(a,"META",{property:!0,content:!0}),f=o(a,"META",{property:!0,content:!0}),y=o(a,"META",{property:!0,content:!0}),s=o(a,"SCRIPT",{src:!0});var q=_(s);q.forEach(t),I=o(a,"SCRIPT",{});var L=_(I);k=M(L,`window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date()), gtag('config', 'G-7FLKW9GYQ6');`),L.forEach(t),a.forEach(t),T=K(i),w=o(i,"MAIN",{});var x=_(w);S=o(x,"SCRIPT",{lang:!0});var P=_(S);E=M(P,`var params = Object.fromEntries(new URLSearchParams(location.search).entries()),
    state = localStorage.getItem('state');
localStorage.removeItem('state'), params.state != state && (location.href = 'auth.html'), fetch('https://check-twitter-user-mhqxry7zeq-an.a.run.app', {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {// 'Content-Type': 'application/x-www-form-urlencoded'
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  body: params.code
}).then(a => (a.ok || (localStorage.setItem('auth', 'ng'), location.href = 'auth.html'), a.text())).then(a => {
  'ok' === a ? (localStorage.setItem('auth', 'ok'), localStorage.setItem('expires', Date.now() + 604800000), location.href = 'https://rekidai-info.github.io') : (localStorage.setItem('auth', 'ng'), location.href = 'auth.html');
}).catch(a => {
  console.error(a);
});`),P.forEach(t),x.forEach(t),this.h()},h(){e(c,"lang","ja"),document.title="IIDX SP \u260612 \u6B74\u4EE3",e(l,"name","description"),e(l,"content","IIDX SP \u260612 \u6B74\u4EE3"),e(m,"name","keywords"),e(m,"content","beatmania,IIDX,\uD22C\uB371,\u260612,Lv12,\uF98C\u4EE3,\uC5ED\uB300,rekidai,KONAMI,\u30B3\u30CA\u30DF"),e(h,"name","google-site-verification"),e(h,"content","TZhDInm_qqk0-YS_IeFxjcn6jbrmfEccgvRL8cFjm3k"),e(d,"property","og:title"),e(d,"content","IIDX SP \u260612 \u6B74\u4EE3"),e(p,"property","og:site_name"),e(p,"content","beatmania IIDX SP Lv12 Rekidai Top Score Database"),e(u,"property","og:url"),e(u,"content","https://rekidai-info.github.io"),e(g,"property","og:description"),e(g,"content","The top scores of beatmania IIDX in the past are listed."),e(f,"property","og:type"),e(f,"content","website"),e(y,"property","og:image"),e(y,"content","https://rekidai-info.github.io/favicon.ico"),s.async=!0,O(s.src,b="https://www.googletagmanager.com/gtag/js?id=G-7FLKW9GYQ6")||e(s,"src",b),e(S,"lang","ts")},m(i,a){n(document.head,c),n(document.head,l),n(document.head,m),n(document.head,h),n(document.head,d),n(document.head,p),n(document.head,u),n(document.head,g),n(document.head,f),n(document.head,y),n(document.head,s),n(document.head,I),n(I,k),A(i,T,a),A(i,w,a),n(w,S),n(S,E)},p:v,i:v,o:v,d(i){t(c),t(l),t(m),t(h),t(d),t(p),t(u),t(g),t(f),t(y),t(s),t(I),i&&t(T),i&&t(w)}}}class W extends C{constructor(c){super(),R(this,c,null,Y,G,{})}}export{W as default};
