function S(){}const ft=t=>t;function dt(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function Q(){return Object.create(null)}function C(t){t.forEach(Y)}function J(t){return typeof t=="function"}function Ht(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function Ft(t,e){return q||(q=document.createElement("a")),q.href=e,t===q.href}function _t(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return S;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t,e,n){t.$$.on_destroy.push(ht(e,n))}function Gt(t,e,n,i){if(t){const r=Z(t,e,n,i);return t[0](r)}}function Z(t,e,n,i){return t[1]&&i?dt(n.ctx.slice(),t[1](i(e))):n.ctx}function It(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function Jt(t,e,n,i,r,u){if(r){const s=Z(e,n,i,u);t.p(s,r)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const tt=typeof window<"u";let mt=tt?()=>window.performance.now():()=>Date.now(),K=tt?t=>requestAnimationFrame(t):S;const k=new Set;function et(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&K(et)}function pt(t){let e;return k.size===0&&K(et),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let F=!1;function yt(){F=!0}function gt(){F=!1}function wt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:wt(1,r,h=>e[n[h]].claim_order,c))-1;i[l]=n[f]+1;const d=f+1;n[d]=l,r=Math.max(d,r)}const u=[],s=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(u.push(e[l-1]);o>=l;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);u.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<u.length&&s[l].claim_order>=u[c].claim_order;)c++;const f=c<u.length?u[c]:null;t.insertBefore(s[l],f)}}function xt(t,e){t.appendChild(e)}function nt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=rt("style");return vt(nt(t),e),e.sheet}function vt(t,e){return xt(t.head||t,e),e.sheet}function Et(t,e){if(F){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Wt(t,e,n){F&&!n?Et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function it(t){t.parentNode&&t.parentNode.removeChild(t)}function rt(t){return document.createElement(t)}function W(t){return document.createTextNode(t)}function Qt(){return W(" ")}function Ut(){return W("")}function Vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Nt(t){return Array.from(t.childNodes)}function At(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function st(t,e,n,i,r=!1){At(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function kt(t,e,n,i){return st(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Xt(t,e,n){return kt(t,e,n,rt)}function St(t,e){return st(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>W(e),!0)}function Yt(t){return St(t," ")}function Zt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function te(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ee(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function ne(t,e){return new t(e)}const z=new Map;let B=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:$t(e),rules:{}};return z.set(t,n),n}function U(t,e,n,i,r,u,s,o=0){const l=16.666/i;let c=`{
`;for(let y=0;y<=1;y+=l){const g=e+(n-e)*u(y);c+=y*100+`%{${s(g,1-g)}}
`}const f=c+`100% {${s(n,1-n)}}
}`,d=`__svelte_${Mt(f)}_${o}`,h=nt(t),{stylesheet:a,rules:_}=z.get(h)||jt(h,t);_[d]||(_[d]=!0,a.insertRule(`@keyframes ${d} ${f}`,a.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${d} ${i}ms linear ${r}ms 1 both`,B+=1,d}function Tt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),B-=r,B||Dt())}function Dt(){K(()=>{B||(z.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&it(e)}),z.clear())})}let D;function T(t){D=t}function ot(){if(!D)throw new Error("Function called outside component initialization");return D}function ie(t){ot().$$.on_mount.push(t)}function re(t){ot().$$.after_update.push(t)}const A=[],V=[],P=[],X=[],lt=Promise.resolve();let I=!1;function ct(){I||(I=!0,lt.then(ut))}function se(){return ct(),lt}function H(t){P.push(t)}const L=new Set;let N=0;function ut(){if(N!==0)return;const t=D;do{try{for(;N<A.length;){const e=A[N];N++,T(e),Ot(e.$$)}}catch(e){throw A.length=0,N=0,e}for(T(null),A.length=0,N=0;V.length;)V.pop()();for(let e=0;e<P.length;e+=1){const n=P[e];L.has(n)||(L.add(n),n())}P.length=0}while(A.length);for(;X.length;)X.pop()();I=!1,L.clear(),T(t)}function Ot(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}let j;function qt(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function G(t,e,n){t.dispatchEvent(Ct(`${e?"intro":"outro"}${n}`))}const R=new Set;let x;function oe(){x={r:0,c:[],p:x}}function le(){x.r||C(x.c),x=x.p}function at(t,e){t&&t.i&&(R.delete(t),t.i(e))}function ce(t,e,n,i){if(t&&t.o){if(R.has(t))return;R.add(t),x.c.push(()=>{R.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Pt={duration:0};function ue(t,e,n,i){const r={direction:"both"};let u=e(t,n,r),s=i?0:1,o=null,l=null,c=null;function f(){c&&Tt(t,c)}function d(a,_){const p=a.b-s;return _*=Math.abs(p),{a:s,b:a.b,d:p,duration:_,start:a.start,end:a.start+_,group:a.group}}function h(a){const{delay:_=0,duration:p=300,easing:y=ft,tick:g=S,css:$}=u||Pt,E={start:mt()+_,b:a};a||(E.group=x,x.r+=1),o||l?l=E:($&&(f(),c=U(t,s,a,p,_,y,$)),a&&g(0,1),o=d(E,p),H(()=>G(t,a,"start")),pt(v=>{if(l&&v>l.start&&(o=d(l,p),l=null,G(t,o.b,"start"),$&&(f(),c=U(t,s,o.b,o.duration,0,y,u.css))),o){if(v>=o.end)g(s=o.b,1-s),G(t,o.b,"end"),l||(o.b?f():--o.group.r||C(o.group.c)),o=null;else if(v>=o.start){const M=v-o.start;s=o.a+o.d*y(M/o.duration),g(s,1-s)}}return!!(o||l)}))}return{run(a){J(u)?qt().then(()=>{u=u(r),h(a)}):h(a)},end(){f(),o=l=null}}}const ae=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function fe(t,e){t.d(1),e.delete(t.key)}function de(t,e,n,i,r,u,s,o,l,c,f,d){let h=t.length,a=u.length,_=h;const p={};for(;_--;)p[t[_].key]=_;const y=[],g=new Map,$=new Map;for(_=a;_--;){const m=d(r,u,_),w=n(m);let b=s.get(w);b?i&&b.p(m,e):(b=c(w,m),b.c()),g.set(w,y[_]=b),w in p&&$.set(w,Math.abs(_-p[w]))}const E=new Set,v=new Set;function M(m){at(m,1),m.m(o,f),s.set(m.key,m),f=m.first,a--}for(;h&&a;){const m=y[a-1],w=t[h-1],b=m.key,O=w.key;m===w?(f=m.first,h--,a--):g.has(O)?!s.has(b)||E.has(b)?M(m):v.has(O)?h--:$.get(b)>$.get(O)?(v.add(b),M(m)):(E.add(O),h--):(l(w,s),h--)}for(;h--;){const m=t[h];g.has(m.key)||l(m,s)}for(;a;)M(y[a-1]);return y}function _e(t){t&&t.c()}function he(t,e){t&&t.l(e)}function Rt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||H(()=>{const s=t.$$.on_mount.map(Y).filter(J);t.$$.on_destroy?t.$$.on_destroy.push(...s):C(s),t.$$.on_mount=[]}),u.forEach(H)}function zt(t,e){const n=t.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(t,e){t.$$.dirty[0]===-1&&(A.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function me(t,e,n,i,r,u,s,o=[-1]){const l=D;T(t);const c=t.$$={fragment:null,ctx:[],props:u,update:S,not_equal:r,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Q(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(d,h,...a)=>{const _=a.length?a[0]:h;return c.ctx&&r(c.ctx[d],c.ctx[d]=_)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](_),f&&Bt(t,d)),h}):[],c.update(),f=!0,C(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){yt();const d=Nt(e.target);c.fragment&&c.fragment.l(d),d.forEach(it)}else c.fragment&&c.fragment.c();e.intro&&at(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),gt(),ut()}T(l)}class pe{$destroy(){zt(this,1),this.$destroy=S}$on(e,n){if(!J(n))return S;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{se as A,S as B,Gt as C,Jt as D,Kt as E,It as F,Et as G,Lt as H,ee as I,Ft as J,ae as K,de as L,H as M,ue as N,fe as O,pe as S,Qt as a,Wt as b,Yt as c,le as d,Ut as e,at as f,oe as g,it as h,me as i,re as j,rt as k,Xt as l,Nt as m,Vt as n,ie as o,te as p,W as q,St as r,Ht as s,ce as t,Zt as u,ne as v,_e as w,he as x,Rt as y,zt as z};