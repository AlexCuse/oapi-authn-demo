var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode&&t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function l(){return f(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.data!==e&&(t.data=e)}function m(t,e){t.value=null==e?"":e}let y;function g(t){y=t}function w(t){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(t)}const $=[],v=[];let k=[];const x=[],b=Promise.resolve();let E=!1;function S(t){k.push(t)}const T=new Set;let _=0;function R(){if(0!==_)return;const t=y;do{try{for(;_<$.length;){const t=$[_];_++,g(t),N(t.$$)}}catch(t){throw $.length=0,_=0,t}for(g(null),$.length=0,_=0;v.length;)v.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];T.has(e)||(T.add(e),e())}k.length=0}while($.length);for(;x.length;)x.pop()();E=!1,T.clear(),g(t)}function N(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const A=new Set;let C;function O(t,e){t&&t.i&&(A.delete(t),t.i(e))}function D(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),C.c.push((()=>{A.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function j(t,e){t.d(1),e.delete(t.key)}function L(t,n,r,s){const{fragment:u,after_update:c}=t.$$;u&&u.m(n,r),s||S((()=>{const n=t.$$.on_mount.map(e).filter(i);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),c.forEach(S)}function M(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];k.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),k=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function I(t,e){-1===t.$$.dirty[0]&&($.push(t),E||(E=!0,b.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(e,i,r,s,u,a,f,l=[-1]){const d=y;g(e);const h=e.$$={fragment:null,ctx:[],props:a,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(d?d.$$.context:[])),callbacks:n(),dirty:l,skip_bound:!1,root:i.target||d.$$.root};f&&f(h.root);let p=!1;if(h.ctx=r?r(e,i.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return h.ctx&&u(h.ctx[t],h.ctx[t]=i)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](i),p&&I(e,t)),n})):[],h.update(),p=!0,o(h.before_update),h.fragment=!!s&&s(h.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);h.fragment&&h.fragment.l(t),t.forEach(c)}else h.fragment&&h.fragment.c();i.intro&&O(e.$$.fragment),L(e,i.target,i.anchor,i.customElement),R()}g(d)}class F{$destroy(){M(this,1),this.$destroy=t}$on(e,n){if(!i(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function J(t){return Object.keys(t).map((function(e){return function(t,e){if(void 0!==e)return t+"="+encodeURIComponent(e)}(e,t[e])})).filter((function(t){return void 0!==t})).join("&")}function z(t,e){return B((function(n){n.open("POST",t),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.send(J(e))}))}function B(t){return new Promise((function(e,n){var o=new XMLHttpRequest;o.withCredentials=!0,o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE){var t=o.responseText.length>1?JSON.parse(o.responseText):{};"errors"in t?n(t.errors):o.status>400?n([{message:o.status.toString()}]):e(t.result)}},t(o)}))}var q=!1,U="";function H(){return function(t,e){return B((function(n){n.open("GET",(t+"?"+J(e)).replace(/\?$/,"")),n.send()}))}(G("/session/refresh"),{}).then((function(t){return t.id_token}))}function G(t){if(!U.length)throw"ISSUER not set";return""+U+t}var W=function(){function t(t){this.token=t,this.claims=function(t){try{return JSON.parse(atob(t.split(".")[1]))}catch(t){throw"Malformed JWT: invalid encoding"}}(t)}return t.prototype.iat=function(){return 1e3*this.claims.iat},t.prototype.exp=function(){return 1e3*this.claims.exp},t.prototype.halflife=function(){return(this.exp()-this.iat())/2},t}();var X=function(){function t(){var t=this;"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState&&t.scheduleRefresh()}))}return t.prototype.setStore=function(t){this.store=t},t.prototype.sessionToken=function(){if(this.store)return this.store.read()},t.prototype.update=function(t){if(this.store){var e=new W(t);this.store.update(t,e.exp()),this.refreshAt=Date.now()+e.halflife(),this.scheduleRefresh()}},t.prototype.endSession=function(){this.refreshAt=void 0,this.timeoutID&&clearTimeout(this.timeoutID),this.store&&this.store.delete()},t.prototype.restoreSession=function(){var t=this;return new Promise((function(e,n){if(t.store){var o=t.sessionToken();if(o){var i=Date.now(),r=new W(o),s=r.iat()+r.halflife();if(isNaN(s))return t.store.delete(),void n("Malformed JWT: can not calculate refreshAt");i>=s||i<r.iat()?t.refresh().then(e,n):(t.refreshAt=s,t.scheduleRefresh(),e())}else n("No session.")}else n("No session storage available.")}))},t.prototype.refresh=function(){var t=this;return H().then((function(e){return t.update(e)}),(function(e){throw e[0]&&"401"===e[0].message&&t.endSession(),e}))},t.prototype.scheduleRefresh=function(){var t=this;this.timeoutID&&clearTimeout(this.timeoutID),this.refreshAt&&(this.timeoutID=setTimeout((function(){return t.refresh().catch((function(t){if(!t[0]||"401"!==t[0].message)throw t}))}),this.refreshAt-Date.now()))},t}(),K=function(){function t(t,e){void 0===e&&(e={}),this.sessionName=t,this.path=e.path?"; path="+e.path:"",this.sameSite=e.sameSite?"; SameSite="+e.sameSite:"",this.useExplicitExpiry=!!e.useExplicitExpiry,"undefined"!=typeof window&&(this.secureFlag="https:"===window.location.protocol?"; secure":"")}return t.prototype.read=function(){if("undefined"!=typeof document)return document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)"+this.sessionName+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1")},t.prototype.update=function(t,e){if("undefined"!=typeof document){var n="";if(this.useExplicitExpiry&&e){var o=new Date;o.setTime(e),n="; expires="+o.toUTCString()}document.cookie=this.sessionName+"="+t+this.secureFlag+n+this.path+this.sameSite}},t.prototype.delete=function(){"undefined"!=typeof document&&(document.cookie=this.sessionName+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;")},t}(),Q=new X;function V(t,e){var n;n=new K(t,e),Q.setStore(n)}function Y(){return Q.sessionToken()}function Z(t){return function(t){return new Promise((function(e,n){q?n([{message:"duplicate"}]):(q=!0,z(G("/accounts"),t).then((function(t){return e(t.id_token)}),(function(t){return n(t)})).then((function(){return q=!1})))}))}(t).then((function(t){return Q.update(t)}))}function tt(t){return function(t){return z(G("/session"),t).then((function(t){return t.id_token}))}(t).then((function(t){return Q.update(t)}))}const et="https://api.todoauthn.com/api/v1";function nt(e){let n,i,r,y,g,w,$,v,k,x,b,E,S,T,_,R,N,A,C,O,D,j=e[0]?"Register":"Login",L=e[0]?"Register":"Login";return{c(){n=a("div"),i=a("h2"),r=f(j),y=l(),g=a("form"),w=a("label"),w.textContent="Email:",$=l(),v=a("input"),k=l(),x=a("label"),x.textContent="Password:",b=l(),E=a("input"),S=l(),T=a("button"),_=f(L),R=l(),N=a("label"),A=a("input"),C=f("\n            I'm new here"),h(w,"for","email"),h(v,"type","email"),h(v,"id","email"),h(x,"for","password"),h(E,"type","password"),h(E,"id","password"),h(A,"type","checkbox")},m(t,o){u(t,n,o),s(n,i),s(i,r),s(n,y),s(n,g),s(g,w),s(g,$),s(g,v),m(v,e[1]),s(g,k),s(g,x),s(g,b),s(g,E),m(E,e[2]),s(g,S),s(g,T),s(T,_),s(g,R),s(g,N),s(N,A),A.checked=e[0],s(N,C),O||(D=[d(v,"input",e[4]),d(E,"input",e[5]),d(T,"click",e[3]),d(A,"change",e[6])],O=!0)},p(t,[e]){1&e&&j!==(j=t[0]?"Register":"Login")&&p(r,j),2&e&&v.value!==t[1]&&m(v,t[1]),4&e&&E.value!==t[2]&&m(E,t[2]),1&e&&L!==(L=t[0]?"Register":"Login")&&p(_,L),1&e&&(A.checked=t[0])},i:t,o:t,d(t){t&&c(n),O=!1,o(D)}}}function ot(t,e,n){let{isRegistration:o=!1}=e,i="",r="";return t.$$set=t=>{"isRegistration"in t&&n(0,o=t.isRegistration)},[o,i,r,async function(){o?await Z({username:i,password:r}):await tt({username:i,password:r})},function(){i=this.value,n(1,i)},function(){r=this.value,n(2,r)},function(){o=this.checked,n(0,o)}]}class it extends F{constructor(t){super(),P(this,t,ot,nt,r,{isRegistration:0})}}function rt(t,e,n){const o=t.slice();return o[13]=e[n],o[14]=e,o[15]=n,o}function st(e){let n,i,r,f,p,y,g,w,$,v,k,x=[],b=new Map,E=e[0];const S=t=>t[13].id;for(let t=0;t<E.length;t+=1){let n=rt(e,E,t),o=S(n);b.set(o,x[t]=ct(o,n))}return{c(){n=a("main"),i=a("h1"),i.textContent="TODO List",r=l(),f=a("div"),p=a("input"),y=l(),g=a("button"),g.textContent="Add Task",w=l(),$=a("ul");for(let t=0;t<x.length;t+=1)x[t].c();h(p,"type","text"),h(p,"placeholder","Enter a new task")},m(t,o){u(t,n,o),s(n,i),s(n,r),s(n,f),s(f,p),m(p,e[1]),s(f,y),s(f,g),s(n,w),s(n,$);for(let t=0;t<x.length;t+=1)x[t]&&x[t].m($,null);v||(k=[d(p,"input",e[5]),d(g,"click",e[2])],v=!0)},p(t,e){2&e&&p.value!==t[1]&&m(p,t[1]),25&e&&(E=t[0],x=function(t,e,n,i,r,s,u,c,a,f,l,d){let h=t.length,p=s.length,m=h;const y={};for(;m--;)y[t[m].key]=m;const g=[],w=new Map,$=new Map,v=[];for(m=p;m--;){const t=d(r,s,m),o=n(t);let c=u.get(o);c?i&&v.push((()=>c.p(t,e))):(c=f(o,t),c.c()),w.set(o,g[m]=c),o in y&&$.set(o,Math.abs(m-y[o]))}const k=new Set,x=new Set;function b(t){O(t,1),t.m(c,l),u.set(t.key,t),l=t.first,p--}for(;h&&p;){const e=g[p-1],n=t[h-1],o=e.key,i=n.key;e===n?(l=e.first,h--,p--):w.has(i)?!u.has(o)||k.has(o)?b(e):x.has(i)?h--:$.get(o)>$.get(i)?(x.add(o),b(e)):(k.add(i),h--):(a(n,u),h--)}for(;h--;){const e=t[h];w.has(e.key)||a(e,u)}for(;p;)b(g[p-1]);return o(v),g}(x,e,S,1,t,E,b,$,j,ct,null,rt))},i:t,o:t,d(t){t&&c(n);for(let t=0;t<x.length;t+=1)x[t].d();v=!1,o(k)}}}function ut(e){let n,o;return n=new it({}),{c(){var t;(t=n.$$.fragment)&&t.c()},m(t,e){L(n,t,e),o=!0},p:t,i(t){o||(O(n.$$.fragment,t),o=!0)},o(t){D(n.$$.fragment,t),o=!1},d(t){M(n,t)}}}function ct(t,e){let n,i,r,y,g,w,$,v,k,x,b,E,S,T=e[13].title+"";function _(){e[6].call(i,e[14],e[15])}function R(){return e[7](e[13])}function N(){e[8].call(y,e[14],e[15])}function A(){return e[9](e[13])}function C(){e[10].call(w,e[14],e[15])}function O(){return e[11](e[13])}function D(){return e[12](e[13])}return{key:t,first:null,c(){n=a("li"),i=a("input"),r=l(),y=a("input"),g=l(),w=a("input"),$=l(),v=f(T),k=l(),x=a("button"),x.textContent="Remove",b=l(),h(i,"type","text"),h(i,"placeholder","Title"),h(y,"type","text"),h(y,"placeholder","Description"),h(w,"type","checkbox"),this.first=n},m(t,o){u(t,n,o),s(n,i),m(i,e[13].title),s(n,r),s(n,y),m(y,e[13].description),s(n,g),s(n,w),w.checked=e[13].completed,s(n,$),s(n,v),s(n,k),s(n,x),s(n,b),E||(S=[d(i,"input",_),d(i,"blur",R),d(y,"input",N),d(y,"blur",A),d(w,"change",C),d(w,"change",O),d(x,"click",D)],E=!0)},p(t,n){e=t,1&n&&i.value!==e[13].title&&m(i,e[13].title),1&n&&y.value!==e[13].description&&m(y,e[13].description),1&n&&(w.checked=e[13].completed),1&n&&T!==(T=e[13].title+"")&&p(v,T)},d(t){t&&c(n),E=!1,o(S)}}}function at(t){let e,n,o,i;const r=[ut,st],s=[];return e=""===Y()?0:1,n=s[e]=r[e](t),{c(){n.c(),o=f("")},m(t,n){s[e].m(t,n),u(t,o,n),i=!0},p(t,[e]){n.p(t,e)},i(t){i||(O(n),i=!0)},o(t){D(n),i=!1},d(t){s[e].d(t),t&&c(o)}}}function ft(t,e,n){let o=[],i="";async function r(t,e,n,o){await async function(t,e,n,o){const i=await fetch(`${et}/todos/${t}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${Y()}`},body:JSON.stringify({title:e,description:n,completed:o})});if(i.ok)return await i.json();throw new Error("Failed to update the todo")}(t,e,n,o)}async function s(t){await async function(t){if((await fetch(`${et}/todos/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${Y()}`}})).ok)return!0;throw new Error("Failed to delete the todo")}(t),n(0,o=o.filter((e=>e.id!==t)))}U="https://auth.todoauthn.com/".replace(/\/$/,""),V("todo",{path:"/",sameSite:"None"}),w((async()=>{await Q.refresh(),n(0,o=await async function(){const t=await fetch(`${et}/todos`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${Y()}`}});if(t.ok)return await t.json();throw new Error("Failed to fetch todos")}())}));return[o,i,async function(){if(i){const t=await async function(t){const e=await fetch(`${et}/todos`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${Y()}`},body:JSON.stringify({title:t})});if(e.ok)return await e.json();throw new Error("Failed to add a todo")}(i);n(0,o=[...o,t]),n(1,i="")}},r,s,function(){i=this.value,n(1,i)},function(t,e){t[e].title=this.value,n(0,o)},t=>r(t.id,t.title,t.description,t.completed),function(t,e){t[e].description=this.value,n(0,o)},t=>r(t.id,t.title,t.description,t.completed),function(t,e){t[e].completed=this.checked,n(0,o)},t=>r(t.id,t.title,t.description,t.completed),t=>s(t.id)]}return new class extends F{constructor(t){super(),P(this,t,ft,at,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map