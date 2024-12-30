import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, I as head_selector, l as claim_element, m as children, h as detach, r as claim_text, c as claim_space, n as attr, J as src_url_equal, G as append_hydration, b as insert_hydration, B as noop } from "../../../chunks/index-5f53a548.js";
function create_fragment(ctx) {
  let html;
  let meta0;
  let meta1;
  let meta2;
  let meta3;
  let meta4;
  let meta5;
  let meta6;
  let meta7;
  let meta8;
  let script0;
  let script0_src_value;
  let script1;
  let t0;
  let t1;
  let main;
  let script2;
  let t2;
  return {
    c() {
      html = element("html");
      meta0 = element("meta");
      meta1 = element("meta");
      meta2 = element("meta");
      meta3 = element("meta");
      meta4 = element("meta");
      meta5 = element("meta");
      meta6 = element("meta");
      meta7 = element("meta");
      meta8 = element("meta");
      script0 = element("script");
      script1 = element("script");
      t0 = text("window.dataLayer = window.dataLayer || [];\r\n    function gtag(){dataLayer.push(arguments);}\r\n    gtag('js', new Date());\r\n\r\n    gtag('config', 'G-7FLKW9GYQ6');");
      t1 = space();
      main = element("main");
      script2 = element("script");
      t2 = text(`const params = Object.fromEntries(new URLSearchParams(location.search).entries());
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
});`);
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1wx3o1p", document.head);
      html = claim_element(head_nodes, "HTML", { lang: true });
      children(html).forEach(detach);
      meta0 = claim_element(head_nodes, "META", { name: true, content: true });
      meta1 = claim_element(head_nodes, "META", { name: true, content: true });
      meta2 = claim_element(head_nodes, "META", { name: true, content: true });
      meta3 = claim_element(head_nodes, "META", { property: true, content: true });
      meta4 = claim_element(head_nodes, "META", { property: true, content: true });
      meta5 = claim_element(head_nodes, "META", { property: true, content: true });
      meta6 = claim_element(head_nodes, "META", { property: true, content: true });
      meta7 = claim_element(head_nodes, "META", { property: true, content: true });
      meta8 = claim_element(head_nodes, "META", { property: true, content: true });
      script0 = claim_element(head_nodes, "SCRIPT", { src: true });
      var script0_nodes = children(script0);
      script0_nodes.forEach(detach);
      script1 = claim_element(head_nodes, "SCRIPT", {});
      var script1_nodes = children(script1);
      t0 = claim_text(script1_nodes, "window.dataLayer = window.dataLayer || [];\r\n    function gtag(){dataLayer.push(arguments);}\r\n    gtag('js', new Date());\r\n\r\n    gtag('config', 'G-7FLKW9GYQ6');");
      script1_nodes.forEach(detach);
      head_nodes.forEach(detach);
      t1 = claim_space(nodes);
      main = claim_element(nodes, "MAIN", {});
      var main_nodes = children(main);
      script2 = claim_element(main_nodes, "SCRIPT", { lang: true });
      var script2_nodes = children(script2);
      t2 = claim_text(script2_nodes, `const params = Object.fromEntries(new URLSearchParams(location.search).entries());
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
});`);
      script2_nodes.forEach(detach);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(html, "lang", "ja");
      document.title = "beatmania IIDX SP ☆12(Lv12) 歴代全一 Top Scores/Rankers Viewer";
      attr(meta0, "name", "description");
      attr(meta0, "content", "beatmania IIDX(弐寺/투덱) SP ☆12(Lv12) 歴代全一(역대/Rekidai)スコア(Score)/ランカー(Top Ranker)を表示します。");
      attr(meta1, "name", "keywords");
      attr(meta1, "content", "beatmania,IIDX,iidx,弐寺,투덱,☆12,Lv12,歷代,歴代全一,歴代スコア,역대,TOP RANKER,TOP RANKERS,rekidai,KONAMI,コナミ");
      attr(meta2, "name", "google-site-verification");
      attr(meta2, "content", "TZhDInm_qqk0-YS_IeFxjcn6jbrmfEccgvRL8cFjm3k");
      attr(meta3, "property", "og:title");
      attr(meta3, "content", "beatmania IIDX SP ☆12(Lv12) 歴代");
      attr(meta4, "property", "og:site_name");
      attr(meta4, "content", "beatmania IIDX SP Lv12 Rekidai Top Score Database");
      attr(meta5, "property", "og:url");
      attr(meta5, "content", "https://rekidai-info.github.io");
      attr(meta6, "property", "og:description");
      attr(meta6, "content", "The top scores of beatmania IIDX in the past are listed.");
      attr(meta7, "property", "og:type");
      attr(meta7, "content", "website");
      attr(meta8, "property", "og:image");
      attr(meta8, "content", "https://rekidai-info.github.io/ogimage.jpg");
      script0.async = true;
      if (!src_url_equal(script0.src, script0_src_value = "https://www.googletagmanager.com/gtag/js?id=G-7FLKW9GYQ6"))
        attr(script0, "src", script0_src_value);
      attr(script2, "lang", "ts");
    },
    m(target, anchor) {
      append_hydration(document.head, html);
      append_hydration(document.head, meta0);
      append_hydration(document.head, meta1);
      append_hydration(document.head, meta2);
      append_hydration(document.head, meta3);
      append_hydration(document.head, meta4);
      append_hydration(document.head, meta5);
      append_hydration(document.head, meta6);
      append_hydration(document.head, meta7);
      append_hydration(document.head, meta8);
      append_hydration(document.head, script0);
      append_hydration(document.head, script1);
      append_hydration(script1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, main, anchor);
      append_hydration(main, script2);
      append_hydration(script2, t2);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      detach(html);
      detach(meta0);
      detach(meta1);
      detach(meta2);
      detach(meta3);
      detach(meta4);
      detach(meta5);
      detach(meta6);
      detach(meta7);
      detach(meta8);
      detach(script0);
      detach(script1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(main);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
