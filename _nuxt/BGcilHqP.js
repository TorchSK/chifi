import{g as f}from"./BboEKukF.js";import{N as d}from"./YKJGr53e.js";function p({container:e,accept:r,walk:i,enabled:t}){d(()=>{let a=e.value;if(!a||t!==void 0&&!t.value)return;let c=f(e);if(!c)return;let n=Object.assign(l=>r(l),{acceptNode:r}),o=c.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,n,!1);for(;o.nextNode();)i(o.currentNode)})}export{p as i};