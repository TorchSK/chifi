import{av as o,r as u,N as f,aw as v,E as d,a3 as l,a2 as i,ax as h,ay as m}from"./YKJGr53e.js";function I(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:v(a)});const r=t.push(n.value,e);return d(n,c=>{r.patch(c)}),l()&&(i(()=>{r.dispose()}),h(()=>{s.value=!0}),m(()=>{s.value=!1})),r}export{I as u};