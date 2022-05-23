import{S as T,i as P,s as j,e as c,t as y,k as q,K as C,c as s,a as g,d as e,h as v,m as D,b as l,L as G,J as o,g as L,n as S}from"../chunks/index-a46a7a9d.js";function R(x){let a,i,m,n,b,h,f,p,d,u,w;return{c(){a=c("html"),i=c("meta"),m=c("meta"),n=c("script"),h=c("script"),f=y(`window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date()), gtag('config', 'G-7FLKW9GYQ6');`),p=q(),d=c("main"),u=c("script"),w=y(`var params = Object.fromEntries(new URLSearchParams(location.search).entries()),
    state = localStorage.getItem('state');
localStorage.removeItem('state'), params.state != state && (location.href = 'about:blank'), fetch('https://check-twitter-user-mhqxry7zeq-an.a.run.app', {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {// 'Content-Type': 'application/x-www-form-urlencoded'
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  body: params.code
}).then(a => (a.ok || (localStorage.setItem('auth', 'ng'), location.href = 'about:blank'), a.text())).then(a => {
  'ok' === a ? (localStorage.setItem('auth', 'ok'), localStorage.setItem('expires', Date.now() + 604800000), location.href = 'https://rekidai-info.github.io') : (localStorage.setItem('auth', 'ng'), location.href = 'about:blank');
}).catch(a => {
  console.error(a);
});`),this.h()},l(r){const t=C('[data-svelte="svelte-fpe2wf"]',document.head);a=s(t,"HTML",{lang:!0}),g(a).forEach(e),i=s(t,"META",{name:!0,content:!0}),m=s(t,"META",{name:!0,content:!0}),n=s(t,"SCRIPT",{src:!0});var E=g(n);E.forEach(e),h=s(t,"SCRIPT",{});var k=g(h);f=v(k,`window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date()), gtag('config', 'G-7FLKW9GYQ6');`),k.forEach(e),t.forEach(e),p=D(r),d=s(r,"MAIN",{});var I=g(d);u=s(I,"SCRIPT",{lang:!0});var _=g(u);w=v(_,`var params = Object.fromEntries(new URLSearchParams(location.search).entries()),
    state = localStorage.getItem('state');
localStorage.removeItem('state'), params.state != state && (location.href = 'about:blank'), fetch('https://check-twitter-user-mhqxry7zeq-an.a.run.app', {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {// 'Content-Type': 'application/x-www-form-urlencoded'
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  body: params.code
}).then(a => (a.ok || (localStorage.setItem('auth', 'ng'), location.href = 'about:blank'), a.text())).then(a => {
  'ok' === a ? (localStorage.setItem('auth', 'ok'), localStorage.setItem('expires', Date.now() + 604800000), location.href = 'https://rekidai-info.github.io') : (localStorage.setItem('auth', 'ng'), location.href = 'about:blank');
}).catch(a => {
  console.error(a);
});`),_.forEach(e),I.forEach(e),this.h()},h(){l(a,"lang","ja"),document.title="IIDX SP \u260612 \u6B74\u4EE3",l(i,"name","keywords"),l(i,"content","beatmania,IIDX,\uD22C\uB371,\u260612,Lv12,\uF98C\u4EE3,\uC5ED\uB300,rekidai"),l(m,"name","google-site-verification"),l(m,"content","TZhDInm_qqk0-YS_IeFxjcn6jbrmfEccgvRL8cFjm3k"),n.async=!0,G(n.src,b="https://www.googletagmanager.com/gtag/js?id=G-7FLKW9GYQ6")||l(n,"src",b),l(u,"lang","ts")},m(r,t){o(document.head,a),o(document.head,i),o(document.head,m),o(document.head,n),o(document.head,h),o(h,f),L(r,p,t),L(r,d,t),o(d,u),o(u,w)},p:S,i:S,o:S,d(r){e(a),e(i),e(m),e(n),e(h),r&&e(p),r&&e(d)}}}class K extends T{constructor(a){super(),P(this,a,null,R,j,{})}}export{K as default};
