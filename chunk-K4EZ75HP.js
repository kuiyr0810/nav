import{_ as gt}from"./chunk-HTWPL7YY.js";import{Id as N,Ud as V,a as q,ae as M,b as Q,be as z,d as pt,f as G,ge as A,je as X}from"./chunk-7LOXYYGB.js";var K=pt((P,H)=>{"use strict";(function(n,u){typeof P=="object"&&typeof H=="object"?H.exports=u():typeof define=="function"&&define.amd?define([],u):typeof P=="object"?P.ClipboardJS=u():n.ClipboardJS=u()})(P,function(){return function(){var c={686:function(r,a,t){"use strict";t.d(a,{default:function(){return dt}});var s=t(279),e=t.n(s),g=t(370),m=t.n(g),v=t(817),w=t.n(v);function h(p){try{return document.execCommand(p)}catch{return!1}}var f=function(i){var o=w()(i);return h("cut"),o},b=f;function E(p){var i=document.documentElement.getAttribute("dir")==="rtl",o=document.createElement("textarea");o.style.fontSize="12pt",o.style.border="0",o.style.padding="0",o.style.margin="0",o.style.position="absolute",o.style[i?"right":"left"]="-9999px";var l=window.pageYOffset||document.documentElement.scrollTop;return o.style.top="".concat(l,"px"),o.setAttribute("readonly",""),o.value=p,o}var O=function(i,o){var l=E(i);o.container.appendChild(l);var d=w()(l);return h("copy"),l.remove(),d},J=function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},l="";return typeof i=="string"?l=O(i,o):i instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(i?.type)?l=O(i.value,o):(l=w()(i),h("copy")),l},C=J;function I(p){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?I=function(o){return typeof o}:I=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},I(p)}var L=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=i.action,l=o===void 0?"copy":o,d=i.container,y=i.target,_=i.text;if(l!=="copy"&&l!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(y!==void 0)if(y&&I(y)==="object"&&y.nodeType===1){if(l==="copy"&&y.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(l==="cut"&&(y.hasAttribute("readonly")||y.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(_)return C(_,{container:d});if(y)return l==="cut"?b(y):C(y,{container:d})},F=L;function T(p){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(o){return typeof o}:T=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},T(p)}function x(p,i){if(!(p instanceof i))throw new TypeError("Cannot call a class as a function")}function S(p,i){for(var o=0;o<i.length;o++){var l=i[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(p,l.key,l)}}function it(p,i,o){return i&&S(p.prototype,i),o&&S(p,o),p}function at(p,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");p.prototype=Object.create(i&&i.prototype,{constructor:{value:p,writable:!0,configurable:!0}}),i&&W(p,i)}function W(p,i){return W=Object.setPrototypeOf||function(l,d){return l.__proto__=d,l},W(p,i)}function ct(p){var i=ft();return function(){var l=k(p),d;if(i){var y=k(this).constructor;d=Reflect.construct(l,arguments,y)}else d=l.apply(this,arguments);return st(this,d)}}function st(p,i){return i&&(T(i)==="object"||typeof i=="function")?i:ut(p)}function ut(p){if(p===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p}function ft(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function k(p){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},k(p)}function Y(p,i){var o="data-clipboard-".concat(p);if(i.hasAttribute(o))return i.getAttribute(o)}var lt=function(p){at(o,p);var i=ct(o);function o(l,d){var y;return x(this,o),y=i.call(this),y.resolveOptions(d),y.listenClick(l),y}return it(o,[{key:"resolveOptions",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof d.action=="function"?d.action:this.defaultAction,this.target=typeof d.target=="function"?d.target:this.defaultTarget,this.text=typeof d.text=="function"?d.text:this.defaultText,this.container=T(d.container)==="object"?d.container:document.body}},{key:"listenClick",value:function(d){var y=this;this.listener=m()(d,"click",function(_){return y.onClick(_)})}},{key:"onClick",value:function(d){var y=d.delegateTarget||d.currentTarget,_=this.action(y)||"copy",D=F({action:_,container:this.container,target:this.target(y),text:this.text(y)});this.emit(D?"success":"error",{action:_,text:D,trigger:y,clearSelection:function(){y&&y.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(d){return Y("action",d)}},{key:"defaultTarget",value:function(d){var y=Y("target",d);if(y)return document.querySelector(y)}},{key:"defaultText",value:function(d){return Y("text",d)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(d){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return C(d,y)}},{key:"cut",value:function(d){return b(d)}},{key:"isSupported",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],y=typeof d=="string"?[d]:d,_=!!document.queryCommandSupported;return y.forEach(function(D){_=_&&!!document.queryCommandSupported(D)}),_}}]),o}(e()),dt=lt},828:function(r){var a=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function s(e,g){for(;e&&e.nodeType!==a;){if(typeof e.matches=="function"&&e.matches(g))return e;e=e.parentNode}}r.exports=s},438:function(r,a,t){var s=t(828);function e(v,w,h,f,b){var E=m.apply(this,arguments);return v.addEventListener(h,E,b),{destroy:function(){v.removeEventListener(h,E,b)}}}function g(v,w,h,f,b){return typeof v.addEventListener=="function"?e.apply(null,arguments):typeof h=="function"?e.bind(null,document).apply(null,arguments):(typeof v=="string"&&(v=document.querySelectorAll(v)),Array.prototype.map.call(v,function(E){return e(E,w,h,f,b)}))}function m(v,w,h,f){return function(b){b.delegateTarget=s(b.target,w),b.delegateTarget&&f.call(v,b)}}r.exports=g},879:function(r,a){a.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},a.nodeList=function(t){var s=Object.prototype.toString.call(t);return t!==void 0&&(s==="[object NodeList]"||s==="[object HTMLCollection]")&&"length"in t&&(t.length===0||a.node(t[0]))},a.string=function(t){return typeof t=="string"||t instanceof String},a.fn=function(t){var s=Object.prototype.toString.call(t);return s==="[object Function]"}},370:function(r,a,t){var s=t(879),e=t(438);function g(h,f,b){if(!h&&!f&&!b)throw new Error("Missing required arguments");if(!s.string(f))throw new TypeError("Second argument must be a String");if(!s.fn(b))throw new TypeError("Third argument must be a Function");if(s.node(h))return m(h,f,b);if(s.nodeList(h))return v(h,f,b);if(s.string(h))return w(h,f,b);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function m(h,f,b){return h.addEventListener(f,b),{destroy:function(){h.removeEventListener(f,b)}}}function v(h,f,b){return Array.prototype.forEach.call(h,function(E){E.addEventListener(f,b)}),{destroy:function(){Array.prototype.forEach.call(h,function(E){E.removeEventListener(f,b)})}}}function w(h,f,b){return e(document.body,h,f,b)}r.exports=g},817:function(r){function a(t){var s;if(t.nodeName==="SELECT")t.focus(),s=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var e=t.hasAttribute("readonly");e||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),s=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var g=window.getSelection(),m=document.createRange();m.selectNodeContents(t),g.removeAllRanges(),g.addRange(m),s=g.toString()}return s}r.exports=a},279:function(r){function a(){}a.prototype={on:function(t,s,e){var g=this.e||(this.e={});return(g[t]||(g[t]=[])).push({fn:s,ctx:e}),this},once:function(t,s,e){var g=this;function m(){g.off(t,m),s.apply(e,arguments)}return m._=s,this.on(t,m,e)},emit:function(t){var s=[].slice.call(arguments,1),e=((this.e||(this.e={}))[t]||[]).slice(),g=0,m=e.length;for(g;g<m;g++)e[g].fn.apply(e[g].ctx,s);return this},off:function(t,s){var e=this.e||(this.e={}),g=e[t],m=[];if(g&&s)for(var v=0,w=g.length;v<w;v++)g[v].fn!==s&&g[v].fn._!==s&&m.push(g[v]);return m.length?e[t]=m:delete e[t],this}},r.exports=a,r.exports.TinyEmitter=a}},n={};function u(r){if(n[r])return n[r].exports;var a=n[r]={exports:{}};return c[r](a,a.exports,u),a.exports}return function(){u.n=function(r){var a=r&&r.__esModule?function(){return r.default}:function(){return r};return u.d(a,{a}),a}}(),function(){u.d=function(r,a){for(var t in a)u.o(a,t)&&!u.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:a[t]})}}(),function(){u.o=function(r,a){return Object.prototype.hasOwnProperty.call(r,a)}}(),u(686)}().default})});var nt=G(gt()),rt=G(K());var Z=(e=>(e[e.All=1]="All",e[e.Title=2]="Title",e[e.Desc=3]="Desc",e[e.Url=4]="Url",e[e.Current=5]="Current",e[e.Quick=6]="Quick",e[e.Id=7]="Id",e))(Z||{});function j(c){return Math.floor(Math.random()*c)}function St(c,n){if(!n.trim())return[];n=n.toLowerCase();let{type:u,id:r}=B(),{oneIndex:a,twoIndex:t}=ot(r),s=Number(u)||1,e=[],g=[{nav:e,id:-1,title:""}],m=new Map;function v(w){w=w||c;t:for(let h=0;h<w.length;h++){let f=w[h];if(Array.isArray(f.nav)&&v(f.nav),f.name){f.name=et(f.name),f.desc=et(f.desc);let b=f.name.toLowerCase(),E=f.desc.toLowerCase(),O=f.url.toLowerCase();if(E[0]==="!")continue;let C=()=>{if(b.includes(n)){let x=f,S=new RegExp(`(${n})`,"i");if(x.__name__=x.name,x.name=x.name.replace(S,"<b>$1</b>"),!m.has(x.id))return m.set(x.id,!0),e.push(x),!0}return!1},I=()=>{if(O.includes(n)&&!m.has(f.id)||f.tags.some(S=>S.url?.includes(n))&&!m.has(f.id))return m.set(f.id,!0),e.push(f),!0},L=()=>{if(E.includes(n)){let x=f,S=new RegExp(`(${n})`,"i");if(x.__desc__=x.desc,x.desc=x.desc.replace(S,"<b>$1</b>"),!m.has(x.id))return m.set(x.id,!0),e.push(x),!0}return!1},F=()=>{if(f.top&&b.includes(n)){let x=f,S=new RegExp(`(${n})`,"i");if(x.__name__=x.name,x.name=x.name.replace(S,"<b>$1</b>"),!m.has(x.id))return m.set(x.id,!0),e.push(x),!0}return!1},T=()=>f.id==n?(e.push(f),!0):!1;try{switch(s){case 4:I();break;case 2:C();break;case 3:L();break;case 6:F();break;case 7:if(T())break t;break;default:C(),L(),I()}}catch(x){console.error(x)}}}}return s===5?v(c[a].nav[t].nav):v(),e.length<=0?[]:g}function R(){let c=j(255),n=j(255),u=j(255);return`#${c.toString(16)}${n.toString(16)}${u.toString(16)}000`.slice(0,7)}var U;function It(){if(tt())return;clearInterval(U);let c="random-light-bg",n=document.getElementById(c)||document.createElement("div"),u=j(360);n.id=c,n.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;z-index:-3;transition: 1s linear;",n.style.backgroundImage=`linear-gradient(${u}deg, ${R()} 0%, ${R()} 100%)`,document.body.appendChild(n);function r(){if(tt()){clearInterval(U);return}let a=`linear-gradient(${u}deg, ${R()} 0%, ${R()} 100%)`;n.style.opacity=".3",setTimeout(()=>{n.style.backgroundImage=a,n.style.opacity="1"},1e3)}U=setInterval(r,1e4)}function B(){let{href:c}=window.location,n=c.split("?")[1]||"",u=nt.default.parse(n),r=u.id;if(u.id==null)try{let a=window.localStorage.getItem(N.location);a&&(r=JSON.parse(a).id)}catch{}return Q(q({},u),{type:u.type,q:u.q||"",id:r})}function Tt(){let{id:c}=B();window.localStorage.setItem(N.location,JSON.stringify({id:c}))}function At(){let c=z[0]||{};try{let n=window.localStorage.getItem(N.engine);if(n){let u=JSON.parse(n),r=z.find(a=>a.name===u.name);r&&(c=r)}}catch{}return c}function Ct(c){window.localStorage.setItem(N.engine,JSON.stringify(c))}function tt(){let c=window.localStorage.getItem(N.isDark),n=window?.matchMedia?.("(prefers-color-scheme: dark)")?.matches;return!c&&n?n:!!Number(c)}function Nt(c,n){let u=c.target,r=`copy-${Date.now()}`;return u.id=r,u.setAttribute("data-clipboard-text",n),new Promise(a=>{let t=new rt.default(`#${r}`);t.on("success",function(){t.destroy(),a(!0)}),t.on("error",function(){t.destroy(),a(!1)})})}function et(c=""){return c?c.replace(/<b>|<\/b>/g,""):""}function Pt(){let{id:c}=B(),{oneIndex:n,twoIndex:u}=ot(c),r=[];try{A[n]&&A[n]?.nav?.length>0&&(V||!A[n].nav[u].ownVisible)?r=A[n].nav[u].nav:r=[]}catch{r=[]}return r}function $(c){return String(c).padStart(2,"0")}function Ot(c){let n=document.querySelectorAll(c),u=Number.MAX_SAFE_INTEGER;if(n.length<=0)return u;let a=n[0].parentNode.clientWidth,t=0;for(let s=0;s<n.length;s++){let e=n[s];if(t+=e.clientWidth,t>a){u=s-1;break}}return u}function mt(){return"ontouchstart"in window}function Lt(){let c=new Date,n=new Date(c.getFullYear(),0,0),u=c-n,r=1e3*60*60*24;return Math.floor(u/r)}function kt(){let c=X("_weeks"),n=new Date,u=n.getFullYear(),r=$(n.getHours()),a=$(n.getMinutes()),t=$(n.getSeconds()),s=n.getMonth()+1,e=n.getDate(),g=n.getDay(),m=$(e);return{year:u,hours:r,minutes:a,seconds:t,month:s,date:e,zeroDate:m,dayText:c[g]}}function Dt(){let c=mt()?M.appTheme:M.theme;return c==="Current"?M.theme:c}function ot(c,n=0){c=Number(c);let u=n,r=n,a=n,t=[];t:for(let s=0;s<A.length;s++){let e=A[s];if(e.title&&e.id===c){u=s,t.push(e.title);break}if(Array.isArray(e.nav))for(let g=0;g<e.nav.length;g++){let m=e.nav[g];if(m.title&&m.id===c){u=s,r=g,t.push(e.title);break t}if(Array.isArray(m.nav)){for(let v=0;v<m.nav.length;v++)if(m.nav[v].id===c){u=s,r=g,a=v,t.push(e.title);break t}}}}return{oneIndex:u,twoIndex:r,threeIndex:a,breadcrumb:t}}export{Z as a,St as b,It as c,B as d,Tt as e,At as f,Ct as g,tt as h,Nt as i,et as j,Pt as k,Ot as l,mt as m,Lt as n,kt as o,Dt as p,ot as q};
