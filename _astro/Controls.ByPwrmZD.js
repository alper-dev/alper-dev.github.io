import{r as d}from"./index.CdJzaNS0.js";var l={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m;function x(){if(m)return n;m=1;var s=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(e,t,r){var a=null;if(r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),"key"in t){r={};for(var i in t)i!=="key"&&(r[i]=t[i])}else r=t;return t=r.ref,{$$typeof:s,type:e,key:a,ref:t!==void 0?t:null,props:r}}return n.Fragment=o,n.jsx=u,n.jsxs=u,n}var c;function f(){return c||(c=1,l.exports=x()),l.exports}var h=f();function E(){const[s,o]=d.useState("light");d.useEffect(()=>{const e=document.documentElement.dataset.theme||"light";o(e)},[]);function u(){const e=s==="dark"?"light":"dark";document.documentElement.classList.toggle("dark",e==="dark"),document.documentElement.dataset.theme=e,localStorage.setItem("theme",e),o(e)}return h.jsx("button",{onClick:u,className:"font-sans text-sm text-[var(--fg-faint)] hover:text-[var(--fg)] transition-colors",children:s==="dark"?"light":"dark"})}export{E as default};
