import{cG as Lt,cH as B,Z as ae,B as ce,cI as O,a as le,cJ as fe,V as Z,aj as ue,bc as pe,ao as de,at as he,ae as Vt,k as $,cK as v,z as xt,cL as G,cM as X,cN as g,cO as U,cP as D,cQ as x,v as me,cR as J,F as Ot,S as ge,H as be,b7 as Se,au as _e,aY as Ce,X as ye,aO as lt,aL as ft,cS as ve,t as Ee,cT as Te,cU as we,l as Ae,cV as Dt,cW as Me,cX as Pe,i as Ne}from"./links-BXqhanf9.js";
/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Re="http://www.w3.org/2000/svg",Le="http://www.w3.org/1998/Math/MathML",S=typeof document<"u"?document:null,ut=S&&S.createElement("template"),Ve={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o="svg"===t?S.createElementNS(Re,e):"mathml"===t?S.createElementNS(Le,e):n?S.createElement(e,{is:n}):S.createElement(e);return"select"===e&&s&&null!=s.multiple&&o.setAttribute("multiple",s.multiple),o},createText:e=>S.createTextNode(e),createComment:e=>S.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>S.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const a=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),o!==r&&(o=o.nextSibling););else{ut.innerHTML="svg"===s?`<svg>${e}</svg>`:"mathml"===s?`<math>${e}</math>`:e;const o=ut.content;if("svg"===s||"mathml"===s){const e=o.firstChild;for(;e.firstChild;)o.appendChild(e.firstChild);o.removeChild(e)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},C="transition",R="animation",P=Symbol("_vtc"),It=(e,{slots:t})=>ae(ce,Ht(e),t);It.displayName="Transition";const $t={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},xe=It.props=O({},le,$t),w=(e,t=[])=>{g(e)?e.forEach((e=>e(...t))):e&&e(...t)},pt=e=>!!e&&(g(e)?e.some((e=>e.length>1)):e.length>1);function Ht(e){const t={};for(const n in e)n in $t||(t[n]=e[n]);if(!1===e.css)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=i,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,m=Oe(o),h=m&&m[0],v=m&&m[1],{onBeforeEnter:g,onEnter:_,onEnterCancelled:S,onLeave:C,onLeaveCancelled:E,onBeforeAppear:A=g,onAppear:N=_,onAppearCancelled:P=S}=t,T=(e,t,n)=>{y(e,t?u:i),y(e,t?c:a),n&&n()},L=(e,t)=>{e._isLeaving=!1,y(e,p),y(e,f),y(e,d),t&&t()},x=e=>(t,n)=>{const o=e?N:_,a=()=>T(t,e,n);w(o,[t,a]),dt((()=>{y(t,e?l:r),b(t,e?u:i),pt(o)||ht(t,s,h,a)}))};return O(t,{onBeforeEnter(e){w(g,[e]),b(e,r),b(e,a)},onBeforeAppear(e){w(A,[e]),b(e,l),b(e,c)},onEnter:x(!1),onAppear:x(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>L(e,t);b(e,p),b(e,d),Kt(),dt((()=>{e._isLeaving&&(y(e,p),b(e,f),pt(C)||ht(e,s,v,n))})),w(C,[e,n])},onEnterCancelled(e){T(e,!1),w(S,[e])},onAppearCancelled(e){T(e,!0),w(P,[e])},onLeaveCancelled(e){L(e),w(E,[e])}})}function Oe(e){if(null==e)return null;if(fe(e))return[q(e.enter),q(e.leave)];{const t=q(e);return[t,t]}}function q(e){return J(e)}function b(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[P]||(e[P]=new Set)).add(t)}function y(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[P];n&&(n.delete(t),n.size||(e[P]=void 0))}function dt(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let De=0;function ht(e,t,n,s){const o=e._endId=++De,r=()=>{o===e._endId&&s()};if(n)return setTimeout(r,n);const{type:a,timeout:i,propCount:l}=Bt(e,t);if(!a)return s();const c=a+"end";let u=0;const p=()=>{e.removeEventListener(c,d),r()},d=t=>{t.target===e&&++u>=l&&p()};setTimeout((()=>{u<l&&p()}),i+1),e.addEventListener(c,d)}function Bt(e,t){const n=window.getComputedStyle(e),s=e=>(n[e]||"").split(", "),o=s(`${C}Delay`),r=s(`${C}Duration`),a=mt(o,r),i=s(`${R}Delay`),l=s(`${R}Duration`),c=mt(i,l);let u=null,p=0,d=0;t===C?a>0&&(u=C,p=a,d=r.length):t===R?c>0&&(u=R,p=c,d=l.length):(p=Math.max(a,c),u=p>0?a>c?C:R:null,d=u?u===C?r.length:l.length:0);return{type:u,timeout:p,propCount:d,hasTransform:u===C&&/\b(transform|all)(,|$)/.test(s(`${C}Property`).toString())}}function mt(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>gt(t)+gt(e[n]))))}function gt(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function Kt(){return document.body.offsetHeight}function Ie(e,t,n){const s=e[P];s&&(t=(t?[t,...s]:[...s]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const K=Symbol("_vod"),Ft=Symbol("_vsh"),$e={beforeMount(e,{value:t},{transition:n}){e[K]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):L(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),L(e,!0),s.enter(e)):s.leave(e,(()=>{L(e,!1)})):L(e,t))},beforeUnmount(e,{value:t}){L(e,t)}};function L(e,t){e.style.display=t?e[K]:"none",e[Ft]=!t}function He(){$e.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Ut=Symbol("");function mn(e){const t=Z();if(!t)return;const n=t.ut=(n=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e=>k(e,n)))},s=()=>{const s=e(t.proxy);Y(t.subTree,s),n(s)};ue((()=>{pe(s)})),de((()=>{const e=new MutationObserver(s);e.observe(t.subTree.el.parentNode,{childList:!0}),he((()=>e.disconnect()))}))}function Y(e,t){if(128&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{Y(n.activeBranch,t)}))}for(;e.component;)e=e.component.subTree;if(1&e.shapeFlag&&e.el)k(e.el,t);else if(e.type===Ot)e.children.forEach((e=>Y(e,t)));else if(e.type===ge){let{el:n,anchor:s}=e;for(;n&&(k(n,t),n!==s);)n=n.nextSibling}}function k(e,t){if(1===e.nodeType){const n=e.style;let s="";for(const e in t)n.setProperty(`--${e}`,t[e]),s+=`--${e}: ${t[e]};`;n[Ut]=s}}const Be=/(^|;)\s*display\s*:/;function Ke(e,t,n){const s=e.style,o=B(n);let r=!1;if(n&&!o){if(t)if(B(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&H(s,t,"")}else for(const e in t)null==n[e]&&H(s,e,"");for(const e in n)"display"===e&&(r=!0),H(s,e,n[e])}else if(o){if(t!==n){const e=s[Ut];e&&(n+=";"+e),s.cssText=n,r=Be.test(n)}}else t&&e.removeAttribute("style");K in e&&(e[K]=r?s.display:"",e[Ft]&&(s.display="none"))}const bt=/\s*!important$/;function H(e,t,n){if(g(n))n.forEach((n=>H(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Fe(e,t);bt.test(n)?e.setProperty(v(s),n.replace(bt,""),"important"):e[s]=n}}const St=["Webkit","Moz","ms"],z={};function Fe(e,t){const n=z[t];if(n)return n;let s=$(t);if("filter"!==s&&s in e)return z[t]=s;s=Ae(s);for(let n=0;n<St.length;n++){const o=St[n]+s;if(o in e)return z[t]=o}return t}const _t="http://www.w3.org/1999/xlink";function Ct(e,t,n,s,o,r=Pe(t)){s&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(_t,t.slice(6,t.length)):e.setAttributeNS(_t,t,n):null==n||r&&!Dt(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Me(n)?String(n):n)}function Ue(e,t,n,s){if("innerHTML"===t||"textContent"===t){if(null==n)return;return void(e[t]=n)}const o=e.tagName;if("value"===t&&"PROGRESS"!==o&&!o.includes("-")){const s="OPTION"===o?e.getAttribute("value")||"":e.value,r=null==n?"":String(n);return(s!==r||!("_value"in e))&&(e.value=r),null==n&&e.removeAttribute(t),void(e._value=n)}let r=!1;if(""===n||null==n){const s=typeof e[t];"boolean"===s?n=Dt(n):null==n&&"string"===s?(n="",r=!0):"number"===s&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(t)}function _(e,t,n,s){e.addEventListener(t,n,s)}function je(e,t,n,s){e.removeEventListener(t,n,s)}const yt=Symbol("_vei");function Ge(e,t,n,s,o=null){const r=e[yt]||(e[yt]={}),a=r[t];if(s&&a)a.value=s;else{const[n,i]=qe(t);if(s){_(e,n,r[t]=Xe(s,o),i)}else a&&(je(e,n,a,i),r[t]=void 0)}}const vt=/(?:Once|Passive|Capture)$/;function qe(e){let t;if(vt.test(e)){let n;for(t={};n=e.match(vt);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[":"===e[2]?e.slice(3):v(e.slice(2)),t]}let W=0;const ze=Promise.resolve(),We=()=>W||(ze.then((()=>W=0)),W=Date.now());function Xe(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();Ne(Je(e,n.value),t,5,[e])};return n.value=e,n.attached=We(),n}function Je(e,t){if(g(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const Et=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ye=(e,t,n,s,o,r)=>{const a="svg"===o;"class"===t?Ie(e,s,a):"style"===t?Ke(e,n,s):Te(t)?we(t)||Ge(e,t,n,s,r):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):ke(e,t,s,a))?(Ue(e,t,s),!e.tagName.includes("-")&&("value"===t||"checked"===t||"selected"===t)&&Ct(e,t,s,a,r,"value"!==t)):("true-value"===t?e._trueValue=s:"false-value"===t&&(e._falseValue=s),Ct(e,t,s,a))};function ke(e,t,n,s){if(s)return!!("innerHTML"===t||"textContent"===t||t in e&&Et(t)&&Lt(n));if("spellcheck"===t||"draggable"===t||"translate"===t||"form"===t||"list"===t&&"INPUT"===e.tagName||"type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!Et(t)||!B(n))&&t in e}/*! #__NO_SIDE_EFFECTS__ */function Qe(e,t,n){const s=be(e,t);class o extends tt{constructor(e){super(s,e,n)}}return o.def=s,o}/*! #__NO_SIDE_EFFECTS__ */const gn=(e,t)=>Qe(e,t,dn),Ze=typeof HTMLElement<"u"?HTMLElement:class{};class tt extends Ze{constructor(e,t={},n){super(),this._def=e,this._props=t,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Vt((()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),Nt(null,this.shadowRoot),this._instance=null)}))}_resolveDef(){this._resolved=!0;for(let e=0;e<this.attributes.length;e++)this._setAttr(this.attributes[e].name);this._ob=new MutationObserver((e=>{for(const t of e)this._setAttr(t.attributeName)})),this._ob.observe(this,{attributes:!0});const e=(e,t=!1)=>{const{props:n,styles:s}=e;let o;if(n&&!g(n))for(const e in n){const t=n[e];(t===Number||t&&t.type===Number)&&(e in this._props&&(this._props[e]=J(this._props[e])),(o||(o=Object.create(null)))[$(e)]=!0)}this._numberProps=o,t&&this._resolveProps(e),this._applyStyles(s),this._update()},t=this._def.__asyncLoader;t?t().then((t=>e(t,!0))):e(this._def)}_resolveProps(e){const{props:t}=e,n=g(t)?t:Object.keys(t||{});for(const e of Object.keys(this))"_"!==e[0]&&n.includes(e)&&this._setProp(e,this[e],!0,!1);for(const e of n.map($))Object.defineProperty(this,e,{get(){return this._getProp(e)},set(t){this._setProp(e,t)}})}_setAttr(e){let t=this.hasAttribute(e)?this.getAttribute(e):void 0;const n=$(e);this._numberProps&&this._numberProps[n]&&(t=J(t)),this._setProp(n,t,!1)}_getProp(e){return this._props[e]}_setProp(e,t,n=!0,s=!0){t!==this._props[e]&&(this._props[e]=t,s&&this._instance&&this._update(),n&&(!0===t?this.setAttribute(v(e),""):"string"==typeof t||"number"==typeof t?this.setAttribute(v(e),t+""):t||this.removeAttribute(v(e))))}_update(){Nt(this._createVNode(),this.shadowRoot)}_createVNode(){const e=xt(this._def,O({},this._props));return this._instance||(e.ce=e=>{this._instance=e,e.isCE=!0;const t=(e,t)=>{this.dispatchEvent(new CustomEvent(e,{detail:t}))};e.emit=(e,...n)=>{t(e,n),v(e)!==e&&t(v(e),n)};let n=this;for(;n=n&&(n.parentNode||n.host);)if(n instanceof tt){e.parent=n._instance,e.provides=n._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach((e=>{const t=document.createElement("style");t.textContent=e,this.shadowRoot.appendChild(t)}))}}function bn(e="$style"){{const t=Z();if(!t)return G;const n=t.type.__cssModules;if(!n)return G;return n[e]||G}}const jt=new WeakMap,Gt=new WeakMap,F=Symbol("_moveCb"),Tt=Symbol("_enterCb"),qt={name:"TransitionGroup",props:O({},xe,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Z(),s=Se();let o,r;return _e((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!on(o[0].el,n.vnode.el,t))return;o.forEach(en),o.forEach(nn);const s=o.filter(sn);Kt(),s.forEach((e=>{const n=e.el,s=n.style;b(n,t),s.transform=s.webkitTransform=s.transitionDuration="";const o=n[F]=e=>{e&&e.target!==n||(!e||/transform$/.test(e.propertyName))&&(n.removeEventListener("transitionend",o),n[F]=null,y(n,t))};n.addEventListener("transitionend",o)}))})),()=>{const a=Ce(e),i=Ht(a);let l=a.tag||Ot;if(o=[],r)for(let e=0;e<r.length;e++){const t=r[e];t.el&&t.el instanceof Element&&(o.push(t),lt(t,ft(t,i,s,n)),jt.set(t,t.el.getBoundingClientRect()))}r=t.default?ye(t.default()):[];for(let e=0;e<r.length;e++){const t=r[e];null!=t.key&&lt(t,ft(t,i,s,n))}return xt(l,null,r)}}},tn=e=>delete e.mode,Sn=qt;function en(e){const t=e.el;t[F]&&t[F](),t[Tt]&&t[Tt]()}function nn(e){Gt.set(e,e.el.getBoundingClientRect())}function sn(e){const t=jt.get(e),n=Gt.get(e),s=t.left-n.left,o=t.top-n.top;if(s||o){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${s}px,${o}px)`,t.transitionDuration="0s",e}}function on(e,t,n){const s=e.cloneNode(),o=e[P];o&&o.forEach((e=>{e.split(/\s+/).forEach((e=>e&&s.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&s.classList.add(e))),s.style.display="none";const r=1===t.nodeType?t:t.parentNode;r.appendChild(s);const{hasTransform:a}=Bt(s);return r.removeChild(s),a}const E=e=>{const t=e.props["onUpdate:modelValue"]||!1;return g(t)?e=>ve(t,e):t};function rn(e){e.target.composing=!0}function wt(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const m=Symbol("_assign"),Q={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e[m]=E(o);const r=s||o.props&&"number"===o.props.type;_(e,t?"change":"input",(t=>{if(t.target.composing)return;let s=e.value;n&&(s=s.trim()),r&&(s=X(s)),e[m](s)})),n&&_(e,"change",(()=>{e.value=e.value.trim()})),t||(_(e,"compositionstart",rn),_(e,"compositionend",wt),_(e,"change",wt))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:o,number:r}},a){if(e[m]=E(a),e.composing)return;const i=t??"";(!r&&"number"!==e.type||/^0\d/.test(e.value)?e.value:X(e.value))!==i&&(document.activeElement===e&&"range"!==e.type&&(s&&t===n||o&&e.value.trim()===i)||(e.value=i))}},zt={deep:!0,created(e,t,n){e[m]=E(n),_(e,"change",(()=>{const t=e._modelValue,n=N(e),s=e.checked,o=e[m];if(g(t)){const e=U(t,n),r=-1!==e;if(s&&!r)o(t.concat(n));else if(!s&&r){const n=[...t];n.splice(e,1),o(n)}}else if(D(t)){const e=new Set(t);s?e.add(n):e.delete(n),o(e)}else o(Xt(e,s))}))},mounted:At,beforeUpdate(e,t,n){e[m]=E(n),At(e,t,n)}};function At(e,{value:t,oldValue:n},s){e._modelValue=t,g(t)?e.checked=U(t,s.props.value)>-1:D(t)?e.checked=t.has(s.props.value):t!==n&&(e.checked=x(t,Xt(e,!0)))}const Wt={created(e,{value:t},n){e.checked=x(t,n.props.value),e[m]=E(n),_(e,"change",(()=>{e[m](N(e))}))},beforeUpdate(e,{value:t,oldValue:n},s){e[m]=E(s),t!==n&&(e.checked=x(t,s.props.value))}},an={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const o=D(t);_(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?X(N(e)):N(e)));e[m](e.multiple?o?new Set(t):t:t[0]),e._assigning=!0,Vt((()=>{e._assigning=!1}))})),e[m]=E(s)},mounted(e,{value:t,modifiers:{number:n}}){Mt(e,t)},beforeUpdate(e,t,n){e[m]=E(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||Mt(e,t)}};function Mt(e,t,n){const s=e.multiple,o=g(t);if(!s||o||D(t)){for(let n=0,r=e.options.length;n<r;n++){const r=e.options[n],a=N(r);if(s)if(o){const e=typeof a;r.selected="string"===e||"number"===e?t.some((e=>String(e)===String(a))):U(t,a)>-1}else r.selected=t.has(a);else if(x(N(r),t))return void(e.selectedIndex!==n&&(e.selectedIndex=n))}!s&&-1!==e.selectedIndex&&(e.selectedIndex=-1)}}function N(e){return"_value"in e?e._value:e.value}function Xt(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const cn={created(e,t,n){I(e,t,n,null,"created")},mounted(e,t,n){I(e,t,n,null,"mounted")},beforeUpdate(e,t,n,s){I(e,t,n,s,"beforeUpdate")},updated(e,t,n,s){I(e,t,n,s,"updated")}};function Jt(e,t){switch(e){case"SELECT":return an;case"TEXTAREA":return Q;default:switch(t){case"checkbox":return zt;case"radio":return Wt;default:return Q}}}function I(e,t,n,s,o){const r=Jt(e.tagName,n.props&&n.props.type)[o];r&&r(e,t,n,s)}function ln(){Q.getSSRProps=({value:e})=>({value:e}),Wt.getSSRProps=({value:e},t)=>{if(t.props&&x(t.props.value,e))return{checked:!0}},zt.getSSRProps=({value:e},t)=>{if(g(e)){if(t.props&&U(e,t.props.value)>-1)return{checked:!0}}else if(D(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},cn.getSSRProps=(e,t)=>{if("string"!=typeof t.type)return;const n=Jt(t.type.toUpperCase(),t.props&&t.props.type);return n.getSSRProps?n.getSSRProps(e,t):void 0}}const fn=["ctrl","shift","alt","meta"],un={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>fn.some((n=>e[`${n}Key`]&&!t.includes(n)))},_n=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(n,...s)=>{for(let e=0;e<t.length;e++){const s=un[t[e]];if(s&&s(n,t))return}return e(n,...s)})},pn={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Cn=(e,t)=>{const n=e._withKeys||(e._withKeys={}),s=t.join(".");return n[s]||(n[s]=n=>{if(!("key"in n))return;const s=v(n.key);return t.some((e=>e===s||pn[e]===s))?e(n):void 0})},Yt=O({patchProp:Ye},Ve);let V,Pt=!1;function kt(){return V||(V=me(Yt))}function Qt(){return V=Pt?V:Ee(Yt),Pt=!0,V}const Nt=(...e)=>{kt().render(...e)},dn=(...e)=>{Qt().hydrate(...e)},yn=(...e)=>{const t=kt().createApp(...e),{mount:n}=t;return t.mount=e=>{const s=te(e);if(!s)return;const o=t._component;!Lt(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const r=n(s,!1,Zt(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t},vn=(...e)=>{const t=Qt().createApp(...e),{mount:n}=t;return t.mount=e=>{const t=te(e);if(t)return n(t,!0,Zt(t))},t};function Zt(e){return e instanceof SVGElement?"svg":"function"==typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function te(e){return B(e)?document.querySelector(e):e}let Rt=!1;const En=()=>{Rt||(Rt=!0,ln(),He())};export{It as T,tt as V,Sn as a,vn as b,yn as c,Qe as d,gn as e,mn as f,cn as g,dn as h,En as i,Wt as j,an as k,Q as l,$e as m,_n as n,Nt as r,bn as u,zt as v,Cn as w};
