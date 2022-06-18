import{S as F,i as K,s as O,e as n,t as M,k as Y,K as Q,c as r,a as b,d as t,h as R,m as W,b as e,L as A,J as o,g as q,n as E}from"../chunks/index-a46a7a9d.js";function z(C){let s,m,h,d,p,u,g,f,y,I,i,L,w,T,c,x,k,S,_,v;return{c(){s=n("html"),m=n("meta"),h=n("meta"),d=n("meta"),p=n("meta"),u=n("meta"),g=n("meta"),f=n("meta"),y=n("meta"),I=n("meta"),i=n("script"),w=n("script"),T=M(`window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date()), gtag('config', 'G-7FLKW9GYQ6');`),c=n("script"),k=Y(),S=n("main"),_=n("script"),v=M(`var params = Object.fromEntries(new URLSearchParams(location.search).entries()),
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
});`),this.h()},l(l){const a=Q('[data-svelte="svelte-yv9unv"]',document.head);s=r(a,"HTML",{lang:!0}),b(s).forEach(t),m=r(a,"META",{name:!0,content:!0}),h=r(a,"META",{name:!0,content:!0}),d=r(a,"META",{name:!0,content:!0}),p=r(a,"META",{property:!0,content:!0}),u=r(a,"META",{property:!0,content:!0}),g=r(a,"META",{property:!0,content:!0}),f=r(a,"META",{property:!0,content:!0}),y=r(a,"META",{property:!0,content:!0}),I=r(a,"META",{property:!0,content:!0}),i=r(a,"SCRIPT",{src:!0});var G=b(i);G.forEach(t),w=r(a,"SCRIPT",{});var P=b(w);T=R(P,`window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date()), gtag('config', 'G-7FLKW9GYQ6');`),P.forEach(t),c=r(a,"SCRIPT",{src:!0,crossorigin:!0});var X=b(c);X.forEach(t),a.forEach(t),k=W(l),S=r(l,"MAIN",{});var j=b(S);_=r(j,"SCRIPT",{lang:!0});var D=b(_);v=R(D,`var params = Object.fromEntries(new URLSearchParams(location.search).entries()),
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
});`),D.forEach(t),j.forEach(t),this.h()},h(){e(s,"lang","ja"),document.title="beatmania IIDX SP \u260612(Lv12) \u6B74\u4EE3",e(m,"name","description"),e(m,"content","beatmania IIDX SP \u260612 \u6B74\u4EE3"),e(h,"name","keywords"),e(h,"content","beatmania,IIDX,\u5F10\u5BFA,\uD22C\uB371,\u260612,Lv12,\uF98C\u4EE3,\uC5ED\uB300,rekidai,KONAMI,\u30B3\u30CA\u30DF"),e(d,"name","google-site-verification"),e(d,"content","TZhDInm_qqk0-YS_IeFxjcn6jbrmfEccgvRL8cFjm3k"),e(p,"property","og:title"),e(p,"content","beatmania IIDX SP \u260612(Lv12) \u6B74\u4EE3"),e(u,"property","og:site_name"),e(u,"content","beatmania IIDX SP Lv12 Rekidai Top Score Database"),e(g,"property","og:url"),e(g,"content","https://rekidai-info.github.io"),e(f,"property","og:description"),e(f,"content","The top scores of beatmania IIDX in the past are listed."),e(y,"property","og:type"),e(y,"content","website"),e(I,"property","og:image"),e(I,"content","https://rekidai-info.github.io/ogimage.jpg"),i.async=!0,A(i.src,L="https://www.googletagmanager.com/gtag/js?id=G-7FLKW9GYQ6")||e(i,"src",L),c.async=!0,A(c.src,x="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5426520865079088")||e(c,"src",x),e(c,"crossorigin","anonymous"),e(_,"lang","ts")},m(l,a){o(document.head,s),o(document.head,m),o(document.head,h),o(document.head,d),o(document.head,p),o(document.head,u),o(document.head,g),o(document.head,f),o(document.head,y),o(document.head,I),o(document.head,i),o(document.head,w),o(w,T),o(document.head,c),q(l,k,a),q(l,S,a),o(S,_),o(_,v)},p:E,i:E,o:E,d(l){t(s),t(m),t(h),t(d),t(p),t(u),t(g),t(f),t(y),t(I),t(i),t(w),t(c),l&&t(k),l&&t(S)}}}class U extends F{constructor(s){super(),K(this,s,null,z,O,{})}}export{U as default};
