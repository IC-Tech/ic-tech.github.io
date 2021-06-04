/*!
 * ic-tech.github.io v1.0.0
 * https://ic-tech.github.io/
 * Copyright © 2021 Imesh Chamara
 * Released under the ISC License
 */
!function(){"use strict";const t=(t,e,r={},s=null)=>{r=r||{};var a=new XMLHttpRequest;a.open(r.meth||(s&&!r.meth?"POST":"GET"),t+(0==r.fresh?"":(t.indexOf("?")>=0?"&":"?")+"t="+(new Date).getTime())),Object.keys(r.head||{}).forEach((t=>a.setRequestHeader(t,r.head[t]))),a.onreadystatechange=()=>{if(4==a.readyState&&0!=a.status){if(!a.response)return e({success:!1,error:{code:3,message:"server did not respond"}});try{e(r.raw?a.response:JSON.parse(a.response))}catch(t){e({success:!1,error:{code:4,message:"response could not parse"}})}}},a.onerror=()=>e({success:!1,error:{code:1,message:"network error occurred"}}),a.ontimeout=()=>e({success:!1,error:{code:2,message:"request timed out"}}),a.send(s)};var e=(t,e)=>e?t instanceof s?t:new s(t):t instanceof s?t.v:t,r=t=>t instanceof Array?t:[t];class s{constructor(t,e){return this.v=e?s.ce(t,"string"==typeof e||"object"==typeof e?e:{}):"string"==typeof t?s.qs(t):t,null==t||null==t?t:this}get c(){return Array.from(this.v.classList).map((t=>new s(t)))}get cl(){return this.v.classList}get ch(){return this.v.children}get chn(){return this.v.childNodes}ap(t){return this.v.appendChild(e(t)),this}chr(t){if(t)r(t).forEach((t=>e(t,1).rem()));else for(;this.ch.length>0;)this.ch[0].remove();return this}cla(t){return this.cl.add(...r(t)),this}clr(t){return this.cl.remove(...r(t)),this}clc(t){return!r(t).some((t=>!this.cl.contains(t)))}get st(){return this.v.style}get d(){return this.v.dataset}set stp(t){this.st.setProperty(t[0],t[1])}get txt(){return this.v.innerText}set txt(t){this.v.innerText=t}get html(){return this.v.innerHTML}set html(t){this.v.innerHTML=t}ga(t){return this.v.getAttribute(t)}ra(t,e){return this.v.removeAttribute(t),this}sa(t,e){return this.v.setAttribute(t,e),this}ae(t,e){return this.v.addEventListener(t,e),this}get p(){return new s(this.v.parentElement)}get tag(){return this.v.tagName}get node(){return this.v.nodeName}get val(){return this.v.value}set val(t){this.v.value=t}rem(){return this.v.remove(),this}get prev(){return new s(this.v.previousElementSibling)}get prevN(){return new s(this.v.previousSibling)}get next(){return new s(this.v.nextElementSibling)}get nextN(){return new s(this.v.nextSibling)}static get d(){return document}static qs(t){return this.d.querySelector(t)}static qsa(t){return this.d.querySelectorAll(t)}static ce(t,e={}){var r=0;return[["#cdata-section","createCDATASection"],["#comment","createComment"],["#document-fragment","createDocumentFragment"],["#text","createTextNode"]].some((e=>e[0]==t?[r=e[1]]:0))?this.d[r](e):this.d.createElement(t,e)}static cen(t,e){return this.d.createElementNS(t,e)}static ds(t){return new s(Object.keys(t).map((e=>`[data-${e}="${t[e]}"]`)).join(""))}}const a=!("undefined"==typeof __IC_DEV__||!__IC_DEV__),n=t=>t||"string"==typeof t||"number"==typeof t&&0==t,o=(t,e)=>Object.keys(t).forEach((t=>e(t))),i=t=>t instanceof Array?t:Object.keys(t).map((e=>[e,t[e]])),c=t=>t instanceof Array?t:[t],h=t=>{if("string"==typeof t.d&&(t.d={t:"#text",_txt:t.d,nodes:1,e:{data:t.d}}),t.cr&&t.cr.ap(t.e=new s(t.d.t,t.d.t.startsWith("#")?t.d._txt:{})),n(t.d.t)&&t.e.node.toUpperCase()!=t.d.t.toUpperCase()&&(t.e.p.v.replaceChild((t.t=new s(t.d.t,t.d.t.startsWith("#")?t.d._txt:{})).v,t.e.v),t.e=t.t),t.d.s&&(t.t=e=>t.d.s[e]!=t.e.st[e]?[t.e.st[e]=t.d.s[e]]:0,o(t.d.s,t.t)),t.d.at&&i(t.d.at).forEach((e=>n(e[1])?t.e.ga(e[0])!=e[1].toString()?t.e.sa(...e):0:null==e[1]?t.e.ra(e[0]):0)),t.d.d&&i(t.d.d).forEach((e=>e[1].toString()!=t.e.d[e[0]]?[t.e.d[e[0]]=e[1].toString()]:0)),t.d.cl&&(t.t=[],c(t.d.cl).forEach((e=>e.toString().split(/ /g).forEach((e=>t.t.push(e))))),t.e.clc(t.t)||t.e.cla(t.t),t.e.cl.forEach((e=>t.t.indexOf(e)>=0?0:t.e.clr(e)))),n(t.d.html)&&t.e.html!=t.d.html&&(t.e.html=t.d.html),n(t.d.txt)&&t.e.txt!=t.d.txt&&(t.e.txt=t.d.txt),t.d.e&&i(t.d.e).forEach((e=>t.e.v[e[0]]!=e[1]?t.e.v[e[0]]=e[1]:0)),!t.d.noupdate&&t.d.ch)for(t.t=t.e[t.d.nodes?"chn":"ch"],t.d.ch.forEach(((e,r)=>n(e)?h(t.t[r]?{e:new s(t.t[r]),d:e}:{cr:t.e,d:e}):0));t.d.ch.length<t.t.length;)t.t[t.t.length-1].remove();return n(t.d.id)&&(t.e.id=t.d.id),t};class d{constructor(){this._elm=h.bind(this),this.e=null,this.a=!1,this.pevData=null,a&&(window.__IC_DEV__[this.constructor.name]=this)}update(t){if(this.data&&(this.willUpdate&&(this.pevData=Object.assign({},this.data)),Object.assign(this.data,t)),this.render&&(void 0===this.willUpdate||!this.willUpdate())){var e=this.render();this._elm({e:this.e,d:{ch:void 0===e.length?[e]:e}}),this.a&&this.didUpdate&&this.didUpdate(),this.a||(this.a=!0)}}mount(t){this.e=new s(t),this.update(),this.didMount&&this.didMount()}}var l=window.ic||class{};l.XHR=t,l.xhr=(e,r={},s=null)=>new Promise((a=>t(e,a,r,s))),l.icApp=s,l.pram=t=>{t=t||location.search;for(var e,r={},s=/(?:(?:\?|&)?([^=&?#]*)=([^=&?#]*))/g;e=s.exec(t);)r[e[1]]=decodeURIComponent(e[2]);return r},l.IAR=d,window.ic=l;(new class extends d{constructor(){super(),this.data={ui:0}}didMount(){this.update({ui:1})}render(){return[{s:{display:0==this.data.ui?"flex":"none"}},{s:{display:1==this.data.ui?"block":"none"},t:"div",cl:"main",ch:[{t:"div",cl:["cont","doc"],at:{id:"main",role:"main"},ch:[{t:"h1",cl:"title",txt:"Kotori"},{t:"div",cl:"img",s:{"background-image":"url(/images/kotori-0.jpg)"}},{t:"p",cl:"intro",nodes:1,ch:[{t:"b",txt:"Project name:"}," Kotori",{t:"br"},{t:"b",txt:"Alternative Names:"}," 202009081747, 202103222221",{t:"br"},{t:"b",txt:"Character:"}," Kotori Itsuka (五河 琴里) also known as Efreet",{t:"br"},{t:"b",txt:"Type:"}," bot",{t:"br"},{t:"b",txt:"Access:"}," private",{t:"br"},{t:"b",txt:"Project status:"}," maintaining",{t:"br"},{t:"b",txt:"Program status:"}," unstable"]},{t:"h3",at:{id:"description"},txt:"Description"},{t:"p",cl:"disc",txt:"Kotori is an assistant bot made by me (Imesh Chamara). project kotori is different than all the project I have created because it's not just a project, it's a concept. I got that concept by Iron-man, I wanted my own Jarvis, I wanted my own assistant program. the first versions of kotori, she got little AI system but I couldn't train the database properly and now she looks like a command bot. she got lots of features and I still adding more."},{t:"h3",at:{id:"plans"},txt:"Plans"},{t:"p",cl:"plan",txt:"I need to train the AI database and make her more human friendly.\nI also have a plan to made her voice controllable (like google assistant).\n(and more private plans.)"},{t:"h3",at:{id:"cores"},txt:"Cores (Systems/Features)"},{t:"table",ch:[{t:"thead",ch:[{t:"tr",ch:["Codename","State"].map((t=>({t:"th",txt:t})))}]},{t:"tbody",ch:[["NLP (AI)","⛔ removed"],["FLP (Fake AI)","❌ incomplete"],["YT","❌ incomplete"],["SC","🆗 OK"],["NICO","🆗 OK"],["DISCO","🆗 OK"],["TASK","🆗 OK"],["TG","⛔ restoring"]].map((t=>({t:"tr",ch:t.map((t=>({t:"td",txt:t})))})))}]},{t:"h3",at:{id:"credits"},txt:"Credits"},{t:"p",txt:"I created the everything on her, only me. there are no others to credit."},{t:"h3",at:{id:"faq"},txt:"FAQ"},{t:"p",cl:"faq",ch:[{t:"span",cl:"que",txt:"Does Kotori is an AI?"},{t:"br"},{t:"span",cl:"ans",txt:"No, She does not have any AI parts anymore."},{t:"br"},{t:"span",cl:"que",txt:"What can Kotori do?"},{t:"br"},{t:"span",cl:"ans",txt:"Actually not much. I wanted to make her like she could do anything but plan changed."},{t:"br"},{t:"span",cl:"que",txt:"Does Kotori still working?"},{t:"br"},{t:"span",cl:"ans",txt:"Yes and No, Kotori is not a single program. some parts of her still online, some parts does not. after her power supply got burned, Most parts of her remain inactive until I activate them manually."},{t:"br"},{t:"span",cl:"que",txt:"Why source code is not public?"},{t:"br"},{t:"span",cl:"ans",txt:"I know usually I post codes public but,\n1. I do not like to share such a valuable project on public\n2. I do not want others to find problems (security reasons)\n3. some codes of her might not allowed to post public. I have seen similar codes taken-down from websites"},{t:"br"},{t:"span",cl:"que",txt:"Why do I receive messages from Kotori?"},{t:"br"},{t:"span",cl:"ans",txt:"I might told her to do it."},{t:"br"},{t:"span",cl:"que",txt:"Will Kotori take over our world?"},{t:"br"},{t:"span",cl:"ans",txt:"No."},{t:"br"},{t:"span",cl:"que",txt:"Can I see her? / Can I chat with her?"},{t:"br"},{t:"span",cl:"ans",txt:"No. She has no physical form. She is a personal bot, she only listen to me."}]},{t:"h3",at:{id:"more"},txt:"More"},{t:"div",ch:"links",ch:[["Contact or Questions","mailto:imesh1chamara@gmail.com"]].map((t=>({t:"a",at:{href:t[1]},txt:t[0]})))}]},{t:"div",cl:"foot",at:{role:"contentinfo"},ch:[{t:"span",txt:"Copyright © 2021, Imesh Chamara. All rights reserved."}]}]}]}}).mount("#root")}();
