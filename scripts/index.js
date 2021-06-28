/*!
 * ic-tech.github.io v1.0.0
 * https://ic-tech.github.io/
 * Copyright © 2021 Imesh Chamara
 * Released under the ISC License
 */
!function(){"use strict";const t=(t,e,r={},s=null)=>{r=r||{};var h=new XMLHttpRequest;h.open(r.meth||(s&&!r.meth?"POST":"GET"),t+(0==r.fresh?"":(t.indexOf("?")>=0?"&":"?")+"t="+(new Date).getTime())),Object.keys(r.head||{}).forEach((t=>h.setRequestHeader(t,r.head[t]))),h.onreadystatechange=()=>{if(4==h.readyState&&0!=h.status){if(!h.response)return e({success:!1,error:{code:3,message:"server did not respond"}});try{e(r.raw?h.response:JSON.parse(h.response))}catch(t){e({success:!1,error:{code:4,message:"response could not parse"}})}}},h.onerror=()=>e({success:!1,error:{code:1,message:"network error occurred"}}),h.ontimeout=()=>e({success:!1,error:{code:2,message:"request timed out"}}),h.send(s)};var e=(t,e)=>e?t instanceof s?t:new s(t):t instanceof s?t.v:t,r=t=>t instanceof Array?t:[t];class s{constructor(t,e){return this.v=e?s.ce(t,"string"==typeof e||"object"==typeof e?e:{}):"string"==typeof t?s.qs(t):t,null==t||null==t?t:this}get c(){return Array.from(this.v.classList).map((t=>new s(t)))}get cl(){return this.v.classList}get ch(){return this.v.children}get chn(){return this.v.childNodes}ap(t){return this.v.appendChild(e(t)),this}chr(t){if(t)r(t).forEach((t=>e(t,1).rem()));else for(;this.ch.length>0;)this.ch[0].remove();return this}cla(t){return this.cl.add(...r(t)),this}clr(t){return this.cl.remove(...r(t)),this}clc(t){return!r(t).some((t=>!this.cl.contains(t)))}get st(){return this.v.style}get d(){return this.v.dataset}set stp(t){this.st.setProperty(t[0],t[1])}get txt(){return this.v.innerText}set txt(t){this.v.innerText=t}get html(){return this.v.innerHTML}set html(t){this.v.innerHTML=t}ga(t){return this.v.getAttribute(t)}ra(t,e){return this.v.removeAttribute(t),this}sa(t,e){return this.v.setAttribute(t,e),this}ae(t,e){return this.v.addEventListener(t,e),this}get p(){return new s(this.v.parentElement)}get tag(){return this.v.tagName}get node(){return this.v.nodeName}get val(){return this.v.value}set val(t){this.v.value=t}rem(){return this.v.remove(),this}get prev(){return new s(this.v.previousElementSibling)}get prevN(){return new s(this.v.previousSibling)}get next(){return new s(this.v.nextElementSibling)}get nextN(){return new s(this.v.nextSibling)}static get d(){return document}static qs(t){return this.d.querySelector(t)}static qsa(t){return this.d.querySelectorAll(t)}static ce(t,e={}){var r=0;return[["#cdata-section","createCDATASection"],["#comment","createComment"],["#document-fragment","createDocumentFragment"],["#text","createTextNode"]].some((e=>e[0]==t?[r=e[1]]:0))?this.d[r](e):this.d.createElement(t,e)}static cen(t,e){return this.d.createElementNS(t,e)}static ds(t){return new s(Object.keys(t).map((e=>`[data-${e}="${t[e]}"]`)).join(""))}}const h=!("undefined"==typeof __IC_DEV__||!__IC_DEV__),a=t=>t||"string"==typeof t||"number"==typeof t&&0==t,d=(t,e)=>Object.keys(t).forEach((t=>e(t))),c=t=>t instanceof Array?t:Object.keys(t).map((e=>[e,t[e]])),o=t=>t instanceof Array?t:[t],i=t=>{if("string"==typeof t.d&&(t.d={t:"#text",_txt:t.d,nodes:1,e:{data:t.d}}),t.cr&&t.cr.ap(t.e=new s(t.d.t,t.d.t.startsWith("#")?t.d._txt:{})),a(t.d.t)&&t.e.node.toUpperCase()!=t.d.t.toUpperCase()&&(t.e.p.v.replaceChild((t.t=new s(t.d.t,t.d.t.startsWith("#")?t.d._txt:{})).v,t.e.v),t.e=t.t),t.d.s&&(t.t=e=>t.d.s[e]!=t.e.st[e]?[t.e.st[e]=t.d.s[e]]:0,d(t.d.s,t.t)),t.d.at&&c(t.d.at).forEach((e=>a(e[1])?t.e.ga(e[0])!=e[1].toString()?t.e.sa(...e):0:null==e[1]?t.e.ra(e[0]):0)),t.d.d&&c(t.d.d).forEach((e=>e[1].toString()!=t.e.d[e[0]]?[t.e.d[e[0]]=e[1].toString()]:0)),t.d.cl&&(t.t=[],o(t.d.cl).forEach((e=>e.toString().split(/ /g).forEach((e=>t.t.push(e))))),t.e.clc(t.t)||t.e.cla(t.t),t.e.cl.forEach((e=>t.t.indexOf(e)>=0?0:t.e.clr(e)))),a(t.d.html)&&t.e.html!=t.d.html&&(t.e.html=t.d.html),a(t.d.txt)&&t.e.txt!=t.d.txt&&(t.e.txt=t.d.txt),t.d.e&&c(t.d.e).forEach((e=>t.e.v[e[0]]!=e[1]?t.e.v[e[0]]=e[1]:0)),!t.d.noupdate&&t.d.ch)for(t.t=t.e[t.d.nodes?"chn":"ch"],t.d.ch.forEach(((e,r)=>a(e)?i(t.t[r]?{e:new s(t.t[r]),d:e}:{cr:t.e,d:e}):0));t.d.ch.length<t.t.length;)t.t[t.t.length-1].remove();return a(t.d.id)&&(t.e.id=t.d.id),t};class n{constructor(){this._elm=i.bind(this),this.e=null,this.a=!1,this.pevData=null,h&&(window.__IC_DEV__[this.constructor.name]=this)}update(t){if(this.data&&(this.willUpdate&&(this.pevData=Object.assign({},this.data)),Object.assign(this.data,t)),this.render&&(void 0===this.willUpdate||!this.willUpdate())){var e=this.render();this._elm({e:this.e,d:{ch:void 0===e.length?[e]:e}}),this.a&&this.didUpdate&&this.didUpdate(),this.a||(this.a=!0)}}mount(t){this.e=new s(t),this.update(),this.didMount&&this.didMount()}}var m=window.ic||class{};m.XHR=t,m.xhr=(e,r={},s=null)=>new Promise((h=>t(e,h,r,s))),m.icApp=s,m.pram=t=>{t=t||location.search;for(var e,r={},s=/(?:(?:\?|&)?([^=&?#]*)=([^=&?#]*))/g;e=s.exec(t);)r[e[1]]=decodeURIComponent(e[2]);return r},m.IAR=n,window.ic=m;var l;l=[{t:"h1",txt:"IC-Tech",at:{id:"ic-tech"}},{t:"h3",txt:"About me",at:{id:"about-me"}},{ch:[{t:"i",txt:"~ ♂️ Male | INFJ-T | 18yr (2020) | Sri Lanka | Different ~"},{t:"br"}," My name is ",{t:"i",txt:"Imesh Chamara"}," (eemesh chamara). I had my first computer at 13 and I wrote my first code after six month. after that coding became my hobby. I code stuff all day just for fun. I started coding with a microcontroller then I stared coding windows apps. with the time, I become a ",{t:"i",txt:"Full Stack Developer"},". that means, I can make apps for Windows and Linux. I can make websites, and web servers. I also tried out simple AI projects, but they all just failed. I didn't learn these in proper way so, I'm not a smart pro developer. I don't have many things to write, because still haven't accomplish much things in my life."],t:"p",nodes:1},{ch:[{t:"li",ch:["Things I Like: ",{t:"i",txt:"Programming, J-POP, Japan."}],nodes:1},{t:"li",ch:["Things I Don't Like: ",{t:"i",txt:"Alcohol, Drugs, Violence, Travelings."}],nodes:1},{t:"li",ch:["Things I'm Not Interested: ",{t:"i",txt:"Sports, Vehicles, new Tech stuff(Phones, Tabs, etc.)"}],nodes:1}],t:"ul"},{t:"h3",txt:"Contacts",at:{id:"contacts"}},{ch:[{t:"thead",ch:[{t:"tr",ch:[{t:"th",txt:"Type"},{t:"th",txt:"Account"},{t:"th",txt:"Status"}]}]},{t:"tbody",ch:[{t:"tr",ch:[{t:"td",txt:"Github"},{t:"td",ch:[{t:"a",at:{href:"https://github.com/IC-Tech"},txt:"IC-Tech"}],nodes:1},{t:"td",txt:"Active"}]},{t:"tr",ch:[{t:"td",txt:"Gitlab"},{t:"td",ch:[{t:"a",at:{href:"https://gitlab.com/IC-Tech"},txt:"IC-Tech"}],nodes:1},{t:"td",txt:"Active"}]},{t:"tr",ch:[{t:"td",txt:"Email"},{t:"td",ch:[{t:"a",at:{href:"mailto:imesh1chamara@gmail.com"},txt:"imesh1chamara@gmail.com"}],nodes:1},{t:"td",txt:"Active"}]},{t:"tr",ch:[{t:"td",txt:"Telegram"},{t:"td",ch:[{t:"a",at:{href:"https://t.me/ImeshChamara"},txt:"ImeshChamara"}],nodes:1},{t:"td",txt:"Active"}]},{t:"tr",ch:[{t:"td",txt:"Twitter"},{t:"td",ch:[{t:"a",at:{href:"https://twitter.com/_Imesh_Chamara_"},txt:"@_Imesh_Chamara_"}],nodes:1},{t:"td",txt:"Active (rarely)"}]},{t:"tr",ch:[{t:"td",txt:"Discord"},{t:"td",ch:[{t:"a",at:{href:"https://discord.com/users/473941394474401813"},txt:"ImeshChamara#1418"}],nodes:1},{t:"td",txt:"Active (rarely)"}]},{t:"tr",ch:[{t:"td",txt:"Facebook"},{t:"td",ch:[{t:"a",at:{href:"https://www.facebook.com/ic.imesh.chamara"},txt:"ic.imesh.chamara"}],nodes:1},{t:"td",txt:"Gone / Inactive"}]},{t:"tr",ch:[{t:"td",txt:"Instagram"},{t:"td",ch:[{t:"a",at:{href:"https://www.instagram.com/imeshchamara/"},txt:"@imeshchamara"}],nodes:1},{t:"td",txt:"Gone / Inactive"}]},{t:"tr",ch:[{t:"td",txt:"Website"},{t:"td",ch:[{t:"a",at:{href:"https://ic-tech.now.sh"},txt:"IC-Tech"}],nodes:1},{t:"td",txt:"Gone / Broken"}]}]}],t:"table"},{t:"h3",txt:"Projects",at:{id:"projects"}},{ch:[{t:"thead",ch:[{t:"tr",ch:[{t:"th",txt:"Project Names"},{t:"th",txt:"ID Codes"},{t:"th",txt:"Start Date"}]}]},{t:"tbody",ch:[{t:"tr",ch:[{t:"td",txt:"Chat App"},{t:"td",ch:[{t:"code",txt:"LwJ98b8"}],nodes:1},{t:"td",txt:"2019/05/27 12:31 +0530"}]},{t:"tr",ch:[{t:"td",ch:[{t:"a",at:{href:"projects/ic-app.html"},txt:"ic-app"}],nodes:1},{t:"td",txt:""},{t:"td",txt:"2019/07/22 12:47 +0530 (~ before)"}]},{t:"tr",ch:[{t:"td",ch:[{t:"a",at:{href:"projects/ilog.html"},txt:"ILog"}],nodes:1},{t:"td",ch:[{ch:[{t:"code",txt:"LwKbtHc"}],t:"a",at:{href:"projects/ilog.html"}}],nodes:1},{t:"td",txt:"2019/07/22 16:23 +0530"}]},{t:"tr",ch:[{t:"td",ch:[{t:"a",at:{href:"projects/ssas.html"},txt:"SSAS"}],nodes:1},{t:"td",ch:[{ch:[{t:"code",txt:"LwK4PZs"},", ",{t:"code",txt:"LwK5I+0"},", ",{t:"code",txt:"LwK5TMc"}],t:"a",nodes:1,at:{href:"projects/ssas.html"}}],nodes:1},{t:"td",txt:"2019/09/09 17:39 +0530"}]},{t:"tr",ch:[{t:"td",txt:"IChat"},{t:"td",ch:[{t:"code",txt:"LwLHMos"}],nodes:1},{t:"td",txt:"2019/10/07 19:47 +0530"}]},{t:"tr",ch:[{t:"td",ch:[{t:"a",at:{href:"projects/megumi.html"},txt:"Megumi bot"}],nodes:1},{t:"td",ch:[{ch:[{t:"code",txt:"Lwgj4Sg"}],t:"a",at:{href:"projects/megumi.html"}}],nodes:1},{t:"td",txt:"2020/01/03 20:40 +0530"}]},{t:"tr",ch:[{t:"td",ch:[{t:"a",at:{href:"projects/dashboard.html"},txt:"Score Dashboard"}],nodes:1},{t:"td",ch:[{ch:[{t:"code",txt:"Lwg3Qho"}],t:"a",at:{href:"projects/dashboard.html"}}],nodes:1},{t:"td",txt:"2020/01/30 20:42 +0530"}]},{t:"tr",ch:[{t:"td",txt:"HLS Downloader"},{t:"td",ch:[{t:"code",txt:"LwhU/QM"}],nodes:1},{t:"td",txt:"2020/03/25 04:35 +0530"}]},{t:"tr",ch:[{t:"td",txt:"Subtitle Maker"},{t:"td",ch:[{t:"code",txt:"LwhhEhM"}],nodes:1},{t:"td",txt:"2020/04/04 22:59 +0530"}]},{t:"tr",ch:[{t:"td",txt:"IAnime"},{t:"td",ch:[{t:"code",txt:"LwhywD8"}],nodes:1},{t:"td",txt:"2020/05/20 09:59 +0530"}]},{t:"tr",ch:[{t:"td",ch:[{t:"a",at:{href:"projects/ami.html"},txt:"Ami bot"}],nodes:1},{t:"td",ch:[{ch:[{t:"code",txt:"LwiRbNg"}],t:"a",at:{href:"projects/ami.html"}}],nodes:1},{t:"td",txt:"2020/07/21 12:24 +0530"}]},{t:"tr",ch:[{t:"td",txt:"IUrl"},{t:"td",ch:[{t:"code",txt:"LwifyDw"}],nodes:1},{t:"td",txt:"2020/08/15 21:24 +0530"}]},{t:"tr",ch:[{t:"td",ch:[{t:"a",at:{href:"projects/kotori.html"},txt:"Kotori bot"}],nodes:1},{t:"td",ch:[{ch:[{t:"code",txt:"Lwit95M"},", ",{t:"code",txt:"Lw5Kb80"}],t:"a",nodes:1,at:{href:"projects/kotori.html"}}],nodes:1},{t:"td",txt:"2020/09/08 17:47 +0530"}]},{t:"tr",ch:[{t:"td",txt:"ic-xml"},{t:"td",ch:[{t:"code",txt:"Lwi9NvQ"}],nodes:1},{t:"td",txt:"2020/10/08 10:12 +0530"}]},{t:"tr",ch:[{t:"td",txt:"ic-xentity"},{t:"td",ch:[{t:"code",txt:"Lwi9N1I"}],nodes:1},{t:"td",txt:"2020/10/08 11:06 +0530"}]},{t:"tr",ch:[{t:"td",txt:"Proxy"},{t:"td",ch:[{t:"code",txt:"LwjMyBo"}],nodes:1},{t:"td",txt:"2020/11/10 12:10 +0530"}]},{t:"tr",ch:[{t:"td",txt:"host-file"},{t:"td",txt:""},{t:"td",txt:"2020/11/12 03:59 +0530"}]},{t:"tr",ch:[{t:"td",txt:"ic-md"},{t:"td",ch:[{t:"code",txt:"Lw48GEE"}],nodes:1},{t:"td",txt:"2021/02/28 23:05 +0530"}]},{t:"tr",ch:[{t:"td",txt:"text-filter"},{t:"td",ch:[{t:"code",txt:"Lw5mLVg"}],nodes:1},{t:"td",txt:"2021/05/04 02:16 +0530"}]}]}],t:"table"}],(new class extends n{constructor(){super(),this.data={ui:0},new s(document.body).sa("theme","dark")}didMount(){this.update({ui:1})}render(){return[{s:{display:0==this.data.ui?"flex":"none"}},{s:{display:1==this.data.ui?"block":"none"},t:"div",cl:"main",ch:[{t:"div",cl:["cont","doc"],at:{id:"main",role:"main"},ch:l},{t:"div",cl:"foot",at:{role:"contentinfo"},ch:[{t:"span",txt:"Copyright © 2021, Imesh Chamara. All rights reserved."}]}]}]}}).mount("#root")}();
