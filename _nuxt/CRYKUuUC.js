import{q as re,N as se,E as ie,n as _,v as pe,d as C}from"./Djmrkajt.js";import{g as R,o,j as V,u as j,t as ve,i as M,w as ce,a as de,h as fe,A as K,I as A,f as U,b as W,P as G,d as N,l as be,N as Z,c as B,k as J}from"./BboEKukF.js";import{s as Pe}from"./BIqF7sE6.js";import{d as H,r as $,J as w,L as z,N as Q,M as F,F as q,o as ee,b as te,a5 as me,P as X}from"./YKJGr53e.js";var Se=(s=>(s[s.Open=0]="Open",s[s.Closed=1]="Closed",s))(Se||{});let le=Symbol("PopoverContext");function Y(s){let m=X(le,null);if(m===null){let g=new Error(`<${s} /> is missing a parent <${ye.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(g,Y),g}return m}let oe=Symbol("PopoverGroupContext");function ne(){return X(oe,null)}let ae=Symbol("PopoverPanelContext");function ge(){return X(ae,null)}let ye=H({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(s,{slots:m,attrs:g,expose:T}){var S;let d=$(null);T({el:d,$el:d});let l=$(1),t=$(null),h=$(null),y=$(null),b=$(null),f=w(()=>R(d)),i=w(()=>{var e,a;if(!o(t)||!o(b))return!1;for(let L of document.querySelectorAll("body > *"))if(Number(L==null?void 0:L.contains(o(t)))^Number(L==null?void 0:L.contains(o(b))))return!0;let n=V(),c=n.indexOf(o(t)),x=(c+n.length-1)%n.length,O=(c+1)%n.length,D=n[x],ue=n[O];return!((e=o(b))!=null&&e.contains(D))&&!((a=o(b))!=null&&a.contains(ue))}),u={popoverState:l,buttonId:$(null),panelId:$(null),panel:b,button:t,isPortalled:i,beforePanelSentinel:h,afterPanelSentinel:y,togglePopover(){l.value=j(l.value,{0:1,1:0})},closePopover(){l.value!==1&&(l.value=1)},close(e){u.closePopover();let a=e?e instanceof HTMLElement?e:e.value instanceof HTMLElement?o(e):o(u.button):o(u.button);a==null||a.focus()}};z(le,u),ve(w(()=>j(l.value,{0:M.Open,1:M.Closed})));let E={buttonId:u.buttonId,panelId:u.panelId,close(){u.closePopover()}},P=ne(),I=P==null?void 0:P.registerPopover,[k,p]=re(),v=se({mainTreeNodeRef:P==null?void 0:P.mainTreeNodeRef,portals:k,defaultContainers:[t,b]});function r(){var e,a,n,c;return(c=P==null?void 0:P.isFocusWithinPopoverGroup())!=null?c:((e=f.value)==null?void 0:e.activeElement)&&(((a=o(t))==null?void 0:a.contains(f.value.activeElement))||((n=o(b))==null?void 0:n.contains(f.value.activeElement)))}return Q(()=>I==null?void 0:I(E)),ie((S=f.value)==null?void 0:S.defaultView,"focus",e=>{var a,n;e.target!==window&&e.target instanceof HTMLElement&&l.value===0&&(r()||t&&b&&(v.contains(e.target)||(a=o(u.beforePanelSentinel))!=null&&a.contains(e.target)||(n=o(u.afterPanelSentinel))!=null&&n.contains(e.target)||u.closePopover()))},!0),ce(v.resolveContainers,(e,a)=>{var n;u.closePopover(),de(a,fe.Loose)||(e.preventDefault(),(n=o(t))==null||n.focus())},w(()=>l.value===0)),()=>{let e={open:l.value===0,close:u.close};return F(q,[F(p,{},()=>K({theirProps:{...s,...g},ourProps:{ref:d},slot:e,slots:m,attrs:g,name:"Popover"})),F(v.MainTreeNode)])}}}),Fe=H({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(s,{attrs:m,slots:g,expose:T}){var S;let d=(S=s.id)!=null?S:`headlessui-popover-button-${A()}`,l=Y("PopoverButton"),t=w(()=>R(l.button));T({el:l.button,$el:l.button}),ee(()=>{l.buttonId.value=d}),te(()=>{l.buttonId.value=null});let h=ne(),y=h==null?void 0:h.closeOthers,b=ge(),f=w(()=>b===null?!1:b.value===l.panelId.value),i=$(null),u=`headlessui-focus-sentinel-${A()}`;f.value||Q(()=>{l.button.value=o(i)});let E=Pe(w(()=>({as:s.as,type:m.type})),i);function P(e){var a,n,c,x,O;if(f.value){if(l.popoverState.value===1)return;switch(e.key){case B.Space:case B.Enter:e.preventDefault(),(n=(a=e.target).click)==null||n.call(a),l.closePopover(),(c=o(l.button))==null||c.focus();break}}else switch(e.key){case B.Space:case B.Enter:e.preventDefault(),e.stopPropagation(),l.popoverState.value===1&&(y==null||y(l.buttonId.value)),l.togglePopover();break;case B.Escape:if(l.popoverState.value!==0)return y==null?void 0:y(l.buttonId.value);if(!o(l.button)||(x=t.value)!=null&&x.activeElement&&!((O=o(l.button))!=null&&O.contains(t.value.activeElement)))return;e.preventDefault(),e.stopPropagation(),l.closePopover();break}}function I(e){f.value||e.key===B.Space&&e.preventDefault()}function k(e){var a,n;s.disabled||(f.value?(l.closePopover(),(a=o(l.button))==null||a.focus()):(e.preventDefault(),e.stopPropagation(),l.popoverState.value===1&&(y==null||y(l.buttonId.value)),l.togglePopover(),(n=o(l.button))==null||n.focus()))}function p(e){e.preventDefault(),e.stopPropagation()}let v=_();function r(){let e=o(l.panel);if(!e)return;function a(){j(v.value,{[C.Forwards]:()=>G(e,N.First),[C.Backwards]:()=>G(e,N.Last)})===J.Error&&G(V().filter(n=>n.dataset.headlessuiFocusGuard!=="true"),j(v.value,{[C.Forwards]:N.Next,[C.Backwards]:N.Previous}),{relativeTo:o(l.button)})}a()}return()=>{let e=l.popoverState.value===0,a={open:e},{...n}=s,c=f.value?{ref:i,type:E.value,onKeydown:P,onClick:k}:{ref:i,id:d,type:E.value,"aria-expanded":l.popoverState.value===0,"aria-controls":o(l.panel)?l.panelId.value:void 0,disabled:s.disabled?!0:void 0,onKeydown:P,onKeyup:I,onClick:k,onMousedown:p};return F(q,[K({ourProps:c,theirProps:{...m,...n},slot:a,attrs:m,slots:g,name:"PopoverButton"}),e&&!f.value&&l.isPortalled.value&&F(U,{id:u,features:W.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:r})])}}}),Ie=H({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(s,{attrs:m,slots:g,expose:T}){var S;let d=(S=s.id)!=null?S:`headlessui-popover-panel-${A()}`,{focus:l}=s,t=Y("PopoverPanel"),h=w(()=>R(t.panel)),y=`headlessui-focus-sentinel-before-${A()}`,b=`headlessui-focus-sentinel-after-${A()}`;T({el:t.panel,$el:t.panel}),ee(()=>{t.panelId.value=d}),te(()=>{t.panelId.value=null}),z(ae,t.panelId),Q(()=>{var p,v;if(!l||t.popoverState.value!==0||!t.panel)return;let r=(p=h.value)==null?void 0:p.activeElement;(v=o(t.panel))!=null&&v.contains(r)||G(o(t.panel),N.First)});let f=be(),i=w(()=>f!==null?(f.value&M.Open)===M.Open:t.popoverState.value===0);function u(p){var v,r;switch(p.key){case B.Escape:if(t.popoverState.value!==0||!o(t.panel)||h.value&&!((v=o(t.panel))!=null&&v.contains(h.value.activeElement)))return;p.preventDefault(),p.stopPropagation(),t.closePopover(),(r=o(t.button))==null||r.focus();break}}function E(p){var v,r,e,a,n;let c=p.relatedTarget;c&&o(t.panel)&&((v=o(t.panel))!=null&&v.contains(c)||(t.closePopover(),((e=(r=o(t.beforePanelSentinel))==null?void 0:r.contains)!=null&&e.call(r,c)||(n=(a=o(t.afterPanelSentinel))==null?void 0:a.contains)!=null&&n.call(a,c))&&c.focus({preventScroll:!0})))}let P=_();function I(){let p=o(t.panel);if(!p)return;function v(){j(P.value,{[C.Forwards]:()=>{var r;G(p,N.First)===J.Error&&((r=o(t.afterPanelSentinel))==null||r.focus())},[C.Backwards]:()=>{var r;(r=o(t.button))==null||r.focus({preventScroll:!0})}})}v()}function k(){let p=o(t.panel);if(!p)return;function v(){j(P.value,{[C.Forwards]:()=>{let r=o(t.button),e=o(t.panel);if(!r)return;let a=V(),n=a.indexOf(r),c=a.slice(0,n+1),x=[...a.slice(n+1),...c];for(let O of x.slice())if(O.dataset.headlessuiFocusGuard==="true"||e!=null&&e.contains(O)){let D=x.indexOf(O);D!==-1&&x.splice(D,1)}G(x,N.First,{sorted:!1})},[C.Backwards]:()=>{var r;G(p,N.Previous)===J.Error&&((r=o(t.button))==null||r.focus())}})}v()}return()=>{let p={open:t.popoverState.value===0,close:t.close},{focus:v,...r}=s,e={ref:t.panel,id:d,onKeydown:u,onFocusout:l&&t.popoverState.value===0?E:void 0,tabIndex:-1};return K({ourProps:e,theirProps:{...m,...r},attrs:m,slot:p,slots:{...g,default:(...a)=>{var n;return[F(q,[i.value&&t.isPortalled.value&&F(U,{id:y,ref:t.beforePanelSentinel,features:W.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:I}),(n=g.default)==null?void 0:n.call(g,...a),i.value&&t.isPortalled.value&&F(U,{id:b,ref:t.afterPanelSentinel,features:W.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:k})])]}},features:Z.RenderStrategy|Z.Static,visible:i.value,name:"PopoverPanel"})}}}),ke=H({name:"PopoverGroup",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(s,{attrs:m,slots:g,expose:T}){let S=$(null),d=me([]),l=w(()=>R(S)),t=pe();T({el:S,$el:S});function h(i){let u=d.value.indexOf(i);u!==-1&&d.value.splice(u,1)}function y(i){return d.value.push(i),()=>{h(i)}}function b(){var i;let u=l.value;if(!u)return!1;let E=u.activeElement;return(i=o(S))!=null&&i.contains(E)?!0:d.value.some(P=>{var I,k;return((I=u.getElementById(P.buttonId.value))==null?void 0:I.contains(E))||((k=u.getElementById(P.panelId.value))==null?void 0:k.contains(E))})}function f(i){for(let u of d.value)u.buttonId.value!==i&&u.close()}return z(oe,{registerPopover:y,unregisterPopover:h,isFocusWithinPopoverGroup:b,closeOthers:f,mainTreeNodeRef:t.mainTreeNodeRef}),()=>F(q,[K({ourProps:{ref:S},theirProps:{...s,...m},slot:{},attrs:m,slots:g,name:"PopoverGroup"}),F(t.MainTreeNode)])}});export{ke as A,Fe as G,Ie as j,ye as y};
