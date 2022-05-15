import{S as T,i as P,s as j,e as s,t as y,k as q,K as C,c,a as p,d as e,h as L,m as D,b as d,L as G,J as o,g as x,n as S}from"../chunks/index-d8dea3be.js";function R(v){let t,l,i,n,k,h,f,g,m,u,w;return{c(){t=s("html"),l=s("meta"),i=s("meta"),n=s("script"),h=s("script"),f=y(`window.dataLayer = window.dataLayer || [];\r
function gtag(){dataLayer.push(arguments);}\r
gtag('js', new Date());\r

gtag('config', 'G-7FLKW9GYQ6');`),g=q(),m=s("main"),u=s("script"),w=y(`const params = Object.fromEntries(new URLSearchParams(location.search).entries());\r
const state = localStorage.getItem('state');\r
localStorage.removeItem('state');\r
if (params.state != state) {\r
location.href = 'about:blank';\r
}\r

fetch('https://check-twitter-user-mhqxry7zeq-an.a.run.app', {\r
method: 'POST',\r
mode: 'cors',\r
cache: 'no-cache',\r
credentials: 'same-origin',\r
headers: {\r
// 'Content-Type': 'application/x-www-form-urlencoded'\r
},\r
redirect: 'follow',\r
referrerPolicy: 'no-referrer',\r
body: params.code\r
}).then(response => {\r
if (!response.ok) {\r
localStorage.setItem('auth', 'ng');\r
location.href = 'about:blank';\r
}\r

return response.text();\r
}).then(result => {\r
if (result === 'ok') {\r
localStorage.setItem('auth', 'ok');\r
localStorage.setItem('expires', Date.now() + 7 * 24 * 60 * 60 * 1000);\r
location.href = 'https://rekidai-info.github.io';\r
} else {\r
localStorage.setItem('auth', 'ng');\r
location.href = 'about:blank';\r
}\r
}).catch(error => {\r
console.error(error);\r
});`),this.h()},l(a){const r=C('[data-svelte="svelte-1sui38c"]',document.head);t=c(r,"HTML",{lang:!0}),p(t).forEach(e),l=c(r,"META",{name:!0,content:!0}),i=c(r,"META",{name:!0,content:!0}),n=c(r,"SCRIPT",{src:!0});var E=p(n);E.forEach(e),h=c(r,"SCRIPT",{});var I=p(h);f=L(I,`window.dataLayer = window.dataLayer || [];\r
function gtag(){dataLayer.push(arguments);}\r
gtag('js', new Date());\r

gtag('config', 'G-7FLKW9GYQ6');`),I.forEach(e),r.forEach(e),g=D(a),m=c(a,"MAIN",{});var b=p(m);u=c(b,"SCRIPT",{});var _=p(u);w=L(_,`const params = Object.fromEntries(new URLSearchParams(location.search).entries());\r
const state = localStorage.getItem('state');\r
localStorage.removeItem('state');\r
if (params.state != state) {\r
location.href = 'about:blank';\r
}\r

fetch('https://check-twitter-user-mhqxry7zeq-an.a.run.app', {\r
method: 'POST',\r
mode: 'cors',\r
cache: 'no-cache',\r
credentials: 'same-origin',\r
headers: {\r
// 'Content-Type': 'application/x-www-form-urlencoded'\r
},\r
redirect: 'follow',\r
referrerPolicy: 'no-referrer',\r
body: params.code\r
}).then(response => {\r
if (!response.ok) {\r
localStorage.setItem('auth', 'ng');\r
location.href = 'about:blank';\r
}\r

return response.text();\r
}).then(result => {\r
if (result === 'ok') {\r
localStorage.setItem('auth', 'ok');\r
localStorage.setItem('expires', Date.now() + 7 * 24 * 60 * 60 * 1000);\r
location.href = 'https://rekidai-info.github.io';\r
} else {\r
localStorage.setItem('auth', 'ng');\r
location.href = 'about:blank';\r
}\r
}).catch(error => {\r
console.error(error);\r
});`),_.forEach(e),b.forEach(e),this.h()},h(){d(t,"lang","ja"),document.title="IIDX SP \u260612 \u6B74\u4EE3",d(l,"name","keywords"),d(l,"content","IIDX,\uD22C\uB371,\u260612,Lv12,\uF98C\u4EE3,\uC5ED\uB300,rekidai"),d(i,"name","google-site-verification"),d(i,"content","TZhDInm_qqk0-YS_IeFxjcn6jbrmfEccgvRL8cFjm3k"),n.async=!0,G(n.src,k="https://www.googletagmanager.com/gtag/js?id=G-7FLKW9GYQ6")||d(n,"src",k)},m(a,r){o(document.head,t),o(document.head,l),o(document.head,i),o(document.head,n),o(document.head,h),o(h,f),x(a,g,r),x(a,m,r),o(m,u),o(u,w)},p:S,i:S,o:S,d(a){e(t),e(l),e(i),e(n),e(h),a&&e(g),a&&e(m)}}}class K extends T{constructor(t){super(),P(this,t,null,R,j,{})}}export{K as default};
