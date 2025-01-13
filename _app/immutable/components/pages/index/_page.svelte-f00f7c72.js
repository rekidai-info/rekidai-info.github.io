import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, I as head_selector, l as claim_element, m as children, h as detach, r as claim_text, c as claim_space, n as attr, J as src_url_equal, G as append_hydration, b as insert_hydration, t as transition_out, d as check_outros, f as transition_in, K as globals, g as group_outros, p as set_style, u as set_data, B as noop, L as update_keyed_each, M as add_render_callback, N as create_bidirectional_transition, O as destroy_block } from "../../../chunks/index-5f53a548.js";
const _page_svelte_svelte_type_style_lang = "";
const { document: document_1 } = globals;
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[28] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[27] = list[i];
  return child_ctx;
}
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[26] = list[i];
  return child_ctx;
}
function get_each_context_3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[25] = list[i];
  return child_ctx;
}
function get_each_context_4(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[24] = list[i];
  return child_ctx;
}
function get_each_context_5(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[23] = list[i];
  return child_ctx;
}
function get_each_context_6(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[22] = list[i];
  return child_ctx;
}
function get_each_context_7(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[21] = list[i];
  return child_ctx;
}
function get_each_context_8(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[20] = list[i];
  return child_ctx;
}
function get_each_context_9(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[19] = list[i];
  return child_ctx;
}
function get_each_context_10(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  return child_ctx;
}
function get_each_context_11(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[17] = list[i];
  return child_ctx;
}
function get_each_context_12(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[58] = list[i];
  return child_ctx;
}
function get_each_context_13(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[61] = list[i];
  return child_ctx;
}
function get_each_context_14(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[64] = list[i];
  return child_ctx;
}
function create_else_block_7(ctx) {
  let p;
  let t_value = (
    /*error*/
    ctx[2].message + ""
  );
  let t;
  return {
    c() {
      p = element("p");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { style: true });
      var p_nodes = children(p);
      t = claim_text(p_nodes, t_value);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(p, "color", "red");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*error*/
      4 && t_value !== (t_value = /*error*/
      ctx2[2].message + ""))
        set_data(t, t_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_1(ctx) {
  let p;
  let t0;
  let a0;
  let t1;
  let t2;
  let a1;
  let t3;
  let t4;
  let br;
  let a2;
  let t5;
  let t6;
  let a3;
  let t7;
  let t8;
  let a4;
  let t9;
  let t10;
  let a5;
  let t11;
  let t12;
  let a6;
  let t13;
  let t14;
  let a7;
  let t15;
  let t16;
  let a8;
  let t17;
  let t18;
  let a9;
  let t19;
  let t20;
  let a10;
  let t21;
  let t22;
  let a11;
  let t23;
  let t24;
  let a12;
  let t25;
  let t26;
  let a13;
  let t27;
  let t28;
  let t29;
  let hr0;
  let t30;
  let input;
  let t31;
  let script0;
  let t32;
  let t33;
  let script1;
  let script1_src_value;
  let t34;
  let table0;
  let thead0;
  let tr;
  let th0;
  let t35;
  let t36;
  let th1;
  let t37;
  let t38;
  let th2;
  let t39;
  let t40;
  let th3;
  let t41;
  let t42;
  let th4;
  let t43;
  let t44;
  let th5;
  let t45;
  let t46;
  let th6;
  let t47;
  let t48;
  let th7;
  let t49;
  let t50;
  let th8;
  let t51;
  let t52;
  let th9;
  let t53;
  let t54;
  let th10;
  let t55;
  let t56;
  let th11;
  let t57;
  let t58;
  let th12;
  let t59;
  let t60;
  let th13;
  let t61;
  let t62;
  let th14;
  let t63;
  let t64;
  let th15;
  let t65;
  let t66;
  let tbody0;
  let each_blocks_14 = [];
  let each0_lookup = /* @__PURE__ */ new Map();
  let t67;
  let hr1;
  let t68;
  let div0;
  let table1;
  let caption0;
  let t69;
  let t70;
  let thead1;
  let th16;
  let t71;
  let t72;
  let th17;
  let t73;
  let t74;
  let th18;
  let t75;
  let t76;
  let th19;
  let t77;
  let t78;
  let tbody1;
  let each_blocks_13 = [];
  let each1_lookup = /* @__PURE__ */ new Map();
  let t79;
  let table2;
  let caption1;
  let t80;
  let t81;
  let thead2;
  let th20;
  let t82;
  let t83;
  let th21;
  let t84;
  let t85;
  let th22;
  let t86;
  let t87;
  let th23;
  let t88;
  let t89;
  let tbody2;
  let each_blocks_12 = [];
  let each2_lookup = /* @__PURE__ */ new Map();
  let t90;
  let hr2;
  let t91;
  let div1;
  let table3;
  let caption2;
  let t92;
  let t93;
  let thead3;
  let th24;
  let t94;
  let t95;
  let th25;
  let t96;
  let t97;
  let th26;
  let t98;
  let t99;
  let th27;
  let t100;
  let t101;
  let tbody3;
  let each_blocks_11 = [];
  let each3_lookup = /* @__PURE__ */ new Map();
  let t102;
  let table4;
  let caption3;
  let t103;
  let t104;
  let thead4;
  let th28;
  let t105;
  let t106;
  let th29;
  let t107;
  let t108;
  let th30;
  let t109;
  let t110;
  let th31;
  let t111;
  let t112;
  let tbody4;
  let each_blocks_10 = [];
  let each4_lookup = /* @__PURE__ */ new Map();
  let t113;
  let table5;
  let caption4;
  let t114;
  let t115;
  let thead5;
  let th32;
  let t116;
  let t117;
  let th33;
  let t118;
  let t119;
  let th34;
  let t120;
  let t121;
  let th35;
  let t122;
  let t123;
  let tbody5;
  let each_blocks_9 = [];
  let each5_lookup = /* @__PURE__ */ new Map();
  let t124;
  let table6;
  let caption5;
  let t125;
  let t126;
  let thead6;
  let th36;
  let t127;
  let t128;
  let th37;
  let t129;
  let t130;
  let th38;
  let t131;
  let t132;
  let th39;
  let t133;
  let t134;
  let tbody6;
  let each_blocks_8 = [];
  let each6_lookup = /* @__PURE__ */ new Map();
  let t135;
  let hr3;
  let t136;
  let div2;
  let table7;
  let caption6;
  let t137;
  let t138;
  let thead7;
  let th40;
  let t139;
  let t140;
  let th41;
  let t141;
  let t142;
  let th42;
  let t143;
  let t144;
  let th43;
  let t145;
  let t146;
  let tbody7;
  let each_blocks_7 = [];
  let each7_lookup = /* @__PURE__ */ new Map();
  let t147;
  let table8;
  let caption7;
  let t148;
  let t149;
  let thead8;
  let th44;
  let t150;
  let t151;
  let th45;
  let t152;
  let t153;
  let th46;
  let t154;
  let t155;
  let th47;
  let t156;
  let t157;
  let tbody8;
  let each_blocks_6 = [];
  let each8_lookup = /* @__PURE__ */ new Map();
  let t158;
  let table9;
  let caption8;
  let t159;
  let t160;
  let thead9;
  let th48;
  let t161;
  let t162;
  let th49;
  let t163;
  let t164;
  let th50;
  let t165;
  let t166;
  let th51;
  let t167;
  let t168;
  let tbody9;
  let each_blocks_5 = [];
  let each9_lookup = /* @__PURE__ */ new Map();
  let t169;
  let table10;
  let caption9;
  let t170;
  let t171;
  let thead10;
  let th52;
  let t172;
  let t173;
  let th53;
  let t174;
  let t175;
  let th54;
  let t176;
  let t177;
  let th55;
  let t178;
  let t179;
  let tbody10;
  let each_blocks_4 = [];
  let each10_lookup = /* @__PURE__ */ new Map();
  let t180;
  let hr4;
  let t181;
  let div3;
  let table11;
  let caption10;
  let t182;
  let t183;
  let thead11;
  let th56;
  let t184;
  let t185;
  let th57;
  let t186;
  let t187;
  let th58;
  let t188;
  let t189;
  let th59;
  let t190;
  let t191;
  let tbody11;
  let each_blocks_3 = [];
  let each11_lookup = /* @__PURE__ */ new Map();
  let t192;
  let table12;
  let caption11;
  let t193;
  let t194;
  let thead12;
  let th60;
  let t195;
  let t196;
  let th61;
  let t197;
  let t198;
  let th62;
  let t199;
  let t200;
  let th63;
  let t201;
  let t202;
  let tbody12;
  let each_blocks_2 = [];
  let each12_lookup = /* @__PURE__ */ new Map();
  let t203;
  let table13;
  let caption12;
  let t204;
  let t205;
  let thead13;
  let th64;
  let t206;
  let t207;
  let th65;
  let t208;
  let t209;
  let th66;
  let t210;
  let t211;
  let th67;
  let t212;
  let t213;
  let tbody13;
  let each_blocks_1 = [];
  let each13_lookup = /* @__PURE__ */ new Map();
  let t214;
  let table14;
  let caption13;
  let t215;
  let t216;
  let thead14;
  let th68;
  let t217;
  let t218;
  let th69;
  let t219;
  let t220;
  let th70;
  let t221;
  let t222;
  let th71;
  let t223;
  let t224;
  let tbody14;
  let each_blocks = [];
  let each14_lookup = /* @__PURE__ */ new Map();
  let t225;
  let hr5;
  let t226;
  let a14;
  let t227;
  let t228;
  let script2;
  let t229;
  let each_value_14 = (
    /*list*/
    ctx[1]
  );
  const get_key = (ctx2) => (
    /*rekidai*/
    ctx2[64].music
  );
  for (let i = 0; i < each_value_14.length; i += 1) {
    let child_ctx = get_each_context_14(ctx, each_value_14, i);
    let key = get_key(child_ctx);
    each0_lookup.set(key, each_blocks_14[i] = create_each_block_14(key, child_ctx));
  }
  let each_value_13 = (
    /*topRankersSort*/
    ctx[3]
  );
  const get_key_1 = (ctx2) => (
    /*topRanker*/
    ctx2[61].player
  );
  for (let i = 0; i < each_value_13.length; i += 1) {
    let child_ctx = get_each_context_13(ctx, each_value_13, i);
    let key = get_key_1(child_ctx);
    each1_lookup.set(key, each_blocks_13[i] = create_each_block_13(key, child_ctx));
  }
  let each_value_12 = (
    /*topVersionsSort*/
    ctx[4]
  );
  const get_key_2 = (ctx2) => (
    /*topVersion*/
    ctx2[58].version
  );
  for (let i = 0; i < each_value_12.length; i += 1) {
    let child_ctx = get_each_context_12(ctx, each_value_12, i);
    let key = get_key_2(child_ctx);
    each2_lookup.set(key, each_blocks_12[i] = create_each_block_12(key, child_ctx));
  }
  let each_value_11 = (
    /*topChargeSort*/
    ctx[5]
  );
  const get_key_3 = (ctx2) => (
    /*topCharge*/
    ctx2[17].player
  );
  for (let i = 0; i < each_value_11.length; i += 1) {
    let child_ctx = get_each_context_11(ctx, each_value_11, i);
    let key = get_key_3(child_ctx);
    each3_lookup.set(key, each_blocks_11[i] = create_each_block_11(key, child_ctx));
  }
  let each_value_10 = (
    /*topPeakSort*/
    ctx[6]
  );
  const get_key_4 = (ctx2) => (
    /*topPeak*/
    ctx2[18].player
  );
  for (let i = 0; i < each_value_10.length; i += 1) {
    let child_ctx = get_each_context_10(ctx, each_value_10, i);
    let key = get_key_4(child_ctx);
    each4_lookup.set(key, each_blocks_10[i] = create_each_block_10(key, child_ctx));
  }
  let each_value_9 = (
    /*topScratchSort*/
    ctx[7]
  );
  const get_key_5 = (ctx2) => (
    /*topScratch*/
    ctx2[19].player
  );
  for (let i = 0; i < each_value_9.length; i += 1) {
    let child_ctx = get_each_context_9(ctx, each_value_9, i);
    let key = get_key_5(child_ctx);
    each5_lookup.set(key, each_blocks_9[i] = create_each_block_9(key, child_ctx));
  }
  let each_value_8 = (
    /*topSoflanSort*/
    ctx[8]
  );
  const get_key_6 = (ctx2) => (
    /*topSoflan*/
    ctx2[20].player
  );
  for (let i = 0; i < each_value_8.length; i += 1) {
    let child_ctx = get_each_context_8(ctx, each_value_8, i);
    let key = get_key_6(child_ctx);
    each6_lookup.set(key, each_blocks_8[i] = create_each_block_8(key, child_ctx));
  }
  let each_value_7 = (
    /*topSuperChargeSort*/
    ctx[9]
  );
  const get_key_7 = (ctx2) => (
    /*topSuperCharge*/
    ctx2[21].player
  );
  for (let i = 0; i < each_value_7.length; i += 1) {
    let child_ctx = get_each_context_7(ctx, each_value_7, i);
    let key = get_key_7(child_ctx);
    each7_lookup.set(key, each_blocks_7[i] = create_each_block_7(key, child_ctx));
  }
  let each_value_6 = (
    /*topSuperPeakSort*/
    ctx[10]
  );
  const get_key_8 = (ctx2) => (
    /*topSuperPeak*/
    ctx2[22].player
  );
  for (let i = 0; i < each_value_6.length; i += 1) {
    let child_ctx = get_each_context_6(ctx, each_value_6, i);
    let key = get_key_8(child_ctx);
    each8_lookup.set(key, each_blocks_6[i] = create_each_block_6(key, child_ctx));
  }
  let each_value_5 = (
    /*topSuperScratchSort*/
    ctx[11]
  );
  const get_key_9 = (ctx2) => (
    /*topSuperScratch*/
    ctx2[23].player
  );
  for (let i = 0; i < each_value_5.length; i += 1) {
    let child_ctx = get_each_context_5(ctx, each_value_5, i);
    let key = get_key_9(child_ctx);
    each9_lookup.set(key, each_blocks_5[i] = create_each_block_5(key, child_ctx));
  }
  let each_value_4 = (
    /*topSuperSoflanSort*/
    ctx[12]
  );
  const get_key_10 = (ctx2) => (
    /*topSuperSoflan*/
    ctx2[24].player
  );
  for (let i = 0; i < each_value_4.length; i += 1) {
    let child_ctx = get_each_context_4(ctx, each_value_4, i);
    let key = get_key_10(child_ctx);
    each10_lookup.set(key, each_blocks_4[i] = create_each_block_4(key, child_ctx));
  }
  let each_value_3 = (
    /*topSlowSort*/
    ctx[13]
  );
  const get_key_11 = (ctx2) => (
    /*topSlow*/
    ctx2[25].player
  );
  for (let i = 0; i < each_value_3.length; i += 1) {
    let child_ctx = get_each_context_3(ctx, each_value_3, i);
    let key = get_key_11(child_ctx);
    each11_lookup.set(key, each_blocks_3[i] = create_each_block_3(key, child_ctx));
  }
  let each_value_2 = (
    /*topMidSort*/
    ctx[14]
  );
  const get_key_12 = (ctx2) => (
    /*topMid*/
    ctx2[26].player
  );
  for (let i = 0; i < each_value_2.length; i += 1) {
    let child_ctx = get_each_context_2(ctx, each_value_2, i);
    let key = get_key_12(child_ctx);
    each12_lookup.set(key, each_blocks_2[i] = create_each_block_2(key, child_ctx));
  }
  let each_value_1 = (
    /*topFastSort*/
    ctx[15]
  );
  const get_key_13 = (ctx2) => (
    /*topFast*/
    ctx2[27].player
  );
  for (let i = 0; i < each_value_1.length; i += 1) {
    let child_ctx = get_each_context_1(ctx, each_value_1, i);
    let key = get_key_13(child_ctx);
    each13_lookup.set(key, each_blocks_1[i] = create_each_block_1(key, child_ctx));
  }
  let each_value = (
    /*topSuperFastSort*/
    ctx[16]
  );
  const get_key_14 = (ctx2) => (
    /*topSuperFast*/
    ctx2[28].player
  );
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key_14(child_ctx);
    each14_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
  return {
    c() {
      p = element("p");
      t0 = text("If you want to update rekidai data, please fork ");
      a0 = element("a");
      t1 = text("https://github.com/rekidai-info/rekidai-info.github.io");
      t2 = text(", edit ");
      a1 = element("a");
      t3 = text("rekidai.json");
      t4 = text(", and submit a Pull Request. No CLI tools are required; everything can be done in the browser.");
      br = element("br");
      a2 = element("a");
      t5 = text("Rank");
      t6 = text(" / ");
      a3 = element("a");
      t7 = text("KKM*");
      t8 = text("(");
      a4 = element("a");
      t9 = text("Donate");
      t10 = text(") / ");
      a5 = element("a");
      t11 = text("CHEPY");
      t12 = text("(");
      a6 = element("a");
      t13 = text("Donate");
      t14 = text(") / ");
      a7 = element("a");
      t15 = text("DON*");
      t16 = text("(");
      a8 = element("a");
      t17 = text("Donate1");
      t18 = text(",  ");
      a9 = element("a");
      t19 = text("Donate2");
      t20 = text(") / ");
      a10 = element("a");
      t21 = text("CHARM");
      t22 = text("(");
      a11 = element("a");
      t23 = text("Donate");
      t24 = text(") / ");
      a12 = element("a");
      t25 = text("Developer");
      t26 = text("(");
      a13 = element("a");
      t27 = text("Donate");
      t28 = text(")");
      t29 = space();
      hr0 = element("hr");
      t30 = space();
      input = element("input");
      t31 = space();
      script0 = element("script");
      t32 = text('const input = document.getElementById("search");\nif (input != null) {\n  const search = () => {\n    const table = document.getElementById("rekidai");\n    if (table == null) {\n      return;\n    }\n    const rows = table.getElementsByTagName("tr");\n    Array.prototype.forEach.call(rows, (row, i) => {\n      if (i <= 0) {\n        return;\n      }\n      const textContent = row.textContent;\n      if (textContent.toUpperCase().indexOf(input.value.toUpperCase()) < 0) {\n        row.style.display = "none";\n      } else {\n        row.style.display = "";\n      }\n    });\n  };\n  input.addEventListener("keypress", (e) => {\n    if (e.keyCode === 13) {\n      search();\n    }\n  });\n}');
      t33 = space();
      script1 = element("script");
      t34 = space();
      table0 = element("table");
      thead0 = element("thead");
      tr = element("tr");
      th0 = element("th");
      t35 = text("Music");
      t36 = space();
      th1 = element("th");
      t37 = text("Score");
      t38 = space();
      th2 = element("th");
      t39 = text("Record");
      t40 = space();
      th3 = element("th");
      t41 = text("Player");
      t42 = space();
      th4 = element("th");
      t43 = text("Rate");
      t44 = space();
      th5 = element("th");
      t45 = text("Rate Plus");
      t46 = space();
      th6 = element("th");
      t47 = text("Rate Minus");
      t48 = space();
      th7 = element("th");
      t49 = text("Notes");
      t50 = space();
      th8 = element("th");
      t51 = text("BPM");
      t52 = space();
      th9 = element("th");
      t53 = text("Top Ver");
      t54 = space();
      th10 = element("th");
      t55 = text("Charge");
      t56 = space();
      th11 = element("th");
      t57 = text("Peak");
      t58 = space();
      th12 = element("th");
      t59 = text("Scratch");
      t60 = space();
      th13 = element("th");
      t61 = text("Sof-Lan");
      t62 = space();
      th14 = element("th");
      t63 = text("Version");
      t64 = space();
      th15 = element("th");
      t65 = text("Date");
      t66 = space();
      tbody0 = element("tbody");
      for (let i = 0; i < each_blocks_14.length; i += 1) {
        each_blocks_14[i].c();
      }
      t67 = space();
      hr1 = element("hr");
      t68 = space();
      div0 = element("div");
      table1 = element("table");
      caption0 = element("caption");
      t69 = text("Top Ranker");
      t70 = space();
      thead1 = element("thead");
      th16 = element("th");
      t71 = text("Rank");
      t72 = space();
      th17 = element("th");
      t73 = text("Player");
      t74 = space();
      th18 = element("th");
      t75 = text("Count");
      t76 = space();
      th19 = element("th");
      t77 = text("Percentage");
      t78 = space();
      tbody1 = element("tbody");
      for (let i = 0; i < each_blocks_13.length; i += 1) {
        each_blocks_13[i].c();
      }
      t79 = space();
      table2 = element("table");
      caption1 = element("caption");
      t80 = text("Top Version");
      t81 = space();
      thead2 = element("thead");
      th20 = element("th");
      t82 = text("Rank");
      t83 = space();
      th21 = element("th");
      t84 = text("Version");
      t85 = space();
      th22 = element("th");
      t86 = text("Count");
      t87 = space();
      th23 = element("th");
      t88 = text("Percentage");
      t89 = space();
      tbody2 = element("tbody");
      for (let i = 0; i < each_blocks_12.length; i += 1) {
        each_blocks_12[i].c();
      }
      t90 = space();
      hr2 = element("hr");
      t91 = space();
      div1 = element("div");
      table3 = element("table");
      caption2 = element("caption");
      t92 = text("Top Charge");
      t93 = space();
      thead3 = element("thead");
      th24 = element("th");
      t94 = text("Rank");
      t95 = space();
      th25 = element("th");
      t96 = text("Player");
      t97 = space();
      th26 = element("th");
      t98 = text("Count");
      t99 = space();
      th27 = element("th");
      t100 = text("Percentage");
      t101 = space();
      tbody3 = element("tbody");
      for (let i = 0; i < each_blocks_11.length; i += 1) {
        each_blocks_11[i].c();
      }
      t102 = space();
      table4 = element("table");
      caption3 = element("caption");
      t103 = text("Top Peak");
      t104 = space();
      thead4 = element("thead");
      th28 = element("th");
      t105 = text("Rank");
      t106 = space();
      th29 = element("th");
      t107 = text("Player");
      t108 = space();
      th30 = element("th");
      t109 = text("Count");
      t110 = space();
      th31 = element("th");
      t111 = text("Percentage");
      t112 = space();
      tbody4 = element("tbody");
      for (let i = 0; i < each_blocks_10.length; i += 1) {
        each_blocks_10[i].c();
      }
      t113 = space();
      table5 = element("table");
      caption4 = element("caption");
      t114 = text("Top Scratch");
      t115 = space();
      thead5 = element("thead");
      th32 = element("th");
      t116 = text("Rank");
      t117 = space();
      th33 = element("th");
      t118 = text("Player");
      t119 = space();
      th34 = element("th");
      t120 = text("Count");
      t121 = space();
      th35 = element("th");
      t122 = text("Percentage");
      t123 = space();
      tbody5 = element("tbody");
      for (let i = 0; i < each_blocks_9.length; i += 1) {
        each_blocks_9[i].c();
      }
      t124 = space();
      table6 = element("table");
      caption5 = element("caption");
      t125 = text("Top Sof-Lan");
      t126 = space();
      thead6 = element("thead");
      th36 = element("th");
      t127 = text("Rank");
      t128 = space();
      th37 = element("th");
      t129 = text("Player");
      t130 = space();
      th38 = element("th");
      t131 = text("Count");
      t132 = space();
      th39 = element("th");
      t133 = text("Percentage");
      t134 = space();
      tbody6 = element("tbody");
      for (let i = 0; i < each_blocks_8.length; i += 1) {
        each_blocks_8[i].c();
      }
      t135 = space();
      hr3 = element("hr");
      t136 = space();
      div2 = element("div");
      table7 = element("table");
      caption6 = element("caption");
      t137 = text("Top Super Charge");
      t138 = space();
      thead7 = element("thead");
      th40 = element("th");
      t139 = text("Rank");
      t140 = space();
      th41 = element("th");
      t141 = text("Player");
      t142 = space();
      th42 = element("th");
      t143 = text("Count");
      t144 = space();
      th43 = element("th");
      t145 = text("Percentage");
      t146 = space();
      tbody7 = element("tbody");
      for (let i = 0; i < each_blocks_7.length; i += 1) {
        each_blocks_7[i].c();
      }
      t147 = space();
      table8 = element("table");
      caption7 = element("caption");
      t148 = text("Top Super Peak");
      t149 = space();
      thead8 = element("thead");
      th44 = element("th");
      t150 = text("Rank");
      t151 = space();
      th45 = element("th");
      t152 = text("Player");
      t153 = space();
      th46 = element("th");
      t154 = text("Count");
      t155 = space();
      th47 = element("th");
      t156 = text("Percentage");
      t157 = space();
      tbody8 = element("tbody");
      for (let i = 0; i < each_blocks_6.length; i += 1) {
        each_blocks_6[i].c();
      }
      t158 = space();
      table9 = element("table");
      caption8 = element("caption");
      t159 = text("Top Super Scratch");
      t160 = space();
      thead9 = element("thead");
      th48 = element("th");
      t161 = text("Rank");
      t162 = space();
      th49 = element("th");
      t163 = text("Player");
      t164 = space();
      th50 = element("th");
      t165 = text("Count");
      t166 = space();
      th51 = element("th");
      t167 = text("Percentage");
      t168 = space();
      tbody9 = element("tbody");
      for (let i = 0; i < each_blocks_5.length; i += 1) {
        each_blocks_5[i].c();
      }
      t169 = space();
      table10 = element("table");
      caption9 = element("caption");
      t170 = text("Top Super Sof-Lan");
      t171 = space();
      thead10 = element("thead");
      th52 = element("th");
      t172 = text("Rank");
      t173 = space();
      th53 = element("th");
      t174 = text("Player");
      t175 = space();
      th54 = element("th");
      t176 = text("Count");
      t177 = space();
      th55 = element("th");
      t178 = text("Percentage");
      t179 = space();
      tbody10 = element("tbody");
      for (let i = 0; i < each_blocks_4.length; i += 1) {
        each_blocks_4[i].c();
      }
      t180 = space();
      hr4 = element("hr");
      t181 = space();
      div3 = element("div");
      table11 = element("table");
      caption10 = element("caption");
      t182 = text("Top BPM[0, 150)");
      t183 = space();
      thead11 = element("thead");
      th56 = element("th");
      t184 = text("Rank");
      t185 = space();
      th57 = element("th");
      t186 = text("Player");
      t187 = space();
      th58 = element("th");
      t188 = text("Count");
      t189 = space();
      th59 = element("th");
      t190 = text("Percentage");
      t191 = space();
      tbody11 = element("tbody");
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].c();
      }
      t192 = space();
      table12 = element("table");
      caption11 = element("caption");
      t193 = text("Top BPM[150, 170)");
      t194 = space();
      thead12 = element("thead");
      th60 = element("th");
      t195 = text("Rank");
      t196 = space();
      th61 = element("th");
      t197 = text("Player");
      t198 = space();
      th62 = element("th");
      t199 = text("Count");
      t200 = space();
      th63 = element("th");
      t201 = text("Percentage");
      t202 = space();
      tbody12 = element("tbody");
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].c();
      }
      t203 = space();
      table13 = element("table");
      caption12 = element("caption");
      t204 = text("Top BPM[170, 190)");
      t205 = space();
      thead13 = element("thead");
      th64 = element("th");
      t206 = text("Rank");
      t207 = space();
      th65 = element("th");
      t208 = text("Player");
      t209 = space();
      th66 = element("th");
      t210 = text("Count");
      t211 = space();
      th67 = element("th");
      t212 = text("Percentage");
      t213 = space();
      tbody13 = element("tbody");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t214 = space();
      table14 = element("table");
      caption13 = element("caption");
      t215 = text("Top BPM[190, 400]");
      t216 = space();
      thead14 = element("thead");
      th68 = element("th");
      t217 = text("Rank");
      t218 = space();
      th69 = element("th");
      t219 = text("Player");
      t220 = space();
      th70 = element("th");
      t221 = text("Count");
      t222 = space();
      th71 = element("th");
      t223 = text("Percentage");
      t224 = space();
      tbody14 = element("tbody");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t225 = space();
      hr5 = element("hr");
      t226 = space();
      a14 = element("a");
      t227 = text("Top");
      t228 = space();
      script2 = element("script");
      t229 = text('if (location.hash == "#top") {\n  document.querySelector("#top").scrollIntoView(true);\n} else if (location.hash == "#rekidai") {\n  document.querySelector("#rekidai").scrollIntoView(true);\n} else if (location.hash == "#rank") {\n  document.querySelector("#rank").scrollIntoView(true);\n} else if (location.hash == "#version") {\n  document.querySelector("#version").scrollIntoView(true);\n} else if (location.hash == "#charge") {\n  document.querySelector("#charge").scrollIntoView(true);\n} else if (location.hash == "#peak") {\n  document.querySelector("#peak").scrollIntoView(true);\n} else if (location.hash == "#scratch") {\n  document.querySelector("#scratch").scrollIntoView(true);\n} else if (location.hash == "#soflan") {\n  document.querySelector("#soflan").scrollIntoView(true);\n} else if (location.hash == "#super-charge") {\n  document.querySelector("#super-charge").scrollIntoView(true);\n} else if (location.hash == "#super-peak") {\n  document.querySelector("#super-peak").scrollIntoView(true);\n} else if (location.hash == "#super-scratch") {\n  document.querySelector("#super-scratch").scrollIntoView(true);\n} else if (location.hash == "#super-soflan") {\n  document.querySelector("#super-soflan").scrollIntoView(true);\n} else if (location.hash == "#slow") {\n  document.querySelector("#slow").scrollIntoView(true);\n} else if (location.hash == "#mid") {\n  document.querySelector("#mid").scrollIntoView(true);\n} else if (location.hash == "#fast") {\n  document.querySelector("#fast").scrollIntoView(true);\n} else if (location.hash == "#super-fast") {\n  document.querySelector("#super-fast").scrollIntoView(true);\n}');
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { id: true });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "If you want to update rekidai data, please fork ");
      a0 = claim_element(p_nodes, "A", { href: true, target: true, rel: true });
      var a0_nodes = children(a0);
      t1 = claim_text(a0_nodes, "https://github.com/rekidai-info/rekidai-info.github.io");
      a0_nodes.forEach(detach);
      t2 = claim_text(p_nodes, ", edit ");
      a1 = claim_element(p_nodes, "A", { href: true, target: true, rel: true });
      var a1_nodes = children(a1);
      t3 = claim_text(a1_nodes, "rekidai.json");
      a1_nodes.forEach(detach);
      t4 = claim_text(p_nodes, ", and submit a Pull Request. No CLI tools are required; everything can be done in the browser.");
      br = claim_element(p_nodes, "BR", {});
      a2 = claim_element(p_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t5 = claim_text(a2_nodes, "Rank");
      a2_nodes.forEach(detach);
      t6 = claim_text(p_nodes, " / ");
      a3 = claim_element(p_nodes, "A", { href: true, target: true, rel: true });
      var a3_nodes = children(a3);
      t7 = claim_text(a3_nodes, "KKM*");
      a3_nodes.forEach(detach);
      t8 = claim_text(p_nodes, "(");
      a4 = claim_element(p_nodes, "A", { href: true, target: true, rel: true });
      var a4_nodes = children(a4);
      t9 = claim_text(a4_nodes, "Donate");
      a4_nodes.forEach(detach);
      t10 = claim_text(p_nodes, ") / ");
      a5 = claim_element(p_nodes, "A", { href: true, target: true, rel: true });
      var a5_nodes = children(a5);
      t11 = claim_text(a5_nodes, "CHEPY");
      a5_nodes.forEach(detach);
      t12 = claim_text(p_nodes, "(");
      a6 = claim_element(p_nodes, "A", { href: true, target: true, rel: true });
      var a6_nodes = children(a6);
      t13 = claim_text(a6_nodes, "Donate");
      a6_nodes.forEach(detach);
      t14 = claim_text(p_nodes, ") / ");
      a7 = claim_element(p_nodes, "A", { href: true, target: true, rel: true });
      var a7_nodes = children(a7);
      t15 = claim_text(a7_nodes, "DON*");
      a7_nodes.forEach(detach);
      t16 = claim_text(p_nodes, "(");
      a8 = claim_element(p_nodes, "A", { href: true, target: true, rel: true });
      var a8_nodes = children(a8);
      t17 = claim_text(a8_nodes, "Donate1");
      a8_nodes.forEach(detach);
      t18 = claim_text(p_nodes, ",  ");
      a9 = claim_element(p_nodes, "A", { href: true, target: true, rel: true });
      var a9_nodes = children(a9);
      t19 = claim_text(a9_nodes, "Donate2");
      a9_nodes.forEach(detach);
      t20 = claim_text(p_nodes, ") / ");
      a10 = claim_element(p_nodes, "A", { href: true, target: true, rel: true });
      var a10_nodes = children(a10);
      t21 = claim_text(a10_nodes, "CHARM");
      a10_nodes.forEach(detach);
      t22 = claim_text(p_nodes, "(");
      a11 = claim_element(p_nodes, "A", { href: true, target: true, rel: true });
      var a11_nodes = children(a11);
      t23 = claim_text(a11_nodes, "Donate");
      a11_nodes.forEach(detach);
      t24 = claim_text(p_nodes, ") / ");
      a12 = claim_element(p_nodes, "A", { href: true, target: true, rel: true });
      var a12_nodes = children(a12);
      t25 = claim_text(a12_nodes, "Developer");
      a12_nodes.forEach(detach);
      t26 = claim_text(p_nodes, "(");
      a13 = claim_element(p_nodes, "A", { href: true, target: true, rel: true });
      var a13_nodes = children(a13);
      t27 = claim_text(a13_nodes, "Donate");
      a13_nodes.forEach(detach);
      t28 = claim_text(p_nodes, ")");
      p_nodes.forEach(detach);
      t29 = claim_space(nodes);
      hr0 = claim_element(nodes, "HR", {});
      t30 = claim_space(nodes);
      input = claim_element(nodes, "INPUT", {
        type: true,
        id: true,
        placeholder: true,
        style: true
      });
      t31 = claim_space(nodes);
      script0 = claim_element(nodes, "SCRIPT", { lang: true });
      var script0_nodes = children(script0);
      t32 = claim_text(script0_nodes, 'const input = document.getElementById("search");\nif (input != null) {\n  const search = () => {\n    const table = document.getElementById("rekidai");\n    if (table == null) {\n      return;\n    }\n    const rows = table.getElementsByTagName("tr");\n    Array.prototype.forEach.call(rows, (row, i) => {\n      if (i <= 0) {\n        return;\n      }\n      const textContent = row.textContent;\n      if (textContent.toUpperCase().indexOf(input.value.toUpperCase()) < 0) {\n        row.style.display = "none";\n      } else {\n        row.style.display = "";\n      }\n    });\n  };\n  input.addEventListener("keypress", (e) => {\n    if (e.keyCode === 13) {\n      search();\n    }\n  });\n}');
      script0_nodes.forEach(detach);
      t33 = claim_space(nodes);
      script1 = claim_element(nodes, "SCRIPT", { src: true });
      var script1_nodes = children(script1);
      script1_nodes.forEach(detach);
      t34 = claim_space(nodes);
      table0 = claim_element(nodes, "TABLE", { id: true, class: true });
      var table0_nodes = children(table0);
      thead0 = claim_element(table0_nodes, "THEAD", {});
      var thead0_nodes = children(thead0);
      tr = claim_element(thead0_nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      th0 = claim_element(tr_nodes, "TH", {});
      var th0_nodes = children(th0);
      t35 = claim_text(th0_nodes, "Music");
      th0_nodes.forEach(detach);
      t36 = claim_space(tr_nodes);
      th1 = claim_element(tr_nodes, "TH", { class: true });
      var th1_nodes = children(th1);
      t37 = claim_text(th1_nodes, "Score");
      th1_nodes.forEach(detach);
      t38 = claim_space(tr_nodes);
      th2 = claim_element(tr_nodes, "TH", { class: true });
      var th2_nodes = children(th2);
      t39 = claim_text(th2_nodes, "Record");
      th2_nodes.forEach(detach);
      t40 = claim_space(tr_nodes);
      th3 = claim_element(tr_nodes, "TH", {});
      var th3_nodes = children(th3);
      t41 = claim_text(th3_nodes, "Player");
      th3_nodes.forEach(detach);
      t42 = claim_space(tr_nodes);
      th4 = claim_element(tr_nodes, "TH", { class: true });
      var th4_nodes = children(th4);
      t43 = claim_text(th4_nodes, "Rate");
      th4_nodes.forEach(detach);
      t44 = claim_space(tr_nodes);
      th5 = claim_element(tr_nodes, "TH", { class: true });
      var th5_nodes = children(th5);
      t45 = claim_text(th5_nodes, "Rate Plus");
      th5_nodes.forEach(detach);
      t46 = claim_space(tr_nodes);
      th6 = claim_element(tr_nodes, "TH", { class: true });
      var th6_nodes = children(th6);
      t47 = claim_text(th6_nodes, "Rate Minus");
      th6_nodes.forEach(detach);
      t48 = claim_space(tr_nodes);
      th7 = claim_element(tr_nodes, "TH", { class: true });
      var th7_nodes = children(th7);
      t49 = claim_text(th7_nodes, "Notes");
      th7_nodes.forEach(detach);
      t50 = claim_space(tr_nodes);
      th8 = claim_element(tr_nodes, "TH", { class: true });
      var th8_nodes = children(th8);
      t51 = claim_text(th8_nodes, "BPM");
      th8_nodes.forEach(detach);
      t52 = claim_space(tr_nodes);
      th9 = claim_element(tr_nodes, "TH", {});
      var th9_nodes = children(th9);
      t53 = claim_text(th9_nodes, "Top Ver");
      th9_nodes.forEach(detach);
      t54 = claim_space(tr_nodes);
      th10 = claim_element(tr_nodes, "TH", {});
      var th10_nodes = children(th10);
      t55 = claim_text(th10_nodes, "Charge");
      th10_nodes.forEach(detach);
      t56 = claim_space(tr_nodes);
      th11 = claim_element(tr_nodes, "TH", {});
      var th11_nodes = children(th11);
      t57 = claim_text(th11_nodes, "Peak");
      th11_nodes.forEach(detach);
      t58 = claim_space(tr_nodes);
      th12 = claim_element(tr_nodes, "TH", {});
      var th12_nodes = children(th12);
      t59 = claim_text(th12_nodes, "Scratch");
      th12_nodes.forEach(detach);
      t60 = claim_space(tr_nodes);
      th13 = claim_element(tr_nodes, "TH", {});
      var th13_nodes = children(th13);
      t61 = claim_text(th13_nodes, "Sof-Lan");
      th13_nodes.forEach(detach);
      t62 = claim_space(tr_nodes);
      th14 = claim_element(tr_nodes, "TH", {});
      var th14_nodes = children(th14);
      t63 = claim_text(th14_nodes, "Version");
      th14_nodes.forEach(detach);
      t64 = claim_space(tr_nodes);
      th15 = claim_element(tr_nodes, "TH", {});
      var th15_nodes = children(th15);
      t65 = claim_text(th15_nodes, "Date");
      th15_nodes.forEach(detach);
      tr_nodes.forEach(detach);
      thead0_nodes.forEach(detach);
      t66 = claim_space(table0_nodes);
      tbody0 = claim_element(table0_nodes, "TBODY", {});
      var tbody0_nodes = children(tbody0);
      for (let i = 0; i < each_blocks_14.length; i += 1) {
        each_blocks_14[i].l(tbody0_nodes);
      }
      tbody0_nodes.forEach(detach);
      table0_nodes.forEach(detach);
      t67 = claim_space(nodes);
      hr1 = claim_element(nodes, "HR", {});
      t68 = claim_space(nodes);
      div0 = claim_element(nodes, "DIV", { style: true });
      var div0_nodes = children(div0);
      table1 = claim_element(div0_nodes, "TABLE", { id: true, class: true, style: true });
      var table1_nodes = children(table1);
      caption0 = claim_element(table1_nodes, "CAPTION", {});
      var caption0_nodes = children(caption0);
      t69 = claim_text(caption0_nodes, "Top Ranker");
      caption0_nodes.forEach(detach);
      t70 = claim_space(table1_nodes);
      thead1 = claim_element(table1_nodes, "THEAD", {});
      var thead1_nodes = children(thead1);
      th16 = claim_element(thead1_nodes, "TH", {});
      var th16_nodes = children(th16);
      t71 = claim_text(th16_nodes, "Rank");
      th16_nodes.forEach(detach);
      t72 = claim_space(thead1_nodes);
      th17 = claim_element(thead1_nodes, "TH", {});
      var th17_nodes = children(th17);
      t73 = claim_text(th17_nodes, "Player");
      th17_nodes.forEach(detach);
      t74 = claim_space(thead1_nodes);
      th18 = claim_element(thead1_nodes, "TH", {});
      var th18_nodes = children(th18);
      t75 = claim_text(th18_nodes, "Count");
      th18_nodes.forEach(detach);
      t76 = claim_space(thead1_nodes);
      th19 = claim_element(thead1_nodes, "TH", { class: true });
      var th19_nodes = children(th19);
      t77 = claim_text(th19_nodes, "Percentage");
      th19_nodes.forEach(detach);
      thead1_nodes.forEach(detach);
      t78 = claim_space(table1_nodes);
      tbody1 = claim_element(table1_nodes, "TBODY", {});
      var tbody1_nodes = children(tbody1);
      for (let i = 0; i < each_blocks_13.length; i += 1) {
        each_blocks_13[i].l(tbody1_nodes);
      }
      tbody1_nodes.forEach(detach);
      table1_nodes.forEach(detach);
      t79 = claim_space(div0_nodes);
      table2 = claim_element(div0_nodes, "TABLE", { id: true, class: true, style: true });
      var table2_nodes = children(table2);
      caption1 = claim_element(table2_nodes, "CAPTION", {});
      var caption1_nodes = children(caption1);
      t80 = claim_text(caption1_nodes, "Top Version");
      caption1_nodes.forEach(detach);
      t81 = claim_space(table2_nodes);
      thead2 = claim_element(table2_nodes, "THEAD", {});
      var thead2_nodes = children(thead2);
      th20 = claim_element(thead2_nodes, "TH", {});
      var th20_nodes = children(th20);
      t82 = claim_text(th20_nodes, "Rank");
      th20_nodes.forEach(detach);
      t83 = claim_space(thead2_nodes);
      th21 = claim_element(thead2_nodes, "TH", {});
      var th21_nodes = children(th21);
      t84 = claim_text(th21_nodes, "Version");
      th21_nodes.forEach(detach);
      t85 = claim_space(thead2_nodes);
      th22 = claim_element(thead2_nodes, "TH", {});
      var th22_nodes = children(th22);
      t86 = claim_text(th22_nodes, "Count");
      th22_nodes.forEach(detach);
      t87 = claim_space(thead2_nodes);
      th23 = claim_element(thead2_nodes, "TH", { class: true });
      var th23_nodes = children(th23);
      t88 = claim_text(th23_nodes, "Percentage");
      th23_nodes.forEach(detach);
      thead2_nodes.forEach(detach);
      t89 = claim_space(table2_nodes);
      tbody2 = claim_element(table2_nodes, "TBODY", {});
      var tbody2_nodes = children(tbody2);
      for (let i = 0; i < each_blocks_12.length; i += 1) {
        each_blocks_12[i].l(tbody2_nodes);
      }
      tbody2_nodes.forEach(detach);
      table2_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t90 = claim_space(nodes);
      hr2 = claim_element(nodes, "HR", { style: true });
      t91 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { style: true });
      var div1_nodes = children(div1);
      table3 = claim_element(div1_nodes, "TABLE", { id: true, class: true, style: true });
      var table3_nodes = children(table3);
      caption2 = claim_element(table3_nodes, "CAPTION", {});
      var caption2_nodes = children(caption2);
      t92 = claim_text(caption2_nodes, "Top Charge");
      caption2_nodes.forEach(detach);
      t93 = claim_space(table3_nodes);
      thead3 = claim_element(table3_nodes, "THEAD", {});
      var thead3_nodes = children(thead3);
      th24 = claim_element(thead3_nodes, "TH", {});
      var th24_nodes = children(th24);
      t94 = claim_text(th24_nodes, "Rank");
      th24_nodes.forEach(detach);
      t95 = claim_space(thead3_nodes);
      th25 = claim_element(thead3_nodes, "TH", {});
      var th25_nodes = children(th25);
      t96 = claim_text(th25_nodes, "Player");
      th25_nodes.forEach(detach);
      t97 = claim_space(thead3_nodes);
      th26 = claim_element(thead3_nodes, "TH", {});
      var th26_nodes = children(th26);
      t98 = claim_text(th26_nodes, "Count");
      th26_nodes.forEach(detach);
      t99 = claim_space(thead3_nodes);
      th27 = claim_element(thead3_nodes, "TH", { class: true });
      var th27_nodes = children(th27);
      t100 = claim_text(th27_nodes, "Percentage");
      th27_nodes.forEach(detach);
      thead3_nodes.forEach(detach);
      t101 = claim_space(table3_nodes);
      tbody3 = claim_element(table3_nodes, "TBODY", {});
      var tbody3_nodes = children(tbody3);
      for (let i = 0; i < each_blocks_11.length; i += 1) {
        each_blocks_11[i].l(tbody3_nodes);
      }
      tbody3_nodes.forEach(detach);
      table3_nodes.forEach(detach);
      t102 = claim_space(div1_nodes);
      table4 = claim_element(div1_nodes, "TABLE", { id: true, class: true, style: true });
      var table4_nodes = children(table4);
      caption3 = claim_element(table4_nodes, "CAPTION", {});
      var caption3_nodes = children(caption3);
      t103 = claim_text(caption3_nodes, "Top Peak");
      caption3_nodes.forEach(detach);
      t104 = claim_space(table4_nodes);
      thead4 = claim_element(table4_nodes, "THEAD", {});
      var thead4_nodes = children(thead4);
      th28 = claim_element(thead4_nodes, "TH", {});
      var th28_nodes = children(th28);
      t105 = claim_text(th28_nodes, "Rank");
      th28_nodes.forEach(detach);
      t106 = claim_space(thead4_nodes);
      th29 = claim_element(thead4_nodes, "TH", {});
      var th29_nodes = children(th29);
      t107 = claim_text(th29_nodes, "Player");
      th29_nodes.forEach(detach);
      t108 = claim_space(thead4_nodes);
      th30 = claim_element(thead4_nodes, "TH", {});
      var th30_nodes = children(th30);
      t109 = claim_text(th30_nodes, "Count");
      th30_nodes.forEach(detach);
      t110 = claim_space(thead4_nodes);
      th31 = claim_element(thead4_nodes, "TH", { class: true });
      var th31_nodes = children(th31);
      t111 = claim_text(th31_nodes, "Percentage");
      th31_nodes.forEach(detach);
      thead4_nodes.forEach(detach);
      t112 = claim_space(table4_nodes);
      tbody4 = claim_element(table4_nodes, "TBODY", {});
      var tbody4_nodes = children(tbody4);
      for (let i = 0; i < each_blocks_10.length; i += 1) {
        each_blocks_10[i].l(tbody4_nodes);
      }
      tbody4_nodes.forEach(detach);
      table4_nodes.forEach(detach);
      t113 = claim_space(div1_nodes);
      table5 = claim_element(div1_nodes, "TABLE", { id: true, class: true, style: true });
      var table5_nodes = children(table5);
      caption4 = claim_element(table5_nodes, "CAPTION", {});
      var caption4_nodes = children(caption4);
      t114 = claim_text(caption4_nodes, "Top Scratch");
      caption4_nodes.forEach(detach);
      t115 = claim_space(table5_nodes);
      thead5 = claim_element(table5_nodes, "THEAD", {});
      var thead5_nodes = children(thead5);
      th32 = claim_element(thead5_nodes, "TH", {});
      var th32_nodes = children(th32);
      t116 = claim_text(th32_nodes, "Rank");
      th32_nodes.forEach(detach);
      t117 = claim_space(thead5_nodes);
      th33 = claim_element(thead5_nodes, "TH", {});
      var th33_nodes = children(th33);
      t118 = claim_text(th33_nodes, "Player");
      th33_nodes.forEach(detach);
      t119 = claim_space(thead5_nodes);
      th34 = claim_element(thead5_nodes, "TH", {});
      var th34_nodes = children(th34);
      t120 = claim_text(th34_nodes, "Count");
      th34_nodes.forEach(detach);
      t121 = claim_space(thead5_nodes);
      th35 = claim_element(thead5_nodes, "TH", { class: true });
      var th35_nodes = children(th35);
      t122 = claim_text(th35_nodes, "Percentage");
      th35_nodes.forEach(detach);
      thead5_nodes.forEach(detach);
      t123 = claim_space(table5_nodes);
      tbody5 = claim_element(table5_nodes, "TBODY", {});
      var tbody5_nodes = children(tbody5);
      for (let i = 0; i < each_blocks_9.length; i += 1) {
        each_blocks_9[i].l(tbody5_nodes);
      }
      tbody5_nodes.forEach(detach);
      table5_nodes.forEach(detach);
      t124 = claim_space(div1_nodes);
      table6 = claim_element(div1_nodes, "TABLE", { id: true, class: true, style: true });
      var table6_nodes = children(table6);
      caption5 = claim_element(table6_nodes, "CAPTION", {});
      var caption5_nodes = children(caption5);
      t125 = claim_text(caption5_nodes, "Top Sof-Lan");
      caption5_nodes.forEach(detach);
      t126 = claim_space(table6_nodes);
      thead6 = claim_element(table6_nodes, "THEAD", {});
      var thead6_nodes = children(thead6);
      th36 = claim_element(thead6_nodes, "TH", {});
      var th36_nodes = children(th36);
      t127 = claim_text(th36_nodes, "Rank");
      th36_nodes.forEach(detach);
      t128 = claim_space(thead6_nodes);
      th37 = claim_element(thead6_nodes, "TH", {});
      var th37_nodes = children(th37);
      t129 = claim_text(th37_nodes, "Player");
      th37_nodes.forEach(detach);
      t130 = claim_space(thead6_nodes);
      th38 = claim_element(thead6_nodes, "TH", {});
      var th38_nodes = children(th38);
      t131 = claim_text(th38_nodes, "Count");
      th38_nodes.forEach(detach);
      t132 = claim_space(thead6_nodes);
      th39 = claim_element(thead6_nodes, "TH", { class: true });
      var th39_nodes = children(th39);
      t133 = claim_text(th39_nodes, "Percentage");
      th39_nodes.forEach(detach);
      thead6_nodes.forEach(detach);
      t134 = claim_space(table6_nodes);
      tbody6 = claim_element(table6_nodes, "TBODY", {});
      var tbody6_nodes = children(tbody6);
      for (let i = 0; i < each_blocks_8.length; i += 1) {
        each_blocks_8[i].l(tbody6_nodes);
      }
      tbody6_nodes.forEach(detach);
      table6_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t135 = claim_space(nodes);
      hr3 = claim_element(nodes, "HR", { style: true });
      t136 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", { style: true });
      var div2_nodes = children(div2);
      table7 = claim_element(div2_nodes, "TABLE", { id: true, class: true, style: true });
      var table7_nodes = children(table7);
      caption6 = claim_element(table7_nodes, "CAPTION", {});
      var caption6_nodes = children(caption6);
      t137 = claim_text(caption6_nodes, "Top Super Charge");
      caption6_nodes.forEach(detach);
      t138 = claim_space(table7_nodes);
      thead7 = claim_element(table7_nodes, "THEAD", {});
      var thead7_nodes = children(thead7);
      th40 = claim_element(thead7_nodes, "TH", {});
      var th40_nodes = children(th40);
      t139 = claim_text(th40_nodes, "Rank");
      th40_nodes.forEach(detach);
      t140 = claim_space(thead7_nodes);
      th41 = claim_element(thead7_nodes, "TH", {});
      var th41_nodes = children(th41);
      t141 = claim_text(th41_nodes, "Player");
      th41_nodes.forEach(detach);
      t142 = claim_space(thead7_nodes);
      th42 = claim_element(thead7_nodes, "TH", {});
      var th42_nodes = children(th42);
      t143 = claim_text(th42_nodes, "Count");
      th42_nodes.forEach(detach);
      t144 = claim_space(thead7_nodes);
      th43 = claim_element(thead7_nodes, "TH", { class: true });
      var th43_nodes = children(th43);
      t145 = claim_text(th43_nodes, "Percentage");
      th43_nodes.forEach(detach);
      thead7_nodes.forEach(detach);
      t146 = claim_space(table7_nodes);
      tbody7 = claim_element(table7_nodes, "TBODY", {});
      var tbody7_nodes = children(tbody7);
      for (let i = 0; i < each_blocks_7.length; i += 1) {
        each_blocks_7[i].l(tbody7_nodes);
      }
      tbody7_nodes.forEach(detach);
      table7_nodes.forEach(detach);
      t147 = claim_space(div2_nodes);
      table8 = claim_element(div2_nodes, "TABLE", { id: true, class: true, style: true });
      var table8_nodes = children(table8);
      caption7 = claim_element(table8_nodes, "CAPTION", {});
      var caption7_nodes = children(caption7);
      t148 = claim_text(caption7_nodes, "Top Super Peak");
      caption7_nodes.forEach(detach);
      t149 = claim_space(table8_nodes);
      thead8 = claim_element(table8_nodes, "THEAD", {});
      var thead8_nodes = children(thead8);
      th44 = claim_element(thead8_nodes, "TH", {});
      var th44_nodes = children(th44);
      t150 = claim_text(th44_nodes, "Rank");
      th44_nodes.forEach(detach);
      t151 = claim_space(thead8_nodes);
      th45 = claim_element(thead8_nodes, "TH", {});
      var th45_nodes = children(th45);
      t152 = claim_text(th45_nodes, "Player");
      th45_nodes.forEach(detach);
      t153 = claim_space(thead8_nodes);
      th46 = claim_element(thead8_nodes, "TH", {});
      var th46_nodes = children(th46);
      t154 = claim_text(th46_nodes, "Count");
      th46_nodes.forEach(detach);
      t155 = claim_space(thead8_nodes);
      th47 = claim_element(thead8_nodes, "TH", { class: true });
      var th47_nodes = children(th47);
      t156 = claim_text(th47_nodes, "Percentage");
      th47_nodes.forEach(detach);
      thead8_nodes.forEach(detach);
      t157 = claim_space(table8_nodes);
      tbody8 = claim_element(table8_nodes, "TBODY", {});
      var tbody8_nodes = children(tbody8);
      for (let i = 0; i < each_blocks_6.length; i += 1) {
        each_blocks_6[i].l(tbody8_nodes);
      }
      tbody8_nodes.forEach(detach);
      table8_nodes.forEach(detach);
      t158 = claim_space(div2_nodes);
      table9 = claim_element(div2_nodes, "TABLE", { id: true, class: true, style: true });
      var table9_nodes = children(table9);
      caption8 = claim_element(table9_nodes, "CAPTION", {});
      var caption8_nodes = children(caption8);
      t159 = claim_text(caption8_nodes, "Top Super Scratch");
      caption8_nodes.forEach(detach);
      t160 = claim_space(table9_nodes);
      thead9 = claim_element(table9_nodes, "THEAD", {});
      var thead9_nodes = children(thead9);
      th48 = claim_element(thead9_nodes, "TH", {});
      var th48_nodes = children(th48);
      t161 = claim_text(th48_nodes, "Rank");
      th48_nodes.forEach(detach);
      t162 = claim_space(thead9_nodes);
      th49 = claim_element(thead9_nodes, "TH", {});
      var th49_nodes = children(th49);
      t163 = claim_text(th49_nodes, "Player");
      th49_nodes.forEach(detach);
      t164 = claim_space(thead9_nodes);
      th50 = claim_element(thead9_nodes, "TH", {});
      var th50_nodes = children(th50);
      t165 = claim_text(th50_nodes, "Count");
      th50_nodes.forEach(detach);
      t166 = claim_space(thead9_nodes);
      th51 = claim_element(thead9_nodes, "TH", { class: true });
      var th51_nodes = children(th51);
      t167 = claim_text(th51_nodes, "Percentage");
      th51_nodes.forEach(detach);
      thead9_nodes.forEach(detach);
      t168 = claim_space(table9_nodes);
      tbody9 = claim_element(table9_nodes, "TBODY", {});
      var tbody9_nodes = children(tbody9);
      for (let i = 0; i < each_blocks_5.length; i += 1) {
        each_blocks_5[i].l(tbody9_nodes);
      }
      tbody9_nodes.forEach(detach);
      table9_nodes.forEach(detach);
      t169 = claim_space(div2_nodes);
      table10 = claim_element(div2_nodes, "TABLE", { id: true, class: true, style: true });
      var table10_nodes = children(table10);
      caption9 = claim_element(table10_nodes, "CAPTION", {});
      var caption9_nodes = children(caption9);
      t170 = claim_text(caption9_nodes, "Top Super Sof-Lan");
      caption9_nodes.forEach(detach);
      t171 = claim_space(table10_nodes);
      thead10 = claim_element(table10_nodes, "THEAD", {});
      var thead10_nodes = children(thead10);
      th52 = claim_element(thead10_nodes, "TH", {});
      var th52_nodes = children(th52);
      t172 = claim_text(th52_nodes, "Rank");
      th52_nodes.forEach(detach);
      t173 = claim_space(thead10_nodes);
      th53 = claim_element(thead10_nodes, "TH", {});
      var th53_nodes = children(th53);
      t174 = claim_text(th53_nodes, "Player");
      th53_nodes.forEach(detach);
      t175 = claim_space(thead10_nodes);
      th54 = claim_element(thead10_nodes, "TH", {});
      var th54_nodes = children(th54);
      t176 = claim_text(th54_nodes, "Count");
      th54_nodes.forEach(detach);
      t177 = claim_space(thead10_nodes);
      th55 = claim_element(thead10_nodes, "TH", { class: true });
      var th55_nodes = children(th55);
      t178 = claim_text(th55_nodes, "Percentage");
      th55_nodes.forEach(detach);
      thead10_nodes.forEach(detach);
      t179 = claim_space(table10_nodes);
      tbody10 = claim_element(table10_nodes, "TBODY", {});
      var tbody10_nodes = children(tbody10);
      for (let i = 0; i < each_blocks_4.length; i += 1) {
        each_blocks_4[i].l(tbody10_nodes);
      }
      tbody10_nodes.forEach(detach);
      table10_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t180 = claim_space(nodes);
      hr4 = claim_element(nodes, "HR", { style: true });
      t181 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", { style: true });
      var div3_nodes = children(div3);
      table11 = claim_element(div3_nodes, "TABLE", { id: true, class: true, style: true });
      var table11_nodes = children(table11);
      caption10 = claim_element(table11_nodes, "CAPTION", {});
      var caption10_nodes = children(caption10);
      t182 = claim_text(caption10_nodes, "Top BPM[0, 150)");
      caption10_nodes.forEach(detach);
      t183 = claim_space(table11_nodes);
      thead11 = claim_element(table11_nodes, "THEAD", {});
      var thead11_nodes = children(thead11);
      th56 = claim_element(thead11_nodes, "TH", {});
      var th56_nodes = children(th56);
      t184 = claim_text(th56_nodes, "Rank");
      th56_nodes.forEach(detach);
      t185 = claim_space(thead11_nodes);
      th57 = claim_element(thead11_nodes, "TH", {});
      var th57_nodes = children(th57);
      t186 = claim_text(th57_nodes, "Player");
      th57_nodes.forEach(detach);
      t187 = claim_space(thead11_nodes);
      th58 = claim_element(thead11_nodes, "TH", {});
      var th58_nodes = children(th58);
      t188 = claim_text(th58_nodes, "Count");
      th58_nodes.forEach(detach);
      t189 = claim_space(thead11_nodes);
      th59 = claim_element(thead11_nodes, "TH", { class: true });
      var th59_nodes = children(th59);
      t190 = claim_text(th59_nodes, "Percentage");
      th59_nodes.forEach(detach);
      thead11_nodes.forEach(detach);
      t191 = claim_space(table11_nodes);
      tbody11 = claim_element(table11_nodes, "TBODY", {});
      var tbody11_nodes = children(tbody11);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].l(tbody11_nodes);
      }
      tbody11_nodes.forEach(detach);
      table11_nodes.forEach(detach);
      t192 = claim_space(div3_nodes);
      table12 = claim_element(div3_nodes, "TABLE", { id: true, class: true, style: true });
      var table12_nodes = children(table12);
      caption11 = claim_element(table12_nodes, "CAPTION", {});
      var caption11_nodes = children(caption11);
      t193 = claim_text(caption11_nodes, "Top BPM[150, 170)");
      caption11_nodes.forEach(detach);
      t194 = claim_space(table12_nodes);
      thead12 = claim_element(table12_nodes, "THEAD", {});
      var thead12_nodes = children(thead12);
      th60 = claim_element(thead12_nodes, "TH", {});
      var th60_nodes = children(th60);
      t195 = claim_text(th60_nodes, "Rank");
      th60_nodes.forEach(detach);
      t196 = claim_space(thead12_nodes);
      th61 = claim_element(thead12_nodes, "TH", {});
      var th61_nodes = children(th61);
      t197 = claim_text(th61_nodes, "Player");
      th61_nodes.forEach(detach);
      t198 = claim_space(thead12_nodes);
      th62 = claim_element(thead12_nodes, "TH", {});
      var th62_nodes = children(th62);
      t199 = claim_text(th62_nodes, "Count");
      th62_nodes.forEach(detach);
      t200 = claim_space(thead12_nodes);
      th63 = claim_element(thead12_nodes, "TH", { class: true });
      var th63_nodes = children(th63);
      t201 = claim_text(th63_nodes, "Percentage");
      th63_nodes.forEach(detach);
      thead12_nodes.forEach(detach);
      t202 = claim_space(table12_nodes);
      tbody12 = claim_element(table12_nodes, "TBODY", {});
      var tbody12_nodes = children(tbody12);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].l(tbody12_nodes);
      }
      tbody12_nodes.forEach(detach);
      table12_nodes.forEach(detach);
      t203 = claim_space(div3_nodes);
      table13 = claim_element(div3_nodes, "TABLE", { id: true, class: true, style: true });
      var table13_nodes = children(table13);
      caption12 = claim_element(table13_nodes, "CAPTION", {});
      var caption12_nodes = children(caption12);
      t204 = claim_text(caption12_nodes, "Top BPM[170, 190)");
      caption12_nodes.forEach(detach);
      t205 = claim_space(table13_nodes);
      thead13 = claim_element(table13_nodes, "THEAD", {});
      var thead13_nodes = children(thead13);
      th64 = claim_element(thead13_nodes, "TH", {});
      var th64_nodes = children(th64);
      t206 = claim_text(th64_nodes, "Rank");
      th64_nodes.forEach(detach);
      t207 = claim_space(thead13_nodes);
      th65 = claim_element(thead13_nodes, "TH", {});
      var th65_nodes = children(th65);
      t208 = claim_text(th65_nodes, "Player");
      th65_nodes.forEach(detach);
      t209 = claim_space(thead13_nodes);
      th66 = claim_element(thead13_nodes, "TH", {});
      var th66_nodes = children(th66);
      t210 = claim_text(th66_nodes, "Count");
      th66_nodes.forEach(detach);
      t211 = claim_space(thead13_nodes);
      th67 = claim_element(thead13_nodes, "TH", { class: true });
      var th67_nodes = children(th67);
      t212 = claim_text(th67_nodes, "Percentage");
      th67_nodes.forEach(detach);
      thead13_nodes.forEach(detach);
      t213 = claim_space(table13_nodes);
      tbody13 = claim_element(table13_nodes, "TBODY", {});
      var tbody13_nodes = children(tbody13);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].l(tbody13_nodes);
      }
      tbody13_nodes.forEach(detach);
      table13_nodes.forEach(detach);
      t214 = claim_space(div3_nodes);
      table14 = claim_element(div3_nodes, "TABLE", { id: true, class: true, style: true });
      var table14_nodes = children(table14);
      caption13 = claim_element(table14_nodes, "CAPTION", {});
      var caption13_nodes = children(caption13);
      t215 = claim_text(caption13_nodes, "Top BPM[190, 400]");
      caption13_nodes.forEach(detach);
      t216 = claim_space(table14_nodes);
      thead14 = claim_element(table14_nodes, "THEAD", {});
      var thead14_nodes = children(thead14);
      th68 = claim_element(thead14_nodes, "TH", {});
      var th68_nodes = children(th68);
      t217 = claim_text(th68_nodes, "Rank");
      th68_nodes.forEach(detach);
      t218 = claim_space(thead14_nodes);
      th69 = claim_element(thead14_nodes, "TH", {});
      var th69_nodes = children(th69);
      t219 = claim_text(th69_nodes, "Player");
      th69_nodes.forEach(detach);
      t220 = claim_space(thead14_nodes);
      th70 = claim_element(thead14_nodes, "TH", {});
      var th70_nodes = children(th70);
      t221 = claim_text(th70_nodes, "Count");
      th70_nodes.forEach(detach);
      t222 = claim_space(thead14_nodes);
      th71 = claim_element(thead14_nodes, "TH", { class: true });
      var th71_nodes = children(th71);
      t223 = claim_text(th71_nodes, "Percentage");
      th71_nodes.forEach(detach);
      thead14_nodes.forEach(detach);
      t224 = claim_space(table14_nodes);
      tbody14 = claim_element(table14_nodes, "TBODY", {});
      var tbody14_nodes = children(tbody14);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(tbody14_nodes);
      }
      tbody14_nodes.forEach(detach);
      table14_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t225 = claim_space(nodes);
      hr5 = claim_element(nodes, "HR", { style: true });
      t226 = claim_space(nodes);
      a14 = claim_element(nodes, "A", { href: true });
      var a14_nodes = children(a14);
      t227 = claim_text(a14_nodes, "Top");
      a14_nodes.forEach(detach);
      t228 = claim_space(nodes);
      script2 = claim_element(nodes, "SCRIPT", { lang: true });
      var script2_nodes = children(script2);
      t229 = claim_text(script2_nodes, 'if (location.hash == "#top") {\n  document.querySelector("#top").scrollIntoView(true);\n} else if (location.hash == "#rekidai") {\n  document.querySelector("#rekidai").scrollIntoView(true);\n} else if (location.hash == "#rank") {\n  document.querySelector("#rank").scrollIntoView(true);\n} else if (location.hash == "#version") {\n  document.querySelector("#version").scrollIntoView(true);\n} else if (location.hash == "#charge") {\n  document.querySelector("#charge").scrollIntoView(true);\n} else if (location.hash == "#peak") {\n  document.querySelector("#peak").scrollIntoView(true);\n} else if (location.hash == "#scratch") {\n  document.querySelector("#scratch").scrollIntoView(true);\n} else if (location.hash == "#soflan") {\n  document.querySelector("#soflan").scrollIntoView(true);\n} else if (location.hash == "#super-charge") {\n  document.querySelector("#super-charge").scrollIntoView(true);\n} else if (location.hash == "#super-peak") {\n  document.querySelector("#super-peak").scrollIntoView(true);\n} else if (location.hash == "#super-scratch") {\n  document.querySelector("#super-scratch").scrollIntoView(true);\n} else if (location.hash == "#super-soflan") {\n  document.querySelector("#super-soflan").scrollIntoView(true);\n} else if (location.hash == "#slow") {\n  document.querySelector("#slow").scrollIntoView(true);\n} else if (location.hash == "#mid") {\n  document.querySelector("#mid").scrollIntoView(true);\n} else if (location.hash == "#fast") {\n  document.querySelector("#fast").scrollIntoView(true);\n} else if (location.hash == "#super-fast") {\n  document.querySelector("#super-fast").scrollIntoView(true);\n}');
      script2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "https://github.com/rekidai-info/rekidai-info.github.io");
      attr(a0, "target", "_blank");
      attr(a0, "rel", "noopener noreferrer");
      attr(a1, "href", "https://github.com/rekidai-info/rekidai-info.github.io/blob/main/static/rekidai.json");
      attr(a1, "target", "_blank");
      attr(a1, "rel", "noopener noreferrer");
      attr(a2, "href", "#rank");
      attr(a3, "href", "https://www.youtube.com/channel/UCKYQ3LNcSoxXJB6IlZiYU5A");
      attr(a3, "target", "_blank");
      attr(a3, "rel", "noopener noreferrer");
      attr(a4, "href", "https://toon.at/donate/iidxkkm");
      attr(a4, "target", "_blank");
      attr(a4, "rel", "noopener noreferrer");
      attr(a5, "href", "https://www.youtube.com/channel/UCoK-bEjP7R93N-rIz-4G9JA");
      attr(a5, "target", "_blank");
      attr(a5, "rel", "noopener noreferrer");
      attr(a6, "href", "https://toon.at/donate/637741368394473819");
      attr(a6, "target", "_blank");
      attr(a6, "rel", "noopener noreferrer");
      attr(a7, "href", "https://www.youtube.com/c/MACAODIIDX");
      attr(a7, "target", "_blank");
      attr(a7, "rel", "noopener noreferrer");
      attr(a8, "href", "https://streamlabs.com/macaodiidx");
      attr(a8, "target", "_blank");
      attr(a8, "rel", "noopener noreferrer");
      attr(a9, "href", "https://toon.at/donate/macaod_iidx");
      attr(a9, "target", "_blank");
      attr(a9, "rel", "noopener noreferrer");
      attr(a10, "href", "https://www.youtube.com/channel/UCGlQnUCwUI0kl31denBkrEQ");
      attr(a10, "target", "_blank");
      attr(a10, "rel", "noopener noreferrer");
      attr(a11, "href", "https://toon.at/donate/iidx_charm");
      attr(a11, "target", "_blank");
      attr(a11, "rel", "noopener noreferrer");
      attr(a12, "href", "https://twitter.com/rekidai_info");
      attr(a12, "target", "_blank");
      attr(a12, "rel", "noopener noreferrer");
      attr(a13, "href", "https://amzn.to/3jqk39S");
      attr(a13, "target", "_blank");
      attr(a13, "rel", "noopener noreferrer");
      attr(p, "id", "top");
      attr(input, "type", "text");
      attr(input, "id", "search");
      attr(input, "placeholder", "Search Rekidai in KR, EN or JP");
      set_style(input, "width", "210px");
      set_style(input, "margin-bottom", "4px");
      attr(script0, "lang", "ts");
      script1.async = true;
      if (!src_url_equal(script1.src, script1_src_value = "table-sort.min.js"))
        attr(script1, "src", script1_src_value);
      attr(th1, "class", "order-by-desc");
      attr(th2, "class", "data-sort");
      attr(th4, "class", "order-by-desc");
      attr(th5, "class", "order-by-desc");
      attr(th6, "class", "order-by-desc");
      attr(th7, "class", "order-by-desc");
      attr(th8, "class", "order-by-desc");
      attr(tr, "class", "svelte-19787ya");
      attr(table0, "id", "rekidai");
      attr(table0, "class", "table-sort table-arrows remember-sort svelte-19787ya");
      attr(th19, "class", "data-sort");
      attr(table1, "id", "rank");
      attr(table1, "class", "table-sort table-arrows remember-sort svelte-19787ya");
      set_style(table1, "float", "left");
      set_style(table1, "margin-right", "1em");
      attr(th23, "class", "data-sort");
      attr(table2, "id", "version");
      attr(table2, "class", "table-sort table-arrows remember-sort svelte-19787ya");
      set_style(table2, "float", "left");
      set_style(div0, "float", "left");
      set_style(div0, "margin-bottom", "1em");
      set_style(hr2, "clear", "both");
      set_style(hr2, "display", "block");
      attr(th27, "class", "data-sort");
      attr(table3, "id", "charge");
      attr(table3, "class", "table-sort table-arrows remember-sort svelte-19787ya");
      set_style(table3, "float", "left");
      set_style(table3, "margin-right", "1em");
      attr(th31, "class", "data-sort");
      attr(table4, "id", "peak");
      attr(table4, "class", "table-sort table-arrows remember-sort svelte-19787ya");
      set_style(table4, "float", "left");
      set_style(table4, "margin-right", "1em");
      attr(th35, "class", "data-sort");
      attr(table5, "id", "scratch");
      attr(table5, "class", "table-sort table-arrows remember-sort svelte-19787ya");
      set_style(table5, "float", "left");
      set_style(table5, "margin-right", "1em");
      attr(th39, "class", "data-sort");
      attr(table6, "id", "soflan");
      attr(table6, "class", "table-sort table-arrows remember-sort svelte-19787ya");
      set_style(table6, "float", "left");
      set_style(div1, "float", "left");
      set_style(div1, "margin-bottom", "1em");
      set_style(hr3, "clear", "both");
      set_style(hr3, "display", "block");
      attr(th43, "class", "data-sort");
      attr(table7, "id", "super-charge");
      attr(table7, "class", "table-sort table-arrows remember-sort svelte-19787ya");
      set_style(table7, "float", "left");
      set_style(table7, "margin-right", "1em");
      attr(th47, "class", "data-sort");
      attr(table8, "id", "super-peak");
      attr(table8, "class", "table-sort table-arrows remember-sort svelte-19787ya");
      set_style(table8, "float", "left");
      set_style(table8, "margin-right", "1em");
      attr(th51, "class", "data-sort");
      attr(table9, "id", "super-scratch");
      attr(table9, "class", "table-sort table-arrows remember-sort svelte-19787ya");
      set_style(table9, "float", "left");
      set_style(table9, "margin-right", "1em");
      attr(th55, "class", "data-sort");
      attr(table10, "id", "super-soflan");
      attr(table10, "class", "table-sort table-arrows remember-sort svelte-19787ya");
      set_style(table10, "float", "left");
      set_style(div2, "float", "left");
      set_style(div2, "margin-bottom", "1em");
      set_style(hr4, "clear", "both");
      set_style(hr4, "display", "block");
      attr(th59, "class", "data-sort");
      attr(table11, "id", "slow");
      attr(table11, "class", "table-sort table-arrows remember-sort svelte-19787ya");
      set_style(table11, "float", "left");
      set_style(table11, "margin-right", "1em");
      attr(th63, "class", "data-sort");
      attr(table12, "id", "mid");
      attr(table12, "class", "table-sort table-arrows remember-sort svelte-19787ya");
      set_style(table12, "float", "left");
      set_style(table12, "margin-right", "1em");
      attr(th67, "class", "data-sort");
      attr(table13, "id", "fast");
      attr(table13, "class", "table-sort table-arrows remember-sort svelte-19787ya");
      set_style(table13, "float", "left");
      set_style(table13, "margin-right", "1em");
      attr(th71, "class", "data-sort");
      attr(table14, "id", "super-fast");
      attr(table14, "class", "table-sort table-arrows remember-sort svelte-19787ya");
      set_style(table14, "float", "left");
      set_style(div3, "float", "left");
      set_style(div3, "margin-bottom", "1em");
      set_style(hr5, "clear", "both");
      set_style(hr5, "display", "block");
      attr(a14, "href", "#top");
      attr(script2, "lang", "ts");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      append_hydration(p, a0);
      append_hydration(a0, t1);
      append_hydration(p, t2);
      append_hydration(p, a1);
      append_hydration(a1, t3);
      append_hydration(p, t4);
      append_hydration(p, br);
      append_hydration(p, a2);
      append_hydration(a2, t5);
      append_hydration(p, t6);
      append_hydration(p, a3);
      append_hydration(a3, t7);
      append_hydration(p, t8);
      append_hydration(p, a4);
      append_hydration(a4, t9);
      append_hydration(p, t10);
      append_hydration(p, a5);
      append_hydration(a5, t11);
      append_hydration(p, t12);
      append_hydration(p, a6);
      append_hydration(a6, t13);
      append_hydration(p, t14);
      append_hydration(p, a7);
      append_hydration(a7, t15);
      append_hydration(p, t16);
      append_hydration(p, a8);
      append_hydration(a8, t17);
      append_hydration(p, t18);
      append_hydration(p, a9);
      append_hydration(a9, t19);
      append_hydration(p, t20);
      append_hydration(p, a10);
      append_hydration(a10, t21);
      append_hydration(p, t22);
      append_hydration(p, a11);
      append_hydration(a11, t23);
      append_hydration(p, t24);
      append_hydration(p, a12);
      append_hydration(a12, t25);
      append_hydration(p, t26);
      append_hydration(p, a13);
      append_hydration(a13, t27);
      append_hydration(p, t28);
      insert_hydration(target, t29, anchor);
      insert_hydration(target, hr0, anchor);
      insert_hydration(target, t30, anchor);
      insert_hydration(target, input, anchor);
      insert_hydration(target, t31, anchor);
      insert_hydration(target, script0, anchor);
      append_hydration(script0, t32);
      insert_hydration(target, t33, anchor);
      insert_hydration(target, script1, anchor);
      insert_hydration(target, t34, anchor);
      insert_hydration(target, table0, anchor);
      append_hydration(table0, thead0);
      append_hydration(thead0, tr);
      append_hydration(tr, th0);
      append_hydration(th0, t35);
      append_hydration(tr, t36);
      append_hydration(tr, th1);
      append_hydration(th1, t37);
      append_hydration(tr, t38);
      append_hydration(tr, th2);
      append_hydration(th2, t39);
      append_hydration(tr, t40);
      append_hydration(tr, th3);
      append_hydration(th3, t41);
      append_hydration(tr, t42);
      append_hydration(tr, th4);
      append_hydration(th4, t43);
      append_hydration(tr, t44);
      append_hydration(tr, th5);
      append_hydration(th5, t45);
      append_hydration(tr, t46);
      append_hydration(tr, th6);
      append_hydration(th6, t47);
      append_hydration(tr, t48);
      append_hydration(tr, th7);
      append_hydration(th7, t49);
      append_hydration(tr, t50);
      append_hydration(tr, th8);
      append_hydration(th8, t51);
      append_hydration(tr, t52);
      append_hydration(tr, th9);
      append_hydration(th9, t53);
      append_hydration(tr, t54);
      append_hydration(tr, th10);
      append_hydration(th10, t55);
      append_hydration(tr, t56);
      append_hydration(tr, th11);
      append_hydration(th11, t57);
      append_hydration(tr, t58);
      append_hydration(tr, th12);
      append_hydration(th12, t59);
      append_hydration(tr, t60);
      append_hydration(tr, th13);
      append_hydration(th13, t61);
      append_hydration(tr, t62);
      append_hydration(tr, th14);
      append_hydration(th14, t63);
      append_hydration(tr, t64);
      append_hydration(tr, th15);
      append_hydration(th15, t65);
      append_hydration(table0, t66);
      append_hydration(table0, tbody0);
      for (let i = 0; i < each_blocks_14.length; i += 1) {
        each_blocks_14[i].m(tbody0, null);
      }
      insert_hydration(target, t67, anchor);
      insert_hydration(target, hr1, anchor);
      insert_hydration(target, t68, anchor);
      insert_hydration(target, div0, anchor);
      append_hydration(div0, table1);
      append_hydration(table1, caption0);
      append_hydration(caption0, t69);
      append_hydration(table1, t70);
      append_hydration(table1, thead1);
      append_hydration(thead1, th16);
      append_hydration(th16, t71);
      append_hydration(thead1, t72);
      append_hydration(thead1, th17);
      append_hydration(th17, t73);
      append_hydration(thead1, t74);
      append_hydration(thead1, th18);
      append_hydration(th18, t75);
      append_hydration(thead1, t76);
      append_hydration(thead1, th19);
      append_hydration(th19, t77);
      append_hydration(table1, t78);
      append_hydration(table1, tbody1);
      for (let i = 0; i < each_blocks_13.length; i += 1) {
        each_blocks_13[i].m(tbody1, null);
      }
      append_hydration(div0, t79);
      append_hydration(div0, table2);
      append_hydration(table2, caption1);
      append_hydration(caption1, t80);
      append_hydration(table2, t81);
      append_hydration(table2, thead2);
      append_hydration(thead2, th20);
      append_hydration(th20, t82);
      append_hydration(thead2, t83);
      append_hydration(thead2, th21);
      append_hydration(th21, t84);
      append_hydration(thead2, t85);
      append_hydration(thead2, th22);
      append_hydration(th22, t86);
      append_hydration(thead2, t87);
      append_hydration(thead2, th23);
      append_hydration(th23, t88);
      append_hydration(table2, t89);
      append_hydration(table2, tbody2);
      for (let i = 0; i < each_blocks_12.length; i += 1) {
        each_blocks_12[i].m(tbody2, null);
      }
      insert_hydration(target, t90, anchor);
      insert_hydration(target, hr2, anchor);
      insert_hydration(target, t91, anchor);
      insert_hydration(target, div1, anchor);
      append_hydration(div1, table3);
      append_hydration(table3, caption2);
      append_hydration(caption2, t92);
      append_hydration(table3, t93);
      append_hydration(table3, thead3);
      append_hydration(thead3, th24);
      append_hydration(th24, t94);
      append_hydration(thead3, t95);
      append_hydration(thead3, th25);
      append_hydration(th25, t96);
      append_hydration(thead3, t97);
      append_hydration(thead3, th26);
      append_hydration(th26, t98);
      append_hydration(thead3, t99);
      append_hydration(thead3, th27);
      append_hydration(th27, t100);
      append_hydration(table3, t101);
      append_hydration(table3, tbody3);
      for (let i = 0; i < each_blocks_11.length; i += 1) {
        each_blocks_11[i].m(tbody3, null);
      }
      append_hydration(div1, t102);
      append_hydration(div1, table4);
      append_hydration(table4, caption3);
      append_hydration(caption3, t103);
      append_hydration(table4, t104);
      append_hydration(table4, thead4);
      append_hydration(thead4, th28);
      append_hydration(th28, t105);
      append_hydration(thead4, t106);
      append_hydration(thead4, th29);
      append_hydration(th29, t107);
      append_hydration(thead4, t108);
      append_hydration(thead4, th30);
      append_hydration(th30, t109);
      append_hydration(thead4, t110);
      append_hydration(thead4, th31);
      append_hydration(th31, t111);
      append_hydration(table4, t112);
      append_hydration(table4, tbody4);
      for (let i = 0; i < each_blocks_10.length; i += 1) {
        each_blocks_10[i].m(tbody4, null);
      }
      append_hydration(div1, t113);
      append_hydration(div1, table5);
      append_hydration(table5, caption4);
      append_hydration(caption4, t114);
      append_hydration(table5, t115);
      append_hydration(table5, thead5);
      append_hydration(thead5, th32);
      append_hydration(th32, t116);
      append_hydration(thead5, t117);
      append_hydration(thead5, th33);
      append_hydration(th33, t118);
      append_hydration(thead5, t119);
      append_hydration(thead5, th34);
      append_hydration(th34, t120);
      append_hydration(thead5, t121);
      append_hydration(thead5, th35);
      append_hydration(th35, t122);
      append_hydration(table5, t123);
      append_hydration(table5, tbody5);
      for (let i = 0; i < each_blocks_9.length; i += 1) {
        each_blocks_9[i].m(tbody5, null);
      }
      append_hydration(div1, t124);
      append_hydration(div1, table6);
      append_hydration(table6, caption5);
      append_hydration(caption5, t125);
      append_hydration(table6, t126);
      append_hydration(table6, thead6);
      append_hydration(thead6, th36);
      append_hydration(th36, t127);
      append_hydration(thead6, t128);
      append_hydration(thead6, th37);
      append_hydration(th37, t129);
      append_hydration(thead6, t130);
      append_hydration(thead6, th38);
      append_hydration(th38, t131);
      append_hydration(thead6, t132);
      append_hydration(thead6, th39);
      append_hydration(th39, t133);
      append_hydration(table6, t134);
      append_hydration(table6, tbody6);
      for (let i = 0; i < each_blocks_8.length; i += 1) {
        each_blocks_8[i].m(tbody6, null);
      }
      insert_hydration(target, t135, anchor);
      insert_hydration(target, hr3, anchor);
      insert_hydration(target, t136, anchor);
      insert_hydration(target, div2, anchor);
      append_hydration(div2, table7);
      append_hydration(table7, caption6);
      append_hydration(caption6, t137);
      append_hydration(table7, t138);
      append_hydration(table7, thead7);
      append_hydration(thead7, th40);
      append_hydration(th40, t139);
      append_hydration(thead7, t140);
      append_hydration(thead7, th41);
      append_hydration(th41, t141);
      append_hydration(thead7, t142);
      append_hydration(thead7, th42);
      append_hydration(th42, t143);
      append_hydration(thead7, t144);
      append_hydration(thead7, th43);
      append_hydration(th43, t145);
      append_hydration(table7, t146);
      append_hydration(table7, tbody7);
      for (let i = 0; i < each_blocks_7.length; i += 1) {
        each_blocks_7[i].m(tbody7, null);
      }
      append_hydration(div2, t147);
      append_hydration(div2, table8);
      append_hydration(table8, caption7);
      append_hydration(caption7, t148);
      append_hydration(table8, t149);
      append_hydration(table8, thead8);
      append_hydration(thead8, th44);
      append_hydration(th44, t150);
      append_hydration(thead8, t151);
      append_hydration(thead8, th45);
      append_hydration(th45, t152);
      append_hydration(thead8, t153);
      append_hydration(thead8, th46);
      append_hydration(th46, t154);
      append_hydration(thead8, t155);
      append_hydration(thead8, th47);
      append_hydration(th47, t156);
      append_hydration(table8, t157);
      append_hydration(table8, tbody8);
      for (let i = 0; i < each_blocks_6.length; i += 1) {
        each_blocks_6[i].m(tbody8, null);
      }
      append_hydration(div2, t158);
      append_hydration(div2, table9);
      append_hydration(table9, caption8);
      append_hydration(caption8, t159);
      append_hydration(table9, t160);
      append_hydration(table9, thead9);
      append_hydration(thead9, th48);
      append_hydration(th48, t161);
      append_hydration(thead9, t162);
      append_hydration(thead9, th49);
      append_hydration(th49, t163);
      append_hydration(thead9, t164);
      append_hydration(thead9, th50);
      append_hydration(th50, t165);
      append_hydration(thead9, t166);
      append_hydration(thead9, th51);
      append_hydration(th51, t167);
      append_hydration(table9, t168);
      append_hydration(table9, tbody9);
      for (let i = 0; i < each_blocks_5.length; i += 1) {
        each_blocks_5[i].m(tbody9, null);
      }
      append_hydration(div2, t169);
      append_hydration(div2, table10);
      append_hydration(table10, caption9);
      append_hydration(caption9, t170);
      append_hydration(table10, t171);
      append_hydration(table10, thead10);
      append_hydration(thead10, th52);
      append_hydration(th52, t172);
      append_hydration(thead10, t173);
      append_hydration(thead10, th53);
      append_hydration(th53, t174);
      append_hydration(thead10, t175);
      append_hydration(thead10, th54);
      append_hydration(th54, t176);
      append_hydration(thead10, t177);
      append_hydration(thead10, th55);
      append_hydration(th55, t178);
      append_hydration(table10, t179);
      append_hydration(table10, tbody10);
      for (let i = 0; i < each_blocks_4.length; i += 1) {
        each_blocks_4[i].m(tbody10, null);
      }
      insert_hydration(target, t180, anchor);
      insert_hydration(target, hr4, anchor);
      insert_hydration(target, t181, anchor);
      insert_hydration(target, div3, anchor);
      append_hydration(div3, table11);
      append_hydration(table11, caption10);
      append_hydration(caption10, t182);
      append_hydration(table11, t183);
      append_hydration(table11, thead11);
      append_hydration(thead11, th56);
      append_hydration(th56, t184);
      append_hydration(thead11, t185);
      append_hydration(thead11, th57);
      append_hydration(th57, t186);
      append_hydration(thead11, t187);
      append_hydration(thead11, th58);
      append_hydration(th58, t188);
      append_hydration(thead11, t189);
      append_hydration(thead11, th59);
      append_hydration(th59, t190);
      append_hydration(table11, t191);
      append_hydration(table11, tbody11);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].m(tbody11, null);
      }
      append_hydration(div3, t192);
      append_hydration(div3, table12);
      append_hydration(table12, caption11);
      append_hydration(caption11, t193);
      append_hydration(table12, t194);
      append_hydration(table12, thead12);
      append_hydration(thead12, th60);
      append_hydration(th60, t195);
      append_hydration(thead12, t196);
      append_hydration(thead12, th61);
      append_hydration(th61, t197);
      append_hydration(thead12, t198);
      append_hydration(thead12, th62);
      append_hydration(th62, t199);
      append_hydration(thead12, t200);
      append_hydration(thead12, th63);
      append_hydration(th63, t201);
      append_hydration(table12, t202);
      append_hydration(table12, tbody12);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].m(tbody12, null);
      }
      append_hydration(div3, t203);
      append_hydration(div3, table13);
      append_hydration(table13, caption12);
      append_hydration(caption12, t204);
      append_hydration(table13, t205);
      append_hydration(table13, thead13);
      append_hydration(thead13, th64);
      append_hydration(th64, t206);
      append_hydration(thead13, t207);
      append_hydration(thead13, th65);
      append_hydration(th65, t208);
      append_hydration(thead13, t209);
      append_hydration(thead13, th66);
      append_hydration(th66, t210);
      append_hydration(thead13, t211);
      append_hydration(thead13, th67);
      append_hydration(th67, t212);
      append_hydration(table13, t213);
      append_hydration(table13, tbody13);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(tbody13, null);
      }
      append_hydration(div3, t214);
      append_hydration(div3, table14);
      append_hydration(table14, caption13);
      append_hydration(caption13, t215);
      append_hydration(table14, t216);
      append_hydration(table14, thead14);
      append_hydration(thead14, th68);
      append_hydration(th68, t217);
      append_hydration(thead14, t218);
      append_hydration(thead14, th69);
      append_hydration(th69, t219);
      append_hydration(thead14, t220);
      append_hydration(thead14, th70);
      append_hydration(th70, t221);
      append_hydration(thead14, t222);
      append_hydration(thead14, th71);
      append_hydration(th71, t223);
      append_hydration(table14, t224);
      append_hydration(table14, tbody14);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(tbody14, null);
      }
      insert_hydration(target, t225, anchor);
      insert_hydration(target, hr5, anchor);
      insert_hydration(target, t226, anchor);
      insert_hydration(target, a14, anchor);
      append_hydration(a14, t227);
      insert_hydration(target, t228, anchor);
      insert_hydration(target, script2, anchor);
      append_hydration(script2, t229);
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*list*/
      2) {
        each_value_14 = /*list*/
        ctx2[1];
        each_blocks_14 = update_keyed_each(each_blocks_14, dirty, get_key, 1, ctx2, each_value_14, each0_lookup, tbody0, destroy_block, create_each_block_14, null, get_each_context_14);
      }
      if (dirty[0] & /*topRankersSort*/
      8) {
        each_value_13 = /*topRankersSort*/
        ctx2[3];
        each_blocks_13 = update_keyed_each(each_blocks_13, dirty, get_key_1, 1, ctx2, each_value_13, each1_lookup, tbody1, destroy_block, create_each_block_13, null, get_each_context_13);
      }
      if (dirty[0] & /*topVersionsSort*/
      16) {
        each_value_12 = /*topVersionsSort*/
        ctx2[4];
        each_blocks_12 = update_keyed_each(each_blocks_12, dirty, get_key_2, 1, ctx2, each_value_12, each2_lookup, tbody2, destroy_block, create_each_block_12, null, get_each_context_12);
      }
      if (dirty[0] & /*topChargeSort*/
      32) {
        each_value_11 = /*topChargeSort*/
        ctx2[5];
        each_blocks_11 = update_keyed_each(each_blocks_11, dirty, get_key_3, 1, ctx2, each_value_11, each3_lookup, tbody3, destroy_block, create_each_block_11, null, get_each_context_11);
      }
      if (dirty[0] & /*topPeakSort*/
      64) {
        each_value_10 = /*topPeakSort*/
        ctx2[6];
        each_blocks_10 = update_keyed_each(each_blocks_10, dirty, get_key_4, 1, ctx2, each_value_10, each4_lookup, tbody4, destroy_block, create_each_block_10, null, get_each_context_10);
      }
      if (dirty[0] & /*topScratchSort*/
      128) {
        each_value_9 = /*topScratchSort*/
        ctx2[7];
        each_blocks_9 = update_keyed_each(each_blocks_9, dirty, get_key_5, 1, ctx2, each_value_9, each5_lookup, tbody5, destroy_block, create_each_block_9, null, get_each_context_9);
      }
      if (dirty[0] & /*topSoflanSort*/
      256) {
        each_value_8 = /*topSoflanSort*/
        ctx2[8];
        each_blocks_8 = update_keyed_each(each_blocks_8, dirty, get_key_6, 1, ctx2, each_value_8, each6_lookup, tbody6, destroy_block, create_each_block_8, null, get_each_context_8);
      }
      if (dirty[0] & /*topSuperChargeSort*/
      512) {
        each_value_7 = /*topSuperChargeSort*/
        ctx2[9];
        each_blocks_7 = update_keyed_each(each_blocks_7, dirty, get_key_7, 1, ctx2, each_value_7, each7_lookup, tbody7, destroy_block, create_each_block_7, null, get_each_context_7);
      }
      if (dirty[0] & /*topSuperPeakSort*/
      1024) {
        each_value_6 = /*topSuperPeakSort*/
        ctx2[10];
        each_blocks_6 = update_keyed_each(each_blocks_6, dirty, get_key_8, 1, ctx2, each_value_6, each8_lookup, tbody8, destroy_block, create_each_block_6, null, get_each_context_6);
      }
      if (dirty[0] & /*topSuperScratchSort*/
      2048) {
        each_value_5 = /*topSuperScratchSort*/
        ctx2[11];
        each_blocks_5 = update_keyed_each(each_blocks_5, dirty, get_key_9, 1, ctx2, each_value_5, each9_lookup, tbody9, destroy_block, create_each_block_5, null, get_each_context_5);
      }
      if (dirty[0] & /*topSuperSoflanSort*/
      4096) {
        each_value_4 = /*topSuperSoflanSort*/
        ctx2[12];
        each_blocks_4 = update_keyed_each(each_blocks_4, dirty, get_key_10, 1, ctx2, each_value_4, each10_lookup, tbody10, destroy_block, create_each_block_4, null, get_each_context_4);
      }
      if (dirty[0] & /*topSlowSort*/
      8192) {
        each_value_3 = /*topSlowSort*/
        ctx2[13];
        each_blocks_3 = update_keyed_each(each_blocks_3, dirty, get_key_11, 1, ctx2, each_value_3, each11_lookup, tbody11, destroy_block, create_each_block_3, null, get_each_context_3);
      }
      if (dirty[0] & /*topMidSort*/
      16384) {
        each_value_2 = /*topMidSort*/
        ctx2[14];
        each_blocks_2 = update_keyed_each(each_blocks_2, dirty, get_key_12, 1, ctx2, each_value_2, each12_lookup, tbody12, destroy_block, create_each_block_2, null, get_each_context_2);
      }
      if (dirty[0] & /*topFastSort*/
      32768) {
        each_value_1 = /*topFastSort*/
        ctx2[15];
        each_blocks_1 = update_keyed_each(each_blocks_1, dirty, get_key_13, 1, ctx2, each_value_1, each13_lookup, tbody13, destroy_block, create_each_block_1, null, get_each_context_1);
      }
      if (dirty[0] & /*topSuperFastSort*/
      65536) {
        each_value = /*topSuperFastSort*/
        ctx2[16];
        each_blocks = update_keyed_each(each_blocks, dirty, get_key_14, 1, ctx2, each_value, each14_lookup, tbody14, destroy_block, create_each_block, null, get_each_context);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(p);
      if (detaching)
        detach(t29);
      if (detaching)
        detach(hr0);
      if (detaching)
        detach(t30);
      if (detaching)
        detach(input);
      if (detaching)
        detach(t31);
      if (detaching)
        detach(script0);
      if (detaching)
        detach(t33);
      if (detaching)
        detach(script1);
      if (detaching)
        detach(t34);
      if (detaching)
        detach(table0);
      for (let i = 0; i < each_blocks_14.length; i += 1) {
        each_blocks_14[i].d();
      }
      if (detaching)
        detach(t67);
      if (detaching)
        detach(hr1);
      if (detaching)
        detach(t68);
      if (detaching)
        detach(div0);
      for (let i = 0; i < each_blocks_13.length; i += 1) {
        each_blocks_13[i].d();
      }
      for (let i = 0; i < each_blocks_12.length; i += 1) {
        each_blocks_12[i].d();
      }
      if (detaching)
        detach(t90);
      if (detaching)
        detach(hr2);
      if (detaching)
        detach(t91);
      if (detaching)
        detach(div1);
      for (let i = 0; i < each_blocks_11.length; i += 1) {
        each_blocks_11[i].d();
      }
      for (let i = 0; i < each_blocks_10.length; i += 1) {
        each_blocks_10[i].d();
      }
      for (let i = 0; i < each_blocks_9.length; i += 1) {
        each_blocks_9[i].d();
      }
      for (let i = 0; i < each_blocks_8.length; i += 1) {
        each_blocks_8[i].d();
      }
      if (detaching)
        detach(t135);
      if (detaching)
        detach(hr3);
      if (detaching)
        detach(t136);
      if (detaching)
        detach(div2);
      for (let i = 0; i < each_blocks_7.length; i += 1) {
        each_blocks_7[i].d();
      }
      for (let i = 0; i < each_blocks_6.length; i += 1) {
        each_blocks_6[i].d();
      }
      for (let i = 0; i < each_blocks_5.length; i += 1) {
        each_blocks_5[i].d();
      }
      for (let i = 0; i < each_blocks_4.length; i += 1) {
        each_blocks_4[i].d();
      }
      if (detaching)
        detach(t180);
      if (detaching)
        detach(hr4);
      if (detaching)
        detach(t181);
      if (detaching)
        detach(div3);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].d();
      }
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].d();
      }
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].d();
      }
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      if (detaching)
        detach(t225);
      if (detaching)
        detach(hr5);
      if (detaching)
        detach(t226);
      if (detaching)
        detach(a14);
      if (detaching)
        detach(t228);
      if (detaching)
        detach(script2);
    }
  };
}
function create_if_block(ctx) {
  let p;
  let t;
  let p_transition;
  let img;
  let img_src_value;
  let current;
  return {
    c() {
      p = element("p");
      t = text("Loading...");
      img = element("img");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { id: true, style: true });
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Loading...");
      p_nodes.forEach(detach);
      img = claim_element(nodes, "IMG", { src: true, alt: true, style: true });
      this.h();
    },
    h() {
      attr(p, "id", "loading");
      set_style(p, "display", "inline");
      if (!src_url_equal(img.src, img_src_value = "bars-rotate-fade.svg"))
        attr(img, "src", img_src_value);
      attr(img, "alt", "Loading...");
      set_style(img, "vertical-align", "top");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
      insert_hydration(target, img, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!p_transition)
          p_transition = create_bidirectional_transition(p, typewriter, {}, true);
        p_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!p_transition)
        p_transition = create_bidirectional_transition(p, typewriter, {}, false);
      p_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(p);
      if (detaching && p_transition)
        p_transition.end();
      if (detaching)
        detach(img);
    }
  };
}
function create_else_block_6(ctx) {
  let td;
  let a;
  let t_value = (
    /*rekidai*/
    ctx[64].music + ""
  );
  let t;
  let a_href_value;
  return {
    c() {
      td = element("td");
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", {});
      var td_nodes = children(td);
      a = claim_element(td_nodes, "A", { href: true, target: true, rel: true });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach);
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", a_href_value = /*rekidai*/
      ctx[64].scoreResult);
      attr(a, "target", "_blank");
      attr(a, "rel", "noopener noreferrer");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, a);
      append_hydration(a, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*list*/
      2 && t_value !== (t_value = /*rekidai*/
      ctx2[64].music + ""))
        set_data(t, t_value);
      if (dirty[0] & /*list*/
      2 && a_href_value !== (a_href_value = /*rekidai*/
      ctx2[64].scoreResult)) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_if_block_15(ctx) {
  let td;
  let t_value = (
    /*rekidai*/
    ctx[64].music + ""
  );
  let t;
  return {
    c() {
      td = element("td");
      t = text(t_value);
    },
    l(nodes) {
      td = claim_element(nodes, "TD", {});
      var td_nodes = children(td);
      t = claim_text(td_nodes, t_value);
      td_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*list*/
      2 && t_value !== (t_value = /*rekidai*/
      ctx2[64].music + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_else_block_5(ctx) {
  let td;
  let a;
  let t_value = (
    /*rekidai*/
    ctx[64].notes + ""
  );
  let t;
  let a_href_value;
  return {
    c() {
      td = element("td");
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { style: true });
      var td_nodes = children(td);
      a = claim_element(td_nodes, "A", { href: true, target: true, rel: true });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach);
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", a_href_value = /*rekidai*/
      ctx[64].textage);
      attr(a, "target", "_blank");
      attr(a, "rel", "noopener noreferrer");
      set_style(td, "text-align", "center");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, a);
      append_hydration(a, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*list*/
      2 && t_value !== (t_value = /*rekidai*/
      ctx2[64].notes + ""))
        set_data(t, t_value);
      if (dirty[0] & /*list*/
      2 && a_href_value !== (a_href_value = /*rekidai*/
      ctx2[64].textage)) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_if_block_14(ctx) {
  let td;
  let t_value = (
    /*rekidai*/
    ctx[64].notes + ""
  );
  let t;
  return {
    c() {
      td = element("td");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { style: true });
      var td_nodes = children(td);
      t = claim_text(td_nodes, t_value);
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(td, "text-align", "center");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*list*/
      2 && t_value !== (t_value = /*rekidai*/
      ctx2[64].notes + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_else_block_4(ctx) {
  let td;
  let a;
  let t_value = (
    /*rekidai*/
    ctx[64].bpm.join("~") + ""
  );
  let t;
  let a_href_value;
  return {
    c() {
      td = element("td");
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { style: true });
      var td_nodes = children(td);
      a = claim_element(td_nodes, "A", { href: true, target: true, rel: true });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach);
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", a_href_value = /*rekidai*/
      ctx[64].musicMovie);
      attr(a, "target", "_blank");
      attr(a, "rel", "noopener noreferrer");
      set_style(td, "text-align", "center");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, a);
      append_hydration(a, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*list*/
      2 && t_value !== (t_value = /*rekidai*/
      ctx2[64].bpm.join("~") + ""))
        set_data(t, t_value);
      if (dirty[0] & /*list*/
      2 && a_href_value !== (a_href_value = /*rekidai*/
      ctx2[64].musicMovie)) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_if_block_13(ctx) {
  let td;
  let t_value = (
    /*rekidai*/
    ctx[64].bpm.join("~") + ""
  );
  let t;
  return {
    c() {
      td = element("td");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { style: true });
      var td_nodes = children(td);
      t = claim_text(td_nodes, t_value);
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(td, "text-align", "center");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*list*/
      2 && t_value !== (t_value = /*rekidai*/
      ctx2[64].bpm.join("~") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_else_block_3(ctx) {
  let td;
  return {
    c() {
      td = element("td");
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { style: true });
      children(td).forEach(detach);
      this.h();
    },
    h() {
      set_style(td, "text-align", "center");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_if_block_12(ctx) {
  let td;
  let t;
  return {
    c() {
      td = element("td");
      t = text("Charge");
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { style: true });
      var td_nodes = children(td);
      t = claim_text(td_nodes, "Charge");
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(td, "text-align", "center");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, t);
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_if_block_11(ctx) {
  let td;
  let t;
  return {
    c() {
      td = element("td");
      t = text("Super Charge");
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { style: true });
      var td_nodes = children(td);
      t = claim_text(td_nodes, "Super Charge");
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(td, "text-align", "center");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, t);
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_else_block_2(ctx) {
  let td;
  return {
    c() {
      td = element("td");
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { style: true });
      children(td).forEach(detach);
      this.h();
    },
    h() {
      set_style(td, "text-align", "center");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_if_block_10(ctx) {
  let td;
  let t;
  return {
    c() {
      td = element("td");
      t = text("Peak");
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { style: true });
      var td_nodes = children(td);
      t = claim_text(td_nodes, "Peak");
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(td, "text-align", "center");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, t);
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_if_block_9(ctx) {
  let td;
  let t;
  return {
    c() {
      td = element("td");
      t = text("Super Peak");
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { style: true });
      var td_nodes = children(td);
      t = claim_text(td_nodes, "Super Peak");
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(td, "text-align", "center");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, t);
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_else_block_1(ctx) {
  let td;
  return {
    c() {
      td = element("td");
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { style: true });
      children(td).forEach(detach);
      this.h();
    },
    h() {
      set_style(td, "text-align", "center");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_if_block_8(ctx) {
  let td;
  let t;
  return {
    c() {
      td = element("td");
      t = text("Scratch");
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { style: true });
      var td_nodes = children(td);
      t = claim_text(td_nodes, "Scratch");
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(td, "text-align", "center");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, t);
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_if_block_7(ctx) {
  let td;
  let t;
  return {
    c() {
      td = element("td");
      t = text("Super Scratch");
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { style: true });
      var td_nodes = children(td);
      t = claim_text(td_nodes, "Super Scratch");
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(td, "text-align", "center");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, t);
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_else_block(ctx) {
  let td;
  return {
    c() {
      td = element("td");
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { style: true });
      children(td).forEach(detach);
      this.h();
    },
    h() {
      set_style(td, "text-align", "center");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_if_block_6(ctx) {
  let td;
  let t;
  return {
    c() {
      td = element("td");
      t = text("Sof-Lan");
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { style: true });
      var td_nodes = children(td);
      t = claim_text(td_nodes, "Sof-Lan");
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(td, "text-align", "center");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, t);
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_if_block_5(ctx) {
  let td;
  let t;
  return {
    c() {
      td = element("td");
      t = text("Super Sof-Lan");
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { style: true });
      var td_nodes = children(td);
      t = claim_text(td_nodes, "Super Sof-Lan");
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(td, "text-align", "center");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, t);
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_if_block_4(ctx) {
  let p;
  let t_value = (
    /*rekidai*/
    ctx[64].musicKR + ""
  );
  let t;
  return {
    c() {
      p = element("p");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { style: true });
      var p_nodes = children(p);
      t = claim_text(p_nodes, t_value);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(p, "display", "none");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*list*/
      2 && t_value !== (t_value = /*rekidai*/
      ctx2[64].musicKR + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_3(ctx) {
  let p;
  let t_value = (
    /*rekidai*/
    ctx[64].musicEN + ""
  );
  let t;
  return {
    c() {
      p = element("p");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { style: true });
      var p_nodes = children(p);
      t = claim_text(p_nodes, t_value);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(p, "display", "none");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*list*/
      2 && t_value !== (t_value = /*rekidai*/
      ctx2[64].musicEN + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_2(ctx) {
  let p;
  let t_value = (
    /*rekidai*/
    ctx[64].musicJP + ""
  );
  let t;
  return {
    c() {
      p = element("p");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { style: true });
      var p_nodes = children(p);
      t = claim_text(p_nodes, t_value);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(p, "display", "none");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*list*/
      2 && t_value !== (t_value = /*rekidai*/
      ctx2[64].musicJP + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_each_block_14(key_1, ctx) {
  let tr;
  let t0;
  let td0;
  let t1_value = (
    /*rekidai*/
    ctx[64].score + ""
  );
  let t1;
  let t2;
  let td1;
  let t3_value = calcRecord(
    /*rekidai*/
    ctx[64].notes,
    /*rekidai*/
    ctx[64].score
  ) + "";
  let t3;
  let td1_data_sort_value;
  let t4;
  let td2;
  let t5_value = (
    /*rekidai*/
    ctx[64].player + ""
  );
  let t5;
  let td2_data_player_value;
  let t6;
  let td3;
  let t7_value = calcRate(
    /*rekidai*/
    ctx[64].notes,
    /*rekidai*/
    ctx[64].score
  ) + "";
  let t7;
  let t8;
  let td4;
  let t9_value = calcRatePlus(
    /*rekidai*/
    ctx[64].notes,
    /*rekidai*/
    ctx[64].score
  ) + "";
  let t9;
  let t10;
  let td5;
  let t11_value = calcRateMinus(
    /*rekidai*/
    ctx[64].notes,
    /*rekidai*/
    ctx[64].score
  ) + "";
  let t11;
  let t12;
  let t13;
  let t14;
  let td6;
  let t15_value = (
    /*rekidai*/
    ctx[64].topVersion + ""
  );
  let t15;
  let t16;
  let t17;
  let t18;
  let t19;
  let t20;
  let td7;
  let t21_value = (
    /*rekidai*/
    ctx[64].version + ""
  );
  let t21;
  let t22;
  let td8;
  let t23_value = (
    /*rekidai*/
    ctx[64].date + ""
  );
  let t23;
  let t24;
  let t25;
  let t26;
  let t27;
  function select_block_type_1(ctx2, dirty) {
    if (
      /*rekidai*/
      ctx2[64].scoreResult == null
    )
      return create_if_block_15;
    return create_else_block_6;
  }
  let current_block_type = select_block_type_1(ctx);
  let if_block0 = current_block_type(ctx);
  function select_block_type_2(ctx2, dirty) {
    if (
      /*rekidai*/
      ctx2[64].textage == null
    )
      return create_if_block_14;
    return create_else_block_5;
  }
  let current_block_type_1 = select_block_type_2(ctx);
  let if_block1 = current_block_type_1(ctx);
  function select_block_type_3(ctx2, dirty) {
    if (
      /*rekidai*/
      ctx2[64].musicMovie == null
    )
      return create_if_block_13;
    return create_else_block_4;
  }
  let current_block_type_2 = select_block_type_3(ctx);
  let if_block2 = current_block_type_2(ctx);
  function select_block_type_4(ctx2, dirty) {
    if (
      /*rekidai*/
      ctx2[64].superCharge
    )
      return create_if_block_11;
    if (
      /*rekidai*/
      ctx2[64].charge
    )
      return create_if_block_12;
    return create_else_block_3;
  }
  let current_block_type_3 = select_block_type_4(ctx);
  let if_block3 = current_block_type_3(ctx);
  function select_block_type_5(ctx2, dirty) {
    if (
      /*rekidai*/
      ctx2[64].superPeak
    )
      return create_if_block_9;
    if (
      /*rekidai*/
      ctx2[64].peak
    )
      return create_if_block_10;
    return create_else_block_2;
  }
  let current_block_type_4 = select_block_type_5(ctx);
  let if_block4 = current_block_type_4(ctx);
  function select_block_type_6(ctx2, dirty) {
    if (
      /*rekidai*/
      ctx2[64].superScratch
    )
      return create_if_block_7;
    if (
      /*rekidai*/
      ctx2[64].scratch
    )
      return create_if_block_8;
    return create_else_block_1;
  }
  let current_block_type_5 = select_block_type_6(ctx);
  let if_block5 = current_block_type_5(ctx);
  function select_block_type_7(ctx2, dirty) {
    if (
      /*rekidai*/
      ctx2[64].superSoflan
    )
      return create_if_block_5;
    if (
      /*rekidai*/
      ctx2[64].soflan
    )
      return create_if_block_6;
    return create_else_block;
  }
  let current_block_type_6 = select_block_type_7(ctx);
  let if_block6 = current_block_type_6(ctx);
  let if_block7 = (
    /*rekidai*/
    ctx[64].musicKR != null && create_if_block_4(ctx)
  );
  let if_block8 = (
    /*rekidai*/
    ctx[64].musicEN != null && create_if_block_3(ctx)
  );
  let if_block9 = (
    /*rekidai*/
    ctx[64].musicJP != null && create_if_block_2(ctx)
  );
  return {
    key: key_1,
    first: null,
    c() {
      tr = element("tr");
      if_block0.c();
      t0 = space();
      td0 = element("td");
      t1 = text(t1_value);
      t2 = space();
      td1 = element("td");
      t3 = text(t3_value);
      t4 = space();
      td2 = element("td");
      t5 = text(t5_value);
      t6 = space();
      td3 = element("td");
      t7 = text(t7_value);
      t8 = space();
      td4 = element("td");
      t9 = text(t9_value);
      t10 = space();
      td5 = element("td");
      t11 = text(t11_value);
      t12 = space();
      if_block1.c();
      t13 = space();
      if_block2.c();
      t14 = space();
      td6 = element("td");
      t15 = text(t15_value);
      t16 = space();
      if_block3.c();
      t17 = space();
      if_block4.c();
      t18 = space();
      if_block5.c();
      t19 = space();
      if_block6.c();
      t20 = space();
      td7 = element("td");
      t21 = text(t21_value);
      t22 = space();
      td8 = element("td");
      t23 = text(t23_value);
      t24 = space();
      if (if_block7)
        if_block7.c();
      t25 = space();
      if (if_block8)
        if_block8.c();
      t26 = space();
      if (if_block9)
        if_block9.c();
      t27 = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      if_block0.l(tr_nodes);
      t0 = claim_space(tr_nodes);
      td0 = claim_element(tr_nodes, "TD", { style: true });
      var td0_nodes = children(td0);
      t1 = claim_text(td0_nodes, t1_value);
      td0_nodes.forEach(detach);
      t2 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", { style: true, "data-sort": true });
      var td1_nodes = children(td1);
      t3 = claim_text(td1_nodes, t3_value);
      td1_nodes.forEach(detach);
      t4 = claim_space(tr_nodes);
      td2 = claim_element(tr_nodes, "TD", { "data-player": true, class: true });
      var td2_nodes = children(td2);
      t5 = claim_text(td2_nodes, t5_value);
      td2_nodes.forEach(detach);
      t6 = claim_space(tr_nodes);
      td3 = claim_element(tr_nodes, "TD", { style: true });
      var td3_nodes = children(td3);
      t7 = claim_text(td3_nodes, t7_value);
      td3_nodes.forEach(detach);
      t8 = claim_space(tr_nodes);
      td4 = claim_element(tr_nodes, "TD", { style: true });
      var td4_nodes = children(td4);
      t9 = claim_text(td4_nodes, t9_value);
      td4_nodes.forEach(detach);
      t10 = claim_space(tr_nodes);
      td5 = claim_element(tr_nodes, "TD", { style: true });
      var td5_nodes = children(td5);
      t11 = claim_text(td5_nodes, t11_value);
      td5_nodes.forEach(detach);
      t12 = claim_space(tr_nodes);
      if_block1.l(tr_nodes);
      t13 = claim_space(tr_nodes);
      if_block2.l(tr_nodes);
      t14 = claim_space(tr_nodes);
      td6 = claim_element(tr_nodes, "TD", {});
      var td6_nodes = children(td6);
      t15 = claim_text(td6_nodes, t15_value);
      td6_nodes.forEach(detach);
      t16 = claim_space(tr_nodes);
      if_block3.l(tr_nodes);
      t17 = claim_space(tr_nodes);
      if_block4.l(tr_nodes);
      t18 = claim_space(tr_nodes);
      if_block5.l(tr_nodes);
      t19 = claim_space(tr_nodes);
      if_block6.l(tr_nodes);
      t20 = claim_space(tr_nodes);
      td7 = claim_element(tr_nodes, "TD", {});
      var td7_nodes = children(td7);
      t21 = claim_text(td7_nodes, t21_value);
      td7_nodes.forEach(detach);
      t22 = claim_space(tr_nodes);
      td8 = claim_element(tr_nodes, "TD", { style: true });
      var td8_nodes = children(td8);
      t23 = claim_text(td8_nodes, t23_value);
      td8_nodes.forEach(detach);
      t24 = claim_space(tr_nodes);
      if (if_block7)
        if_block7.l(tr_nodes);
      t25 = claim_space(tr_nodes);
      if (if_block8)
        if_block8.l(tr_nodes);
      t26 = claim_space(tr_nodes);
      if (if_block9)
        if_block9.l(tr_nodes);
      t27 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(td0, "text-align", "center");
      set_style(td1, "text-align", "center");
      attr(td1, "data-sort", td1_data_sort_value = calcMaxMinus(
        /*rekidai*/
        ctx[64].notes,
        /*rekidai*/
        ctx[64].score
      ));
      attr(td2, "data-player", td2_data_player_value = /*rekidai*/
      ctx[64].player);
      attr(td2, "class", "svelte-19787ya");
      set_style(td3, "text-align", "center");
      set_style(td4, "text-align", "center");
      set_style(td5, "text-align", "center");
      set_style(td8, "text-align", "center");
      attr(tr, "class", "svelte-19787ya");
      this.first = tr;
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      if_block0.m(tr, null);
      append_hydration(tr, t0);
      append_hydration(tr, td0);
      append_hydration(td0, t1);
      append_hydration(tr, t2);
      append_hydration(tr, td1);
      append_hydration(td1, t3);
      append_hydration(tr, t4);
      append_hydration(tr, td2);
      append_hydration(td2, t5);
      append_hydration(tr, t6);
      append_hydration(tr, td3);
      append_hydration(td3, t7);
      append_hydration(tr, t8);
      append_hydration(tr, td4);
      append_hydration(td4, t9);
      append_hydration(tr, t10);
      append_hydration(tr, td5);
      append_hydration(td5, t11);
      append_hydration(tr, t12);
      if_block1.m(tr, null);
      append_hydration(tr, t13);
      if_block2.m(tr, null);
      append_hydration(tr, t14);
      append_hydration(tr, td6);
      append_hydration(td6, t15);
      append_hydration(tr, t16);
      if_block3.m(tr, null);
      append_hydration(tr, t17);
      if_block4.m(tr, null);
      append_hydration(tr, t18);
      if_block5.m(tr, null);
      append_hydration(tr, t19);
      if_block6.m(tr, null);
      append_hydration(tr, t20);
      append_hydration(tr, td7);
      append_hydration(td7, t21);
      append_hydration(tr, t22);
      append_hydration(tr, td8);
      append_hydration(td8, t23);
      append_hydration(tr, t24);
      if (if_block7)
        if_block7.m(tr, null);
      append_hydration(tr, t25);
      if (if_block8)
        if_block8.m(tr, null);
      append_hydration(tr, t26);
      if (if_block9)
        if_block9.m(tr, null);
      append_hydration(tr, t27);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (current_block_type === (current_block_type = select_block_type_1(ctx)) && if_block0) {
        if_block0.p(ctx, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx);
        if (if_block0) {
          if_block0.c();
          if_block0.m(tr, t0);
        }
      }
      if (dirty[0] & /*list*/
      2 && t1_value !== (t1_value = /*rekidai*/
      ctx[64].score + ""))
        set_data(t1, t1_value);
      if (dirty[0] & /*list*/
      2 && t3_value !== (t3_value = calcRecord(
        /*rekidai*/
        ctx[64].notes,
        /*rekidai*/
        ctx[64].score
      ) + ""))
        set_data(t3, t3_value);
      if (dirty[0] & /*list*/
      2 && td1_data_sort_value !== (td1_data_sort_value = calcMaxMinus(
        /*rekidai*/
        ctx[64].notes,
        /*rekidai*/
        ctx[64].score
      ))) {
        attr(td1, "data-sort", td1_data_sort_value);
      }
      if (dirty[0] & /*list*/
      2 && t5_value !== (t5_value = /*rekidai*/
      ctx[64].player + ""))
        set_data(t5, t5_value);
      if (dirty[0] & /*list*/
      2 && td2_data_player_value !== (td2_data_player_value = /*rekidai*/
      ctx[64].player)) {
        attr(td2, "data-player", td2_data_player_value);
      }
      if (dirty[0] & /*list*/
      2 && t7_value !== (t7_value = calcRate(
        /*rekidai*/
        ctx[64].notes,
        /*rekidai*/
        ctx[64].score
      ) + ""))
        set_data(t7, t7_value);
      if (dirty[0] & /*list*/
      2 && t9_value !== (t9_value = calcRatePlus(
        /*rekidai*/
        ctx[64].notes,
        /*rekidai*/
        ctx[64].score
      ) + ""))
        set_data(t9, t9_value);
      if (dirty[0] & /*list*/
      2 && t11_value !== (t11_value = calcRateMinus(
        /*rekidai*/
        ctx[64].notes,
        /*rekidai*/
        ctx[64].score
      ) + ""))
        set_data(t11, t11_value);
      if (current_block_type_1 === (current_block_type_1 = select_block_type_2(ctx)) && if_block1) {
        if_block1.p(ctx, dirty);
      } else {
        if_block1.d(1);
        if_block1 = current_block_type_1(ctx);
        if (if_block1) {
          if_block1.c();
          if_block1.m(tr, t13);
        }
      }
      if (current_block_type_2 === (current_block_type_2 = select_block_type_3(ctx)) && if_block2) {
        if_block2.p(ctx, dirty);
      } else {
        if_block2.d(1);
        if_block2 = current_block_type_2(ctx);
        if (if_block2) {
          if_block2.c();
          if_block2.m(tr, t14);
        }
      }
      if (dirty[0] & /*list*/
      2 && t15_value !== (t15_value = /*rekidai*/
      ctx[64].topVersion + ""))
        set_data(t15, t15_value);
      if (current_block_type_3 !== (current_block_type_3 = select_block_type_4(ctx))) {
        if_block3.d(1);
        if_block3 = current_block_type_3(ctx);
        if (if_block3) {
          if_block3.c();
          if_block3.m(tr, t17);
        }
      }
      if (current_block_type_4 !== (current_block_type_4 = select_block_type_5(ctx))) {
        if_block4.d(1);
        if_block4 = current_block_type_4(ctx);
        if (if_block4) {
          if_block4.c();
          if_block4.m(tr, t18);
        }
      }
      if (current_block_type_5 !== (current_block_type_5 = select_block_type_6(ctx))) {
        if_block5.d(1);
        if_block5 = current_block_type_5(ctx);
        if (if_block5) {
          if_block5.c();
          if_block5.m(tr, t19);
        }
      }
      if (current_block_type_6 !== (current_block_type_6 = select_block_type_7(ctx))) {
        if_block6.d(1);
        if_block6 = current_block_type_6(ctx);
        if (if_block6) {
          if_block6.c();
          if_block6.m(tr, t20);
        }
      }
      if (dirty[0] & /*list*/
      2 && t21_value !== (t21_value = /*rekidai*/
      ctx[64].version + ""))
        set_data(t21, t21_value);
      if (dirty[0] & /*list*/
      2 && t23_value !== (t23_value = /*rekidai*/
      ctx[64].date + ""))
        set_data(t23, t23_value);
      if (
        /*rekidai*/
        ctx[64].musicKR != null
      ) {
        if (if_block7) {
          if_block7.p(ctx, dirty);
        } else {
          if_block7 = create_if_block_4(ctx);
          if_block7.c();
          if_block7.m(tr, t25);
        }
      } else if (if_block7) {
        if_block7.d(1);
        if_block7 = null;
      }
      if (
        /*rekidai*/
        ctx[64].musicEN != null
      ) {
        if (if_block8) {
          if_block8.p(ctx, dirty);
        } else {
          if_block8 = create_if_block_3(ctx);
          if_block8.c();
          if_block8.m(tr, t26);
        }
      } else if (if_block8) {
        if_block8.d(1);
        if_block8 = null;
      }
      if (
        /*rekidai*/
        ctx[64].musicJP != null
      ) {
        if (if_block9) {
          if_block9.p(ctx, dirty);
        } else {
          if_block9 = create_if_block_2(ctx);
          if_block9.c();
          if_block9.m(tr, t27);
        }
      } else if (if_block9) {
        if_block9.d(1);
        if_block9 = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(tr);
      if_block0.d();
      if_block1.d();
      if_block2.d();
      if_block3.d();
      if_block4.d();
      if_block5.d();
      if_block6.d();
      if (if_block7)
        if_block7.d();
      if (if_block8)
        if_block8.d();
      if (if_block9)
        if_block9.d();
    }
  };
}
function create_each_block_13(key_1, ctx) {
  let tr;
  let td0;
  let t0_value = (
    /*topRanker*/
    ctx[61].rank + ""
  );
  let t0;
  let t1;
  let td1;
  let t2_value = (
    /*topRanker*/
    ctx[61].player + ""
  );
  let t2;
  let t3;
  let td2;
  let t4_value = (
    /*topRanker*/
    ctx[61].counts + ""
  );
  let t4;
  let t5;
  let td3;
  let t6_value = Number(
    /*topRanker*/
    ctx[61].percentage
  ).toFixed(2) + "%";
  let t6;
  let td3_data_sort_value;
  let t7;
  return {
    key: key_1,
    first: null,
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
      td3 = element("td");
      t6 = text(t6_value);
      t7 = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {});
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
      td0_nodes.forEach(detach);
      t1 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", {});
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, t2_value);
      td1_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      td2 = claim_element(tr_nodes, "TD", {});
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach);
      t5 = claim_space(tr_nodes);
      td3 = claim_element(tr_nodes, "TD", { "data-sort": true });
      var td3_nodes = children(td3);
      t6 = claim_text(td3_nodes, t6_value);
      td3_nodes.forEach(detach);
      t7 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td3, "data-sort", td3_data_sort_value = /*topRanker*/
      ctx[61].percentage);
      attr(tr, "class", "svelte-19787ya");
      this.first = tr;
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td0);
      append_hydration(td0, t0);
      append_hydration(tr, t1);
      append_hydration(tr, td1);
      append_hydration(td1, t2);
      append_hydration(tr, t3);
      append_hydration(tr, td2);
      append_hydration(td2, t4);
      append_hydration(tr, t5);
      append_hydration(tr, td3);
      append_hydration(td3, t6);
      append_hydration(tr, t7);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*topRankersSort*/
      8 && t0_value !== (t0_value = /*topRanker*/
      ctx[61].rank + ""))
        set_data(t0, t0_value);
      if (dirty[0] & /*topRankersSort*/
      8 && t2_value !== (t2_value = /*topRanker*/
      ctx[61].player + ""))
        set_data(t2, t2_value);
      if (dirty[0] & /*topRankersSort*/
      8 && t4_value !== (t4_value = /*topRanker*/
      ctx[61].counts + ""))
        set_data(t4, t4_value);
      if (dirty[0] & /*topRankersSort*/
      8 && t6_value !== (t6_value = Number(
        /*topRanker*/
        ctx[61].percentage
      ).toFixed(2) + "%"))
        set_data(t6, t6_value);
      if (dirty[0] & /*topRankersSort*/
      8 && td3_data_sort_value !== (td3_data_sort_value = /*topRanker*/
      ctx[61].percentage)) {
        attr(td3, "data-sort", td3_data_sort_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(tr);
    }
  };
}
function create_each_block_12(key_1, ctx) {
  let tr;
  let td0;
  let t0_value = (
    /*topVersion*/
    ctx[58].rank + ""
  );
  let t0;
  let t1;
  let td1;
  let t2_value = (
    /*topVersion*/
    ctx[58].version + ""
  );
  let t2;
  let t3;
  let td2;
  let t4_value = (
    /*topVersion*/
    ctx[58].counts + ""
  );
  let t4;
  let t5;
  let td3;
  let t6_value = Number(
    /*topVersion*/
    ctx[58].percentage
  ).toFixed(2) + "%";
  let t6;
  let td3_data_sort_value;
  let t7;
  return {
    key: key_1,
    first: null,
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
      td3 = element("td");
      t6 = text(t6_value);
      t7 = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {});
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
      td0_nodes.forEach(detach);
      t1 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", {});
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, t2_value);
      td1_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      td2 = claim_element(tr_nodes, "TD", {});
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach);
      t5 = claim_space(tr_nodes);
      td3 = claim_element(tr_nodes, "TD", { "data-sort": true });
      var td3_nodes = children(td3);
      t6 = claim_text(td3_nodes, t6_value);
      td3_nodes.forEach(detach);
      t7 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td3, "data-sort", td3_data_sort_value = /*topVersion*/
      ctx[58].percentage);
      attr(tr, "class", "svelte-19787ya");
      this.first = tr;
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td0);
      append_hydration(td0, t0);
      append_hydration(tr, t1);
      append_hydration(tr, td1);
      append_hydration(td1, t2);
      append_hydration(tr, t3);
      append_hydration(tr, td2);
      append_hydration(td2, t4);
      append_hydration(tr, t5);
      append_hydration(tr, td3);
      append_hydration(td3, t6);
      append_hydration(tr, t7);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*topVersionsSort*/
      16 && t0_value !== (t0_value = /*topVersion*/
      ctx[58].rank + ""))
        set_data(t0, t0_value);
      if (dirty[0] & /*topVersionsSort*/
      16 && t2_value !== (t2_value = /*topVersion*/
      ctx[58].version + ""))
        set_data(t2, t2_value);
      if (dirty[0] & /*topVersionsSort*/
      16 && t4_value !== (t4_value = /*topVersion*/
      ctx[58].counts + ""))
        set_data(t4, t4_value);
      if (dirty[0] & /*topVersionsSort*/
      16 && t6_value !== (t6_value = Number(
        /*topVersion*/
        ctx[58].percentage
      ).toFixed(2) + "%"))
        set_data(t6, t6_value);
      if (dirty[0] & /*topVersionsSort*/
      16 && td3_data_sort_value !== (td3_data_sort_value = /*topVersion*/
      ctx[58].percentage)) {
        attr(td3, "data-sort", td3_data_sort_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(tr);
    }
  };
}
function create_each_block_11(key_1, ctx) {
  let tr;
  let td0;
  let t0_value = (
    /*topCharge*/
    ctx[17].rank + ""
  );
  let t0;
  let t1;
  let td1;
  let t2_value = (
    /*topCharge*/
    ctx[17].player + ""
  );
  let t2;
  let t3;
  let td2;
  let t4_value = (
    /*topCharge*/
    ctx[17].counts + ""
  );
  let t4;
  let t5;
  let td3;
  let t6_value = Number(
    /*topCharge*/
    ctx[17].percentage
  ).toFixed(2) + "%";
  let t6;
  let td3_data_sort_value;
  let t7;
  return {
    key: key_1,
    first: null,
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
      td3 = element("td");
      t6 = text(t6_value);
      t7 = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {});
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
      td0_nodes.forEach(detach);
      t1 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", {});
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, t2_value);
      td1_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      td2 = claim_element(tr_nodes, "TD", {});
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach);
      t5 = claim_space(tr_nodes);
      td3 = claim_element(tr_nodes, "TD", { "data-sort": true });
      var td3_nodes = children(td3);
      t6 = claim_text(td3_nodes, t6_value);
      td3_nodes.forEach(detach);
      t7 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td3, "data-sort", td3_data_sort_value = /*topCharge*/
      ctx[17].percentage);
      attr(tr, "class", "svelte-19787ya");
      this.first = tr;
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td0);
      append_hydration(td0, t0);
      append_hydration(tr, t1);
      append_hydration(tr, td1);
      append_hydration(td1, t2);
      append_hydration(tr, t3);
      append_hydration(tr, td2);
      append_hydration(td2, t4);
      append_hydration(tr, t5);
      append_hydration(tr, td3);
      append_hydration(td3, t6);
      append_hydration(tr, t7);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*topChargeSort*/
      32 && t0_value !== (t0_value = /*topCharge*/
      ctx[17].rank + ""))
        set_data(t0, t0_value);
      if (dirty[0] & /*topChargeSort*/
      32 && t2_value !== (t2_value = /*topCharge*/
      ctx[17].player + ""))
        set_data(t2, t2_value);
      if (dirty[0] & /*topChargeSort*/
      32 && t4_value !== (t4_value = /*topCharge*/
      ctx[17].counts + ""))
        set_data(t4, t4_value);
      if (dirty[0] & /*topChargeSort*/
      32 && t6_value !== (t6_value = Number(
        /*topCharge*/
        ctx[17].percentage
      ).toFixed(2) + "%"))
        set_data(t6, t6_value);
      if (dirty[0] & /*topChargeSort*/
      32 && td3_data_sort_value !== (td3_data_sort_value = /*topCharge*/
      ctx[17].percentage)) {
        attr(td3, "data-sort", td3_data_sort_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(tr);
    }
  };
}
function create_each_block_10(key_1, ctx) {
  let tr;
  let td0;
  let t0_value = (
    /*topPeak*/
    ctx[18].rank + ""
  );
  let t0;
  let t1;
  let td1;
  let t2_value = (
    /*topPeak*/
    ctx[18].player + ""
  );
  let t2;
  let t3;
  let td2;
  let t4_value = (
    /*topPeak*/
    ctx[18].counts + ""
  );
  let t4;
  let t5;
  let td3;
  let t6_value = Number(
    /*topPeak*/
    ctx[18].percentage
  ).toFixed(2) + "%";
  let t6;
  let td3_data_sort_value;
  let t7;
  return {
    key: key_1,
    first: null,
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
      td3 = element("td");
      t6 = text(t6_value);
      t7 = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {});
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
      td0_nodes.forEach(detach);
      t1 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", {});
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, t2_value);
      td1_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      td2 = claim_element(tr_nodes, "TD", {});
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach);
      t5 = claim_space(tr_nodes);
      td3 = claim_element(tr_nodes, "TD", { "data-sort": true });
      var td3_nodes = children(td3);
      t6 = claim_text(td3_nodes, t6_value);
      td3_nodes.forEach(detach);
      t7 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td3, "data-sort", td3_data_sort_value = /*topPeak*/
      ctx[18].percentage);
      attr(tr, "class", "svelte-19787ya");
      this.first = tr;
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td0);
      append_hydration(td0, t0);
      append_hydration(tr, t1);
      append_hydration(tr, td1);
      append_hydration(td1, t2);
      append_hydration(tr, t3);
      append_hydration(tr, td2);
      append_hydration(td2, t4);
      append_hydration(tr, t5);
      append_hydration(tr, td3);
      append_hydration(td3, t6);
      append_hydration(tr, t7);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*topPeakSort*/
      64 && t0_value !== (t0_value = /*topPeak*/
      ctx[18].rank + ""))
        set_data(t0, t0_value);
      if (dirty[0] & /*topPeakSort*/
      64 && t2_value !== (t2_value = /*topPeak*/
      ctx[18].player + ""))
        set_data(t2, t2_value);
      if (dirty[0] & /*topPeakSort*/
      64 && t4_value !== (t4_value = /*topPeak*/
      ctx[18].counts + ""))
        set_data(t4, t4_value);
      if (dirty[0] & /*topPeakSort*/
      64 && t6_value !== (t6_value = Number(
        /*topPeak*/
        ctx[18].percentage
      ).toFixed(2) + "%"))
        set_data(t6, t6_value);
      if (dirty[0] & /*topPeakSort*/
      64 && td3_data_sort_value !== (td3_data_sort_value = /*topPeak*/
      ctx[18].percentage)) {
        attr(td3, "data-sort", td3_data_sort_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(tr);
    }
  };
}
function create_each_block_9(key_1, ctx) {
  let tr;
  let td0;
  let t0_value = (
    /*topScratch*/
    ctx[19].rank + ""
  );
  let t0;
  let t1;
  let td1;
  let t2_value = (
    /*topScratch*/
    ctx[19].player + ""
  );
  let t2;
  let t3;
  let td2;
  let t4_value = (
    /*topScratch*/
    ctx[19].counts + ""
  );
  let t4;
  let t5;
  let td3;
  let t6_value = Number(
    /*topScratch*/
    ctx[19].percentage
  ).toFixed(2) + "%";
  let t6;
  let td3_data_sort_value;
  let t7;
  return {
    key: key_1,
    first: null,
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
      td3 = element("td");
      t6 = text(t6_value);
      t7 = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {});
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
      td0_nodes.forEach(detach);
      t1 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", {});
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, t2_value);
      td1_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      td2 = claim_element(tr_nodes, "TD", {});
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach);
      t5 = claim_space(tr_nodes);
      td3 = claim_element(tr_nodes, "TD", { "data-sort": true });
      var td3_nodes = children(td3);
      t6 = claim_text(td3_nodes, t6_value);
      td3_nodes.forEach(detach);
      t7 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td3, "data-sort", td3_data_sort_value = /*topScratch*/
      ctx[19].percentage);
      attr(tr, "class", "svelte-19787ya");
      this.first = tr;
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td0);
      append_hydration(td0, t0);
      append_hydration(tr, t1);
      append_hydration(tr, td1);
      append_hydration(td1, t2);
      append_hydration(tr, t3);
      append_hydration(tr, td2);
      append_hydration(td2, t4);
      append_hydration(tr, t5);
      append_hydration(tr, td3);
      append_hydration(td3, t6);
      append_hydration(tr, t7);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*topScratchSort*/
      128 && t0_value !== (t0_value = /*topScratch*/
      ctx[19].rank + ""))
        set_data(t0, t0_value);
      if (dirty[0] & /*topScratchSort*/
      128 && t2_value !== (t2_value = /*topScratch*/
      ctx[19].player + ""))
        set_data(t2, t2_value);
      if (dirty[0] & /*topScratchSort*/
      128 && t4_value !== (t4_value = /*topScratch*/
      ctx[19].counts + ""))
        set_data(t4, t4_value);
      if (dirty[0] & /*topScratchSort*/
      128 && t6_value !== (t6_value = Number(
        /*topScratch*/
        ctx[19].percentage
      ).toFixed(2) + "%"))
        set_data(t6, t6_value);
      if (dirty[0] & /*topScratchSort*/
      128 && td3_data_sort_value !== (td3_data_sort_value = /*topScratch*/
      ctx[19].percentage)) {
        attr(td3, "data-sort", td3_data_sort_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(tr);
    }
  };
}
function create_each_block_8(key_1, ctx) {
  let tr;
  let td0;
  let t0_value = (
    /*topSoflan*/
    ctx[20].rank + ""
  );
  let t0;
  let t1;
  let td1;
  let t2_value = (
    /*topSoflan*/
    ctx[20].player + ""
  );
  let t2;
  let t3;
  let td2;
  let t4_value = (
    /*topSoflan*/
    ctx[20].counts + ""
  );
  let t4;
  let t5;
  let td3;
  let t6_value = Number(
    /*topSoflan*/
    ctx[20].percentage
  ).toFixed(2) + "%";
  let t6;
  let td3_data_sort_value;
  let t7;
  return {
    key: key_1,
    first: null,
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
      td3 = element("td");
      t6 = text(t6_value);
      t7 = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {});
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
      td0_nodes.forEach(detach);
      t1 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", {});
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, t2_value);
      td1_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      td2 = claim_element(tr_nodes, "TD", {});
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach);
      t5 = claim_space(tr_nodes);
      td3 = claim_element(tr_nodes, "TD", { "data-sort": true });
      var td3_nodes = children(td3);
      t6 = claim_text(td3_nodes, t6_value);
      td3_nodes.forEach(detach);
      t7 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td3, "data-sort", td3_data_sort_value = /*topSoflan*/
      ctx[20].percentage);
      attr(tr, "class", "svelte-19787ya");
      this.first = tr;
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td0);
      append_hydration(td0, t0);
      append_hydration(tr, t1);
      append_hydration(tr, td1);
      append_hydration(td1, t2);
      append_hydration(tr, t3);
      append_hydration(tr, td2);
      append_hydration(td2, t4);
      append_hydration(tr, t5);
      append_hydration(tr, td3);
      append_hydration(td3, t6);
      append_hydration(tr, t7);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*topSoflanSort*/
      256 && t0_value !== (t0_value = /*topSoflan*/
      ctx[20].rank + ""))
        set_data(t0, t0_value);
      if (dirty[0] & /*topSoflanSort*/
      256 && t2_value !== (t2_value = /*topSoflan*/
      ctx[20].player + ""))
        set_data(t2, t2_value);
      if (dirty[0] & /*topSoflanSort*/
      256 && t4_value !== (t4_value = /*topSoflan*/
      ctx[20].counts + ""))
        set_data(t4, t4_value);
      if (dirty[0] & /*topSoflanSort*/
      256 && t6_value !== (t6_value = Number(
        /*topSoflan*/
        ctx[20].percentage
      ).toFixed(2) + "%"))
        set_data(t6, t6_value);
      if (dirty[0] & /*topSoflanSort*/
      256 && td3_data_sort_value !== (td3_data_sort_value = /*topSoflan*/
      ctx[20].percentage)) {
        attr(td3, "data-sort", td3_data_sort_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(tr);
    }
  };
}
function create_each_block_7(key_1, ctx) {
  let tr;
  let td0;
  let t0_value = (
    /*topSuperCharge*/
    ctx[21].rank + ""
  );
  let t0;
  let t1;
  let td1;
  let t2_value = (
    /*topSuperCharge*/
    ctx[21].player + ""
  );
  let t2;
  let t3;
  let td2;
  let t4_value = (
    /*topSuperCharge*/
    ctx[21].counts + ""
  );
  let t4;
  let t5;
  let td3;
  let t6_value = Number(
    /*topSuperCharge*/
    ctx[21].percentage
  ).toFixed(2) + "%";
  let t6;
  let td3_data_sort_value;
  let t7;
  return {
    key: key_1,
    first: null,
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
      td3 = element("td");
      t6 = text(t6_value);
      t7 = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {});
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
      td0_nodes.forEach(detach);
      t1 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", {});
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, t2_value);
      td1_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      td2 = claim_element(tr_nodes, "TD", {});
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach);
      t5 = claim_space(tr_nodes);
      td3 = claim_element(tr_nodes, "TD", { "data-sort": true });
      var td3_nodes = children(td3);
      t6 = claim_text(td3_nodes, t6_value);
      td3_nodes.forEach(detach);
      t7 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td3, "data-sort", td3_data_sort_value = /*topSuperCharge*/
      ctx[21].percentage);
      attr(tr, "class", "svelte-19787ya");
      this.first = tr;
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td0);
      append_hydration(td0, t0);
      append_hydration(tr, t1);
      append_hydration(tr, td1);
      append_hydration(td1, t2);
      append_hydration(tr, t3);
      append_hydration(tr, td2);
      append_hydration(td2, t4);
      append_hydration(tr, t5);
      append_hydration(tr, td3);
      append_hydration(td3, t6);
      append_hydration(tr, t7);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*topSuperChargeSort*/
      512 && t0_value !== (t0_value = /*topSuperCharge*/
      ctx[21].rank + ""))
        set_data(t0, t0_value);
      if (dirty[0] & /*topSuperChargeSort*/
      512 && t2_value !== (t2_value = /*topSuperCharge*/
      ctx[21].player + ""))
        set_data(t2, t2_value);
      if (dirty[0] & /*topSuperChargeSort*/
      512 && t4_value !== (t4_value = /*topSuperCharge*/
      ctx[21].counts + ""))
        set_data(t4, t4_value);
      if (dirty[0] & /*topSuperChargeSort*/
      512 && t6_value !== (t6_value = Number(
        /*topSuperCharge*/
        ctx[21].percentage
      ).toFixed(2) + "%"))
        set_data(t6, t6_value);
      if (dirty[0] & /*topSuperChargeSort*/
      512 && td3_data_sort_value !== (td3_data_sort_value = /*topSuperCharge*/
      ctx[21].percentage)) {
        attr(td3, "data-sort", td3_data_sort_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(tr);
    }
  };
}
function create_each_block_6(key_1, ctx) {
  let tr;
  let td0;
  let t0_value = (
    /*topSuperPeak*/
    ctx[22].rank + ""
  );
  let t0;
  let t1;
  let td1;
  let t2_value = (
    /*topSuperPeak*/
    ctx[22].player + ""
  );
  let t2;
  let t3;
  let td2;
  let t4_value = (
    /*topSuperPeak*/
    ctx[22].counts + ""
  );
  let t4;
  let t5;
  let td3;
  let t6_value = Number(
    /*topSuperPeak*/
    ctx[22].percentage
  ).toFixed(2) + "%";
  let t6;
  let td3_data_sort_value;
  let t7;
  return {
    key: key_1,
    first: null,
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
      td3 = element("td");
      t6 = text(t6_value);
      t7 = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {});
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
      td0_nodes.forEach(detach);
      t1 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", {});
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, t2_value);
      td1_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      td2 = claim_element(tr_nodes, "TD", {});
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach);
      t5 = claim_space(tr_nodes);
      td3 = claim_element(tr_nodes, "TD", { "data-sort": true });
      var td3_nodes = children(td3);
      t6 = claim_text(td3_nodes, t6_value);
      td3_nodes.forEach(detach);
      t7 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td3, "data-sort", td3_data_sort_value = /*topSuperPeak*/
      ctx[22].percentage);
      attr(tr, "class", "svelte-19787ya");
      this.first = tr;
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td0);
      append_hydration(td0, t0);
      append_hydration(tr, t1);
      append_hydration(tr, td1);
      append_hydration(td1, t2);
      append_hydration(tr, t3);
      append_hydration(tr, td2);
      append_hydration(td2, t4);
      append_hydration(tr, t5);
      append_hydration(tr, td3);
      append_hydration(td3, t6);
      append_hydration(tr, t7);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*topSuperPeakSort*/
      1024 && t0_value !== (t0_value = /*topSuperPeak*/
      ctx[22].rank + ""))
        set_data(t0, t0_value);
      if (dirty[0] & /*topSuperPeakSort*/
      1024 && t2_value !== (t2_value = /*topSuperPeak*/
      ctx[22].player + ""))
        set_data(t2, t2_value);
      if (dirty[0] & /*topSuperPeakSort*/
      1024 && t4_value !== (t4_value = /*topSuperPeak*/
      ctx[22].counts + ""))
        set_data(t4, t4_value);
      if (dirty[0] & /*topSuperPeakSort*/
      1024 && t6_value !== (t6_value = Number(
        /*topSuperPeak*/
        ctx[22].percentage
      ).toFixed(2) + "%"))
        set_data(t6, t6_value);
      if (dirty[0] & /*topSuperPeakSort*/
      1024 && td3_data_sort_value !== (td3_data_sort_value = /*topSuperPeak*/
      ctx[22].percentage)) {
        attr(td3, "data-sort", td3_data_sort_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(tr);
    }
  };
}
function create_each_block_5(key_1, ctx) {
  let tr;
  let td0;
  let t0_value = (
    /*topSuperScratch*/
    ctx[23].rank + ""
  );
  let t0;
  let t1;
  let td1;
  let t2_value = (
    /*topSuperScratch*/
    ctx[23].player + ""
  );
  let t2;
  let t3;
  let td2;
  let t4_value = (
    /*topSuperScratch*/
    ctx[23].counts + ""
  );
  let t4;
  let t5;
  let td3;
  let t6_value = Number(
    /*topSuperScratch*/
    ctx[23].percentage
  ).toFixed(2) + "%";
  let t6;
  let td3_data_sort_value;
  let t7;
  return {
    key: key_1,
    first: null,
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
      td3 = element("td");
      t6 = text(t6_value);
      t7 = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {});
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
      td0_nodes.forEach(detach);
      t1 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", {});
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, t2_value);
      td1_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      td2 = claim_element(tr_nodes, "TD", {});
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach);
      t5 = claim_space(tr_nodes);
      td3 = claim_element(tr_nodes, "TD", { "data-sort": true });
      var td3_nodes = children(td3);
      t6 = claim_text(td3_nodes, t6_value);
      td3_nodes.forEach(detach);
      t7 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td3, "data-sort", td3_data_sort_value = /*topSuperScratch*/
      ctx[23].percentage);
      attr(tr, "class", "svelte-19787ya");
      this.first = tr;
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td0);
      append_hydration(td0, t0);
      append_hydration(tr, t1);
      append_hydration(tr, td1);
      append_hydration(td1, t2);
      append_hydration(tr, t3);
      append_hydration(tr, td2);
      append_hydration(td2, t4);
      append_hydration(tr, t5);
      append_hydration(tr, td3);
      append_hydration(td3, t6);
      append_hydration(tr, t7);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*topSuperScratchSort*/
      2048 && t0_value !== (t0_value = /*topSuperScratch*/
      ctx[23].rank + ""))
        set_data(t0, t0_value);
      if (dirty[0] & /*topSuperScratchSort*/
      2048 && t2_value !== (t2_value = /*topSuperScratch*/
      ctx[23].player + ""))
        set_data(t2, t2_value);
      if (dirty[0] & /*topSuperScratchSort*/
      2048 && t4_value !== (t4_value = /*topSuperScratch*/
      ctx[23].counts + ""))
        set_data(t4, t4_value);
      if (dirty[0] & /*topSuperScratchSort*/
      2048 && t6_value !== (t6_value = Number(
        /*topSuperScratch*/
        ctx[23].percentage
      ).toFixed(2) + "%"))
        set_data(t6, t6_value);
      if (dirty[0] & /*topSuperScratchSort*/
      2048 && td3_data_sort_value !== (td3_data_sort_value = /*topSuperScratch*/
      ctx[23].percentage)) {
        attr(td3, "data-sort", td3_data_sort_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(tr);
    }
  };
}
function create_each_block_4(key_1, ctx) {
  let tr;
  let td0;
  let t0_value = (
    /*topSuperSoflan*/
    ctx[24].rank + ""
  );
  let t0;
  let t1;
  let td1;
  let t2_value = (
    /*topSuperSoflan*/
    ctx[24].player + ""
  );
  let t2;
  let t3;
  let td2;
  let t4_value = (
    /*topSuperSoflan*/
    ctx[24].counts + ""
  );
  let t4;
  let t5;
  let td3;
  let t6_value = Number(
    /*topSuperSoflan*/
    ctx[24].percentage
  ).toFixed(2) + "%";
  let t6;
  let td3_data_sort_value;
  let t7;
  return {
    key: key_1,
    first: null,
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
      td3 = element("td");
      t6 = text(t6_value);
      t7 = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {});
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
      td0_nodes.forEach(detach);
      t1 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", {});
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, t2_value);
      td1_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      td2 = claim_element(tr_nodes, "TD", {});
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach);
      t5 = claim_space(tr_nodes);
      td3 = claim_element(tr_nodes, "TD", { "data-sort": true });
      var td3_nodes = children(td3);
      t6 = claim_text(td3_nodes, t6_value);
      td3_nodes.forEach(detach);
      t7 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td3, "data-sort", td3_data_sort_value = /*topSuperSoflan*/
      ctx[24].percentage);
      attr(tr, "class", "svelte-19787ya");
      this.first = tr;
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td0);
      append_hydration(td0, t0);
      append_hydration(tr, t1);
      append_hydration(tr, td1);
      append_hydration(td1, t2);
      append_hydration(tr, t3);
      append_hydration(tr, td2);
      append_hydration(td2, t4);
      append_hydration(tr, t5);
      append_hydration(tr, td3);
      append_hydration(td3, t6);
      append_hydration(tr, t7);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*topSuperSoflanSort*/
      4096 && t0_value !== (t0_value = /*topSuperSoflan*/
      ctx[24].rank + ""))
        set_data(t0, t0_value);
      if (dirty[0] & /*topSuperSoflanSort*/
      4096 && t2_value !== (t2_value = /*topSuperSoflan*/
      ctx[24].player + ""))
        set_data(t2, t2_value);
      if (dirty[0] & /*topSuperSoflanSort*/
      4096 && t4_value !== (t4_value = /*topSuperSoflan*/
      ctx[24].counts + ""))
        set_data(t4, t4_value);
      if (dirty[0] & /*topSuperSoflanSort*/
      4096 && t6_value !== (t6_value = Number(
        /*topSuperSoflan*/
        ctx[24].percentage
      ).toFixed(2) + "%"))
        set_data(t6, t6_value);
      if (dirty[0] & /*topSuperSoflanSort*/
      4096 && td3_data_sort_value !== (td3_data_sort_value = /*topSuperSoflan*/
      ctx[24].percentage)) {
        attr(td3, "data-sort", td3_data_sort_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(tr);
    }
  };
}
function create_each_block_3(key_1, ctx) {
  let tr;
  let td0;
  let t0_value = (
    /*topSlow*/
    ctx[25].rank + ""
  );
  let t0;
  let t1;
  let td1;
  let t2_value = (
    /*topSlow*/
    ctx[25].player + ""
  );
  let t2;
  let t3;
  let td2;
  let t4_value = (
    /*topSlow*/
    ctx[25].counts + ""
  );
  let t4;
  let t5;
  let td3;
  let t6_value = Number(
    /*topSlow*/
    ctx[25].percentage
  ).toFixed(2) + "%";
  let t6;
  let td3_data_sort_value;
  let t7;
  return {
    key: key_1,
    first: null,
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
      td3 = element("td");
      t6 = text(t6_value);
      t7 = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {});
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
      td0_nodes.forEach(detach);
      t1 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", {});
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, t2_value);
      td1_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      td2 = claim_element(tr_nodes, "TD", {});
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach);
      t5 = claim_space(tr_nodes);
      td3 = claim_element(tr_nodes, "TD", { "data-sort": true });
      var td3_nodes = children(td3);
      t6 = claim_text(td3_nodes, t6_value);
      td3_nodes.forEach(detach);
      t7 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td3, "data-sort", td3_data_sort_value = /*topSlow*/
      ctx[25].percentage);
      attr(tr, "class", "svelte-19787ya");
      this.first = tr;
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td0);
      append_hydration(td0, t0);
      append_hydration(tr, t1);
      append_hydration(tr, td1);
      append_hydration(td1, t2);
      append_hydration(tr, t3);
      append_hydration(tr, td2);
      append_hydration(td2, t4);
      append_hydration(tr, t5);
      append_hydration(tr, td3);
      append_hydration(td3, t6);
      append_hydration(tr, t7);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*topSlowSort*/
      8192 && t0_value !== (t0_value = /*topSlow*/
      ctx[25].rank + ""))
        set_data(t0, t0_value);
      if (dirty[0] & /*topSlowSort*/
      8192 && t2_value !== (t2_value = /*topSlow*/
      ctx[25].player + ""))
        set_data(t2, t2_value);
      if (dirty[0] & /*topSlowSort*/
      8192 && t4_value !== (t4_value = /*topSlow*/
      ctx[25].counts + ""))
        set_data(t4, t4_value);
      if (dirty[0] & /*topSlowSort*/
      8192 && t6_value !== (t6_value = Number(
        /*topSlow*/
        ctx[25].percentage
      ).toFixed(2) + "%"))
        set_data(t6, t6_value);
      if (dirty[0] & /*topSlowSort*/
      8192 && td3_data_sort_value !== (td3_data_sort_value = /*topSlow*/
      ctx[25].percentage)) {
        attr(td3, "data-sort", td3_data_sort_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(tr);
    }
  };
}
function create_each_block_2(key_1, ctx) {
  let tr;
  let td0;
  let t0_value = (
    /*topMid*/
    ctx[26].rank + ""
  );
  let t0;
  let t1;
  let td1;
  let t2_value = (
    /*topMid*/
    ctx[26].player + ""
  );
  let t2;
  let t3;
  let td2;
  let t4_value = (
    /*topMid*/
    ctx[26].counts + ""
  );
  let t4;
  let t5;
  let td3;
  let t6_value = Number(
    /*topMid*/
    ctx[26].percentage
  ).toFixed(2) + "%";
  let t6;
  let td3_data_sort_value;
  let t7;
  return {
    key: key_1,
    first: null,
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
      td3 = element("td");
      t6 = text(t6_value);
      t7 = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {});
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
      td0_nodes.forEach(detach);
      t1 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", {});
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, t2_value);
      td1_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      td2 = claim_element(tr_nodes, "TD", {});
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach);
      t5 = claim_space(tr_nodes);
      td3 = claim_element(tr_nodes, "TD", { "data-sort": true });
      var td3_nodes = children(td3);
      t6 = claim_text(td3_nodes, t6_value);
      td3_nodes.forEach(detach);
      t7 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td3, "data-sort", td3_data_sort_value = /*topMid*/
      ctx[26].percentage);
      attr(tr, "class", "svelte-19787ya");
      this.first = tr;
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td0);
      append_hydration(td0, t0);
      append_hydration(tr, t1);
      append_hydration(tr, td1);
      append_hydration(td1, t2);
      append_hydration(tr, t3);
      append_hydration(tr, td2);
      append_hydration(td2, t4);
      append_hydration(tr, t5);
      append_hydration(tr, td3);
      append_hydration(td3, t6);
      append_hydration(tr, t7);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*topMidSort*/
      16384 && t0_value !== (t0_value = /*topMid*/
      ctx[26].rank + ""))
        set_data(t0, t0_value);
      if (dirty[0] & /*topMidSort*/
      16384 && t2_value !== (t2_value = /*topMid*/
      ctx[26].player + ""))
        set_data(t2, t2_value);
      if (dirty[0] & /*topMidSort*/
      16384 && t4_value !== (t4_value = /*topMid*/
      ctx[26].counts + ""))
        set_data(t4, t4_value);
      if (dirty[0] & /*topMidSort*/
      16384 && t6_value !== (t6_value = Number(
        /*topMid*/
        ctx[26].percentage
      ).toFixed(2) + "%"))
        set_data(t6, t6_value);
      if (dirty[0] & /*topMidSort*/
      16384 && td3_data_sort_value !== (td3_data_sort_value = /*topMid*/
      ctx[26].percentage)) {
        attr(td3, "data-sort", td3_data_sort_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(tr);
    }
  };
}
function create_each_block_1(key_1, ctx) {
  let tr;
  let td0;
  let t0_value = (
    /*topFast*/
    ctx[27].rank + ""
  );
  let t0;
  let t1;
  let td1;
  let t2_value = (
    /*topFast*/
    ctx[27].player + ""
  );
  let t2;
  let t3;
  let td2;
  let t4_value = (
    /*topFast*/
    ctx[27].counts + ""
  );
  let t4;
  let t5;
  let td3;
  let t6_value = Number(
    /*topFast*/
    ctx[27].percentage
  ).toFixed(2) + "%";
  let t6;
  let td3_data_sort_value;
  let t7;
  return {
    key: key_1,
    first: null,
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
      td3 = element("td");
      t6 = text(t6_value);
      t7 = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {});
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
      td0_nodes.forEach(detach);
      t1 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", {});
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, t2_value);
      td1_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      td2 = claim_element(tr_nodes, "TD", {});
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach);
      t5 = claim_space(tr_nodes);
      td3 = claim_element(tr_nodes, "TD", { "data-sort": true });
      var td3_nodes = children(td3);
      t6 = claim_text(td3_nodes, t6_value);
      td3_nodes.forEach(detach);
      t7 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td3, "data-sort", td3_data_sort_value = /*topFast*/
      ctx[27].percentage);
      attr(tr, "class", "svelte-19787ya");
      this.first = tr;
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td0);
      append_hydration(td0, t0);
      append_hydration(tr, t1);
      append_hydration(tr, td1);
      append_hydration(td1, t2);
      append_hydration(tr, t3);
      append_hydration(tr, td2);
      append_hydration(td2, t4);
      append_hydration(tr, t5);
      append_hydration(tr, td3);
      append_hydration(td3, t6);
      append_hydration(tr, t7);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*topFastSort*/
      32768 && t0_value !== (t0_value = /*topFast*/
      ctx[27].rank + ""))
        set_data(t0, t0_value);
      if (dirty[0] & /*topFastSort*/
      32768 && t2_value !== (t2_value = /*topFast*/
      ctx[27].player + ""))
        set_data(t2, t2_value);
      if (dirty[0] & /*topFastSort*/
      32768 && t4_value !== (t4_value = /*topFast*/
      ctx[27].counts + ""))
        set_data(t4, t4_value);
      if (dirty[0] & /*topFastSort*/
      32768 && t6_value !== (t6_value = Number(
        /*topFast*/
        ctx[27].percentage
      ).toFixed(2) + "%"))
        set_data(t6, t6_value);
      if (dirty[0] & /*topFastSort*/
      32768 && td3_data_sort_value !== (td3_data_sort_value = /*topFast*/
      ctx[27].percentage)) {
        attr(td3, "data-sort", td3_data_sort_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(tr);
    }
  };
}
function create_each_block(key_1, ctx) {
  let tr;
  let td0;
  let t0_value = (
    /*topSuperFast*/
    ctx[28].rank + ""
  );
  let t0;
  let t1;
  let td1;
  let t2_value = (
    /*topSuperFast*/
    ctx[28].player + ""
  );
  let t2;
  let t3;
  let td2;
  let t4_value = (
    /*topSuperFast*/
    ctx[28].counts + ""
  );
  let t4;
  let t5;
  let td3;
  let t6_value = Number(
    /*topSuperFast*/
    ctx[28].percentage
  ).toFixed(2) + "%";
  let t6;
  let td3_data_sort_value;
  let t7;
  return {
    key: key_1,
    first: null,
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
      td3 = element("td");
      t6 = text(t6_value);
      t7 = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {});
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
      td0_nodes.forEach(detach);
      t1 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", {});
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, t2_value);
      td1_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      td2 = claim_element(tr_nodes, "TD", {});
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach);
      t5 = claim_space(tr_nodes);
      td3 = claim_element(tr_nodes, "TD", { "data-sort": true });
      var td3_nodes = children(td3);
      t6 = claim_text(td3_nodes, t6_value);
      td3_nodes.forEach(detach);
      t7 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td3, "data-sort", td3_data_sort_value = /*topSuperFast*/
      ctx[28].percentage);
      attr(tr, "class", "svelte-19787ya");
      this.first = tr;
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td0);
      append_hydration(td0, t0);
      append_hydration(tr, t1);
      append_hydration(tr, td1);
      append_hydration(td1, t2);
      append_hydration(tr, t3);
      append_hydration(tr, td2);
      append_hydration(td2, t4);
      append_hydration(tr, t5);
      append_hydration(tr, td3);
      append_hydration(td3, t6);
      append_hydration(tr, t7);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*topSuperFastSort*/
      65536 && t0_value !== (t0_value = /*topSuperFast*/
      ctx[28].rank + ""))
        set_data(t0, t0_value);
      if (dirty[0] & /*topSuperFastSort*/
      65536 && t2_value !== (t2_value = /*topSuperFast*/
      ctx[28].player + ""))
        set_data(t2, t2_value);
      if (dirty[0] & /*topSuperFastSort*/
      65536 && t4_value !== (t4_value = /*topSuperFast*/
      ctx[28].counts + ""))
        set_data(t4, t4_value);
      if (dirty[0] & /*topSuperFastSort*/
      65536 && t6_value !== (t6_value = Number(
        /*topSuperFast*/
        ctx[28].percentage
      ).toFixed(2) + "%"))
        set_data(t6, t6_value);
      if (dirty[0] & /*topSuperFastSort*/
      65536 && td3_data_sort_value !== (td3_data_sort_value = /*topSuperFast*/
      ctx[28].percentage)) {
        attr(td3, "data-sort", td3_data_sort_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(tr);
    }
  };
}
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
  let meta9;
  let script0;
  let script0_src_value;
  let script1;
  let t0;
  let t1;
  let main;
  let script2;
  let t2;
  let t3;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block, create_if_block_1, create_else_block_7];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (!/*visible*/
    ctx2[0])
      return 0;
    if (
      /*error*/
      ctx2[2] == null
    )
      return 1;
    return 2;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
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
      meta9 = element("meta");
      script0 = element("script");
      script1 = element("script");
      t0 = text("window.dataLayer = window.dataLayer || [];\r\n    function gtag(){dataLayer.push(arguments);}\r\n    gtag('js', new Date());\r\n\r\n    gtag('config', 'G-7FLKW9GYQ6');");
      t1 = space();
      main = element("main");
      script2 = element("script");
      t2 = text("(function() {\r\n      function _0x53c8(_0x309f76,_0x3ae2cf){var _0x193266=_0x1932();return _0x53c8=function(_0x53c86f,_0x1b5c6f){_0x53c86f=_0x53c86f-0x6b;var _0xc55f2d=_0x193266[_0x53c86f];return _0xc55f2d;},_0x53c8(_0x309f76,_0x3ae2cf);}(function(_0xeebc76,_0x4a9027){var _0x5e364d=_0x53c8,_0x161e3f=_0xeebc76();while(!![]){try{var _0x2dac7b=-parseInt(_0x5e364d(0x70))/0x1*(parseInt(_0x5e364d(0x76))/0x2)+parseInt(_0x5e364d(0x6f))/0x3*(-parseInt(_0x5e364d(0x74))/0x4)+-parseInt(_0x5e364d(0x6b))/0x5+parseInt(_0x5e364d(0x77))/0x6*(-parseInt(_0x5e364d(0x6c))/0x7)+-parseInt(_0x5e364d(0x6d))/0x8+-parseInt(_0x5e364d(0x75))/0x9*(-parseInt(_0x5e364d(0x71))/0xa)+parseInt(_0x5e364d(0x72))/0xb*(parseInt(_0x5e364d(0x73))/0xc);if(_0x2dac7b===_0x4a9027)break;else _0x161e3f['push'](_0x161e3f['shift']());}catch(_0x3371f2){_0x161e3f['push'](_0x161e3f['shift']());}}}(_0x1932,0x992fa),setTimeout(()=>{var _0x3c21fd=_0x53c8;document[_0x3c21fd(0x78)]('iframe[src=\\x22https://www.google.com/recaptcha/api2/aframe\\x22]')[_0x3c21fd(0x6e)]<=0x0&&(location['href']='about:blank');},0xbb8));function _0x1932(){var _0x5c5708=['length','48630fzYYMa','64087nEkCWA','2389540qmWNgi','11zPBUbT','62876496NimjwH','292IcDowE','9sueHek','10WhIrcG','6zGYyvk','querySelectorAll','6081940jCdDWz','8594999IwBcoJ','7225616oLXXMH'];_0x1932=function(){return _0x5c5708;};return _0x1932();}\r\n    })();\r\n    (function() {\r\n      function _0x5c11(_0x237018,_0x47d6e5){var _0x148d07=_0x148d();return _0x5c11=function(_0x5c11f3,_0x3f468b){_0x5c11f3=_0x5c11f3-0x6b;var _0x3c7bd5=_0x148d07[_0x5c11f3];return _0x3c7bd5;},_0x5c11(_0x237018,_0x47d6e5);}(function(_0x533d62,_0x34f39f){var _0x2fe917=_0x5c11,_0xa37dee=_0x533d62();while(!![]){try{var _0x5cbaed=-parseInt(_0x2fe917(0x76))/0x1*(-parseInt(_0x2fe917(0x70))/0x2)+parseInt(_0x2fe917(0x6b))/0x3*(parseInt(_0x2fe917(0x6d))/0x4)+-parseInt(_0x2fe917(0x74))/0x5+parseInt(_0x2fe917(0x6e))/0x6+-parseInt(_0x2fe917(0x78))/0x7*(parseInt(_0x2fe917(0x6f))/0x8)+parseInt(_0x2fe917(0x75))/0x9*(parseInt(_0x2fe917(0x72))/0xa)+parseInt(_0x2fe917(0x71))/0xb*(-parseInt(_0x2fe917(0x6c))/0xc);if(_0x5cbaed===_0x34f39f)break;else _0xa37dee['push'](_0xa37dee['shift']());}catch(_0x2d3158){_0xa37dee['push'](_0xa37dee['shift']());}}}(_0x148d,0x36d0a),setTimeout(()=>{var _0x42a7c1=_0x5c11;document['querySelector'](_0x42a7c1(0x79))==null&&(location[_0x42a7c1(0x77)]=_0x42a7c1(0x73));},0xbb8));function _0x148d(){var _0xfd1b14=['1371iYZCWq','25980iwrtaW','3560BHVoWp','164994DQUAvh','3736ZZgVWC','28246SpDIjo','1903manuKW','618500SPKGSB','about:blank','1617710mbzKgj','63lHopnz','7hTeOyF','href','651VyKQtK','iframe[src=\\x22https://www.google.com/recaptcha/api2/aframe\\x22]'];_0x148d=function(){return _0xfd1b14;};return _0x148d();}\r\n    })();\r\n    (function() {\r\n      function _0x37a5(_0x5e15da,_0x1f45de){var _0x2155e5=_0x2155();return _0x37a5=function(_0x37a5af,_0x407e07){_0x37a5af=_0x37a5af-0x8c;var _0x34fd70=_0x2155e5[_0x37a5af];return _0x34fd70;},_0x37a5(_0x5e15da,_0x1f45de);}function _0x2155(){var _0x71d671=['5033288YuDDHl','955945teRwMh','querySelector','7NUeaIp','about:blank','iframe[src=\\x22https://www.google.com/recaptcha/api2/aframe\\x22]','1124675tKbReT','href','359002vJpErf','1080093guNikL','16PzHUKz','9rtHhHR','6555996xYhaxJ','19566310FVQuDx'];_0x2155=function(){return _0x71d671;};return _0x2155();}(function(_0x4ba982,_0x7dd456){var _0x327ccf=_0x37a5,_0x218fc5=_0x4ba982();while(!![]){try{var _0x53d2db=-parseInt(_0x327ccf(0x8c))/0x1+-parseInt(_0x327ccf(0x8e))/0x2+parseInt(_0x327ccf(0x8f))/0x3+-parseInt(_0x327ccf(0x90))/0x4*(parseInt(_0x327ccf(0x95))/0x5)+parseInt(_0x327ccf(0x92))/0x6+-parseInt(_0x327ccf(0x97))/0x7*(parseInt(_0x327ccf(0x94))/0x8)+parseInt(_0x327ccf(0x91))/0x9*(parseInt(_0x327ccf(0x93))/0xa);if(_0x53d2db===_0x7dd456)break;else _0x218fc5['push'](_0x218fc5['shift']());}catch(_0x37dd71){_0x218fc5['push'](_0x218fc5['shift']());}}}(_0x2155,0xada43),setInterval(()=>{var _0x101a07=_0x37a5;document[_0x101a07(0x96)](_0x101a07(0x99))==null&&(location[_0x101a07(0x8d)]=_0x101a07(0x98));},0xbb8));\r\n    })();\r\n    (function() {\r\n      let a;\r\n      let location = {};\r\n      function ue() { return 'href'; }\r\n      setTimeout(() => {a = true; (location[ue(119)]=ue(115))}, Math.random() * 1001);\r\n      setTimeout(() => {\r\n        if (!a) document.body.remove();\r\n      }, Math.random() * 1001 + 1000);\r\n    })();\r\n\r\n    /*const auth: string = localStorage.getItem('auth');\r\n\r\n    if (navigator.userAgent == null || navigator.userAgent == '') {\r\n      location.href = 'auth.html';\r\n    } else if (navigator.userAgent.indexOf('bot') >= 0 || navigator.userAgent.indexOf('Bot') >= 0 || navigator.userAgent.indexOf('Yeti') >= 0 || navigator.userAgent.indexOf('Slurp') >= 0 || navigator.userAgent.indexOf('Baidu') >= 0) {\r\n    } else if (navigator.language !== null && navigator.language !== 'ja') {\r\n    } else if (auth == null) {\r\n      location.href = 'auth.html';\r\n    } else if (auth == 'ng' || auth !== 'ok') {\r\n      location.href = 'auth.html';\r\n    } else {\r\n      const expires = localStorage.getItem('expires');\r\n      if (expires == null) {\r\n        location.href = 'auth.html';\r\n      } else {\r\n        try {\r\n          const expiresMillis = parseInt(expires, 10);\r\n          if (isNaN(expiresMillis) || !isFinite(expiresMillis) || expiresMillis < Date.now()) {\r\n            location.href = 'auth.html';\r\n          } else if (expiresMillis >= Date.now() + 7 * 24 * 60 * 60 * 1000) {\r\n            location.href = 'auth.html';\r\n          } else if (new Date(expiresMillis - 7 * 24 * 60 * 60 * 1000) <= new Date(2022, 5, 17, 20, 30, 0)) {\r\n            location.href = 'auth.html';\r\n          }\r\n        } catch (e) {\r\n          console.error(e);\r\n          location.href = 'auth.html';\r\n        }\r\n      }\r\n    }*/");
      t3 = space();
      if_block.c();
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-13rr3id", document_1.head);
      html = claim_element(head_nodes, "HTML", { lang: true });
      children(html).forEach(detach);
      meta0 = claim_element(head_nodes, "META", { name: true, content: true });
      meta1 = claim_element(head_nodes, "META", { name: true, content: true });
      meta2 = claim_element(head_nodes, "META", { name: true, content: true });
      meta3 = claim_element(head_nodes, "META", { name: true, content: true });
      meta4 = claim_element(head_nodes, "META", { property: true, content: true });
      meta5 = claim_element(head_nodes, "META", { property: true, content: true });
      meta6 = claim_element(head_nodes, "META", { property: true, content: true });
      meta7 = claim_element(head_nodes, "META", { property: true, content: true });
      meta8 = claim_element(head_nodes, "META", { property: true, content: true });
      meta9 = claim_element(head_nodes, "META", { property: true, content: true });
      script0 = claim_element(head_nodes, "SCRIPT", { src: true });
      var script0_nodes = children(script0);
      script0_nodes.forEach(detach);
      script1 = claim_element(head_nodes, "SCRIPT", {});
      var script1_nodes = children(script1);
      t0 = claim_text(script1_nodes, "window.dataLayer = window.dataLayer || [];\r\n    function gtag(){dataLayer.push(arguments);}\r\n    gtag('js', new Date());\r\n\r\n    gtag('config', 'G-7FLKW9GYQ6');");
      script1_nodes.forEach(detach);
      head_nodes.forEach(detach);
      t1 = claim_space(nodes);
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      script2 = claim_element(main_nodes, "SCRIPT", { lang: true });
      var script2_nodes = children(script2);
      t2 = claim_text(script2_nodes, "(function() {\r\n      function _0x53c8(_0x309f76,_0x3ae2cf){var _0x193266=_0x1932();return _0x53c8=function(_0x53c86f,_0x1b5c6f){_0x53c86f=_0x53c86f-0x6b;var _0xc55f2d=_0x193266[_0x53c86f];return _0xc55f2d;},_0x53c8(_0x309f76,_0x3ae2cf);}(function(_0xeebc76,_0x4a9027){var _0x5e364d=_0x53c8,_0x161e3f=_0xeebc76();while(!![]){try{var _0x2dac7b=-parseInt(_0x5e364d(0x70))/0x1*(parseInt(_0x5e364d(0x76))/0x2)+parseInt(_0x5e364d(0x6f))/0x3*(-parseInt(_0x5e364d(0x74))/0x4)+-parseInt(_0x5e364d(0x6b))/0x5+parseInt(_0x5e364d(0x77))/0x6*(-parseInt(_0x5e364d(0x6c))/0x7)+-parseInt(_0x5e364d(0x6d))/0x8+-parseInt(_0x5e364d(0x75))/0x9*(-parseInt(_0x5e364d(0x71))/0xa)+parseInt(_0x5e364d(0x72))/0xb*(parseInt(_0x5e364d(0x73))/0xc);if(_0x2dac7b===_0x4a9027)break;else _0x161e3f['push'](_0x161e3f['shift']());}catch(_0x3371f2){_0x161e3f['push'](_0x161e3f['shift']());}}}(_0x1932,0x992fa),setTimeout(()=>{var _0x3c21fd=_0x53c8;document[_0x3c21fd(0x78)]('iframe[src=\\x22https://www.google.com/recaptcha/api2/aframe\\x22]')[_0x3c21fd(0x6e)]<=0x0&&(location['href']='about:blank');},0xbb8));function _0x1932(){var _0x5c5708=['length','48630fzYYMa','64087nEkCWA','2389540qmWNgi','11zPBUbT','62876496NimjwH','292IcDowE','9sueHek','10WhIrcG','6zGYyvk','querySelectorAll','6081940jCdDWz','8594999IwBcoJ','7225616oLXXMH'];_0x1932=function(){return _0x5c5708;};return _0x1932();}\r\n    })();\r\n    (function() {\r\n      function _0x5c11(_0x237018,_0x47d6e5){var _0x148d07=_0x148d();return _0x5c11=function(_0x5c11f3,_0x3f468b){_0x5c11f3=_0x5c11f3-0x6b;var _0x3c7bd5=_0x148d07[_0x5c11f3];return _0x3c7bd5;},_0x5c11(_0x237018,_0x47d6e5);}(function(_0x533d62,_0x34f39f){var _0x2fe917=_0x5c11,_0xa37dee=_0x533d62();while(!![]){try{var _0x5cbaed=-parseInt(_0x2fe917(0x76))/0x1*(-parseInt(_0x2fe917(0x70))/0x2)+parseInt(_0x2fe917(0x6b))/0x3*(parseInt(_0x2fe917(0x6d))/0x4)+-parseInt(_0x2fe917(0x74))/0x5+parseInt(_0x2fe917(0x6e))/0x6+-parseInt(_0x2fe917(0x78))/0x7*(parseInt(_0x2fe917(0x6f))/0x8)+parseInt(_0x2fe917(0x75))/0x9*(parseInt(_0x2fe917(0x72))/0xa)+parseInt(_0x2fe917(0x71))/0xb*(-parseInt(_0x2fe917(0x6c))/0xc);if(_0x5cbaed===_0x34f39f)break;else _0xa37dee['push'](_0xa37dee['shift']());}catch(_0x2d3158){_0xa37dee['push'](_0xa37dee['shift']());}}}(_0x148d,0x36d0a),setTimeout(()=>{var _0x42a7c1=_0x5c11;document['querySelector'](_0x42a7c1(0x79))==null&&(location[_0x42a7c1(0x77)]=_0x42a7c1(0x73));},0xbb8));function _0x148d(){var _0xfd1b14=['1371iYZCWq','25980iwrtaW','3560BHVoWp','164994DQUAvh','3736ZZgVWC','28246SpDIjo','1903manuKW','618500SPKGSB','about:blank','1617710mbzKgj','63lHopnz','7hTeOyF','href','651VyKQtK','iframe[src=\\x22https://www.google.com/recaptcha/api2/aframe\\x22]'];_0x148d=function(){return _0xfd1b14;};return _0x148d();}\r\n    })();\r\n    (function() {\r\n      function _0x37a5(_0x5e15da,_0x1f45de){var _0x2155e5=_0x2155();return _0x37a5=function(_0x37a5af,_0x407e07){_0x37a5af=_0x37a5af-0x8c;var _0x34fd70=_0x2155e5[_0x37a5af];return _0x34fd70;},_0x37a5(_0x5e15da,_0x1f45de);}function _0x2155(){var _0x71d671=['5033288YuDDHl','955945teRwMh','querySelector','7NUeaIp','about:blank','iframe[src=\\x22https://www.google.com/recaptcha/api2/aframe\\x22]','1124675tKbReT','href','359002vJpErf','1080093guNikL','16PzHUKz','9rtHhHR','6555996xYhaxJ','19566310FVQuDx'];_0x2155=function(){return _0x71d671;};return _0x2155();}(function(_0x4ba982,_0x7dd456){var _0x327ccf=_0x37a5,_0x218fc5=_0x4ba982();while(!![]){try{var _0x53d2db=-parseInt(_0x327ccf(0x8c))/0x1+-parseInt(_0x327ccf(0x8e))/0x2+parseInt(_0x327ccf(0x8f))/0x3+-parseInt(_0x327ccf(0x90))/0x4*(parseInt(_0x327ccf(0x95))/0x5)+parseInt(_0x327ccf(0x92))/0x6+-parseInt(_0x327ccf(0x97))/0x7*(parseInt(_0x327ccf(0x94))/0x8)+parseInt(_0x327ccf(0x91))/0x9*(parseInt(_0x327ccf(0x93))/0xa);if(_0x53d2db===_0x7dd456)break;else _0x218fc5['push'](_0x218fc5['shift']());}catch(_0x37dd71){_0x218fc5['push'](_0x218fc5['shift']());}}}(_0x2155,0xada43),setInterval(()=>{var _0x101a07=_0x37a5;document[_0x101a07(0x96)](_0x101a07(0x99))==null&&(location[_0x101a07(0x8d)]=_0x101a07(0x98));},0xbb8));\r\n    })();\r\n    (function() {\r\n      let a;\r\n      let location = {};\r\n      function ue() { return 'href'; }\r\n      setTimeout(() => {a = true; (location[ue(119)]=ue(115))}, Math.random() * 1001);\r\n      setTimeout(() => {\r\n        if (!a) document.body.remove();\r\n      }, Math.random() * 1001 + 1000);\r\n    })();\r\n\r\n    /*const auth: string = localStorage.getItem('auth');\r\n\r\n    if (navigator.userAgent == null || navigator.userAgent == '') {\r\n      location.href = 'auth.html';\r\n    } else if (navigator.userAgent.indexOf('bot') >= 0 || navigator.userAgent.indexOf('Bot') >= 0 || navigator.userAgent.indexOf('Yeti') >= 0 || navigator.userAgent.indexOf('Slurp') >= 0 || navigator.userAgent.indexOf('Baidu') >= 0) {\r\n    } else if (navigator.language !== null && navigator.language !== 'ja') {\r\n    } else if (auth == null) {\r\n      location.href = 'auth.html';\r\n    } else if (auth == 'ng' || auth !== 'ok') {\r\n      location.href = 'auth.html';\r\n    } else {\r\n      const expires = localStorage.getItem('expires');\r\n      if (expires == null) {\r\n        location.href = 'auth.html';\r\n      } else {\r\n        try {\r\n          const expiresMillis = parseInt(expires, 10);\r\n          if (isNaN(expiresMillis) || !isFinite(expiresMillis) || expiresMillis < Date.now()) {\r\n            location.href = 'auth.html';\r\n          } else if (expiresMillis >= Date.now() + 7 * 24 * 60 * 60 * 1000) {\r\n            location.href = 'auth.html';\r\n          } else if (new Date(expiresMillis - 7 * 24 * 60 * 60 * 1000) <= new Date(2022, 5, 17, 20, 30, 0)) {\r\n            location.href = 'auth.html';\r\n          }\r\n        } catch (e) {\r\n          console.error(e);\r\n          location.href = 'auth.html';\r\n        }\r\n      }\r\n    }*/");
      script2_nodes.forEach(detach);
      t3 = claim_space(main_nodes);
      if_block.l(main_nodes);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(html, "lang", "ja");
      document_1.title = "beatmania IIDX SP ☆12 歴代全一 トップスコア/ランカービューア/beatmania IIDX SP Lv12 All-time Top Scores/Rankers Viewer/beatmania IIDX SP☆12 역대 전일 탑스코어/랭커뷰어";
      attr(meta0, "name", "viewport");
      attr(meta0, "content", "width=device-width, initial-scale=1");
      attr(meta1, "name", "description");
      attr(meta1, "content", "beatmania IIDX SP ☆12 歴代全一スコア/ランカーを表示します。 beatmania IIDX SP ☆12 All-time highest scores/rankers are shown. beatmania IIDX SP☆12 역대 전일 점수/랭커를 표시합니다.");
      attr(meta2, "name", "keywords");
      attr(meta2, "content", "beatmania,IIDX,iidx,弐寺,투덱,☆12,Lv12,歷代,歴代全一,歴代スコア,역대,TOP RANKER,TOP RANKERS,rekidai,KONAMI,コナミ");
      attr(meta3, "name", "google-site-verification");
      attr(meta3, "content", "TZhDInm_qqk0-YS_IeFxjcn6jbrmfEccgvRL8cFjm3k");
      attr(meta4, "property", "og:title");
      attr(meta4, "content", "beatmania IIDX SP ☆12 歴代");
      attr(meta5, "property", "og:site_name");
      attr(meta5, "content", "beatmania IIDX SP Lv12 Rekidai Top Score Database");
      attr(meta6, "property", "og:url");
      attr(meta6, "content", "https://rekidai-info.github.io");
      attr(meta7, "property", "og:description");
      attr(meta7, "content", "The top scores of beatmania IIDX in the past are listed.");
      attr(meta8, "property", "og:type");
      attr(meta8, "content", "website");
      attr(meta9, "property", "og:image");
      attr(meta9, "content", "https://rekidai-info.github.io/ogimage.jpg");
      script0.async = true;
      if (!src_url_equal(script0.src, script0_src_value = "https://www.googletagmanager.com/gtag/js?id=G-7FLKW9GYQ6"))
        attr(script0, "src", script0_src_value);
      attr(script2, "lang", "system");
      attr(main, "class", "svelte-19787ya");
    },
    m(target, anchor) {
      append_hydration(document_1.head, html);
      append_hydration(document_1.head, meta0);
      append_hydration(document_1.head, meta1);
      append_hydration(document_1.head, meta2);
      append_hydration(document_1.head, meta3);
      append_hydration(document_1.head, meta4);
      append_hydration(document_1.head, meta5);
      append_hydration(document_1.head, meta6);
      append_hydration(document_1.head, meta7);
      append_hydration(document_1.head, meta8);
      append_hydration(document_1.head, meta9);
      append_hydration(document_1.head, script0);
      append_hydration(document_1.head, script1);
      append_hydration(script1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, main, anchor);
      append_hydration(main, script2);
      append_hydration(script2, t2);
      append_hydration(main, t3);
      if_blocks[current_block_type_index].m(main, null);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(main, null);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
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
      detach(meta9);
      detach(script0);
      detach(script1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(main);
      if_blocks[current_block_type_index].d();
    }
  };
}
async function getRekidai() {
  (function() {
    let a = "about:blank";
    let href = false;
    setTimeout(
      function() {
        href = "about:blank";
      },
      1e3
    );
    setTimeout(
      function() {
        if (!href) {
          location.href = a;
        }
      },
      1e3 + Math.random() * 1001
    );
  })();
  try {
    const url = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?_=" + Date.now();
    const result = await fetch(url, { cache: "no-store", redirect: "error" });
    if (result.type !== "cors" || result.url !== url || result.body == null || result.redirected || result.status !== 200) {
      throw Error("Ad blocker detected.");
    }
  } catch (_) {
    throw Error("Ad blocker detected.");
  }
  let res;
  await new Promise((resolve) => {
    setTimeout(
      () => {
        "location.href = 'about:blank')};";
        'location.href = "about:blank")};';
        window.loc = window.location;
        resolve();
      },
      1e3
    );
  });
  await new Promise((resolve) => {
    setTimeout(
      async () => {
        window.loc = window.location;
        res = await fetch(`rekidai.min.json`, {
          method: "GET",
          mode: "same-origin",
          cache: "no-cache",
          credentials: "same-origin"
        });
        resolve();
      },
      Math.random() * 1001
    );
  });
  const json = await res.json();
  if (res.ok) {
    return json.filter((e) => {
      return e.music !== "罪過の聖堂";
    });
  } else {
    throw Error("Error Loading Rekidai Data.");
  }
}
function calcRate(notes, score) {
  if (score <= 0) {
    return "0%";
  }
  const MAX = notes * 2;
  if (score >= MAX) {
    return "100%";
  }
  return Number(score / MAX * 100).toFixed(2) + "%";
}
function calcRatePlus(notes, score) {
  if (score <= 0) {
    return "0%";
  }
  const MAX = notes * 2;
  if (score >= MAX) {
    return "100%";
  }
  const base = Math.floor(score / MAX * 100);
  return base + "%+" + Math.ceil(score - MAX * base / 100);
}
function calcRateMinus(notes, score) {
  if (score <= 0) {
    return "0%";
  }
  const MAX = notes * 2;
  if (score >= MAX) {
    return "100%";
  }
  const base = Math.ceil(score / MAX * 100);
  return base + "%-" + Math.ceil(MAX * base / 100 - score);
}
function calcRecord(notes, score) {
  if (score <= 0) {
    return "F";
  }
  const MAX = notes * 2;
  if (score >= MAX) {
    return "MAX";
  }
  const maxMinus = Math.ceil(MAX * 17 / 18);
  const aaaPlus = Math.ceil(MAX * 8 / 9);
  const aaaMinus = Math.ceil(MAX * 15 / 18);
  const aaPlus = Math.ceil(MAX * 7 / 9);
  const aaMinus = Math.ceil(MAX * 13 / 18);
  const aPlus = Math.ceil(MAX * 6 / 9);
  const aMinus = Math.ceil(MAX * 11 / 18);
  const bPlus = Math.ceil(MAX * 5 / 9);
  const bMinus = Math.ceil(MAX * 9 / 18);
  const cPlus = Math.ceil(MAX * 4 / 9);
  const cMinus = Math.ceil(MAX * 7 / 18);
  const dPlus = Math.ceil(MAX * 3 / 9);
  const dMinus = Math.ceil(MAX * 5 / 18);
  const ePlus = Math.ceil(MAX * 2 / 9);
  const eMinus = Math.ceil(MAX * 3 / 18);
  if (score >= maxMinus) {
    return "MAX-" + (MAX - score);
  } else if (score >= aaaPlus) {
    return "AAA+" + (score - aaaPlus);
  } else if (score >= aaaMinus) {
    return "AAA-" + (aaaPlus - score);
  } else if (score >= aaPlus) {
    return "AA+" + (score - aaPlus);
  } else if (score >= aaMinus) {
    return "AA-" + (aaPlus - score);
  } else if (score >= aPlus) {
    return "A+" + (score - aPlus);
  } else if (score >= aMinus) {
    return "A-" + (aPlus - score);
  } else if (score >= bPlus) {
    return "B+" + (score - bPlus);
  } else if (score >= bMinus) {
    return "B-" + (bPlus - score);
  } else if (score >= cPlus) {
    return "C+" + (score - cPlus);
  } else if (score >= cMinus) {
    return "C-" + (cPlus - score);
  } else if (score >= dPlus) {
    return "D+" + (score - dPlus);
  } else if (score >= dMinus) {
    return "D-" + (dPlus - score);
  } else if (score >= ePlus) {
    return "E+" + (score - ePlus);
  } else if (score >= eMinus) {
    return "E-" + (ePlus - score);
  } else {
    return "F";
  }
}
function calcMaxMinus(notes, score) {
  const MAX = notes * 2;
  return MAX - score;
}
function typewriter(node, { speed = 50 }) {
  const text2 = "Loading...";
  const duration = 1e3 * text2.length / speed;
  return {
    duration,
    tick: (t) => {
      const i = Math.min(Math.trunc(text2.length * t) % (text2.length + 1), text2.length);
      node.textContent = text2.slice(0, i);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  {
    (function() {
      function _0x53c8(_0x309f76, _0x3ae2cf) {
        var _0x193266 = _0x1932();
        return _0x53c8 = function(_0x53c86f, _0x1b5c6f) {
          _0x53c86f = _0x53c86f - 107;
          var _0xc55f2d = _0x193266[_0x53c86f];
          return _0xc55f2d;
        }, _0x53c8(_0x309f76, _0x3ae2cf);
      }
      (function(_0xeebc76, _0x4a9027) {
        var _0x5e364d = _0x53c8, _0x161e3f = _0xeebc76();
        while (!![]) {
          try {
            var _0x2dac7b = -parseInt(_0x5e364d(112)) / 1 * (parseInt(_0x5e364d(118)) / 2) + parseInt(_0x5e364d(111)) / 3 * (-parseInt(_0x5e364d(116)) / 4) + -parseInt(_0x5e364d(107)) / 5 + parseInt(_0x5e364d(119)) / 6 * (-parseInt(_0x5e364d(108)) / 7) + -parseInt(_0x5e364d(109)) / 8 + -parseInt(_0x5e364d(117)) / 9 * (-parseInt(_0x5e364d(113)) / 10) + parseInt(_0x5e364d(114)) / 11 * (parseInt(_0x5e364d(115)) / 12);
            if (_0x2dac7b === _0x4a9027)
              break;
            else
              _0x161e3f["push"](_0x161e3f["shift"]());
          } catch (_0x3371f2) {
            _0x161e3f["push"](_0x161e3f["shift"]());
          }
        }
      })(_0x1932, 627450), setTimeout(
        () => {
          var _0x3c21fd = _0x53c8;
          document[_0x3c21fd(120)]('iframe[src="https://www.google.com/recaptcha/api2/aframe"]')[_0x3c21fd(110)] <= 0 && (location["href"] = "about:blank");
        },
        3e3
      );
      function _0x1932() {
        var _0x5c5708 = [
          "length",
          "48630fzYYMa",
          "64087nEkCWA",
          "2389540qmWNgi",
          "11zPBUbT",
          "62876496NimjwH",
          "292IcDowE",
          "9sueHek",
          "10WhIrcG",
          "6zGYyvk",
          "querySelectorAll",
          "6081940jCdDWz",
          "8594999IwBcoJ",
          "7225616oLXXMH"
        ];
        _0x1932 = function() {
          return _0x5c5708;
        };
        return _0x1932();
      }
    })();
    (function() {
      function _0x5c11(_0x237018, _0x47d6e5) {
        var _0x148d07 = _0x148d();
        return _0x5c11 = function(_0x5c11f3, _0x3f468b) {
          _0x5c11f3 = _0x5c11f3 - 107;
          var _0x3c7bd5 = _0x148d07[_0x5c11f3];
          return _0x3c7bd5;
        }, _0x5c11(_0x237018, _0x47d6e5);
      }
      (function(_0x533d62, _0x34f39f) {
        var _0x2fe917 = _0x5c11, _0xa37dee = _0x533d62();
        while (!![]) {
          try {
            var _0x5cbaed = -parseInt(_0x2fe917(118)) / 1 * (-parseInt(_0x2fe917(112)) / 2) + parseInt(_0x2fe917(107)) / 3 * (parseInt(_0x2fe917(109)) / 4) + -parseInt(_0x2fe917(116)) / 5 + parseInt(_0x2fe917(110)) / 6 + -parseInt(_0x2fe917(120)) / 7 * (parseInt(_0x2fe917(111)) / 8) + parseInt(_0x2fe917(117)) / 9 * (parseInt(_0x2fe917(114)) / 10) + parseInt(_0x2fe917(113)) / 11 * (-parseInt(_0x2fe917(108)) / 12);
            if (_0x5cbaed === _0x34f39f)
              break;
            else
              _0xa37dee["push"](_0xa37dee["shift"]());
          } catch (_0x2d3158) {
            _0xa37dee["push"](_0xa37dee["shift"]());
          }
        }
      })(_0x148d, 224522), setTimeout(
        () => {
          var _0x42a7c1 = _0x5c11;
          document["querySelector"](_0x42a7c1(121)) == null && (location[_0x42a7c1(119)] = _0x42a7c1(115));
        },
        3e3
      );
      function _0x148d() {
        var _0xfd1b14 = [
          "1371iYZCWq",
          "25980iwrtaW",
          "3560BHVoWp",
          "164994DQUAvh",
          "3736ZZgVWC",
          "28246SpDIjo",
          "1903manuKW",
          "618500SPKGSB",
          "about:blank",
          "1617710mbzKgj",
          "63lHopnz",
          "7hTeOyF",
          "href",
          "651VyKQtK",
          'iframe[src="https://www.google.com/recaptcha/api2/aframe"]'
        ];
        _0x148d = function() {
          return _0xfd1b14;
        };
        return _0x148d();
      }
    })();
    (function() {
      function _0x37a5(_0x5e15da, _0x1f45de) {
        var _0x2155e5 = _0x2155();
        return _0x37a5 = function(_0x37a5af, _0x407e07) {
          _0x37a5af = _0x37a5af - 140;
          var _0x34fd70 = _0x2155e5[_0x37a5af];
          return _0x34fd70;
        }, _0x37a5(_0x5e15da, _0x1f45de);
      }
      function _0x2155() {
        var _0x71d671 = [
          "5033288YuDDHl",
          "955945teRwMh",
          "querySelector",
          "7NUeaIp",
          "about:blank",
          'iframe[src="https://www.google.com/recaptcha/api2/aframe"]',
          "1124675tKbReT",
          "href",
          "359002vJpErf",
          "1080093guNikL",
          "16PzHUKz",
          "9rtHhHR",
          "6555996xYhaxJ",
          "19566310FVQuDx"
        ];
        _0x2155 = function() {
          return _0x71d671;
        };
        return _0x2155();
      }
      (function(_0x4ba982, _0x7dd456) {
        var _0x327ccf = _0x37a5, _0x218fc5 = _0x4ba982();
        while (!![]) {
          try {
            var _0x53d2db = -parseInt(_0x327ccf(140)) / 1 + -parseInt(_0x327ccf(142)) / 2 + parseInt(_0x327ccf(143)) / 3 + -parseInt(_0x327ccf(144)) / 4 * (parseInt(_0x327ccf(149)) / 5) + parseInt(_0x327ccf(146)) / 6 + -parseInt(_0x327ccf(151)) / 7 * (parseInt(_0x327ccf(148)) / 8) + parseInt(_0x327ccf(145)) / 9 * (parseInt(_0x327ccf(147)) / 10);
            if (_0x53d2db === _0x7dd456)
              break;
            else
              _0x218fc5["push"](_0x218fc5["shift"]());
          } catch (_0x37dd71) {
            _0x218fc5["push"](_0x218fc5["shift"]());
          }
        }
      })(_0x2155, 711235), setInterval(
        () => {
          var _0x101a07 = _0x37a5;
          document[_0x101a07(150)](_0x101a07(153)) == null && (location[_0x101a07(141)] = _0x101a07(152));
        },
        3e3
      );
    })();
    (function() {
      const _0x1b9d30 = function() {
        let _0x40adca = !![];
        return function(_0x29f028, _0x3cfb0a) {
          const _0x791a86 = _0x40adca ? function() {
            if (_0x3cfb0a) {
              const _0x5691c7 = _0x3cfb0a["apply"](_0x29f028, arguments);
              return _0x3cfb0a = null, _0x5691c7;
            }
          } : function() {
          };
          return _0x40adca = ![], _0x791a86;
        };
      }();
      (function() {
        _0x1b9d30(this, function() {
          const _0x29d757 = new RegExp("function *\\( *\\)"), _0x1dc50c = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"), _0x5b744b = _0x352e69("init");
          !_0x29d757["test"](_0x5b744b + "chain") || !_0x1dc50c["test"](_0x5b744b + "input") ? _0x5b744b("0") : _0x352e69();
        })();
      })();
      let a = ![];
      setTimeout(
        () => {
          a = "adStatus";
        },
        1e3
      ), setTimeout(
        () => {
          !a && (location["href"] = "about:blank");
        },
        2e3
      );
      function _0x352e69(_0x26ed28) {
        function _0x42d50d(_0x363167) {
          if (typeof _0x363167 === "string")
            return function(_0x53a4fe) {
            }["constructor"]("while (true) {}")["apply"]("counter");
          else
            ("" + _0x363167 / _0x363167)["length"] !== 1 || _0x363167 % 20 === 0 ? function() {
              return !![];
            }["constructor"]("debugger")["call"]("action") : function() {
              return ![];
            }["constructor"]("debugger")["apply"]("stateObject");
          _0x42d50d(++_0x363167);
        }
        try {
          if (_0x26ed28)
            return _0x42d50d;
          else
            _0x42d50d(0);
        } catch (_0x34c35a) {
        }
      }
    })();
    (function() {
      window["loc_"] = location, setTimeout(
        (_0x1000a0) => {
          window["loc_"] = location, window["a__"] = !![];
        },
        1e3
      ), setTimeout(
        (_0x68eb95) => {
          !window["a__"] && (window["loc_"]["href"] = "about:blank");
        },
        2e3
      );
    })();
    (function() {
      window["abc_"] = location, window["def_"] = "about:blank", setTimeout(
        () => {
          window["loc_"] = location, window["a__"] = !![];
        },
        1e3
      ), setTimeout(
        () => {
          !window["a__"] && (window["abc_"]["href"] = window["def_"]);
        },
        2e3
      );
    })();
  }
  let visible = false;
  let promise = getRekidai();
  let list = [];
  let error = null;
  let topRankers = {};
  let topRankersSort = [];
  let topRankersLabels = [];
  let topRankersCounts = [];
  let topVersions = {};
  let topVersionsSort = [];
  let topCharge = {};
  let topChargeSort = [];
  let topPeak = {};
  let topPeakSort = [];
  let topScratch = {};
  let topScratchSort = [];
  let topSoflan = {};
  let topSoflanSort = [];
  let topSuperCharge = {};
  let topSuperChargeSort = [];
  let topSuperPeak = {};
  let topSuperPeakSort = [];
  let topSuperScratch = {};
  let topSuperScratchSort = [];
  let topSuperSoflan = {};
  let topSuperSoflanSort = [];
  let topSlow = {};
  let topSlowSort = [];
  let topMid = {};
  let topMidSort = [];
  let topFast = {};
  let topFastSort = [];
  let topSuperFast = {};
  let topSuperFastSort = [];
  promise.then((jsonArray) => {
    jsonArray.reduce(
      (prev, cur) => {
        if (topRankers[cur.player] == null) {
          topRankers[cur.player] = 1;
        } else {
          ++topRankers[cur.player];
        }
        return topRankers;
      },
      {}
    );
    jsonArray.reduce(
      (prev, cur) => {
        if (topVersions[cur.topVersion] == null) {
          topVersions[cur.topVersion] = 1;
        } else {
          ++topVersions[cur.topVersion];
        }
        return topVersions;
      },
      {}
    );
    jsonArray.reduce(
      (prev, cur) => {
        if (cur.charge) {
          if (topCharge[cur.player] == null) {
            $$invalidate(17, topCharge[cur.player] = 1, topCharge);
          } else {
            $$invalidate(17, ++topCharge[cur.player], topCharge);
          }
        }
        return topCharge;
      },
      {}
    );
    jsonArray.reduce(
      (prev, cur) => {
        if (cur.peak) {
          if (topPeak[cur.player] == null) {
            $$invalidate(18, topPeak[cur.player] = 1, topPeak);
          } else {
            $$invalidate(18, ++topPeak[cur.player], topPeak);
          }
        }
        return topPeak;
      },
      {}
    );
    jsonArray.reduce(
      (prev, cur) => {
        if (cur.scratch) {
          if (topScratch[cur.player] == null) {
            $$invalidate(19, topScratch[cur.player] = 1, topScratch);
          } else {
            $$invalidate(19, ++topScratch[cur.player], topScratch);
          }
        }
        return topScratch;
      },
      {}
    );
    jsonArray.reduce(
      (prev, cur) => {
        if (cur.soflan) {
          if (topSoflan[cur.player] == null) {
            $$invalidate(20, topSoflan[cur.player] = 1, topSoflan);
          } else {
            $$invalidate(20, ++topSoflan[cur.player], topSoflan);
          }
        }
        return topSoflan;
      },
      {}
    );
    jsonArray.reduce(
      (prev, cur) => {
        if (cur.superCharge) {
          if (topSuperCharge[cur.player] == null) {
            $$invalidate(21, topSuperCharge[cur.player] = 1, topSuperCharge);
          } else {
            $$invalidate(21, ++topSuperCharge[cur.player], topSuperCharge);
          }
        }
        return topSuperCharge;
      },
      {}
    );
    jsonArray.reduce(
      (prev, cur) => {
        if (cur.superPeak) {
          if (topSuperPeak[cur.player] == null) {
            $$invalidate(22, topSuperPeak[cur.player] = 1, topSuperPeak);
          } else {
            $$invalidate(22, ++topSuperPeak[cur.player], topSuperPeak);
          }
        }
        return topSuperPeak;
      },
      {}
    );
    jsonArray.reduce(
      (prev, cur) => {
        if (cur.superScratch) {
          if (topSuperScratch[cur.player] == null) {
            $$invalidate(23, topSuperScratch[cur.player] = 1, topSuperScratch);
          } else {
            $$invalidate(23, ++topSuperScratch[cur.player], topSuperScratch);
          }
        }
        return topSuperScratch;
      },
      {}
    );
    jsonArray.reduce(
      (prev, cur) => {
        if (cur.superSoflan) {
          if (topSuperSoflan[cur.player] == null) {
            $$invalidate(24, topSuperSoflan[cur.player] = 1, topSuperSoflan);
          } else {
            $$invalidate(24, ++topSuperSoflan[cur.player], topSuperSoflan);
          }
        }
        return topSuperSoflan;
      },
      {}
    );
    jsonArray.reduce(
      (prev, cur) => {
        const max = Math.max(...cur.bpm);
        if (max < 150) {
          if (topSlow[cur.player] == null) {
            $$invalidate(25, topSlow[cur.player] = 1, topSlow);
          } else {
            $$invalidate(25, ++topSlow[cur.player], topSlow);
          }
        }
        return topSlow;
      },
      {}
    );
    jsonArray.reduce(
      (prev, cur) => {
        const max = Math.max(...cur.bpm);
        if (150 <= max && max < 170) {
          if (topMid[cur.player] == null) {
            $$invalidate(26, topMid[cur.player] = 1, topMid);
          } else {
            $$invalidate(26, ++topMid[cur.player], topMid);
          }
        }
        return topMid;
      },
      {}
    );
    jsonArray.reduce(
      (prev, cur) => {
        const max = Math.max(...cur.bpm);
        if (170 <= max && max < 190) {
          if (topFast[cur.player] == null) {
            $$invalidate(27, topFast[cur.player] = 1, topFast);
          } else {
            $$invalidate(27, ++topFast[cur.player], topFast);
          }
        }
        return topFast;
      },
      {}
    );
    jsonArray.reduce(
      (prev, cur) => {
        const max = Math.max(...cur.bpm);
        if (190 <= max) {
          if (topSuperFast[cur.player] == null) {
            $$invalidate(28, topSuperFast[cur.player] = 1, topSuperFast);
          } else {
            $$invalidate(28, ++topSuperFast[cur.player], topSuperFast);
          }
        }
        return topSuperFast;
      },
      {}
    );
    Object.keys(topRankers).forEach((e) => {
      topRankersSort.push({
        player: e,
        counts: topRankers[e],
        percentage: 100 * topRankers[e] / jsonArray.length
      });
    });
    Object.keys(topVersions).forEach((e) => {
      topVersionsSort.push({
        version: e,
        counts: topVersions[e],
        percentage: 100 * topVersions[e] / jsonArray.length
      });
    });
    const topChargeLen = jsonArray.filter((e) => e.charge).length;
    Object.keys(topCharge).forEach((e) => {
      topChargeSort.push({
        player: e,
        counts: topCharge[e],
        percentage: 100 * topCharge[e] / topChargeLen
      });
    });
    const topPeakLen = jsonArray.filter((e) => e.peak).length;
    Object.keys(topPeak).forEach((e) => {
      topPeakSort.push({
        player: e,
        counts: topPeak[e],
        percentage: 100 * topPeak[e] / topPeakLen
      });
    });
    const topScratchLen = jsonArray.filter((e) => e.scratch).length;
    Object.keys(topScratch).forEach((e) => {
      topScratchSort.push({
        player: e,
        counts: topScratch[e],
        percentage: 100 * topScratch[e] / topScratchLen
      });
    });
    const topSoflanLen = jsonArray.filter((e) => e.soflan).length;
    Object.keys(topSoflan).forEach((e) => {
      topSoflanSort.push({
        player: e,
        counts: topSoflan[e],
        percentage: 100 * topSoflan[e] / topSoflanLen
      });
    });
    const topSuperChargeLen = jsonArray.filter((e) => e.superCharge).length;
    Object.keys(topSuperCharge).forEach((e) => {
      topSuperChargeSort.push({
        player: e,
        counts: topSuperCharge[e],
        percentage: 100 * topSuperCharge[e] / topSuperChargeLen
      });
    });
    const topSuperPeakLen = jsonArray.filter((e) => e.superPeak).length;
    Object.keys(topSuperPeak).forEach((e) => {
      topSuperPeakSort.push({
        player: e,
        counts: topSuperPeak[e],
        percentage: 100 * topSuperPeak[e] / topSuperPeakLen
      });
    });
    const topSuperScratchLen = jsonArray.filter((e) => e.superScratch).length;
    Object.keys(topSuperScratch).forEach((e) => {
      topSuperScratchSort.push({
        player: e,
        counts: topSuperScratch[e],
        percentage: 100 * topSuperScratch[e] / topSuperScratchLen
      });
    });
    const topSuperSoflanLen = jsonArray.filter((e) => e.superSoflan).length;
    Object.keys(topSuperSoflan).forEach((e) => {
      topSuperSoflanSort.push({
        player: e,
        counts: topSuperSoflan[e],
        percentage: 100 * topSuperSoflan[e] / topSuperSoflanLen
      });
    });
    const topSlowLen = jsonArray.filter((e) => {
      const max = Math.max(...e.bpm);
      return max < 150;
    }).length;
    Object.keys(topSlow).forEach((e) => {
      topSlowSort.push({
        player: e,
        counts: topSlow[e],
        percentage: 100 * topSlow[e] / topSlowLen
      });
    });
    const topMidLen = jsonArray.filter((e) => {
      const max = Math.max(...e.bpm);
      return 150 <= max && max < 170;
    }).length;
    Object.keys(topMid).forEach((e) => {
      topMidSort.push({
        player: e,
        counts: topMid[e],
        percentage: 100 * topMid[e] / topMidLen
      });
    });
    const topFastLen = jsonArray.filter((e) => {
      const max = Math.max(...e.bpm);
      return 170 <= max && max < 190;
    }).length;
    Object.keys(topFast).forEach((e) => {
      topFastSort.push({
        player: e,
        counts: topFast[e],
        percentage: 100 * topFast[e] / topFastLen
      });
    });
    const topSuperFastLen = jsonArray.filter((e) => {
      const max = Math.max(...e.bpm);
      return 190 <= max;
    }).length;
    Object.keys(topSuperFast).forEach((e) => {
      topSuperFastSort.push({
        player: e,
        counts: topSuperFast[e],
        percentage: 100 * topSuperFast[e] / topSuperFastLen
      });
    });
    topRankersSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return 1;
        }
      } else if (lhs.counts < rhs.counts) {
        return 1;
      } else {
        return -1;
      }
    });
    topVersionsSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.version == rhs.version) {
          return 0;
        }
        if (lhs.version < rhs.version) {
          return -1;
        } else {
          return 1;
        }
      } else if (lhs.counts < rhs.counts) {
        return 1;
      } else {
        return -1;
      }
    });
    topChargeSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return 1;
        }
      } else if (lhs.counts < rhs.counts) {
        return 1;
      } else {
        return -1;
      }
    });
    topPeakSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return 1;
        }
      } else if (lhs.counts < rhs.counts) {
        return 1;
      } else {
        return -1;
      }
    });
    topScratchSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return 1;
        }
      } else if (lhs.counts < rhs.counts) {
        return 1;
      } else {
        return -1;
      }
    });
    topSoflanSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return 1;
        }
      } else if (lhs.counts < rhs.counts) {
        return 1;
      } else {
        return -1;
      }
    });
    topSuperChargeSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return 1;
        }
      } else if (lhs.counts < rhs.counts) {
        return 1;
      } else {
        return -1;
      }
    });
    topSuperPeakSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return 1;
        }
      } else if (lhs.counts < rhs.counts) {
        return 1;
      } else {
        return -1;
      }
    });
    topSuperScratchSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return 1;
        }
      } else if (lhs.counts < rhs.counts) {
        return 1;
      } else {
        return -1;
      }
    });
    topSuperSoflanSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return 1;
        }
      } else if (lhs.counts < rhs.counts) {
        return 1;
      } else {
        return -1;
      }
    });
    topSlowSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return 1;
        }
      } else if (lhs.counts < rhs.counts) {
        return 1;
      } else {
        return -1;
      }
    });
    topMidSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return 1;
        }
      } else if (lhs.counts < rhs.counts) {
        return 1;
      } else {
        return -1;
      }
    });
    topFastSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return 1;
        }
      } else if (lhs.counts < rhs.counts) {
        return 1;
      } else {
        return -1;
      }
    });
    topSuperFastSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return 1;
        }
      } else if (lhs.counts < rhs.counts) {
        return 1;
      } else {
        return -1;
      }
    });
    topRankersSort.forEach((e, i) => {
      topRankersLabels.push(e.player);
      topRankersCounts.push(e.counts);
      if (i <= 0) {
        $$invalidate(3, topRankersSort[i].rank = 1, topRankersSort);
      } else {
        if (topRankersSort[i - 1].counts == topRankersSort[i].counts) {
          $$invalidate(3, topRankersSort[i].rank = topRankersSort[i - 1].rank, topRankersSort);
        } else {
          const count = topRankersSort.filter((e2) => e2.rank == topRankersSort[i - 1].rank).length;
          $$invalidate(3, topRankersSort[i].rank = topRankersSort[i - 1].rank + count, topRankersSort);
        }
      }
    });
    topVersionsSort.forEach((e, i) => {
      if (i <= 0) {
        $$invalidate(4, topVersionsSort[i].rank = 1, topVersionsSort);
      } else {
        if (topVersionsSort[i - 1].counts == topVersionsSort[i].counts) {
          $$invalidate(4, topVersionsSort[i].rank = topVersionsSort[i - 1].rank, topVersionsSort);
        } else {
          const count = topVersionsSort.filter((e2) => e2.rank == topVersionsSort[i - 1].rank).length;
          $$invalidate(4, topVersionsSort[i].rank = topVersionsSort[i - 1].rank + count, topVersionsSort);
        }
      }
    });
    topChargeSort.forEach((e, i) => {
      if (i <= 0) {
        $$invalidate(5, topChargeSort[i].rank = 1, topChargeSort);
      } else {
        if (topChargeSort[i - 1].counts == topChargeSort[i].counts) {
          $$invalidate(5, topChargeSort[i].rank = topChargeSort[i - 1].rank, topChargeSort);
        } else {
          const count = topChargeSort.filter((e2) => e2.rank == topChargeSort[i - 1].rank).length;
          $$invalidate(5, topChargeSort[i].rank = topChargeSort[i - 1].rank + count, topChargeSort);
        }
      }
    });
    topPeakSort.forEach((e, i) => {
      if (i <= 0) {
        $$invalidate(6, topPeakSort[i].rank = 1, topPeakSort);
      } else {
        if (topPeakSort[i - 1].counts == topPeakSort[i].counts) {
          $$invalidate(6, topPeakSort[i].rank = topPeakSort[i - 1].rank, topPeakSort);
        } else {
          const count = topPeakSort.filter((e2) => e2.rank == topPeakSort[i - 1].rank).length;
          $$invalidate(6, topPeakSort[i].rank = topPeakSort[i - 1].rank + count, topPeakSort);
        }
      }
    });
    topScratchSort.forEach((e, i) => {
      if (i <= 0) {
        $$invalidate(7, topScratchSort[i].rank = 1, topScratchSort);
      } else {
        if (topScratchSort[i - 1].counts == topScratchSort[i].counts) {
          $$invalidate(7, topScratchSort[i].rank = topScratchSort[i - 1].rank, topScratchSort);
        } else {
          const count = topScratchSort.filter((e2) => e2.rank == topScratchSort[i - 1].rank).length;
          $$invalidate(7, topScratchSort[i].rank = topScratchSort[i - 1].rank + count, topScratchSort);
        }
      }
    });
    topSoflanSort.forEach((e, i) => {
      if (i <= 0) {
        $$invalidate(8, topSoflanSort[i].rank = 1, topSoflanSort);
      } else {
        if (topSoflanSort[i - 1].counts == topSoflanSort[i].counts) {
          $$invalidate(8, topSoflanSort[i].rank = topSoflanSort[i - 1].rank, topSoflanSort);
        } else {
          const count = topSoflanSort.filter((e2) => e2.rank == topSoflanSort[i - 1].rank).length;
          $$invalidate(8, topSoflanSort[i].rank = topSoflanSort[i - 1].rank + count, topSoflanSort);
        }
      }
    });
    topSuperChargeSort.forEach((e, i) => {
      if (i <= 0) {
        $$invalidate(9, topSuperChargeSort[i].rank = 1, topSuperChargeSort);
      } else {
        if (topSuperChargeSort[i - 1].counts == topSuperChargeSort[i].counts) {
          $$invalidate(9, topSuperChargeSort[i].rank = topSuperChargeSort[i - 1].rank, topSuperChargeSort);
        } else {
          const count = topSuperChargeSort.filter((e2) => e2.rank == topSuperChargeSort[i - 1].rank).length;
          $$invalidate(9, topSuperChargeSort[i].rank = topSuperChargeSort[i - 1].rank + count, topSuperChargeSort);
        }
      }
    });
    topSuperPeakSort.forEach((e, i) => {
      if (i <= 0) {
        $$invalidate(10, topSuperPeakSort[i].rank = 1, topSuperPeakSort);
      } else {
        if (topSuperPeakSort[i - 1].counts == topSuperPeakSort[i].counts) {
          $$invalidate(10, topSuperPeakSort[i].rank = topSuperPeakSort[i - 1].rank, topSuperPeakSort);
        } else {
          const count = topSuperPeakSort.filter((e2) => e2.rank == topSuperPeakSort[i - 1].rank).length;
          $$invalidate(10, topSuperPeakSort[i].rank = topSuperPeakSort[i - 1].rank + count, topSuperPeakSort);
        }
      }
    });
    topSuperScratchSort.forEach((e, i) => {
      if (i <= 0) {
        $$invalidate(11, topSuperScratchSort[i].rank = 1, topSuperScratchSort);
      } else {
        if (topSuperScratchSort[i - 1].counts == topSuperScratchSort[i].counts) {
          $$invalidate(11, topSuperScratchSort[i].rank = topSuperScratchSort[i - 1].rank, topSuperScratchSort);
        } else {
          const count = topSuperScratchSort.filter((e2) => e2.rank == topSuperScratchSort[i - 1].rank).length;
          $$invalidate(11, topSuperScratchSort[i].rank = topSuperScratchSort[i - 1].rank + count, topSuperScratchSort);
        }
      }
    });
    topSuperSoflanSort.forEach((e, i) => {
      if (i <= 0) {
        $$invalidate(12, topSuperSoflanSort[i].rank = 1, topSuperSoflanSort);
      } else {
        if (topSuperSoflanSort[i - 1].counts == topSuperSoflanSort[i].counts) {
          $$invalidate(12, topSuperSoflanSort[i].rank = topSuperSoflanSort[i - 1].rank, topSuperSoflanSort);
        } else {
          const count = topSuperSoflanSort.filter((e2) => e2.rank == topSuperSoflanSort[i - 1].rank).length;
          $$invalidate(12, topSuperSoflanSort[i].rank = topSuperSoflanSort[i - 1].rank + count, topSuperSoflanSort);
        }
      }
    });
    topSlowSort.forEach((e, i) => {
      if (i <= 0) {
        $$invalidate(13, topSlowSort[i].rank = 1, topSlowSort);
      } else {
        if (topSlowSort[i - 1].counts == topSlowSort[i].counts) {
          $$invalidate(13, topSlowSort[i].rank = topSlowSort[i - 1].rank, topSlowSort);
        } else {
          const count = topSlowSort.filter((e2) => e2.rank == topSlowSort[i - 1].rank).length;
          $$invalidate(13, topSlowSort[i].rank = topSlowSort[i - 1].rank + count, topSlowSort);
        }
      }
    });
    topMidSort.forEach((e, i) => {
      if (i <= 0) {
        $$invalidate(14, topMidSort[i].rank = 1, topMidSort);
      } else {
        if (topMidSort[i - 1].counts == topMidSort[i].counts) {
          $$invalidate(14, topMidSort[i].rank = topMidSort[i - 1].rank, topMidSort);
        } else {
          const count = topMidSort.filter((e2) => e2.rank == topMidSort[i - 1].rank).length;
          $$invalidate(14, topMidSort[i].rank = topMidSort[i - 1].rank + count, topMidSort);
        }
      }
    });
    topFastSort.forEach((e, i) => {
      if (i <= 0) {
        $$invalidate(15, topFastSort[i].rank = 1, topFastSort);
      } else {
        if (topFastSort[i - 1].counts == topFastSort[i].counts) {
          $$invalidate(15, topFastSort[i].rank = topFastSort[i - 1].rank, topFastSort);
        } else {
          const count = topFastSort.filter((e2) => e2.rank == topFastSort[i - 1].rank).length;
          $$invalidate(15, topFastSort[i].rank = topFastSort[i - 1].rank + count, topFastSort);
        }
      }
    });
    topSuperFastSort.forEach((e, i) => {
      if (i <= 0) {
        $$invalidate(16, topSuperFastSort[i].rank = 1, topSuperFastSort);
      } else {
        if (topSuperFastSort[i - 1].counts == topSuperFastSort[i].counts) {
          $$invalidate(16, topSuperFastSort[i].rank = topSuperFastSort[i - 1].rank, topSuperFastSort);
        } else {
          const count = topSuperFastSort.filter((e2) => e2.rank == topSuperFastSort[i - 1].rank).length;
          $$invalidate(16, topSuperFastSort[i].rank = topSuperFastSort[i - 1].rank + count, topSuperFastSort);
        }
      }
    });
    $$invalidate(0, visible = true);
    $$invalidate(1, list = jsonArray);
    $$invalidate(2, error = null);
    list.sort((lhs, rhs) => {
      if (lhs.date == null && rhs.date == null) {
        return 0;
      }
      if (lhs.date == null) {
        return 1;
      }
      if (rhs.date == null) {
        return -1;
      }
      const repLhs = lhs.date.replaceAll("*", "0");
      const repRhs = rhs.date.replaceAll("*", "0");
      if (repLhs < repRhs) {
        return 1;
      }
      if (repLhs > repRhs) {
        return -1;
      }
      return lhs.music.localeCompare(rhs.music, navigator.languages[0] || navigator.language, { numeric: true, ignorePunctuation: true });
    });
  }).catch((e) => {
    $$invalidate(0, visible = true);
    $$invalidate(1, list = []);
    $$invalidate(2, error = e);
  });
  return [
    visible,
    list,
    error,
    topRankersSort,
    topVersionsSort,
    topChargeSort,
    topPeakSort,
    topScratchSort,
    topSoflanSort,
    topSuperChargeSort,
    topSuperPeakSort,
    topSuperScratchSort,
    topSuperSoflanSort,
    topSlowSort,
    topMidSort,
    topFastSort,
    topSuperFastSort,
    topCharge,
    topPeak,
    topScratch,
    topSoflan,
    topSuperCharge,
    topSuperPeak,
    topSuperScratch,
    topSuperSoflan,
    topSlow,
    topMid,
    topFast,
    topSuperFast
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {}, null, [-1, -1, -1]);
  }
}
export {
  Page as default
};
