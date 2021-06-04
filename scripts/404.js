/*!
 * ic-tech.github.io v1.0.0
 * https://ic-tech.github.io/
 * Copyright © 2021 Imesh Chamara
 * Released under the ISC License
 */
!function(){"use strict";const t=(t,e,r={},s=null)=>{r=r||{};var n=new XMLHttpRequest;n.open(r.meth||(s&&!r.meth?"POST":"GET"),t+(0==r.fresh?"":(t.indexOf("?")>=0?"&":"?")+"t="+(new Date).getTime())),Object.keys(r.head||{}).forEach((t=>n.setRequestHeader(t,r.head[t]))),n.onreadystatechange=()=>{if(4==n.readyState&&0!=n.status){if(!n.response)return e({success:!1,error:{code:3,message:"server did not respond"}});try{e(r.raw?n.response:JSON.parse(n.response))}catch(t){e({success:!1,error:{code:4,message:"response could not parse"}})}}},n.onerror=()=>e({success:!1,error:{code:1,message:"network error occurred"}}),n.ontimeout=()=>e({success:!1,error:{code:2,message:"request timed out"}}),n.send(s)};var e=(t,e)=>e?t instanceof s?t:new s(t):t instanceof s?t.v:t,r=t=>t instanceof Array?t:[t];class s{constructor(t,e){return this.v=e?s.ce(t,"string"==typeof e||"object"==typeof e?e:{}):"string"==typeof t?s.qs(t):t,null==t||null==t?t:this}get c(){return Array.from(this.v.classList).map((t=>new s(t)))}get cl(){return this.v.classList}get ch(){return this.v.children}get chn(){return this.v.childNodes}ap(t){return this.v.appendChild(e(t)),this}chr(t){if(t)r(t).forEach((t=>e(t,1).rem()));else for(;this.ch.length>0;)this.ch[0].remove();return this}cla(t){return this.cl.add(...r(t)),this}clr(t){return this.cl.remove(...r(t)),this}clc(t){return!r(t).some((t=>!this.cl.contains(t)))}get st(){return this.v.style}get d(){return this.v.dataset}set stp(t){this.st.setProperty(t[0],t[1])}get txt(){return this.v.innerText}set txt(t){this.v.innerText=t}get html(){return this.v.innerHTML}set html(t){this.v.innerHTML=t}ga(t){return this.v.getAttribute(t)}ra(t,e){return this.v.removeAttribute(t),this}sa(t,e){return this.v.setAttribute(t,e),this}ae(t,e){return this.v.addEventListener(t,e),this}get p(){return new s(this.v.parentElement)}get tag(){return this.v.tagName}get node(){return this.v.nodeName}get val(){return this.v.value}set val(t){this.v.value=t}rem(){return this.v.remove(),this}get prev(){return new s(this.v.previousElementSibling)}get prevN(){return new s(this.v.previousSibling)}get next(){return new s(this.v.nextElementSibling)}get nextN(){return new s(this.v.nextSibling)}static get d(){return document}static qs(t){return this.d.querySelector(t)}static qsa(t){return this.d.querySelectorAll(t)}static ce(t,e={}){var r=0;return[["#cdata-section","createCDATASection"],["#comment","createComment"],["#document-fragment","createDocumentFragment"],["#text","createTextNode"]].some((e=>e[0]==t?[r=e[1]]:0))?this.d[r](e):this.d.createElement(t,e)}static cen(t,e){return this.d.createElementNS(t,e)}static ds(t){return new s(Object.keys(t).map((e=>`[data-${e}="${t[e]}"]`)).join(""))}}const n=!("undefined"==typeof __IC_DEV__||!__IC_DEV__),i=t=>t||"string"==typeof t||"number"==typeof t&&0==t,a=(t,e)=>Object.keys(t).forEach((t=>e(t))),d=t=>t instanceof Array?t:Object.keys(t).map((e=>[e,t[e]])),c=t=>t instanceof Array?t:[t],h=t=>{if("string"==typeof t.d&&(t.d={t:"#text",_txt:t.d,nodes:1,e:{data:t.d}}),t.cr&&t.cr.ap(t.e=new s(t.d.t,t.d.t.startsWith("#")?t.d._txt:{})),i(t.d.t)&&t.e.node.toUpperCase()!=t.d.t.toUpperCase()&&(t.e.p.v.replaceChild((t.t=new s(t.d.t,t.d.t.startsWith("#")?t.d._txt:{})).v,t.e.v),t.e=t.t),t.d.s&&(t.t=e=>t.d.s[e]!=t.e.st[e]?[t.e.st[e]=t.d.s[e]]:0,a(t.d.s,t.t)),t.d.at&&d(t.d.at).forEach((e=>i(e[1])?t.e.ga(e[0])!=e[1].toString()?t.e.sa(...e):0:null==e[1]?t.e.ra(e[0]):0)),t.d.d&&d(t.d.d).forEach((e=>e[1].toString()!=t.e.d[e[0]]?[t.e.d[e[0]]=e[1].toString()]:0)),t.d.cl&&(t.t=[],c(t.d.cl).forEach((e=>e.toString().split(/ /g).forEach((e=>t.t.push(e))))),t.e.clc(t.t)||t.e.cla(t.t),t.e.cl.forEach((e=>t.t.indexOf(e)>=0?0:t.e.clr(e)))),i(t.d.html)&&t.e.html!=t.d.html&&(t.e.html=t.d.html),i(t.d.txt)&&t.e.txt!=t.d.txt&&(t.e.txt=t.d.txt),t.d.e&&d(t.d.e).forEach((e=>t.e.v[e[0]]!=e[1]?t.e.v[e[0]]=e[1]:0)),!t.d.noupdate&&t.d.ch)for(t.t=t.e[t.d.nodes?"chn":"ch"],t.d.ch.forEach(((e,r)=>i(e)?h(t.t[r]?{e:new s(t.t[r]),d:e}:{cr:t.e,d:e}):0));t.d.ch.length<t.t.length;)t.t[t.t.length-1].remove();return i(t.d.id)&&(t.e.id=t.d.id),t};class o{constructor(){this._elm=h.bind(this),this.e=null,this.a=!1,this.pevData=null,n&&(window.__IC_DEV__[this.constructor.name]=this)}update(t){if(this.data&&(this.willUpdate&&(this.pevData=Object.assign({},this.data)),Object.assign(this.data,t)),this.render&&(void 0===this.willUpdate||!this.willUpdate())){var e=this.render();this._elm({e:this.e,d:{ch:void 0===e.length?[e]:e}}),this.a&&this.didUpdate&&this.didUpdate(),this.a||(this.a=!0)}}mount(t){this.e=new s(t),this.update(),this.didMount&&this.didMount()}}var l=window.ic||class{};l.XHR=t,l.xhr=(e,r={},s=null)=>new Promise((n=>t(e,n,r,s))),l.icApp=s,l.pram=t=>{t=t||location.search;for(var e,r={},s=/(?:(?:\?|&)?([^=&?#]*)=([^=&?#]*))/g;e=s.exec(t);)r[e[1]]=decodeURIComponent(e[2]);return r},l.IAR=o,window.ic=l;(new class extends o{constructor(){super(),this.data={ui:0}}didMount(){this.update({ui:1})}render(){return[{s:{display:0==this.data.ui?"flex":"none"}},{s:{display:1==this.data.ui?"block":"none"},t:"div",cl:"main",ch:[{t:"div",cl:"cont",at:{id:"main",role:"main"},ch:[{t:"span",cl:"a",txt:"404"},{t:"span",cl:"b",txt:"Page Not Found"}]},{t:"div",cl:"foot",at:{role:"contentinfo"},ch:[{t:"span",txt:"Copyright © 2021, Imesh Chamara. All rights reserved."}]}]}]}}).mount("#root")}();
