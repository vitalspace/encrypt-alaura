(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function w(){}function B(e){return e()}function S(){return Object.create(null)}function E(e){e.forEach(B)}function I(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function V(e){return Object.keys(e).length===0}function o(e,t){e.appendChild(t)}function Z(e,t,n){e.insertBefore(t,n||null)}function W(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function G(e){return document.createTextNode(e)}function $(){return G(" ")}function C(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function J(e){return Array.from(e.childNodes)}function H(e,t){e.value=t??""}let M;function k(e){M=e}const x=[],q=[];let v=[];const z=[],Q=Promise.resolve();let N=!1;function R(){N||(N=!0,Q.then(F))}function T(e){v.push(e)}const A=new Set;let b=0;function F(){if(b!==0)return;const e=M;do{try{for(;b<x.length;){const t=x[b];b++,k(t),U(t.$$)}}catch(t){throw x.length=0,b=0,t}for(k(null),x.length=0,b=0;q.length;)q.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];A.has(n)||(A.add(n),n())}v.length=0}while(x.length);for(;z.length;)z.pop()();N=!1,A.clear(),k(e)}function U(e){if(e.fragment!==null){e.update(),E(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(T)}}function X(e){const t=[],n=[];v.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),v=t}const Y=new Set;function ee(e,t){e&&e.i&&(Y.delete(e),e.i(t))}function te(e,t,n,r){const{fragment:l,after_update:c}=e.$$;l&&l.m(t,n),r||T(()=>{const a=e.$$.on_mount.map(B).filter(I);e.$$.on_destroy?e.$$.on_destroy.push(...a):E(a),e.$$.on_mount=[]}),c.forEach(T)}function ne(e,t){const n=e.$$;n.fragment!==null&&(X(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function re(e,t){e.$$.dirty[0]===-1&&(x.push(e),R(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function se(e,t,n,r,l,c,a,u=[-1]){const m=M;k(e);const i=e.$$={fragment:null,ctx:[],props:c,update:w,not_equal:l,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:S(),dirty:u,skip_bound:!1,root:t.target||m.$$.root};a&&a(i.root);let g=!1;if(i.ctx=n?n(e,t.props||{},(d,s,...h)=>{const _=h.length?h[0]:s;return i.ctx&&l(i.ctx[d],i.ctx[d]=_)&&(!i.skip_bound&&i.bound[d]&&i.bound[d](_),g&&re(e,d)),s}):[],i.update(),g=!0,E(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const d=J(t.target);i.fragment&&i.fragment.l(d),d.forEach(W)}else i.fragment&&i.fragment.c();t.intro&&ee(e.$$.fragment),te(e,t.target,t.anchor,t.customElement),F()}k(m)}class le{$destroy(){ne(this,1),this.$destroy=w}$on(t,n){if(!I(n))return w;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!V(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ie(e){let t,n,r,l,c,a,u,m,i,g,d,s,h,_,P,L,j,D;return{c(){t=p("div"),n=p("div"),r=p("div"),l=p("div"),l.innerHTML='<h1 class="text-2xl text-gray-400">Encrypt/Decript</h1>',c=$(),a=p("div"),u=p("input"),m=$(),i=p("div"),g=p("button"),g.textContent="Encrypt",d=$(),s=p("button"),s.textContent="Decript",h=$(),_=p("div"),_.innerHTML="<p>Please don&#39;t use, capital latter or strange symbols</p>",P=$(),L=p("div"),L.innerHTML=`<a href="https://github.com/vitalspace" target="_blank"><img src="https://www.svgrepo.com/show/497210/instagram.svg" width="35" alt="instagram img"/></a> 
        <a href="https://github.com/vitalspace" target="_blank"><img src="https://www.svgrepo.com/show/507717/github-square.svg" width="35" alt="github img"/></a> 
        <a href="https://github.com/vitalspace" target="_blank"><img src="https://www.svgrepo.com/show/494209/linkedin.svg" width="35" alt="linkeding img"/></a>`,f(l,"class","text-center"),f(u,"type","text"),f(u,"name",""),f(u,"id",""),f(u,"class","h-48 w-full focus:outline-none text-center text-gray-500 break-words"),f(a,"class","my-2 rounded-md border-2"),f(g,"class","w-full bg-green-300 hover:bg-green-400 py-2"),f(s,"class","w-full bg-purple-300 hover:bg-purple-400 py-2"),f(i,"class","flex space-x-2 text-center text-white transition-all"),f(_,"class","mt-2 bg-slate-50 py-2 text-center text-gray-400"),f(L,"class","flex justify-center space-x-2 pt-3 text-center"),f(r,"class","mx-auto max-w-md"),f(n,"class","relative bg-white px-6 pb-9 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sn:px-10"),f(t,"class","relative flex min-h-screen flex-col justify-center bg-teal-500 bg-opacity-90 py-6 sm:py-12")},m(y,O){Z(y,t,O),o(t,n),o(n,r),o(r,l),o(r,c),o(r,a),o(a,u),H(u,e[0]),o(r,m),o(r,i),o(i,g),o(i,d),o(i,s),o(r,h),o(r,_),o(r,P),o(r,L),j||(D=[C(u,"input",e[3]),C(g,"click",e[1]),C(s,"click",e[2])],j=!0)},p(y,[O]){O&1&&u.value!==y[0]&&H(u,y[0])},i:w,o:w,d(y){y&&W(t),j=!1,E(D)}}}function ce(e,t,n){let r;const l=s=>!!/[áéíóúÁÉÍÓÚ]/.test(s),c=s=>!!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]/.test(s),a=s=>!!/[A-Z]/.test(s),u=s=>(s=s.replace(/a/g,"mj"),s=s.replace(/e/g,"jki"),s=s.replace(/i/g,"liki"),s=s.replace(/o/g,"zam"),s=s.replace(/u/g,"gfo"),s),m=s=>(s=s.replace(/gfo/g,"u"),s=s.replace(/zam/g,"o"),s=s.replace(/liki/g,"i"),s=s.replace(/jki/g,"e"),s=s.replace(/mj/g,"a"),s),i=s=>{if(s.preventDefault(),l(r)){alert("The accents are not allowed"),n(0,r="");return}if(c(r)){alert("The special characters are not allowed"),n(0,r="");return}if(a(r)){alert("Capitital letters are not allowed"),n(0,r="");return}const h=u(r);n(0,r=h)},g=s=>{s.preventDefault(),n(0,r=m(r))};function d(){r=this.value,n(0,r)}return[r,i,g,d]}class ae extends le{constructor(t){super(),se(this,t,ce,ie,K,{})}}new ae({target:document.getElementById("app")});