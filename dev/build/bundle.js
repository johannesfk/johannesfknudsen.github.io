var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function l(t){t.forEach(n)}function r(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function o(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function m(){return u(" ")}function d(t,n,e,l){return t.addEventListener(n,e,l),()=>t.removeEventListener(n,e,l)}function h(t){return function(n){return n.preventDefault(),t.call(this,n)}}function w(t){return function(n){n.target===this&&t.call(this,n)}}function f(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function b(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let g;function p(t){g=t}function _(){if(!g)throw new Error("Function called outside component initialization");return g}function $(){const t=_();return(n,e)=>{const l=t.$$.callbacks[n];if(l){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);l.slice().forEach((n=>{n.call(t,r)}))}}}const v=[],U=[],k=[],x=[],y=Promise.resolve();let C=!1;function j(t){k.push(t)}let E=!1;const I=new Set;function z(){if(!E){E=!0;do{for(let t=0;t<v.length;t+=1){const n=v[t];p(n),S(n.$$)}for(p(null),v.length=0;U.length;)U.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];I.has(n)||(I.add(n),n())}k.length=0}while(v.length);for(;x.length;)x.pop()();C=!1,E=!1,I.clear()}}function S(t){if(null!==t.fragment){t.update(),l(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const M=new Set;let D;function F(){D={r:0,c:[],p:D}}function T(){D.r||l(D.c),D=D.p}function A(t,n){t&&t.i&&(M.delete(t),t.i(n))}function K(t,n,e,l){if(t&&t.o){if(M.has(t))return;M.add(t),D.c.push((()=>{M.delete(t),l&&(e&&t.d(1),l())})),t.o(n)}}function N(t){t&&t.c()}function O(t,e,i){const{fragment:o,on_mount:a,on_destroy:s,after_update:c}=t.$$;o&&o.m(e,i),j((()=>{const e=a.map(n).filter(r);s?s.push(...e):l(e),t.$$.on_mount=[]})),c.forEach(j)}function H(t,n){const e=t.$$;null!==e.fragment&&(l(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function J(t,n){-1===t.$$.dirty[0]&&(v.push(t),C||(C=!0,y.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function L(n,r,i,o,a,c,u=[-1]){const m=g;p(n);const d=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:e(),dirty:u,skip_bound:!1};let h=!1;if(d.ctx=i?i(n,r.props||{},((t,e,...l)=>{const r=l.length?l[0]:e;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&J(n,t)),e})):[],d.update(),h=!0,l(d.before_update),d.fragment=!!o&&o(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(s)}else d.fragment&&d.fragment.c();r.intro&&A(n.$$.fragment),O(n,r.target,r.anchor),z()}p(m)}class q{$destroy(){H(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function R(n){let e;return{c(){e=c("div"),e.innerHTML='<div class="sk-cube sk-cube1 svelte-v8wn4a"></div> \n    <div class="sk-cube sk-cube2 svelte-v8wn4a"></div> \n    <div class="sk-cube sk-cube3 svelte-v8wn4a"></div> \n    <div class="sk-cube sk-cube4 svelte-v8wn4a"></div> \n    <div class="sk-cube sk-cube5 svelte-v8wn4a"></div> \n    <div class="sk-cube sk-cube6 svelte-v8wn4a"></div> \n    <div class="sk-cube sk-cube7 svelte-v8wn4a"></div> \n    <div class="sk-cube sk-cube8 svelte-v8wn4a"></div> \n    <div class="sk-cube sk-cube9 svelte-v8wn4a"></div>',f(e,"class","sk-cube-grid svelte-v8wn4a")},m(t,n){a(t,e,n)},p:t,i:t,o:t,d(t){t&&s(e)}}}class W extends q{constructor(t){super(),L(this,t,null,R,i,{})}}function B(t){let n,e;return n=new W({}),{c(){N(n.$$.fragment)},m(t,l){O(n,t,l),e=!0},i(t){e||(A(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){H(n,t)}}}function P(t){let n,e,r,i,g,p,_,$,v,U,k,x,y,C,j,E,I,z,S,M,D,N=t[0].modalContent.title+"",O=t[2]&&B();return{c(){n=c("div"),e=m(),r=c("div"),i=c("div"),g=c("img"),$=m(),v=c("img"),y=m(),O&&O.c(),C=m(),j=c("span"),j.textContent="×",E=m(),I=c("div"),z=u(N),f(n,"class","modal-background"),f(g,"class","lb-image"),g.src!==(p=t[0].modalContent.thumbnailUrl)&&f(g,"src",p),f(g,"alt",_="Thumbnail: "+t[0].modalContent.title),f(v,"class","lb-image lb-image-hq"),f(v,"sizes","(max-width: 640px) 95vw, 50vw"),f(v,"srcset",U=V+"w_512"+(Y+t[0].modalContent.imageUrl)+" 512w,\n                "+V+"w_640"+(Y+t[0].modalContent.imageUrl)+" 640w,\n                "+V+"w_960"+(Y+t[0].modalContent.imageUrl)+" 960w,\n                "+V+"w_1024"+(Y+t[0].modalContent.imageUrl)+" 1024w,\n                "+V+"w_2048"+(Y+t[0].modalContent.imageUrl)+" 2048w"),v.src!==(k=V+"w_auto:50:1024"+(Y+t[0].modalContent.imageUrl))&&f(v,"src",k),f(v,"alt",x=t[0].modalContent.title),f(j,"autofocus",""),f(j,"class","lb-close"),f(I,"class","lb-caption"),f(i,"class","lb-image-container"),f(r,"class","modal"),f(r,"role","dialog"),f(r,"aria-modal","true")},m(l,s){a(l,n,s),a(l,e,s),a(l,r,s),o(r,i),o(i,g),o(i,$),o(i,v),o(i,y),O&&O.m(i,null),o(i,C),o(i,j),o(i,E),o(i,I),o(I,z),t[8](r),S=!0,j.focus(),M||(D=[d(window,"keydown",t[4]),d(n,"click",t[3]),d(g,"load",t[5]),d(g,"contextmenu",h(G)),d(v,"load",t[7]),d(v,"contextmenu",h(G)),d(j,"click",t[3]),d(I,"click",w(t[3])),d(i,"click",w(t[3])),d(r,"click",w(t[3]))],M=!0)},p(t,[n]){(!S||1&n&&g.src!==(p=t[0].modalContent.thumbnailUrl))&&f(g,"src",p),(!S||1&n&&_!==(_="Thumbnail: "+t[0].modalContent.title))&&f(g,"alt",_),(!S||1&n&&U!==(U=V+"w_512"+(Y+t[0].modalContent.imageUrl)+" 512w,\n                "+V+"w_640"+(Y+t[0].modalContent.imageUrl)+" 640w,\n                "+V+"w_960"+(Y+t[0].modalContent.imageUrl)+" 960w,\n                "+V+"w_1024"+(Y+t[0].modalContent.imageUrl)+" 1024w,\n                "+V+"w_2048"+(Y+t[0].modalContent.imageUrl)+" 2048w"))&&f(v,"srcset",U),(!S||1&n&&v.src!==(k=V+"w_auto:50:1024"+(Y+t[0].modalContent.imageUrl)))&&f(v,"src",k),(!S||1&n&&x!==(x=t[0].modalContent.title))&&f(v,"alt",x),t[2]?O?4&n&&A(O,1):(O=B(),O.c(),A(O,1),O.m(i,C)):O&&(F(),K(O,1,1,(()=>{O=null})),T()),(!S||1&n)&&N!==(N=t[0].modalContent.title+"")&&b(z,N)},i(t){S||(A(O),S=!0)},o(t){K(O),S=!1},d(i){i&&s(n),i&&s(e),i&&s(r),O&&O.d(),t[8](null),M=!1,l(D)}}}let V="https://res.cloudinary.com/jfknudsen/image/upload/fl_any_format,f_auto,c_scale,q_95,",Y="/cw/images/";function G(){return!1}function Q(t,n,e){const l=$(),r=()=>l("close");let i;const o="undefined"!=typeof document&&document.activeElement;var a;o&&(a=()=>{var t;null===(t=o)||void 0===t||t.focus()},_().$$.on_destroy.push(a));let{modalData:s}=n,c=!1,u=!1;function m(t){let n=t.previousElementSibling;console.log(n),n.style.display="none",console.log("lowres sdisplay = none"),t.style.display="inline-block",console.log("highres sdisplay = block"),c=!1,e(2,u=!1)}return t.$$set=t=>{"modalData"in t&&e(0,s=t.modalData)},[s,i,u,r,t=>{var n;if("Escape"!==t.key){if("Tab"===t.key){const e=i.querySelectorAll("*"),l=Array.from(e).filter((t=>{var n;return(null===(n=t)||void 0===n?void 0:n.tabIndex)>=0}));let r=l.indexOf(document.activeElement);-1===r&&t.shiftKey&&(r=0),r+=l.length+(t.shiftKey?-1:1),r%=l.length,null===(n=l[r])||void 0===n||n.focus(),t.preventDefault()}}else r()},function(){c=!0,c&&setInterval((function(){0==c?(console.log("No change last 2 sec"),e(2,u=!1)):(console.log("Change past 2 sec"),e(2,u=!0))}),200)},m,t=>m(t.target),function(t){U[t?"unshift":"push"]((()=>{i=t,e(1,i)}))}]}class X extends q{constructor(t){super(),L(this,t,Q,P,i,{modalData:0})}}function Z(t){let n,e,l,r,i,o;return{c(){n=c("img"),f(n,"sizes","(max-width: 485px) 30vw,\n                    (max-width: 640px) 30vw, 20vw"),f(n,"srcset",e=lt+"w_50"+(rt+t[0].thumbnailUrl)+" 50w,\n                    "+lt+"w_100"+(rt+t[0].thumbnailUrl)+" 100w,\n                    "+lt+"w_125"+(rt+t[0].thumbnailUrl)+" 125w,\n                    "+lt+"w_150"+(rt+t[0].thumbnailUrl)+" 150w,\n                    "+lt+"w_200"+(rt+t[0].thumbnailUrl)+" 200w,\n                    "+lt+"w_225"+(rt+t[0].thumbnailUrl)+" 225w,\n                    "+lt+"w_250"+(rt+t[0].thumbnailUrl)+" 250w,\n                    "+lt+"w_320"+(rt+t[0].thumbnailUrl)+" 320w,\n                    "+lt+"w_512"+(rt+t[0].thumbnailUrl)+" 512w,\n                    "+lt+"w_640"+(rt+t[0].thumbnailUrl)+" 640w,\n                    "+lt+"w_1024"+(rt+t[0].thumbnailUrl)+" 1024w"),n.src!==(l=lt+"w_auto:50:200"+(rt+t[0].thumbnailUrl))&&f(n,"src",l),f(n,"alt",r=t[0].title)},m(t,e){a(t,n,e),i||(o=d(n,"contextmenu",h(it)),i=!0)},p(t,i){1&i&&e!==(e=lt+"w_50"+(rt+t[0].thumbnailUrl)+" 50w,\n                    "+lt+"w_100"+(rt+t[0].thumbnailUrl)+" 100w,\n                    "+lt+"w_125"+(rt+t[0].thumbnailUrl)+" 125w,\n                    "+lt+"w_150"+(rt+t[0].thumbnailUrl)+" 150w,\n                    "+lt+"w_200"+(rt+t[0].thumbnailUrl)+" 200w,\n                    "+lt+"w_225"+(rt+t[0].thumbnailUrl)+" 225w,\n                    "+lt+"w_250"+(rt+t[0].thumbnailUrl)+" 250w,\n                    "+lt+"w_320"+(rt+t[0].thumbnailUrl)+" 320w,\n                    "+lt+"w_512"+(rt+t[0].thumbnailUrl)+" 512w,\n                    "+lt+"w_640"+(rt+t[0].thumbnailUrl)+" 640w,\n                    "+lt+"w_1024"+(rt+t[0].thumbnailUrl)+" 1024w")&&f(n,"srcset",e),1&i&&n.src!==(l=lt+"w_auto:50:200"+(rt+t[0].thumbnailUrl))&&f(n,"src",l),1&i&&r!==(r=t[0].title)&&f(n,"alt",r)},d(t){t&&s(n),i=!1,o()}}}function tt(t){let n,e,l,r,i,o;return{c(){n=c("img"),f(n,"sizes","(max-width: 640px) 50vw, 50vw"),f(n,"srcset",e=lt+"w_100"+(rt+t[0].thumbnailUrl)+" 100w,\n                    "+lt+"w_125"+(rt+t[0].thumbnailUrl)+" 125w,\n                    "+lt+"w_150"+(rt+t[0].thumbnailUrl)+" 150w,\n                    "+lt+"w_200"+(rt+t[0].thumbnailUrl)+" 200w,\n                    "+lt+"w_225"+(rt+t[0].thumbnailUrl)+" 225w,\n                    "+lt+"w_250"+(rt+t[0].thumbnailUrl)+" 250w,\n                    "+lt+"w_320"+(rt+t[0].thumbnailUrl)+" 320w,\n                    "+lt+"w_512"+(rt+t[0].thumbnailUrl)+" 512w,\n                    "+lt+"w_640"+(rt+t[0].thumbnailUrl)+" 640w,\n                    "+lt+"w_720"+(rt+t[0].thumbnailUrl)+" 720w,\n                    "+lt+"w_1024"+(rt+t[0].thumbnailUrl)+" 1024w,\n                    "+lt+"w_2048"+(rt+t[0].thumbnailUrl)+" 2048w"),n.src!==(l=lt+"w_auto:50:512"+(rt+t[0].thumbnailUrl))&&f(n,"src",l),f(n,"alt",r=t[0].title)},m(t,e){a(t,n,e),i||(o=d(n,"contextmenu",h(it)),i=!0)},p(t,i){1&i&&e!==(e=lt+"w_100"+(rt+t[0].thumbnailUrl)+" 100w,\n                    "+lt+"w_125"+(rt+t[0].thumbnailUrl)+" 125w,\n                    "+lt+"w_150"+(rt+t[0].thumbnailUrl)+" 150w,\n                    "+lt+"w_200"+(rt+t[0].thumbnailUrl)+" 200w,\n                    "+lt+"w_225"+(rt+t[0].thumbnailUrl)+" 225w,\n                    "+lt+"w_250"+(rt+t[0].thumbnailUrl)+" 250w,\n                    "+lt+"w_320"+(rt+t[0].thumbnailUrl)+" 320w,\n                    "+lt+"w_512"+(rt+t[0].thumbnailUrl)+" 512w,\n                    "+lt+"w_640"+(rt+t[0].thumbnailUrl)+" 640w,\n                    "+lt+"w_720"+(rt+t[0].thumbnailUrl)+" 720w,\n                    "+lt+"w_1024"+(rt+t[0].thumbnailUrl)+" 1024w,\n                    "+lt+"w_2048"+(rt+t[0].thumbnailUrl)+" 2048w")&&f(n,"srcset",e),1&i&&n.src!==(l=lt+"w_auto:50:512"+(rt+t[0].thumbnailUrl))&&f(n,"src",l),1&i&&r!==(r=t[0].title)&&f(n,"alt",r)},d(t){t&&s(n),i=!1,o()}}}function nt(t){let n,e,l,r,i,o;return{c(){n=c("img"),f(n,"sizes","(max-width: 640px) 90vw, 75vw"),f(n,"srcset",e=lt+"w_100"+(rt+t[0].thumbnailUrl)+" 100w,\n                    "+lt+"w_125"+(rt+t[0].thumbnailUrl)+" 125w,\n                    "+lt+"w_150"+(rt+t[0].thumbnailUrl)+" 150w,\n                    "+lt+"w_200"+(rt+t[0].thumbnailUrl)+" 200w,\n                    "+lt+"w_225"+(rt+t[0].thumbnailUrl)+" 225w,\n                    "+lt+"w_250"+(rt+t[0].thumbnailUrl)+" 250w,\n                    "+lt+"w_320"+(rt+t[0].thumbnailUrl)+" 320w,\n                    "+lt+"w_512"+(rt+t[0].thumbnailUrl)+" 512w,\n                    "+lt+"w_640"+(rt+t[0].thumbnailUrl)+" 640w,\n                    "+lt+"w_1024"+(rt+t[0].thumbnailUrl)+" 1024w,\n                    "+lt+"w_2048"+(rt+t[0].thumbnailUrl)+" 2048w"),n.src!==(l=lt+"w_auto:50:1024"+(rt+t[0].thumbnailUrl))&&f(n,"src",l),f(n,"alt",r=t[0].title)},m(t,e){a(t,n,e),i||(o=d(n,"contextmenu",h(it)),i=!0)},p(t,i){1&i&&e!==(e=lt+"w_100"+(rt+t[0].thumbnailUrl)+" 100w,\n                    "+lt+"w_125"+(rt+t[0].thumbnailUrl)+" 125w,\n                    "+lt+"w_150"+(rt+t[0].thumbnailUrl)+" 150w,\n                    "+lt+"w_200"+(rt+t[0].thumbnailUrl)+" 200w,\n                    "+lt+"w_225"+(rt+t[0].thumbnailUrl)+" 225w,\n                    "+lt+"w_250"+(rt+t[0].thumbnailUrl)+" 250w,\n                    "+lt+"w_320"+(rt+t[0].thumbnailUrl)+" 320w,\n                    "+lt+"w_512"+(rt+t[0].thumbnailUrl)+" 512w,\n                    "+lt+"w_640"+(rt+t[0].thumbnailUrl)+" 640w,\n                    "+lt+"w_1024"+(rt+t[0].thumbnailUrl)+" 1024w,\n                    "+lt+"w_2048"+(rt+t[0].thumbnailUrl)+" 2048w")&&f(n,"srcset",e),1&i&&n.src!==(l=lt+"w_auto:50:1024"+(rt+t[0].thumbnailUrl))&&f(n,"src",l),1&i&&r!==(r=t[0].title)&&f(n,"alt",r)},d(t){t&&s(n),i=!1,o()}}}function et(n){let e,l,r,i,h,g,p,_,$=n[0].title+"";function v(t,n){return"big-wide"==t[1]?nt:"big"==t[1]?tt:Z}let U=v(n),k=U(n);return{c(){e=c("a"),l=c("h2"),r=u($),i=m(),h=c("div"),k.c(),f(h,"class","img-src"),f(e,"class",g="project-item "+n[1]),f(e,"id",n[2])},m(t,s){a(t,e,s),o(e,l),o(l,r),o(e,i),o(e,h),k.m(h,null),p||(_=d(e,"click",w(n[4])),p=!0)},p(t,[n]){1&n&&$!==($=t[0].title+"")&&b(r,$),U===(U=v(t))&&k?k.p(t,n):(k.d(1),k=U(t),k&&(k.c(),k.m(h,null))),2&n&&g!==(g="project-item "+t[1])&&f(e,"class",g),4&n&&f(e,"id",t[2])},i:t,o:t,d(t){t&&s(e),k.d(),p=!1,_()}}}let lt="https://res.cloudinary.com/jfknudsen/image/upload/fl_any_format,f_auto,c_scale,q_80,",rt="/cw/images/";function it(){return!1}function ot(t,n,e){const l=$();let{photo:r}=n,{gridSize:i}=n,{projectId:o}=n;return t.$$set=t=>{"photo"in t&&e(0,r=t.photo),"gridSize"in t&&e(1,i=t.gridSize),"projectId"in t&&e(2,o=t.projectId)},[r,i,o,l,t=>l("imageClick",t.target)]}class at extends q{constructor(t){super(),L(this,t,ot,et,i,{photo:0,gridSize:1,projectId:2})}}function st(t,n,e){const l=t.slice();return l[8]=n[e],l[10]=e,l}function ct(t){let n,e;return n=new W({}),{c(){N(n.$$.fragment)},m(t,l){O(n,t,l),e=!0},i(t){e||(A(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){H(n,t)}}}function ut(t){let n,e;return n=new at({props:{gridSize:t[8].gridSize,photo:t[8],projectId:t[8].id}}),n.$on("imageClick",t[3]),n.$on("rightClick",ht),{c(){N(n.$$.fragment)},m(t,l){O(n,t,l),e=!0},p(t,e){const l={};1&e&&(l.gridSize=t[8].gridSize),1&e&&(l.photo=t[8]),1&e&&(l.projectId=t[8].id),2048&e&&(l.$$scope={dirty:e,ctx:t}),n.$set(l)},i(t){e||(A(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){H(n,t)}}}function mt(t){let n,e;return n=new X({props:{modalData:t[2]}}),n.$on("close",t[4]),{c(){N(n.$$.fragment)},m(t,l){O(n,t,l),e=!0},p(t,e){const l={};4&e&&(l.modalData=t[2]),n.$set(l)},i(t){e||(A(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){H(n,t)}}}function dt(t){let n,e,l,r,i=t[0],o=[];for(let n=0;n<i.length;n+=1)o[n]=ut(st(t,i,n));const d=t=>K(o[t],1,1,(()=>{o[t]=null}));let h=null;i.length||(h=ct());let w=t[2].showModal&&mt(t);return{c(){n=c("article");for(let t=0;t<o.length;t+=1)o[t].c();h&&h.c(),e=m(),w&&w.c(),l=u(""),f(n,"class","projects")},m(t,i){a(t,n,i);for(let t=0;t<o.length;t+=1)o[t].m(n,null);h&&h.m(n,null),a(t,e,i),w&&w.m(t,i),a(t,l,i),r=!0},p(t,[e]){if(11&e){let l;for(i=t[0],l=0;l<i.length;l+=1){const r=st(t,i,l);o[l]?(o[l].p(r,e),A(o[l],1)):(o[l]=ut(r),o[l].c(),A(o[l],1),o[l].m(n,null))}for(F(),l=i.length;l<o.length;l+=1)d(l);T(),i.length?h&&(F(),K(h,1,1,(()=>{h=null})),T()):h||(h=ct(),h.c(),A(h,1),h.m(n,null))}t[2].showModal?w?(w.p(t,e),4&e&&A(w,1)):(w=mt(t),w.c(),A(w,1),w.m(l.parentNode,l)):w&&(F(),K(w,1,1,(()=>{w=null})),T())},i(t){if(!r){for(let t=0;t<i.length;t+=1)A(o[t]);A(w),r=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)K(o[t]);K(w),r=!1},d(t){t&&s(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(o,t),h&&h.d(),t&&s(e),w&&w.d(t),t&&s(l)}}}function ht(){return!1}function wt(t,n,e){var l=this&&this.__awaiter||function(t,n,e,l){return new(e||(e=Promise))((function(r,i){function o(t){try{s(l.next(t))}catch(t){i(t)}}function a(t){try{s(l.throw(t))}catch(t){i(t)}}function s(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(o,a)}s((l=l.apply(t,n||[])).next())}))};let{photos:r=[]}=n;var i;i=()=>l(void 0,void 0,void 0,(function*(){const t=yield fetch("./assets/projects.json");e(0,r=Object.values(yield t.json()))})),_().$$.on_mount.push(i);let o={showModal:!1,modalContent:[]};return t.$$set=t=>{"photos"in t&&e(0,r=t.photos)},[r,ht,o,function(t){let n={imageUrl:r[t.detail.id].thumbnailUrl,thumbnailUrl:t.detail.lastChild.lastChild.currentSrc,title:(l=r[t.detail.id].title,l||""),id:t.detail.id};var l;e(2,o={showModal:!0,modalContent:n})},()=>e(2,o.showModal=!1,o)]}class ft extends q{constructor(t){super(),L(this,t,wt,dt,i,{photos:0,handleRightClick:1})}get handleRightClick(){return ht}}function bt(n){let e;return{c(){e=c("header"),e.innerHTML='<nav><a class="archive" href=".">ARCHIVE</a> \n        <a class="logo" href="."><h1 id="ht-full">Johannes Farmer Knudsen</h1> \n            <h1 id="ht-mid" hidden="">Johannes F. Knudsen</h1> \n            <h1 id="ht-small" hidden="">Johannes F. K.</h1> \n            <h1 id="ht-petite" hidden="">J.F.K.</h1></a> \n        <a class="info" href=".">INFORMATION</a></nav>'},m(t,n){a(t,e,n)},p:t,i:t,o:t,d(t){t&&s(e)}}}class gt extends q{constructor(t){super(),L(this,t,null,bt,i,{})}}function pt(n){let e,l,r,i,u,d,h;return{c(){e=c("footer"),l=c("hr"),r=m(),i=c("address"),i.innerHTML='<a href="https://www.imdb.com/name/nm10163646" target="_blank" rel="noreferrer noopener"><img class="icon" defer="" src="assets/icons/IMDb.svg" alt="IMDb"/></a> \n            <a href="https://instagram.com/farmerknudsen" target="_blank" rel="noreferrer noopener"><img class="icon" defer="" src="assets/icons/instagram.svg" alt="Instagram"/></a> \n            <a href="https://letterboxd.com/johannesfk" target="_blank" rel="noreferrer noopener"><img class="icon" defer="" src="assets/icons/letterboxd.svg" alt="Letterboxd"/></a>',u=m(),d=c("div"),h=c("small"),h.textContent=`© ${n[0]} Johannes Farmer Knudsen`,f(i,"class","footer-some"),f(d,"class","copyright")},m(t,n){a(t,e,n),o(e,l),o(e,r),o(e,i),o(e,u),o(e,d),o(d,h)},p:t,i:t,o:t,d(t){t&&s(e)}}}function _t(t){return[(new Date).getFullYear()]}class $t extends q{constructor(t){super(),L(this,t,_t,pt,i,{})}}function vt(t){let n,e,l,r,i,o,u,d,h;return document.title=n=t[0]?`${t[0]} • Website`:"Website • Home",l=new gt({}),o=new ft({}),d=new $t({}),{c(){e=m(),N(l.$$.fragment),r=m(),i=c("main"),N(o.$$.fragment),u=m(),N(d.$$.fragment)},m(t,n){a(t,e,n),O(l,t,n),a(t,r,n),a(t,i,n),O(o,i,null),a(t,u,n),O(d,t,n),h=!0},p(t,[e]){(!h||1&e)&&n!==(n=t[0]?`${t[0]} • Website`:"Website • Home")&&(document.title=n)},i(t){h||(A(l.$$.fragment,t),A(o.$$.fragment,t),A(d.$$.fragment,t),h=!0)},o(t){K(l.$$.fragment,t),K(o.$$.fragment,t),K(d.$$.fragment,t),h=!1},d(t){t&&s(e),H(l,t),t&&s(r),t&&s(i),H(o),t&&s(u),H(d,t)}}}function Ut(t,n,e){let{title:l="Johannes F. K."}=n;return t.$$set=t=>{"title"in t&&e(0,l=t.title)},[l]}return new class extends q{constructor(t){super(),L(this,t,Ut,vt,i,{title:0})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
