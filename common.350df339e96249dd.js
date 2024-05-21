"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{6579:(w,m,i)=>{i.d(m,{c:()=>r});var n=i(4363),l=i(4081),c=i(405);const r=(e,o)=>{let t,s;const g=(d,E,p)=>{if(typeof document>"u")return;const M=document.elementFromPoint(d,E);M&&o(M)?M!==t&&(a(),u(M,p)):a()},u=(d,E)=>{t=d,s||(s=t);const p=t;(0,n.w)(()=>p.classList.add("ion-activated")),E()},a=(d=!1)=>{if(!t)return;const E=t;(0,n.w)(()=>E.classList.remove("ion-activated")),d&&s!==t&&t.click(),t=void 0};return(0,c.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:d=>g(d.currentX,d.currentY,l.a),onMove:d=>g(d.currentX,d.currentY,l.b),onEnd:()=>{a(!0),(0,l.h)(),s=void 0}})}},8438:(w,m,i)=>{i.d(m,{g:()=>l});var n=i(8476);const l=()=>{if(void 0!==n.w)return n.w.Capacitor}},5572:(w,m,i)=>{i.d(m,{c:()=>n,i:()=>l});const n=(c,r,e)=>"function"==typeof e?e(c,r):"string"==typeof e?c[e]===r[e]:Array.isArray(r)?r.includes(c):c===r,l=(c,r,e)=>void 0!==c&&(Array.isArray(c)?c.some(o=>n(o,r,e)):n(c,r,e))},3351:(w,m,i)=>{i.d(m,{g:()=>n});const n=(o,t,s,g,u)=>c(o[1],t[1],s[1],g[1],u).map(a=>l(o[0],t[0],s[0],g[0],a)),l=(o,t,s,g,u)=>u*(3*t*Math.pow(u-1,2)+u*(-3*s*u+3*s+g*u))-o*Math.pow(u-1,3),c=(o,t,s,g,u)=>e((g-=u)-3*(s-=u)+3*(t-=u)-(o-=u),3*s-6*t+3*o,3*t-3*o,o).filter(d=>d>=0&&d<=1),e=(o,t,s,g)=>{if(0===o)return((o,t,s)=>{const g=t*t-4*o*s;return g<0?[]:[(-t+Math.sqrt(g))/(2*o),(-t-Math.sqrt(g))/(2*o)]})(t,s,g);const u=(3*(s/=o)-(t/=o)*t)/3,a=(2*t*t*t-9*t*s+27*(g/=o))/27;if(0===u)return[Math.pow(-a,1/3)];if(0===a)return[Math.sqrt(-u),-Math.sqrt(-u)];const d=Math.pow(a/2,2)+Math.pow(u/3,3);if(0===d)return[Math.pow(a/2,.5)-t/3];if(d>0)return[Math.pow(-a/2+Math.sqrt(d),1/3)-Math.pow(a/2+Math.sqrt(d),1/3)-t/3];const E=Math.sqrt(Math.pow(-u/3,3)),p=Math.acos(-a/(2*Math.sqrt(Math.pow(-u/3,3)))),M=2*Math.pow(E,1/3);return[M*Math.cos(p/3)-t/3,M*Math.cos((p+2*Math.PI)/3)-t/3,M*Math.cos((p+4*Math.PI)/3)-t/3]}},5083:(w,m,i)=>{i.d(m,{i:()=>n});const n=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(w,m,i)=>{i.r(m),i.d(m,{startFocusVisible:()=>r});const n="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=e=>{let o=[],t=!0;const s=e?e.shadowRoot:document,g=e||document.body,u=O=>{o.forEach(h=>h.classList.remove(n)),O.forEach(h=>h.classList.add(n)),o=O},a=()=>{t=!1,u([])},d=O=>{t=c.includes(O.key),t||u([])},E=O=>{if(t&&void 0!==O.composedPath){const h=O.composedPath().filter(v=>!!v.classList&&v.classList.contains("ion-focusable"));u(h)}},p=()=>{s.activeElement===g&&u([])};return s.addEventListener("keydown",d),s.addEventListener("focusin",E),s.addEventListener("focusout",p),s.addEventListener("touchstart",a,{passive:!0}),s.addEventListener("mousedown",a),{destroy:()=>{s.removeEventListener("keydown",d),s.removeEventListener("focusin",E),s.removeEventListener("focusout",p),s.removeEventListener("touchstart",a),s.removeEventListener("mousedown",a)},setFocus:u}}},8281:(w,m,i)=>{i.d(m,{c:()=>l});var n=i(5638);const l=o=>{const t=o;let s;return{hasLegacyControl:()=>{if(void 0===s){const u=void 0!==t.label||c(t),a=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,d=(0,n.h)(t);s=!0===t.legacy||!u&&!a&&null!==d}return s}}},c=o=>!!(r.includes(o.tagName)&&null!==o.querySelector('[slot="label"]')||e.includes(o.tagName)&&""!==o.textContent),r=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],e=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},4081:(w,m,i)=>{i.d(m,{I:()=>l,a:()=>t,b:()=>s,c:()=>o,d:()=>u,h:()=>g});var n=i(8438),l=function(a){return a.Heavy="HEAVY",a.Medium="MEDIUM",a.Light="LIGHT",a}(l||{});const r={getEngine(){const a=window.TapticEngine;if(a)return a;const d=(0,n.g)();return null!=d&&d.isPluginAvailable("Haptics")?d.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const d=(0,n.g)();return"web"!==(null==d?void 0:d.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,n.g)(),impact(a){const d=this.getEngine();if(!d)return;const E=this.isCapacitor()?a.style:a.style.toLowerCase();d.impact({style:E})},notification(a){const d=this.getEngine();if(!d)return;const E=this.isCapacitor()?a.type:a.type.toLowerCase();d.notification({type:E})},selection(){const a=this.isCapacitor()?l.Light:"light";this.impact({style:a})},selectionStart(){const a=this.getEngine();a&&(this.isCapacitor()?a.selectionStart():a.gestureSelectionStart())},selectionChanged(){const a=this.getEngine();a&&(this.isCapacitor()?a.selectionChanged():a.gestureSelectionChanged())},selectionEnd(){const a=this.getEngine();a&&(this.isCapacitor()?a.selectionEnd():a.gestureSelectionEnd())}},e=()=>r.available(),o=()=>{e()&&r.selection()},t=()=>{e()&&r.selectionStart()},s=()=>{e()&&r.selectionChanged()},g=()=>{e()&&r.selectionEnd()},u=a=>{e()&&r.impact(a)}},2885:(w,m,i)=>{i.d(m,{I:()=>o,a:()=>u,b:()=>e,c:()=>E,d:()=>M,f:()=>a,g:()=>g,i:()=>s,p:()=>p,r:()=>O,s:()=>d});var n=i(467),l=i(5638),c=i(4929);const e="ion-content",o=".ion-content-scroll-host",t=`${e}, ${o}`,s=h=>"ION-CONTENT"===h.tagName,g=function(){var h=(0,n.A)(function*(v){return s(v)?(yield new Promise(f=>(0,l.c)(v,f)),v.getScrollElement()):v});return function(f){return h.apply(this,arguments)}}(),u=h=>h.querySelector(o)||h.querySelector(t),a=h=>h.closest(t),d=(h,v)=>s(h)?h.scrollToTop(v):Promise.resolve(h.scrollTo({top:0,left:0,behavior:v>0?"smooth":"auto"})),E=(h,v,f,C)=>s(h)?h.scrollByPoint(v,f,C):Promise.resolve(h.scrollBy({top:f,left:v,behavior:C>0?"smooth":"auto"})),p=h=>(0,c.b)(h,e),M=h=>{if(s(h)){const f=h.scrollY;return h.scrollY=!1,f}return h.style.setProperty("overflow","hidden"),!0},O=(h,v)=>{s(h)?h.scrollY=v:h.style.removeProperty("overflow")}},6726:(w,m,i)=>{i.d(m,{a:()=>n,b:()=>E,c:()=>t,d:()=>p,e:()=>D,f:()=>o,g:()=>M,h:()=>c,i:()=>l,j:()=>C,k:()=>y,l:()=>s,m:()=>a,n:()=>O,o:()=>u,p:()=>e,q:()=>r,r:()=>f,s:()=>_,t:()=>d,u:()=>h,v:()=>v,w:()=>g});const n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},275:(w,m,i)=>{i.d(m,{c:()=>r,g:()=>e});var n=i(8476),l=i(5638),c=i(4929);const r=(t,s,g)=>{let u,a;if(void 0!==n.w&&"MutationObserver"in n.w){const M=Array.isArray(s)?s:[s];u=new MutationObserver(O=>{for(const h of O)for(const v of h.addedNodes)if(v.nodeType===Node.ELEMENT_NODE&&M.includes(v.slot))return g(),void(0,l.r)(()=>d(v))}),u.observe(t,{childList:!0})}const d=M=>{var O;a&&(a.disconnect(),a=void 0),a=new MutationObserver(h=>{g();for(const v of h)for(const f of v.removedNodes)f.nodeType===Node.ELEMENT_NODE&&f.slot===s&&p()}),a.observe(null!==(O=M.parentElement)&&void 0!==O?O:M,{subtree:!0,childList:!0})},p=()=>{a&&(a.disconnect(),a=void 0)};return{destroy:()=>{u&&(u.disconnect(),u=void 0),p()}}},e=(t,s,g)=>{const u=null==t?0:t.toString().length,a=o(u,s);if(void 0===g)return a;try{return g(u,s)}catch(d){return(0,c.a)("Exception in provided `counterFormatter`.",d),a}},o=(t,s)=>`${t} / ${s}`},1622:(w,m,i)=>{i.r(m),i.d(m,{KEYBOARD_DID_CLOSE:()=>e,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>y,keyboardDidClose:()=>h,keyboardDidOpen:()=>M,keyboardDidResize:()=>O,resetKeyboardAssist:()=>u,setKeyboardClose:()=>p,setKeyboardOpen:()=>E,startKeyboardAssist:()=>a,trackViewportChanges:()=>C});var n=i(4379);i(8438),i(8476);const r="ionKeyboardDidShow",e="ionKeyboardDidHide";let t={},s={},g=!1;const u=()=>{t={},s={},g=!1},a=_=>{if(n.K.getEngine())d(_);else{if(!_.visualViewport)return;s=y(_.visualViewport),_.visualViewport.onresize=()=>{C(_),M()||O(_)?E(_):h(_)&&p(_)}}},d=_=>{_.addEventListener("keyboardDidShow",D=>E(_,D)),_.addEventListener("keyboardDidHide",()=>p(_))},E=(_,D)=>{v(_,D),g=!0},p=_=>{f(_),g=!1},M=()=>!g&&t.width===s.width&&(t.height-s.height)*s.scale>150,O=_=>g&&!h(_),h=_=>g&&s.height===_.innerHeight,v=(_,D)=>{const P=new CustomEvent(r,{detail:{keyboardHeight:D?D.keyboardHeight:_.innerHeight-s.height}});_.dispatchEvent(P)},f=_=>{const D=new CustomEvent(e);_.dispatchEvent(D)},C=_=>{t=Object.assign({},s),s=y(_.visualViewport)},y=_=>({width:Math.round(_.width),height:Math.round(_.height),offsetTop:_.offsetTop,offsetLeft:_.offsetLeft,pageTop:_.pageTop,pageLeft:_.pageLeft,scale:_.scale})},4379:(w,m,i)=>{i.d(m,{K:()=>r,a:()=>c});var n=i(8438),l=function(e){return e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE",e}(l||{}),c=function(e){return e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none",e}(c||{});const r={getEngine(){const e=(0,n.g)();if(null!=e&&e.isPluginAvailable("Keyboard"))return e.Plugins.Keyboard},getResizeMode(){const e=this.getEngine();return null!=e&&e.getResizeMode?e.getResizeMode().catch(o=>{if(o.code!==l.Unimplemented)throw o}):Promise.resolve(void 0)}}},4731:(w,m,i)=>{i.d(m,{c:()=>o});var n=i(467),l=i(8476),c=i(4379);const r=t=>{if(void 0===l.d||t===c.a.None||void 0===t)return null;const s=l.d.querySelector("ion-app");return null!=s?s:l.d.body},e=t=>{const s=r(t);return null===s?0:s.clientHeight},o=function(){var t=(0,n.A)(function*(s){let g,u,a,d;const E=function(){var v=(0,n.A)(function*(){const f=yield c.K.getResizeMode(),C=void 0===f?void 0:f.mode;g=()=>{void 0===d&&(d=e(C)),a=!0,p(a,C)},u=()=>{a=!1,p(a,C)},null==l.w||l.w.addEventListener("keyboardWillShow",g),null==l.w||l.w.addEventListener("keyboardWillHide",u)});return function(){return v.apply(this,arguments)}}(),p=(v,f)=>{s&&s(v,M(f))},M=v=>{if(0===d||d===e(v))return;const f=r(v);return null!==f?new Promise(C=>{const _=new ResizeObserver(()=>{f.clientHeight===d&&(_.disconnect(),C())});_.observe(f)}):void 0};return yield E(),{init:E,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",g),null==l.w||l.w.removeEventListener("keyboardWillHide",u),g=u=void 0},isKeyboardVisible:()=>a}});return function(g){return t.apply(this,arguments)}}()},7838:(w,m,i)=>{i.d(m,{c:()=>l});var n=i(467);const l=()=>{let c;return{lock:function(){var e=(0,n.A)(function*(){const o=c;let t;return c=new Promise(s=>t=s),void 0!==o&&(yield o),t});return function(){return e.apply(this,arguments)}}()}}},2172:(w,m,i)=>{i.d(m,{c:()=>c});var n=i(8476),l=i(5638);const c=(r,e,o)=>{let t;const s=()=>!(void 0===e()||void 0!==r.label||null===o()),u=()=>{const d=e();if(void 0===d)return;if(!s())return void d.style.removeProperty("width");const E=o().scrollWidth;if(0===E&&null===d.offsetParent&&void 0!==n.w&&"IntersectionObserver"in n.w){if(void 0!==t)return;const p=t=new IntersectionObserver(M=>{1===M[0].intersectionRatio&&(u(),p.disconnect(),t=void 0)},{threshold:.01,root:r});p.observe(d)}else d.style.setProperty("width",.75*E+"px")};return{calculateNotchWidth:()=>{s()&&(0,l.r)(()=>{u()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},7895:(w,m,i)=>{i.d(m,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(c,r,e)=>{const o=c*r/e-c+"ms",t=2*Math.PI*r/e;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(c,r,e)=>{const o=r/e,t=c*o-c+"ms",s=2*Math.PI*o;return{r:5,style:{top:32*Math.sin(s)+"%",left:32*Math.cos(s)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,r,e)=>({y1:14,y2:26,style:{transform:`rotate(${360/e*r+(r<e/2?180:-180)}deg)`,"animation-delay":c*r/e-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,r,e)=>({y1:12,y2:20,style:{transform:`rotate(${360/e*r+(r<e/2?180:-180)}deg)`,"animation-delay":c*r/e-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,r,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/e-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,r,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/e-c+"ms"}})}}},6492:(w,m,i)=>{i.r(m),i.d(m,{createSwipeBackGesture:()=>e});var n=i(5638),l=i(5083),c=i(405);i(8221);const e=(o,t,s,g,u)=>{const a=o.ownerDocument.defaultView;let d=(0,l.i)(o);const p=f=>d?-f.deltaX:f.deltaX;return(0,c.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:f=>(d=(0,l.i)(o),(f=>{const{startX:y}=f;return d?y>=a.innerWidth-50:y<=50})(f)&&t()),onStart:s,onMove:f=>{const y=p(f)/a.innerWidth;g(y)},onEnd:f=>{const C=p(f),y=a.innerWidth,_=C/y,D=(f=>d?-f.velocityX:f.velocityX)(f),P=D>=0&&(D>.2||C>y/2),b=(P?1-_:_)*y;let T=0;if(b>5){const B=b/Math.abs(D);T=Math.min(B,540)}u(P,_<=0?.01:(0,n.l)(0,_,.9999),T)}})}},2935:(w,m,i)=>{i.d(m,{w:()=>n});const n=(r,e,o)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(s=>{o(l(s,e))});return t.observe(r,{childList:!0,subtree:!0}),t},l=(r,e)=>{let o;return r.forEach(t=>{for(let s=0;s<t.addedNodes.length;s++)o=c(t.addedNodes[s],e)||o}),o},c=(r,e)=>{if(1!==r.nodeType)return;const o=r;return(o.tagName===e.toUpperCase()?[o]:Array.from(o.querySelectorAll(e))).find(s=>s.value===o.value)}},1855:(w,m,i)=>{i.d(m,{_:()=>o});var n=i(4438),l=i(177),c=i(8974),r=i(6159);function e(t,s){if(1&t&&(n.j41(0,"p"),n.EFF(1),n.k0s()),2&t){const g=n.XpG();n.R7$(),n.JRh(g.btnNome)}}let o=(()=>{var t;class s{constructor(){this.loading=!1,this.disabled=!1,this.tipoBtn="submit",this.color="primary",this.colorLoading="light",this.height=60,this.width=240}ngOnInit(){}}return(t=s).\u0275fac=function(u){return new(u||t)},t.\u0275cmp=n.VBU({type:t,selectors:[["app-btn-loading"]],inputs:{loading:"loading",disabled:"disabled",btnNome:"btnNome",tipoBtn:"tipoBtn",color:"color",colorLoading:"colorLoading",height:"height",width:"width"},decls:3,vars:7,consts:[["color","tertiary","expand","block","type","submit",1,"cadastrar-btn",3,"disabled"],[3,"loading","color","scale"],[4,"ngIf"]],template:function(u,a){1&u&&(n.j41(0,"ion-button",0),n.nrm(1,"app-loading",1),n.DNE(2,e,2,1,"p",2),n.k0s()),2&u&&(n.Aen("height:"+a.height+"px;width:"+a.width+"px;"),n.Y8G("disabled",a.loading||a.disabled),n.R7$(),n.Y8G("loading",a.loading)("color",a.colorLoading)("scale",1),n.R7$(),n.Y8G("ngIf",!a.loading))},dependencies:[l.bT,c.Jm,r.q],styles:["ion-button[_ngcontent-%COMP%]{width:240px}"]}),s})()},7006:(w,m,i)=>{i.d(m,{p:()=>e});var n=i(177),l=i(8974),c=i(7454),r=i(4438);let e=(()=>{var o;class t{}return(o=t).\u0275fac=function(g){return new(g||o)},o.\u0275mod=r.$C({type:o}),o.\u0275inj=r.G2t({imports:[n.MD,l.bv,c.H]}),t})()},2595:(w,m,i)=>{i.d(m,{n:()=>c});var n=i(4438),l=i(8974);let c=(()=>{var r;class e{constructor(){}ngOnInit(){}}return(r=e).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=n.VBU({type:r,selectors:[["app-footer"]],decls:7,vars:0,consts:[[1,"ion-no-border"],["color","primary"],[1,"ion-justify-content-center","ion-margin-vertical"],["target","_blank","href","https://romuulogoncalves.github.io/portifolio/home"]],template:function(t,s){1&t&&(n.j41(0,"ion-footer",0)(1,"ion-toolbar",1)(2,"ion-row",2)(3,"ion-label"),n.EFF(4," Desenvolvido por "),n.j41(5,"a",3),n.EFF(6,"R\xf4mulo da Silva Gon\xe7alves"),n.k0s()()()()())},dependencies:[l.M0,l.he,l.ln,l.ai],styles:[".permissoes[_ngcontent-%COMP%]{display:flex;gap:30px;flex-wrap:wrap}.permissoes[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:700;cursor:pointer}a[_ngcontent-%COMP%]{color:#000}"]}),e})()},2898:(w,m,i)=>{i.d(m,{k:()=>e});var n=i(177),l=i(8974),c=i(1671),r=i(4438);let e=(()=>{var o;class t{}return(o=t).\u0275fac=function(g){return new(g||o)},o.\u0275mod=r.$C({type:o}),o.\u0275inj=r.G2t({imports:[n.MD,l.bv,c.iI]}),t})()},3427:(w,m,i)=>{i.d(m,{l:()=>v});var n=i(4438),l=i(8570),c=i(8397),r=i(177),e=i(8974),o=i(1671);const t=()=>[""],s=()=>["/perfil"],g=()=>["/listagem"],u=()=>["/ranking"],a=()=>["/tutoriais"],d=()=>["/privacidade"],E=()=>["/termos"],p=()=>["/cookies"],M=()=>["../login"];function O(f,C){1&f&&(n.j41(0,"ion-col",6)(1,"ion-button",16),n.EFF(2,"Entrar"),n.k0s()()),2&f&&(n.R7$(),n.Y8G("routerLink",n.lJ4(1,M)))}function h(f,C){if(1&f&&(n.j41(0,"ion-col",6)(1,"ion-row")(2,"ion-chip",3)(3,"ion-avatar"),n.nrm(4,"ion-img",17),n.k0s(),n.j41(5,"ion-label"),n.EFF(6),n.k0s()(),n.nrm(7,"ion-menu-button"),n.k0s()()),2&f){const y=n.XpG();n.R7$(2),n.Y8G("routerLink",n.lJ4(3,s)),n.R7$(2),n.FS9("src",null==y.usuario?null:y.usuario.imagem),n.R7$(2),n.JRh(y.nome_usuario)}}let v=(()=>{var f;class C{constructor(_,D){this.Usuario=_,this.Toast=D,this.logedIn=this.Usuario.logedIn,this.nome_usuario=this.Usuario.nome_usuario}ngOnInit(){this.carregarUsuario()}carregarUsuario(){this.Usuario.id_usuario&&this.Usuario.pegarUsuario(this.Usuario.id_usuario).subscribe(_=>{this.usuario=_,this.usuario.imagem=this.Usuario.pegarImagem(this.usuario.imagem)},_=>{console.log(_)})}logout(){this.Usuario.logout().subscribe(_=>{console.log(_),this.Usuario.limparToken(),this.Toast.mostrarToast("success","Deslogado"),setTimeout(()=>{location.reload()},500)},_=>{this.Toast.mostrarToast("danger","Algo deu errado!"),console.error(_)})}}return(f=C).\u0275fac=function(_){return new(_||f)(n.rXU(l.o),n.rXU(c.f))},f.\u0275cmp=n.VBU({type:f,selectors:[["app-header"]],decls:51,vars:20,consts:[["side","end","contentId","main-content"],[1,"ion-padding"],["lines","full"],["routerDirection","back",3,"routerLink"],[2,"cursor","pointer",3,"click"],[1,"ion-align-items-center","ion-justify-content-between"],["size","auto"],["size","large","name","exit-outline"],["value","first"],["slot","header","color","light"],["slot","content",1,"ion-padding"],["id","main-content"],[1,"header__principal"],[1,"ion-align-items-center","ion-justify-content-between","ion-padding-vertical"],["routerDirection","back","src","../../../../assets/img/logos/logo.png",1,"titulo",3,"routerLink"],["size","auto",4,"ngIf"],["fill","solid","size","large","color","tertiary","routerDirection","back",3,"routerLink"],["alt","avatar",3,"src"]],template:function(_,D){1&_&&(n.j41(0,"ion-menu",0)(1,"ion-header")(2,"ion-toolbar")(3,"ion-row")(4,"ion-title"),n.EFF(5,"GeoLab"),n.k0s(),n.nrm(6,"ion-menu-button"),n.k0s()()(),n.j41(7,"ion-content",1)(8,"ion-list",2)(9,"ion-item",3)(10,"ion-label"),n.EFF(11,"Home"),n.k0s()(),n.j41(12,"ion-item",3)(13,"ion-label"),n.EFF(14,"Perfil"),n.k0s()(),n.j41(15,"ion-item",3)(16,"ion-label"),n.EFF(17,"Explorar Formas"),n.k0s()(),n.j41(18,"ion-item",3)(19,"ion-label"),n.EFF(20,"Ranking"),n.k0s()(),n.j41(21,"ion-item",3)(22,"ion-label"),n.EFF(23,"Tutoriais"),n.k0s()(),n.j41(24,"ion-item")(25,"ion-label",4),n.bIt("click",function(){return D.logout()}),n.j41(26,"ion-row",5)(27,"ion-col",6)(28,"ion-label"),n.EFF(29,"Sair"),n.k0s()(),n.j41(30,"ion-col",6),n.nrm(31,"ion-icon",7),n.k0s()()()(),n.j41(32,"ion-accordion-group")(33,"ion-accordion",8)(34,"ion-item",9)(35,"ion-label"),n.EFF(36,"Termos e uso"),n.k0s()(),n.j41(37,"div",10)(38,"ion-item",3),n.EFF(39,"Privacidade"),n.k0s(),n.j41(40,"ion-item",3),n.EFF(41,"Termos"),n.k0s(),n.j41(42,"ion-item",3),n.EFF(43,"Cookies"),n.k0s()()()()()()(),n.j41(44,"div",11)(45,"ion-header",12)(46,"ion-row",13)(47,"ion-col",6),n.nrm(48,"ion-img",14),n.k0s(),n.DNE(49,O,3,2,"ion-col",15)(50,h,8,4,"ion-col",15),n.k0s()()()),2&_&&(n.R7$(9),n.Y8G("routerLink",n.lJ4(11,t)),n.R7$(3),n.Y8G("routerLink",n.lJ4(12,s)),n.R7$(3),n.Y8G("routerLink",n.lJ4(13,g)),n.R7$(3),n.Y8G("routerLink",n.lJ4(14,u)),n.R7$(3),n.Y8G("routerLink",n.lJ4(15,a)),n.R7$(17),n.Y8G("routerLink",n.lJ4(16,d)),n.R7$(2),n.Y8G("routerLink",n.lJ4(17,E)),n.R7$(2),n.Y8G("routerLink",n.lJ4(18,p)),n.R7$(6),n.Y8G("routerLink",n.lJ4(19,t)),n.R7$(),n.Y8G("ngIf",!D.logedIn),n.R7$(),n.Y8G("ngIf",D.logedIn))},dependencies:[r.bT,e.xk,e.YH,e.mC,e.Jm,e.ZB,e.hU,e.W9,e.eU,e.iq,e.KW,e.uz,e.he,e.nf,e.oS,e.MC,e.ln,e.BC,e.ai,e.N7,o.Wk],styles:["ion-header[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:var(--ion-color-tertiary)}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{padding:10px}ion-header[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.3rem}ion-header.header__principal[_ngcontent-%COMP%]{padding:5px}ion-header.header__principal[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{cursor:pointer;font-size:3rem;font-family:Cherry Cream Soda,system-ui;font-weight:500;font-style:normal}ion-accordion-group[_ngcontent-%COMP%]{width:100%}"]}),C})()},8178:(w,m,i)=>{i.d(m,{G:()=>e});var n=i(177),l=i(1671),c=i(8974),r=i(4438);let e=(()=>{var o;class t{}return(o=t).\u0275fac=function(g){return new(g||o)},o.\u0275mod=r.$C({type:o}),o.\u0275inj=r.G2t({imports:[n.MD,c.bv,l.iI]}),t})()},7454:(w,m,i)=>{i.d(m,{H:()=>r});var n=i(177),l=i(8974),c=i(4438);let r=(()=>{var e;class o{}return(e=o).\u0275fac=function(s){return new(s||e)},e.\u0275mod=c.$C({type:e}),e.\u0275inj=c.G2t({imports:[n.MD,l.bv]}),o})()},1994:(w,m,i)=>{i.d(m,{s:()=>c});var n=i(467),l=i(4438);let c=(()=>{var r;class e{constructor(){this.mascaraTelefone={mask:["+","5","5"," ",...Array(2).fill(/\d/)," ",...Array(5).fill(/\d/),"-",...Array(4).fill(/\d/)]},this.maskPredicate=function(){var t=(0,n.A)(function*(s){return s.getInputElement()});return function(s){return t.apply(this,arguments)}}()}}return(r=e).\u0275fac=function(t){return new(t||r)},r.\u0275prov=l.jDH({token:r,factory:r.\u0275fac,providedIn:"root"}),e})()}}]);