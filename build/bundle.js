var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function l(){return f(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let h;function p(t){h=t}const m=[],$=[],g=[],b=[],y=Promise.resolve();let _=!1;function x(t){g.push(t)}let k=!1;const v=new Set;function w(){if(!k){k=!0;do{for(let t=0;t<m.length;t+=1){const n=m[t];p(n),j(n.$$)}for(p(null),m.length=0;$.length;)$.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];v.has(n)||(v.add(n),n())}g.length=0}while(m.length);for(;b.length;)b.pop()();_=!1,k=!1,v.clear()}}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const E=new Set;function A(t,n){-1===t.$$.dirty[0]&&(m.push(t),_||(_=!0,y.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function N(c,u,a,i,f,l,d=[-1]){const m=h;p(c);const $=u.props||{},g=c.$$={fragment:null,ctx:null,props:l,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:e(),dirty:d,skip_bound:!1};let b=!1;if(g.ctx=a?a(c,$,((t,n,...e)=>{const o=e.length?e[0]:n;return g.ctx&&f(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),b&&A(c,t)),n})):[],g.update(),b=!0,o(g.before_update),g.fragment=!!i&&i(g.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);g.fragment&&g.fragment.l(t),t.forEach(s)}else g.fragment&&g.fragment.c();u.intro&&((y=c.$$.fragment)&&y.i&&(E.delete(y),y.i(_))),function(t,e,c){const{fragment:u,on_mount:a,on_destroy:s,after_update:i}=t.$$;u&&u.m(e,c),x((()=>{const e=a.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(x)}(c,u.target,u.anchor),w()}var y,_;p(m)}function C(n){let e,o,r,c,h,p,m,$,g;return{c(){e=i("main"),o=i("h1"),r=f("Hello "),c=f(n[0]),h=f("!"),p=l(),m=i("h2"),m.textContent="J.\\F.\\K.\\",$=l(),g=i("meta"),d(o,"class","svelte-1tky8bj"),d(e,"class","svelte-1tky8bj"),document.title="Johannes Farmer Knudsen",d(g,"http-equiv","refresh"),d(g,"content","0; URL=https://www.youtube.com/watch?v=aPXnVvmulNk")},m(t,n){a(t,e,n),u(e,o),u(o,r),u(o,c),u(o,h),u(e,p),u(e,m),a(t,$,n),u(document.head,g)},p(t,[n]){1&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(c,t[0])},i:t,o:t,d(t){t&&s(e),t&&s($),s(g)}}}function O(t,n,e){let{name:o}=n;return t.$$set=t=>{"name"in t&&e(0,o=t.name)},[o]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),N(this,t,O,C,c,{name:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
