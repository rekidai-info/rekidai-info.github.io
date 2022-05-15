import{S as T,i as j,s as P,e as s,t as y,k as q,K as C,c,a as p,d as e,h as L,m as D,b as d,L as G,J as o,g as x,n as S}from"../chunks/index-d8dea3be.js";function R(v){let t,l,i,a,b,m,f,g,h,u,w;return{c(){t=s("html"),l=s("meta"),i=s("meta"),a=s("script"),m=s("script"),f=y(`window.dataLayer = window.dataLayer || [];\r
function gtag(){dataLayer.push(arguments);}\r
gtag('js', new Date());\r

gtag('config', 'G-7FLKW9GYQ6');`),g=q(),h=s("main"),u=s("script"),w=y(`const params = Object.fromEntries(new URLSearchParams(location.search).entries());\r
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
});`),this.h()},l(n){const r=C('[data-svelte="svelte-cp7gju"]',document.head);t=c(r,"HTML",{lang:!0}),p(t).forEach(e),l=c(r,"META",{name:!0,content:!0}),i=c(r,"META",{name:!0,content:!0}),a=c(r,"SCRIPT",{src:!0});var E=p(a);E.forEach(e),m=c(r,"SCRIPT",{});var k=p(m);f=L(k,`window.dataLayer = window.dataLayer || [];\r
function gtag(){dataLayer.push(arguments);}\r
gtag('js', new Date());\r

gtag('config', 'G-7FLKW9GYQ6');`),k.forEach(e),r.forEach(e),g=D(n),h=c(n,"MAIN",{});var I=p(h);u=c(I,"SCRIPT",{});var _=p(u);w=L(_,`const params = Object.fromEntries(new URLSearchParams(location.search).entries());\r
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
});`),_.forEach(e),I.forEach(e),this.h()},h(){d(t,"lang","ja"),document.title="IIDX SP \u260612 \u6B74\u4EE3",d(l,"name","keywords"),d(l,"content","beatmania,IIDX,\uD22C\uB371,\u260612,Lv12,\uF98C\u4EE3,\uC5ED\uB300,rekidai"),d(i,"name","google-site-verification"),d(i,"content","TZhDInm_qqk0-YS_IeFxjcn6jbrmfEccgvRL8cFjm3k"),a.async=!0,G(a.src,b="https://www.googletagmanager.com/gtag/js?id=G-7FLKW9GYQ6")||d(a,"src",b)},m(n,r){o(document.head,t),o(document.head,l),o(document.head,i),o(document.head,a),o(document.head,m),o(m,f),x(n,g,r),x(n,h,r),o(h,u),o(u,w)},p:S,i:S,o:S,d(n){e(t),e(l),e(i),e(a),e(m),n&&e(g),n&&e(h)}}}class K extends T{constructor(t){super(),j(this,t,null,R,P,{})}}export{K as default};
