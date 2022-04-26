var St=Object.defineProperty,_t=Object.defineProperties;var xt=Object.getOwnPropertyDescriptors;var We=Object.getOwnPropertySymbols;var Et=Object.prototype.hasOwnProperty,Bt=Object.prototype.propertyIsEnumerable;var Fe=(e,o,n)=>o in e?St(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,W=(e,o)=>{for(var n in o||(o={}))Et.call(o,n)&&Fe(e,n,o[n]);if(We)for(var n of We(o))Bt.call(o,n)&&Fe(e,n,o[n]);return e},G=(e,o)=>_t(e,xt(o));import{v as $t,c as Ae,g as zt,u as Pt,a as Ot,Q as Vt,b as Mt}from"./QBtn.65d22edc.js";import{c as P,h as N,a as it,b as Qt,d as Ne,e as Dt}from"./render.b3b6701f.js";import{c as m,h as L,r as S,f as at,o as U,n as Y,j as A,k as $e,g as Q,l as V,w as k,a as ze,m as ce,H as Ie,p as O,s as Pe,q as Ht,P as Rt,t as Wt,u as ne,v as ye,x as je,y as ge,z as _e,A as we,B as Ft,C as lt,D as At,E as ie,b as Nt,G as It,I as rt,_ as ut,J as ee,K as ue,L as B,d as E,M as jt,N as se,O as xe,Q as Xe,R as Xt,S as Ut,U as Yt,F as Kt,V as Gt}from"./index.0f0389f1.js";var Jt=P({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const n=m(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>L("div",{class:n.value},N(o.default))}}),Zt=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=m(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>L("div",{class:n.value},N(o.default))}});function eo(){const e=S(!at.value);return e.value===!1&&U(()=>{e.value=!0}),e}const st=typeof ResizeObserver!="undefined",Ue=st===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Ee=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,l,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?s():n===null&&(n=setTimeout(s,e.debounce))}function s(){if(clearTimeout(n),n=null,l){const{offsetWidth:c,offsetHeight:i}=l;(c!==t.width||i!==t.height)&&(t={width:c,height:i},o("resize",t))}}const v=Q();if(Object.assign(v.proxy,{trigger:a}),st===!0){let c;return U(()=>{Y(()=>{l=v.proxy.$el.parentNode,l&&(c=new ResizeObserver(a),c.observe(l),s())})}),A(()=>{clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():l&&c.unobserve(l))}),$e}else{let w=function(){clearTimeout(n),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",a,V.passive),i=void 0)},b=function(){w(),l&&l.contentDocument&&(i=l.contentDocument.defaultView,i.addEventListener("resize",a,V.passive),s())};const c=eo();let i;return U(()=>{Y(()=>{l=v.proxy.$el,l&&b()})}),A(w),()=>{if(c.value===!0)return L("object",{style:Ue.style,tabindex:-1,type:"text/html",data:Ue.url,"aria-hidden":"true",onLoad:b})}}}}),to=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=Q(),t=ze(ce,()=>{console.error("QHeader needs to be child of QLayout")}),a=S(parseInt(e.heightHint,10)),s=S(!0),v=m(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),c=m(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return s.value===!0?a.value:0;const u=a.value-t.scroll.value.position;return u>0?u:0}),i=m(()=>e.modelValue!==!0||v.value===!0&&s.value!==!0),w=m(()=>e.modelValue===!0&&i.value===!0&&e.reveal===!0),b=m(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(i.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=m(()=>{const u=t.rows.value.top,C={};return u[0]==="l"&&t.left.space===!0&&(C[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(C[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),C});function d(u,C){t.update("header",u,C)}function p(u,C){u.value!==C&&(u.value=C)}function T({height:u}){p(a,u),d("size",u)}function g(u){w.value===!0&&p(s,!0),n("focusin",u)}k(()=>e.modelValue,u=>{d("space",u),p(s,!0),t.animate()}),k(c,u=>{d("offset",u)}),k(()=>e.reveal,u=>{u===!1&&p(s,e.modelValue)}),k(s,u=>{t.animate(),n("reveal",u)}),k(t.scroll,u=>{e.reveal===!0&&p(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const x={};return t.instances.header=x,e.modelValue===!0&&d("size",a.value),d("space",e.modelValue),d("offset",c.value),A(()=>{t.instances.header===x&&(t.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const u=it(o.default,[]);return e.elevated===!0&&u.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(L(Ee,{debounce:0,onResize:T})),L("header",{class:b.value,style:y.value,onFocusin:g},u)}}}),Be=P({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const n=m(()=>parseInt(e.lines,10)),l=m(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),t=m(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>L("div",{style:t.value,class:l.value},N(o.default))}});const Oe={dark:{type:Boolean,default:null}};function Ve(e,o){return m(()=>e.dark===null?o.dark.isActive:e.dark)}var oo=P({name:"QList",props:G(W({},Oe),{bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean}),setup(e,{slots:o}){const n=Q(),l=Ve(e,n.proxy.$q),t=m(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>L("div",{class:t.value},N(o.default))}});function no(e,o,n){let l;function t(){l!==void 0&&(Ie.remove(l),l=void 0)}return A(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){l={condition:()=>n.value===!0,handler:o},Ie.add(l)}}}const io={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ao=["before-show","show","before-hide","hide"];function lo({showing:e,canShow:o,hideOnRouteChange:n,handleShow:l,handleHide:t,processOnMount:a}){const s=Q(),{props:v,emit:c,proxy:i}=s;let w;function b(u){e.value===!0?p(u):y(u)}function y(u){if(v.disable===!0||u!==void 0&&u.qAnchorHandled===!0||o!==void 0&&o(u)!==!0)return;const C=v["onUpdate:modelValue"]!==void 0;C===!0&&(c("update:modelValue",!0),w=u,Y(()=>{w===u&&(w=void 0)})),(v.modelValue===null||C===!1)&&d(u)}function d(u){e.value!==!0&&(e.value=!0,c("before-show",u),l!==void 0?l(u):c("show",u))}function p(u){if(v.disable===!0)return;const C=v["onUpdate:modelValue"]!==void 0;C===!0&&(c("update:modelValue",!1),w=u,Y(()=>{w===u&&(w=void 0)})),(v.modelValue===null||C===!1)&&T(u)}function T(u){e.value!==!1&&(e.value=!1,c("before-hide",u),t!==void 0?t(u):c("hide",u))}function g(u){v.disable===!0&&u===!0?v["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):u===!0!==e.value&&(u===!0?d:T)(w)}k(()=>v.modelValue,g),n!==void 0&&$t(s)===!0&&k(()=>i.$route.fullPath,()=>{n.value===!0&&e.value===!0&&p()}),a===!0&&U(()=>{g(v.modelValue)});const x={show:y,hide:p,toggle:b};return Object.assign(i,x),x}const ro=[null,document,document.body,document.scrollingElement,document.documentElement];function uo(e,o){let n=zt(o);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return ro.includes(n)?window:n}function ct(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function dt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ae;function qe(){if(ae!==void 0)return ae;const e=document.createElement("p"),o=document.createElement("div");Ae(e,{width:"100%",height:"200px"}),Ae(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const n=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return n===l&&(l=o.clientWidth),o.remove(),ae=n-l,ae}function so(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let J=0,ke,Ce,Z,Le=!1,Ye,Ke,X;function co(e){fo(e)&&Pe(e)}function fo(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=Ht(e),n=e.shiftKey&&!e.deltaX,l=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=n||l?e.deltaY:e.deltaX;for(let a=0;a<o.length;a++){const s=o[a];if(so(s,l))return l?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ge(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function le(e){Le!==!0&&(Le=!0,requestAnimationFrame(()=>{Le=!1;const{height:o}=e.target,{clientHeight:n,scrollTop:l}=document.scrollingElement;(Z===void 0||o!==window.innerHeight)&&(Z=n-o,document.scrollingElement.scrollTop=l),l>Z&&(document.scrollingElement.scrollTop-=Math.ceil((l-Z)/8))}))}function Je(e){const o=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:t}=window.getComputedStyle(o);ke=dt(window),Ce=ct(window),Ye=o.style.left,Ke=o.style.top,o.style.left=`-${ke}px`,o.style.top=`-${Ce}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,O.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",le,V.passiveCapture),window.visualViewport.addEventListener("scroll",le,V.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ge,V.passiveCapture))}O.is.desktop===!0&&O.is.mac===!0&&window[`${e}EventListener`]("wheel",co,V.notPassive),e==="remove"&&(O.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",le,V.passiveCapture),window.visualViewport.removeEventListener("scroll",le,V.passiveCapture)):window.removeEventListener("scroll",Ge,V.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Ye,o.style.top=Ke,window.scrollTo(ke,Ce),Z=void 0)}function vo(e){let o="add";if(e===!0){if(J++,X!==void 0){clearTimeout(X),X=void 0;return}if(J>1)return}else{if(J===0||(J--,J>0))return;if(o="remove",O.is.ios===!0&&O.is.nativeMobile===!0){clearTimeout(X),X=setTimeout(()=>{Je(o),X=void 0},100);return}}Je(o)}function mo(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,vo(o))}}}function ho(){let e;return A(()=>{clearTimeout(e)}),{registerTimeout(o,n){clearTimeout(e),e=setTimeout(o,n)},removeTimeout(){clearTimeout(e)}}}const Me={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},po=Object.keys(Me);Me.all=!0;function Ze(e){const o={};for(const n of po)e[n]===!0&&(o[n]=!0);return Object.keys(o).length===0?Me:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}function et(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function bo(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Rt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Te(e,o,n){const l=_e(e);let t,a=l.left-o.event.x,s=l.top-o.event.y,v=Math.abs(a),c=Math.abs(s);const i=o.direction;i.horizontal===!0&&i.vertical!==!0?t=a<0?"left":"right":i.horizontal!==!0&&i.vertical===!0?t=s<0?"up":"down":i.up===!0&&s<0?(t="up",v>c&&(i.left===!0&&a<0?t="left":i.right===!0&&a>0&&(t="right"))):i.down===!0&&s>0?(t="down",v>c&&(i.left===!0&&a<0?t="left":i.right===!0&&a>0&&(t="right"))):i.left===!0&&a<0?(t="left",v<c&&(i.up===!0&&s<0?t="up":i.down===!0&&s>0&&(t="down"))):i.right===!0&&a>0&&(t="right",v<c&&(i.up===!0&&s<0?t="up":i.down===!0&&s>0&&(t="down")));let w=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,w=!0,t==="left"||t==="right"?(l.left-=a,v=0,a=0):(l.top-=s,c=0,s=0)}return{synthetic:w,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:l,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:v,y:c},offset:{x:a,y:s},delta:{x:l.left-o.event.lastX,y:l.top-o.event.lastY}}}}let yo=0;var Se=Qt({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&O.has.touch!==!0)return;function l(a,s){n.mouse===!0&&s===!0?Pe(a):(n.stop===!0&&ge(a),n.prevent===!0&&je(a))}const t={uid:"qvtp_"+yo++,handler:o,modifiers:n,direction:Ze(n),noop:$e,mouseStart(a){et(a,t)&&Wt(a)&&(ne(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(et(a,t)){const s=a.target;ne(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(O.is.firefox===!0&&ye(e,!0),t.lastEvt=a,s===!0||n.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0)){const i=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&je(i),a.cancelBubble===!0&&ge(i),Object.assign(i,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:i}}ge(a)}const{left:v,top:c}=_e(a);t.event={x:v,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:c}},move(a){if(t.event===void 0)return;const s=_e(a),v=s.left-t.event.x,c=s.top-t.event.y;if(v===0&&c===0)return;t.lastEvt=a;const i=t.event.mouse===!0,w=()=>{l(a,i),n.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),i===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),bo(),t.styleCleanup=d=>{if(t.styleCleanup=void 0,n.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),i===!0){const p=()=>{document.body.classList.remove("no-pointer-events--children")};d!==void 0?setTimeout(()=>{p(),d()},50):p()}else d!==void 0&&d()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(a,t.event.mouse);const{payload:d,synthetic:p}=Te(a,t,!1);d!==void 0&&(t.handler(d)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&w(),t.event.lastX=d.position.left,t.event.lastY=d.position.top,t.event.lastDir=p===!0?void 0:d.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||i===!0&&t.modifiers.mouseAllDir===!0){w(),t.event.detected=!0,t.move(a);return}const b=Math.abs(v),y=Math.abs(c);b!==y&&(t.direction.horizontal===!0&&b>y||t.direction.vertical===!0&&b<y||t.direction.up===!0&&b<y&&c<0||t.direction.down===!0&&b<y&&c>0||t.direction.left===!0&&b>y&&v<0||t.direction.right===!0&&b>y&&v>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(we(t,"temp"),O.is.firefox===!0&&ye(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Te(a===void 0?t.lastEvt:a,t).payload);const{payload:v}=Te(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(v)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,n.mouse===!0&&ne(t,"main",[[e,"mousedown","mouseStart",`passive${n.mouseCapture===!0?"Capture":""}`]]),O.has.touch===!0&&ne(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=Ze(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),we(o,"main"),we(o,"temp"),O.is.firefox===!0&&ye(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function re(e,o,n){return n<=o?o:Math.min(n,Math.max(o,e))}const tt=150;var go=P({name:"QDrawer",inheritAttrs:!1,props:G(W(W({},io),Oe),{side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean}),emits:[...ao,"on-layout","mini-state"],setup(e,{slots:o,emit:n,attrs:l}){const t=Q(),{proxy:{$q:a}}=t,s=Ve(e,a),{preventBodyScroll:v}=mo(),{registerTimeout:c}=ho(),i=ze(ce,()=>{console.error("QDrawer needs to be child of QLayout")});let w,b,y;const d=S(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),p=m(()=>e.mini===!0&&d.value!==!0),T=m(()=>p.value===!0?e.miniWidth:e.width),g=S(e.showIfAbove===!0&&d.value===!1?!0:e.modelValue===!0),x=m(()=>e.persistent!==!0&&(d.value===!0||ft.value===!0));function u(r,h){if(M(),r!==!1&&i.animate(),z(0),d.value===!0){const _=i.instances[te.value];_!==void 0&&_.belowBreakpoint===!0&&_.hide(!1),H(1),i.isContainer.value!==!0&&v(!0)}else H(0),r!==!1&&he(!1);c(()=>{r!==!1&&he(!0),h!==!0&&n("show",r)},tt)}function C(r,h){F(),r!==!1&&i.animate(),H(0),z(I.value*T.value),pe(),h!==!0&&c(()=>{n("hide",r)},tt)}const{show:f,hide:q}=lo({showing:g,hideOnRouteChange:x,handleShow:u,handleHide:C}),{addToHistory:M,removeFromHistory:F}=no(g,q,x),D={belowBreakpoint:d,hide:q},$=m(()=>e.side==="right"),I=m(()=>(a.lang.rtl===!0?-1:1)*($.value===!0?1:-1)),Qe=S(0),j=S(!1),de=S(!1),De=S(T.value*I.value),te=m(()=>$.value===!0?"left":"right"),fe=m(()=>g.value===!0&&d.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:T.value:0),ve=m(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf($.value?"R":"L")>-1||a.platform.is.ios===!0&&i.isContainer.value===!0),K=m(()=>e.overlay===!1&&g.value===!0&&d.value===!1),ft=m(()=>e.overlay===!0&&g.value===!0&&d.value===!1),vt=m(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&j.value===!1?" hidden":"")),mt=m(()=>({backgroundColor:`rgba(0,0,0,${Qe.value*.4})`})),He=m(()=>$.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),ht=m(()=>$.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),pt=m(()=>{const r={};return i.header.space===!0&&He.value===!1&&(ve.value===!0?r.top=`${i.header.offset}px`:i.header.space===!0&&(r.top=`${i.header.size}px`)),i.footer.space===!0&&ht.value===!1&&(ve.value===!0?r.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(r.bottom=`${i.footer.size}px`)),r}),bt=m(()=>{const r={width:`${T.value}px`,transform:`translateX(${De.value}px)`};return d.value===!0?r:Object.assign(r,pt.value)}),yt=m(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),gt=m(()=>`q-drawer q-drawer--${e.side}`+(de.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(d.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${p.value===!0?"mini":"standard"}`+(ve.value===!0||K.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(He.value===!0?" q-drawer--top-padding":""))),wt=m(()=>{const r=a.lang.rtl===!0?e.side:te.value;return[[Se,Lt,void 0,{[r]:!0,mouse:!0}]]}),qt=m(()=>{const r=a.lang.rtl===!0?te.value:e.side;return[[Se,Re,void 0,{[r]:!0,mouse:!0}]]}),kt=m(()=>{const r=a.lang.rtl===!0?te.value:e.side;return[[Se,Re,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function me(){Tt(d,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}k(d,r=>{r===!0?(w=g.value,g.value===!0&&q(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(g.value===!0?(z(0),H(0),pe()):f(!1))}),k(()=>e.side,(r,h)=>{i.instances[h]===D&&(i.instances[h]=void 0,i[h].space=!1,i[h].offset=0),i.instances[r]=D,i[r].size=T.value,i[r].space=K.value,i[r].offset=fe.value}),k(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&me()}),k(()=>e.behavior+e.breakpoint,me),k(i.isContainer,r=>{g.value===!0&&v(r!==!0),r===!0&&me()}),k(i.scrollbarWidth,()=>{z(g.value===!0?0:void 0)}),k(fe,r=>{R("offset",r)}),k(K,r=>{n("on-layout",r),R("space",r)}),k($,()=>{z()}),k(T,r=>{z(),be(e.miniToOverlay,r)}),k(()=>e.miniToOverlay,r=>{be(r,T.value)}),k(()=>a.lang.rtl,()=>{z()}),k(()=>e.mini,()=>{e.modelValue===!0&&(Ct(),i.animate())}),k(p,r=>{n("mini-state",r)});function z(r){r===void 0?Y(()=>{r=g.value===!0?0:T.value,z(I.value*r)}):(i.isContainer.value===!0&&$.value===!0&&(d.value===!0||Math.abs(r)===T.value)&&(r+=I.value*i.scrollbarWidth.value),De.value=r)}function H(r){Qe.value=r}function he(r){const h=r===!0?"remove":i.isContainer.value!==!0?"add":"";h!==""&&document.body.classList[h]("q-body--drawer-toggle")}function Ct(){clearTimeout(b),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),de.value=!0,b=setTimeout(()=>{de.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Lt(r){if(g.value!==!1)return;const h=T.value,_=re(r.distance.x,0,h);if(r.isFinal===!0){_>=Math.min(75,h)===!0?f():(i.animate(),H(0),z(I.value*h)),j.value=!1;return}z((a.lang.rtl===!0?$.value!==!0:$.value)?Math.max(h-_,0):Math.min(0,_-h)),H(re(_/h,0,1)),r.isFirst===!0&&(j.value=!0)}function Re(r){if(g.value!==!0)return;const h=T.value,_=r.direction===e.side,oe=(a.lang.rtl===!0?_!==!0:_)?re(r.distance.x,0,h):0;if(r.isFinal===!0){Math.abs(oe)<Math.min(75,h)===!0?(i.animate(),H(1),z(0)):q(),j.value=!1;return}z(I.value*oe),H(re(1-oe/h,0,1)),r.isFirst===!0&&(j.value=!0)}function pe(){v(!1),he(!0)}function R(r,h){i.update(e.side,r,h)}function Tt(r,h){r.value!==h&&(r.value=h)}function be(r,h){R("size",r===!0?e.miniWidth:h)}return i.instances[e.side]=D,be(e.miniToOverlay,T.value),R("space",K.value),R("offset",fe.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),U(()=>{n("on-layout",K.value),n("mini-state",p.value),w=e.showIfAbove===!0;const r=()=>{(g.value===!0?u:C)(!1,!0)};if(i.totalWidth.value!==0){Y(r);return}y=k(i.totalWidth,()=>{y(),y=void 0,g.value===!1&&e.showIfAbove===!0&&d.value===!1?f(!1):r()})}),A(()=>{y!==void 0&&y(),clearTimeout(b),g.value===!0&&pe(),i.instances[e.side]===D&&(i.instances[e.side]=void 0,R("size",0),R("offset",0),R("space",!1))}),()=>{const r=[];d.value===!0&&(e.noSwipeOpen===!1&&r.push(Ft(L("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),wt.value)),r.push(Ne("div",{ref:"backdrop",class:vt.value,style:mt.value,"aria-hidden":"true",onClick:q},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>kt.value)));const h=p.value===!0&&o.mini!==void 0,_=[L("div",G(W({},l),{key:""+h,class:[yt.value,l.class]}),h===!0?o.mini():N(o.default))];return e.elevated===!0&&g.value===!0&&_.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Ne("aside",{ref:"content",class:gt.value,style:bt.value},_,"contentclose",e.noSwipeClose!==!0&&d.value===!0,()=>qt.value)),L("div",{class:"q-drawer-container"},r)}}}),wo=P({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=Q(),l=ze(ce,()=>{console.error("QPageContainer needs to be child of QLayout")});lt(At,!0);const t=m(()=>{const a={};return l.header.space===!0&&(a.paddingTop=`${l.header.size}px`),l.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(a.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),a});return()=>L("div",{class:"q-page-container",style:t.value},N(o.default))}});const{passive:ot}=V,qo=["both","horizontal","vertical"];var ko=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>qo.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,a;k(()=>e.scrollTarget,()=>{c(),v()});function s(){l!==null&&l();const b=Math.max(0,ct(t)),y=dt(t),d={top:b-n.position.top,left:y-n.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const p=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";n.position={top:b,left:y},n.directionChanged=n.direction!==p,n.delta=d,n.directionChanged===!0&&(n.direction=p,n.inflectionPoint=n.position),o("scroll",W({},n))}function v(){t=uo(a,e.scrollTarget),t.addEventListener("scroll",i,ot),i(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",i,ot),t=void 0)}function i(b){if(b===!0||e.debounce===0||e.debounce==="0")s();else if(l===null){const[y,d]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];l=()=>{d(y),l=null}}}const w=Q();return U(()=>{a=w.proxy.$el.parentNode,v()}),A(()=>{l!==null&&l(),c()}),Object.assign(w.proxy,{trigger:i,getPosition:()=>n}),$e}}),Co=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=Q(),t=S(null),a=S(l.screen.height),s=S(e.container===!0?0:l.screen.width),v=S({position:0,direction:"down",inflectionPoint:0}),c=S(0),i=S(at.value===!0?0:qe()),w=m(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=m(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),y=m(()=>i.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),d=m(()=>i.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function p(f){if(e.container===!0||document.qScrollPrevented!==!0){const q={position:f.position.top,direction:f.direction,directionChanged:f.directionChanged,inflectionPoint:f.inflectionPoint.top,delta:f.delta.top};v.value=q,e.onScroll!==void 0&&n("scroll",q)}}function T(f){const{height:q,width:M}=f;let F=!1;a.value!==q&&(F=!0,a.value=q,e.onScrollHeight!==void 0&&n("scroll-height",q),x()),s.value!==M&&(F=!0,s.value=M),F===!0&&e.onResize!==void 0&&n("resize",f)}function g({height:f}){c.value!==f&&(c.value=f,x())}function x(){if(e.container===!0){const f=a.value>c.value?qe():0;i.value!==f&&(i.value=f)}}let u;const C={instances:{},view:m(()=>e.view),isContainer:m(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:i,totalWidth:m(()=>s.value+i.value),rows:m(()=>{const f=e.view.toLowerCase().split(" ");return{top:f[0].split(""),middle:f[1].split(""),bottom:f[2].split("")}}),header:ie({size:0,offset:0,space:!1}),right:ie({size:300,offset:0,space:!1}),footer:ie({size:0,offset:0,space:!1}),left:ie({size:300,offset:0,space:!1}),scroll:v,animate(){u!==void 0?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),u=void 0},155)},update(f,q,M){C[f][q]=M}};if(lt(ce,C),qe()>0){let M=function(){f=null,q.classList.remove("hide-scrollbar")},F=function(){if(f===null){if(q.scrollHeight>l.screen.height)return;q.classList.add("hide-scrollbar")}else clearTimeout(f);f=setTimeout(M,300)},D=function($){f!==null&&$==="remove"&&(clearTimeout(f),M()),window[`${$}EventListener`]("resize",F)},f=null;const q=document.body;k(()=>e.container!==!0?"add":"remove",D),e.container!==!0&&D("add"),Nt(()=>{D("remove")})}return()=>{const f=Dt(o.default,[L(ko,{onScroll:p}),L(Ee,{onResize:T})]),q=L("div",{class:w.value,style:b.value,ref:e.container===!0?void 0:t},f);return e.container===!0?L("div",{class:"q-layout-container overflow-hidden",ref:t},[L(Ee,{onResize:g}),L("div",{class:"absolute-full",style:y.value},[L("div",{class:"scroll",style:d.value},[q])])]):q}}}),nt=P({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const n=m(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>L("div",{class:n.value},N(o.default))}}),Lo=P({name:"QItem",props:G(W(W({},Oe),Pt),{tag:{type:String,default:"div"},active:Boolean,clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean}),emits:["click","keyup"],setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=Q(),t=Ve(e,l),{hasRouterLink:a,hasLink:s,linkProps:v,linkClass:c,linkTag:i,navigateToRouterLink:w}=Ot(),b=S(null),y=S(null),d=m(()=>e.clickable===!0||s.value===!0||e.tag==="label"),p=m(()=>e.disable!==!0&&d.value===!0),T=m(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(s.value===!0?c.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(p.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),g=m(()=>{if(e.insetLevel===void 0)return null;const f=l.lang.rtl===!0?"Right":"Left";return{["padding"+f]:16+e.insetLevel*56+"px"}});function x(f){p.value===!0&&(y.value!==null&&(f.qKeyEvent!==!0&&document.activeElement===b.value?y.value.focus():document.activeElement===y.value&&b.value.focus()),a.value===!0&&w(f),n("click",f))}function u(f){if(p.value===!0&&It(f,13)===!0){Pe(f),f.qKeyEvent=!0;const q=new MouseEvent("click",f);q.qKeyEvent=!0,b.value.dispatchEvent(q)}n("keyup",f)}function C(){const f=it(o.default,[]);return p.value===!0&&f.unshift(L("div",{class:"q-focus-helper",tabindex:-1,ref:y})),f}return()=>{const f={ref:b,class:T.value,style:g.value,onClick:x,onKeyup:u};return p.value===!0?(f.tabindex=e.tabindex||"0",Object.assign(f,v.value)):d.value===!0&&(f["aria-disabled"]="true"),L(i.value,f,C())}}});const To=rt({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function So(e,o,n,l,t,a){return ee(),ue(Lo,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:B(()=>[e.icon?(ee(),ue(nt,{key:0,avatar:""},{default:B(()=>[E(Vt,{name:e.icon},null,8,["name"])]),_:1})):jt("",!0),E(nt,null,{default:B(()=>[E(Be,null,{default:B(()=>[se(xe(e.title),1)]),_:1}),E(Be,{caption:""},{default:B(()=>[se(xe(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var _o=ut(To,[["render",So]]);const xo=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],Eo=rt({name:"MainLayout",components:{EssentialLink:_o},setup(){const e=S(!1);return{essentialLinks:xo,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),Bo=se(" Quasar App "),$o=se(" Essential Links ");function zo(e,o,n,l,t,a){const s=Xe("EssentialLink"),v=Xe("router-view");return ee(),ue(Co,{view:"lHh Lpr lFf"},{default:B(()=>[E(to,{elevated:""},{default:B(()=>[E(Zt,null,{default:B(()=>[E(Mt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),E(Jt,null,{default:B(()=>[Bo]),_:1}),Xt("div",null,"Quasar v"+xe(e.$q.version),1)]),_:1})]),_:1}),E(go,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=c=>e.leftDrawerOpen=c),"show-if-above":"",bordered:""},{default:B(()=>[E(oo,null,{default:B(()=>[E(Be,{header:""},{default:B(()=>[$o]),_:1}),(ee(!0),Ut(Kt,null,Yt(e.essentialLinks,c=>(ee(),ue(s,Gt({key:c.title},c),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),E(wo,null,{default:B(()=>[E(v)]),_:1})]),_:1})}var Do=ut(Eo,[["render",zo]]);export{Do as default};
