"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[942],{428:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(9349),a=n(8420);const i=n.p+"static/media/review-1.db3f6d5e0100f53eb83f.png",s=n.p+"static/media/review-2.b9bdba1e2fcb44a61613.png",o=n.p+"static/media/review-3.44935136945d37eeff9d.png",c=n.p+"static/media/review-4.8c5205431877905e6f6a.png";var l=n(2791),d=n(184);const u=()=>{const e=(0,l.useRef)(null),t=(0,r.Y)(e,{once:!0}),n=[{x:-100,delay:.5,image:i},{x:100,delay:.6,image:s},{x:-100,delay:.8,image:o},{x:100,delay:1,image:c}];return(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("h2",{className:"heading mt",children:"\u0412\u0456\u0434\u0433\u0443\u043a\u0438 \u043d\u0430\u0448\u0438\u0445 \u043a\u043b\u0456\u0454\u043d\u0442\u0456\u0432"}),(0,d.jsx)("div",{className:"reviews",ref:e,children:n.map(((e,n)=>(0,d.jsx)(a.E.div,{className:"reviews__item",initial:{opacity:0,x:e.x},animate:{opacity:t?1:0,x:t?0:e.x},transition:{duration:.5,delay:e.delay},children:(0,d.jsx)("div",{className:"reviews__details",children:(0,d.jsx)("img",{src:e.image,alt:"User",className:"reviews__avatar"})})},n)))})]})}},9349:(e,t,n)=>{n.d(t,{Y:()=>o});var r=n(2791),a=n(5956);const i={some:0,all:1};function s(e,t){let{root:n,margin:r,amount:s="some"}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=function(e,t,n){var r;if("string"===typeof e){let i=document;t&&((0,a.k)(Boolean(t.current),"Scope provided, but no element detected."),i=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=i.querySelectorAll(e)),e=n[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e),c=new WeakMap,l=new IntersectionObserver((e=>{e.forEach((e=>{const n=c.get(e.target);if(e.isIntersecting!==Boolean(n))if(e.isIntersecting){const n=t(e);"function"===typeof n?c.set(e.target,n):l.unobserve(e.target)}else n&&(n(e),c.delete(e.target))}))}),{root:n,rootMargin:r,threshold:"number"===typeof s?s:i[s]});return o.forEach((e=>l.observe(e))),()=>l.disconnect()}function o(e){let{root:t,margin:n,amount:a,once:i=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[o,c]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{if(!e.current||i&&o)return;const r={root:t&&t.current||void 0,margin:n,amount:a};return s(e.current,(()=>(c(!0),i?void 0:()=>c(!1))),r)}),[t,e,n,i]),o}}}]);
//# sourceMappingURL=942.681d7ada.chunk.js.map