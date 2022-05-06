import{S as T,i as P,s as j,e as s,t as I,k as q,K as C,c,a as p,d as e,h as L,m as G,b as d,L as R,J as o,g as x,n as b}from"../chunks/index-d8dea3be.js";function F(v){let t,i,l,n,k,h,g,f,m,u,w;return{c(){t=s("html"),i=s("meta"),l=s("meta"),n=s("script"),h=s("script"),g=I(`window.dataLayer = window.dataLayer || [];\r
    function gtag(){dataLayer.push(arguments);}\r
    gtag('js', new Date());\r
\r
    gtag('config', 'G-7FLKW9GYQ6');`),f=q(),m=s("main"),u=s("script"),w=I(`const params = Object.fromEntries(new URLSearchParams(location.search).entries());\r
    if (params.state != localStorage.getItem('state')) {\r
      location.href = 'about:blank';\r
    }\r
\r
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
\r
      return response.text();\r
    }).then(result => {\r
      if (result === 'ok') {\r
        localStorage.setItem('auth', 'ok');\r
        location.href = 'https://rekidai-info.github.io';\r
      } else {\r
        localStorage.setItem('auth', 'ng');\r
        location.href = 'about:blank';\r
      }\r
    }).catch(error => {\r
      console.error(error);\r
    });`),this.h()},l(a){const r=C('[data-svelte="svelte-1p7xb7v"]',document.head);t=c(r,"HTML",{lang:!0}),p(t).forEach(e),i=c(r,"META",{name:!0,content:!0}),l=c(r,"META",{name:!0,content:!0}),n=c(r,"SCRIPT",{src:!0});var E=p(n);E.forEach(e),h=c(r,"SCRIPT",{});var _=p(h);g=L(_,`window.dataLayer = window.dataLayer || [];\r
    function gtag(){dataLayer.push(arguments);}\r
    gtag('js', new Date());\r
\r
    gtag('config', 'G-7FLKW9GYQ6');`),_.forEach(e),r.forEach(e),f=G(a),m=c(a,"MAIN",{});var y=p(m);u=c(y,"SCRIPT",{});var S=p(u);w=L(S,`const params = Object.fromEntries(new URLSearchParams(location.search).entries());\r
    if (params.state != localStorage.getItem('state')) {\r
      location.href = 'about:blank';\r
    }\r
\r
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
\r
      return response.text();\r
    }).then(result => {\r
      if (result === 'ok') {\r
        localStorage.setItem('auth', 'ok');\r
        location.href = 'https://rekidai-info.github.io';\r
      } else {\r
        localStorage.setItem('auth', 'ng');\r
        location.href = 'about:blank';\r
      }\r
    }).catch(error => {\r
      console.error(error);\r
    });`),S.forEach(e),y.forEach(e),this.h()},h(){d(t,"lang","ja"),document.title="IIDX SP \u260612 \u6B74\u4EE3",d(i,"name","keywords"),d(i,"content","\u260612,Lv12,\uF98C\u4EE3,\uC5ED\uB300,rekidai"),d(l,"name","google-site-verification"),d(l,"content","TZhDInm_qqk0-YS_IeFxjcn6jbrmfEccgvRL8cFjm3k"),n.async=!0,R(n.src,k="https://www.googletagmanager.com/gtag/js?id=G-7FLKW9GYQ6")||d(n,"src",k)},m(a,r){o(document.head,t),o(document.head,i),o(document.head,l),o(document.head,n),o(document.head,h),o(h,g),x(a,f,r),x(a,m,r),o(m,u),o(u,w)},p:b,i:b,o:b,d(a){e(t),e(i),e(l),e(n),e(h),a&&e(f),a&&e(m)}}}class K extends T{constructor(t){super(),P(this,t,null,F,j,{})}}export{K as default};
