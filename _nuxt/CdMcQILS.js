import{n as Pe,E as se,d as B,q as Re,N as ke,k as Ne,$ as Ce,z as Me,u as ae}from"./Djmrkajt.js";import{g as de,f as ne,b as oe,A as U,m as D,o as w,u as I,P as j,d as F,k as He,p as Be,I as K,l as We,i as W,w as xe,N as re,c as je}from"./BboEKukF.js";import{a as ce,t as ue,o as fe}from"./CBpMDLrE.js";import{d as V,r as h,J as d,o as A,b as P,M as S,F as Ie,N as Q,E as Y,a5 as Ue,L as ve,P as X,O as Ve}from"./YKJGr53e.js";function pe(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let l of e.value){let n=w(l);n instanceof HTMLElement&&t.add(n)}return t}var me=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(me||{});let N=Object.assign(V({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:h(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:l,expose:n}){let a=h(null);n({el:a,$el:a});let o=d(()=>de(a)),i=h(!1);A(()=>i.value=!0),P(()=>i.value=!1),qe({ownerDocument:o},d(()=>i.value&&!!(e.features&16)));let u=ze({ownerDocument:o,container:a,initialFocus:d(()=>e.initialFocus)},d(()=>i.value&&!!(e.features&2)));_e({ownerDocument:o,container:a,containers:e.containers,previousActiveElement:u},d(()=>i.value&&!!(e.features&8)));let r=Pe();function c(p){let v=w(a);v&&(g=>g())(()=>{I(r.value,{[B.Forwards]:()=>{j(v,F.First,{skipElements:[p.relatedTarget]})},[B.Backwards]:()=>{j(v,F.Last,{skipElements:[p.relatedTarget]})}})})}let m=h(!1);function b(p){p.key==="Tab"&&(m.value=!0,requestAnimationFrame(()=>{m.value=!1}))}function E(p){if(!i.value)return;let v=pe(e.containers);w(a)instanceof HTMLElement&&v.add(w(a));let g=p.relatedTarget;g instanceof HTMLElement&&g.dataset.headlessuiFocusGuard!=="true"&&(ge(v,g)||(m.value?j(w(a),I(r.value,{[B.Forwards]:()=>F.Next,[B.Backwards]:()=>F.Previous})|F.WrapAround,{relativeTo:p.target}):p.target instanceof HTMLElement&&D(p.target)))}return()=>{let p={},v={ref:a,onKeydown:b,onFocusout:E},{features:g,initialFocus:y,containers:R,...O}=e;return S(Ie,[!!(g&4)&&S(ne,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:c,features:oe.Focusable}),U({ourProps:v,theirProps:{...t,...O},slot:p,attrs:t,slots:l,name:"FocusTrap"}),!!(g&4)&&S(ne,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:c,features:oe.Focusable})])}}}),{features:me});function Ye(e){let t=h(ue.slice());return Y([e],([l],[n])=>{n===!0&&l===!1?ce(()=>{t.value.splice(0)}):n===!1&&l===!0&&(t.value=ue.slice())},{flush:"post"}),()=>{var l;return(l=t.value.find(n=>n!=null&&n.isConnected))!=null?l:null}}function qe({ownerDocument:e},t){let l=Ye(t);A(()=>{Q(()=>{var n,a;t.value||((n=e.value)==null?void 0:n.activeElement)===((a=e.value)==null?void 0:a.body)&&D(l())},{flush:"post"})}),P(()=>{t.value&&D(l())})}function ze({ownerDocument:e,container:t,initialFocus:l},n){let a=h(null),o=h(!1);return A(()=>o.value=!0),P(()=>o.value=!1),A(()=>{Y([t,l,n],(i,u)=>{if(i.every((c,m)=>(u==null?void 0:u[m])===c)||!n.value)return;let r=w(t);r&&ce(()=>{var c,m;if(!o.value)return;let b=w(l),E=(c=e.value)==null?void 0:c.activeElement;if(b){if(b===E){a.value=E;return}}else if(r.contains(E)){a.value=E;return}b?D(b):j(r,F.First|F.NoScroll)===He.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.value=(m=e.value)==null?void 0:m.activeElement})},{immediate:!0,flush:"post"})}),a}function _e({ownerDocument:e,container:t,containers:l,previousActiveElement:n},a){var o;se((o=e.value)==null?void 0:o.defaultView,"focus",i=>{if(!a.value)return;let u=pe(l);w(t)instanceof HTMLElement&&u.add(w(t));let r=n.value;if(!r)return;let c=i.target;c&&c instanceof HTMLElement?ge(u,c)?(n.value=c,D(c)):(i.preventDefault(),i.stopPropagation(),D(r)):D(n.value)},!0)}function ge(e,t){for(let l of e)if(l.contains(t))return!0;return!1}function Ge(e){let t=Ue(e.getSnapshot());return P(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Je(e,t){let l=e(),n=new Set;return{getSnapshot(){return l},subscribe(a){return n.add(a),()=>n.delete(a)},dispatch(a,...o){let i=t[a].call(l,...o);i&&(l=i,n.forEach(u=>u()))}}}function Ke(){let e;return{before({doc:t}){var l;let n=t.documentElement;e=((l=t.defaultView)!=null?l:window).innerWidth-n.clientWidth},after({doc:t,d:l}){let n=t.documentElement,a=n.clientWidth-n.offsetWidth,o=e-a;l.style(n,"paddingRight",`${o}px`)}}}function Qe(){return Be()?{before({doc:e,d:t,meta:l}){function n(a){return l.containers.flatMap(o=>o()).some(o=>o.contains(a))}t.microTask(()=>{var a;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let u=fe();u.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>u.dispose()))}let o=(a=window.scrollY)!=null?a:window.pageYOffset,i=null;t.addEventListener(e,"click",u=>{if(u.target instanceof HTMLElement)try{let r=u.target.closest("a");if(!r)return;let{hash:c}=new URL(r.href),m=e.querySelector(c);m&&!n(m)&&(i=m)}catch{}},!0),t.addEventListener(e,"touchstart",u=>{if(u.target instanceof HTMLElement)if(n(u.target)){let r=u.target;for(;r.parentElement&&n(r.parentElement);)r=r.parentElement;t.style(r,"overscrollBehavior","contain")}else t.style(u.target,"touchAction","none")}),t.addEventListener(e,"touchmove",u=>{if(u.target instanceof HTMLElement){if(u.target.tagName==="INPUT")return;if(n(u.target)){let r=u.target;for(;r.parentElement&&r.dataset.headlessuiPortal!==""&&!(r.scrollHeight>r.clientHeight||r.scrollWidth>r.clientWidth);)r=r.parentElement;r.dataset.headlessuiPortal===""&&u.preventDefault()}else u.preventDefault()}},{passive:!1}),t.add(()=>{var u;let r=(u=window.scrollY)!=null?u:window.pageYOffset;o!==r&&window.scrollTo(0,o),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function Xe(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Ze(e){let t={};for(let l of e)Object.assign(t,l(t));return t}let L=Je(()=>new Map,{PUSH(e,t){var l;let n=(l=this.get(e))!=null?l:{doc:e,count:0,d:fe(),meta:new Set};return n.count++,n.meta.add(t),this.set(e,n),this},POP(e,t){let l=this.get(e);return l&&(l.count--,l.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:l}){let n={doc:e,d:t,meta:Ze(l)},a=[Qe(),Ke(),Xe()];a.forEach(({before:o})=>o==null?void 0:o(n)),a.forEach(({after:o})=>o==null?void 0:o(n))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});L.subscribe(()=>{let e=L.getSnapshot(),t=new Map;for(let[l]of e)t.set(l,l.documentElement.style.overflow);for(let l of e.values()){let n=t.get(l.doc)==="hidden",a=l.count!==0;(a&&!n||!a&&n)&&L.dispatch(l.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",l),l.count===0&&L.dispatch("TEARDOWN",l)}});function et(e,t,l){let n=Ge(L),a=d(()=>{let o=e.value?n.value.get(e.value):void 0;return o?o.count>0:!1});return Y([e,t],([o,i],[u],r)=>{if(!o||!i)return;L.dispatch("PUSH",o,l);let c=!1;r(()=>{c||(L.dispatch("POP",u??o,l),c=!0)})},{immediate:!0}),a}let _=new Map,C=new Map;function ie(e,t=h(!0)){Q(l=>{var n;if(!t.value)return;let a=w(e);if(!a)return;l(function(){var i;if(!a)return;let u=(i=C.get(a))!=null?i:1;if(u===1?C.delete(a):C.set(a,u-1),u!==1)return;let r=_.get(a);r&&(r["aria-hidden"]===null?a.removeAttribute("aria-hidden"):a.setAttribute("aria-hidden",r["aria-hidden"]),a.inert=r.inert,_.delete(a))});let o=(n=C.get(a))!=null?n:0;C.set(a,o+1),o===0&&(_.set(a,{"aria-hidden":a.getAttribute("aria-hidden"),inert:a.inert}),a.setAttribute("aria-hidden","true"),a.inert=!0)})}let he=Symbol("StackContext");var G=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(G||{});function tt(){return X(he,()=>{})}function lt({type:e,enabled:t,element:l,onUpdate:n}){let a=tt();function o(...i){n==null||n(...i),a(...i)}A(()=>{Y(t,(i,u)=>{i?o(0,e,l):u===!0&&o(1,e,l)},{immediate:!0,flush:"sync"})}),P(()=>{t.value&&o(1,e,l)}),ve(he,o)}var at=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(at||{});let J=Symbol("DialogContext");function Z(e){let t=X(J,null);if(t===null){let l=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,Z),l}return t}let x="DC8F892D-2EBD-447C-A4C8-A03058436FF4",it=V({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:x},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:l,slots:n,expose:a}){var o,i;let u=(o=e.id)!=null?o:`headlessui-dialog-${K()}`,r=h(!1);A(()=>{r.value=!0});let c=!1,m=d(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(c||(c=!0,console.warn(`Invalid role [${m}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),b=h(0),E=We(),p=d(()=>e.open===x&&E!==null?(E.value&W.Open)===W.Open:e.open),v=h(null),g=d(()=>de(v));if(a({el:v,$el:v}),!(e.open!==x||E!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof p.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${p.value===x?void 0:e.open}`);let y=d(()=>r.value&&p.value?0:1),R=d(()=>y.value===0),O=d(()=>b.value>1),ee=X(J,null)!==null,[we,Ee]=Re(),{resolveContainers:q,mainTreeNodeRef:te,MainTreeNode:be}=ke({portals:we,defaultContainers:[d(()=>{var s;return(s=k.panelRef.value)!=null?s:v.value})]}),ye=d(()=>O.value?"parent":"leaf"),le=d(()=>E!==null?(E.value&W.Closing)===W.Closing:!1),Te=d(()=>ee||le.value?!1:R.value),$e=d(()=>{var s,f,T;return(T=Array.from((f=(s=g.value)==null?void 0:s.querySelectorAll("body > *"))!=null?f:[]).find($=>$.id==="headlessui-portal-root"?!1:$.contains(w(te))&&$ instanceof HTMLElement))!=null?T:null});ie($e,Te);let Se=d(()=>O.value?!0:R.value),Fe=d(()=>{var s,f,T;return(T=Array.from((f=(s=g.value)==null?void 0:s.querySelectorAll("[data-headlessui-portal]"))!=null?f:[]).find($=>$.contains(w(te))&&$ instanceof HTMLElement))!=null?T:null});ie(Fe,Se),lt({type:"Dialog",enabled:d(()=>y.value===0),element:v,onUpdate:(s,f)=>{if(f==="Dialog")return I(s,{[G.Add]:()=>b.value+=1,[G.Remove]:()=>b.value-=1})}});let Le=Ne({name:"DialogDescription",slot:d(()=>({open:p.value}))}),M=h(null),k={titleId:M,panelRef:h(null),dialogState:y,setTitleId(s){M.value!==s&&(M.value=s)},close(){t("close",!1)}};ve(J,k);let De=d(()=>!(!R.value||O.value));xe(q,(s,f)=>{s.preventDefault(),k.close(),Ve(()=>f==null?void 0:f.focus())},De);let Ae=d(()=>!(O.value||y.value!==0));se((i=g.value)==null?void 0:i.defaultView,"keydown",s=>{Ae.value&&(s.defaultPrevented||s.key===je.Escape&&(s.preventDefault(),s.stopPropagation(),k.close()))});let Oe=d(()=>!(le.value||y.value!==0||ee));return et(g,Oe,s=>{var f;return{containers:[...(f=s.containers)!=null?f:[],q]}}),Q(s=>{if(y.value!==0)return;let f=w(v);if(!f)return;let T=new ResizeObserver($=>{for(let z of $){let H=z.target.getBoundingClientRect();H.x===0&&H.y===0&&H.width===0&&H.height===0&&k.close()}});T.observe(f),s(()=>T.disconnect())}),()=>{let{open:s,initialFocus:f,...T}=e,$={...l,ref:v,id:u,role:m.value,"aria-modal":y.value===0?!0:void 0,"aria-labelledby":M.value,"aria-describedby":Le.value},z={open:y.value===0};return S(ae,{force:!0},()=>[S(Ce,()=>S(Me,{target:v.value},()=>S(ae,{force:!1},()=>S(N,{initialFocus:f,containers:q,features:R.value?I(ye.value,{parent:N.features.RestoreFocus,leaf:N.features.All&~N.features.FocusLock}):N.features.None},()=>S(Ee,{},()=>U({ourProps:$,theirProps:{...T,...l},slot:z,attrs:l,slots:n,visible:y.value===0,features:re.RenderStrategy|re.Static,name:"Dialog"})))))),S(be)])}}}),st=V({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:l,expose:n}){var a;let o=(a=e.id)!=null?a:`headlessui-dialog-panel-${K()}`,i=Z("DialogPanel");n({el:i.panelRef,$el:i.panelRef});function u(r){r.stopPropagation()}return()=>{let{...r}=e,c={id:o,ref:i.panelRef,onClick:u};return U({ourProps:c,theirProps:r,slot:{open:i.dialogState.value===0},attrs:t,slots:l,name:"DialogPanel"})}}}),dt=V({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:null}},setup(e,{attrs:t,slots:l}){var n;let a=(n=e.id)!=null?n:`headlessui-dialog-title-${K()}`,o=Z("DialogTitle");return A(()=>{o.setTitleId(a),P(()=>o.setTitleId(null))}),()=>{let{...i}=e;return U({ourProps:{id:a},theirProps:i,slot:{open:o.dialogState.value===0},attrs:t,slots:l,name:"DialogTitle"})}}});export{st as G,dt as V,it as Y};