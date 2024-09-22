import{S as B,i as F,s as j,k as o,q as x,a as q,I as G,l as r,m as S,h as t,r as P,c as O,n as e,J as K,G as a,b as C,B as b}from"../../../chunks/index-d131aac3.js";function X(D){let s,u,l,m,h,d,p,g,f,y,c,L,w,k,T,I,E,_;return{c(){s=o("html"),u=o("meta"),l=o("meta"),m=o("meta"),h=o("meta"),d=o("meta"),p=o("meta"),g=o("meta"),f=o("meta"),y=o("meta"),c=o("script"),w=o("script"),k=x(`window.dataLayer = window.dataLayer || [];\r
    function gtag(){dataLayer.push(arguments);}\r
    gtag('js', new Date());\r
\r
    gtag('config', 'G-7FLKW9GYQ6');`),T=q(),I=o("main"),E=o("script"),_=x(`const params = Object.fromEntries(new URLSearchParams(location.search).entries());
const state = localStorage.getItem("state");
localStorage.removeItem("state");
if (state == null) {
  localStorage.setItem("state", "error");
  window.open(location.href, "_system", "hidden=yes,location=no");
}
if (params.state == "error") {
  location.href = "auth.html";
}
if (params.state != state) {
  localStorage.setItem("state", "error");
  window.open(location.href, "_system", "hidden=yes,location=no");
}
fetch("https://check-user-mhqxry7zeq-an.a.run.app", {
  method: "POST",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded'
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
  body: params.code
}).then((response) => {
  if (!response.ok) {
    localStorage.setItem("auth", "ng");
    setTimeout(() => {
      location.href = "auth.html";
    }, 300);
  }
  return response.text();
}).then((result) => {
  if (result === "ok") {
    localStorage.setItem("auth", "ok");
    localStorage.setItem("expires", Date.now() + 7 * 24 * 60 * 60 * 1e3);
    location.href = "https://rekidai-info.github.io";
  } else {
    if (result === "ng") {
      alert("If you want to see the Rekidai score table, at least contribute to the creation of the Rekidai score table.\\n\\n\\u6B74\\u4EE3\\u8868\\u3092\\u898B\\u305F\\u3044\\u306E\\u306A\\u3089\\u3001\\u6B74\\u4EE3\\u8868\\u306E\\u4F5C\\u6210\\u306B\\u307B\\u3093\\u306E\\u5C11\\u3057\\u3067\\u3082\\u8CA2\\u732E\\u3057\\u3066\\u304F\\u3060\\u3055\\u3044\\u3002");
    }
    localStorage.setItem("auth", "ng");
    location.href = "auth.html";
  }
}).catch((error) => {
  console.error(error);
});`),this.h()},l(i){const n=G("svelte-1wx3o1p",document.head);s=r(n,"HTML",{lang:!0}),S(s).forEach(t),u=r(n,"META",{name:!0,content:!0}),l=r(n,"META",{name:!0,content:!0}),m=r(n,"META",{name:!0,content:!0}),h=r(n,"META",{property:!0,content:!0}),d=r(n,"META",{property:!0,content:!0}),p=r(n,"META",{property:!0,content:!0}),g=r(n,"META",{property:!0,content:!0}),f=r(n,"META",{property:!0,content:!0}),y=r(n,"META",{property:!0,content:!0}),c=r(n,"SCRIPT",{src:!0});var M=S(c);M.forEach(t),w=r(n,"SCRIPT",{});var R=S(w);k=P(R,`window.dataLayer = window.dataLayer || [];\r
    function gtag(){dataLayer.push(arguments);}\r
    gtag('js', new Date());\r
\r
    gtag('config', 'G-7FLKW9GYQ6');`),R.forEach(t),n.forEach(t),T=O(i),I=r(i,"MAIN",{});var A=S(I);E=r(A,"SCRIPT",{lang:!0});var v=S(E);_=P(v,`const params = Object.fromEntries(new URLSearchParams(location.search).entries());
const state = localStorage.getItem("state");
localStorage.removeItem("state");
if (state == null) {
  localStorage.setItem("state", "error");
  window.open(location.href, "_system", "hidden=yes,location=no");
}
if (params.state == "error") {
  location.href = "auth.html";
}
if (params.state != state) {
  localStorage.setItem("state", "error");
  window.open(location.href, "_system", "hidden=yes,location=no");
}
fetch("https://check-user-mhqxry7zeq-an.a.run.app", {
  method: "POST",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded'
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
  body: params.code
}).then((response) => {
  if (!response.ok) {
    localStorage.setItem("auth", "ng");
    setTimeout(() => {
      location.href = "auth.html";
    }, 300);
  }
  return response.text();
}).then((result) => {
  if (result === "ok") {
    localStorage.setItem("auth", "ok");
    localStorage.setItem("expires", Date.now() + 7 * 24 * 60 * 60 * 1e3);
    location.href = "https://rekidai-info.github.io";
  } else {
    if (result === "ng") {
      alert("If you want to see the Rekidai score table, at least contribute to the creation of the Rekidai score table.\\n\\n\\u6B74\\u4EE3\\u8868\\u3092\\u898B\\u305F\\u3044\\u306E\\u306A\\u3089\\u3001\\u6B74\\u4EE3\\u8868\\u306E\\u4F5C\\u6210\\u306B\\u307B\\u3093\\u306E\\u5C11\\u3057\\u3067\\u3082\\u8CA2\\u732E\\u3057\\u3066\\u304F\\u3060\\u3055\\u3044\\u3002");
    }
    localStorage.setItem("auth", "ng");
    location.href = "auth.html";
  }
}).catch((error) => {
  console.error(error);
});`),v.forEach(t),A.forEach(t),this.h()},h(){e(s,"lang","ja"),document.title="beatmania IIDX SP ☆12(Lv12) 歴代全一 Top Scores/Rankers Viewer",e(u,"name","description"),e(u,"content","beatmania IIDX(弐寺/투덱) SP ☆12(Lv12) 歴代全一(역대/Rekidai)スコア(Score)/ランカー(Top Ranker)を表示します。"),e(l,"name","keywords"),e(l,"content","beatmania,IIDX,iidx,弐寺,투덱,☆12,Lv12,歷代,歴代全一,歴代スコア,역대,TOP RANKER,TOP RANKERS,rekidai,KONAMI,コナミ"),e(m,"name","google-site-verification"),e(m,"content","TZhDInm_qqk0-YS_IeFxjcn6jbrmfEccgvRL8cFjm3k"),e(h,"property","og:title"),e(h,"content","beatmania IIDX SP ☆12(Lv12) 歴代"),e(d,"property","og:site_name"),e(d,"content","beatmania IIDX SP Lv12 Rekidai Top Score Database"),e(p,"property","og:url"),e(p,"content","https://rekidai-info.github.io"),e(g,"property","og:description"),e(g,"content","The top scores of beatmania IIDX in the past are listed."),e(f,"property","og:type"),e(f,"content","website"),e(y,"property","og:image"),e(y,"content","https://rekidai-info.github.io/ogimage.jpg"),c.async=!0,K(c.src,L="https://www.googletagmanager.com/gtag/js?id=G-7FLKW9GYQ6")||e(c,"src",L),e(E,"lang","ts")},m(i,n){a(document.head,s),a(document.head,u),a(document.head,l),a(document.head,m),a(document.head,h),a(document.head,d),a(document.head,p),a(document.head,g),a(document.head,f),a(document.head,y),a(document.head,c),a(document.head,w),a(w,k),C(i,T,n),C(i,I,n),a(I,E),a(E,_)},p:b,i:b,o:b,d(i){t(s),t(u),t(l),t(m),t(h),t(d),t(p),t(g),t(f),t(y),t(c),t(w),i&&t(T),i&&t(I)}}}class Y extends B{constructor(s){super(),F(this,s,null,X,j,{})}}export{Y as default};
