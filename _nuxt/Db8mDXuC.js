import O from"./srjAdVVy.js";import{_ as q}from"./DldRNFL2.js";import{_ as A}from"./BPUoiS4N.js";import{H as C,A as l,v as D,c as o,e as i,f as r,h as w,t as k,B as p,F as d,C as m,D as f}from"./YKJGr53e.js";import{u}from"./CTAIbY_z.js";import{q as h}from"./CHZsaEkH.js";import"./DxjlTc0-.js";import"./BQkc-AXV.js";import"./C3Kc88JK.js";import"./BgjWWMr1.js";import"./BHB5aYOm.js";import"./Di7j-vHa.js";import"./DqSA5oGD.js";import"./C-gIM5Qq.js";import"./B3pqwgWn.js";import"./CNb5zuOU.js";const N={class:"flex flex-col gap-12 mt-12 w-full max-w-app mb-24"},R={class:"flex flex-col items-center"},S={class:"font-bold text-5xl"},V=r("h2",{class:"font-bold text-2xl"},"Audio gear",-1),F={class:"grid grid-cols-5 gap-2"},H=r("h2",{class:"font-bold text-2xl"},"Reviews",-1),L={class:"mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-app lg:grid-cols-4"},X={class:"relative"},et={__name:"[username]",async setup(z){let t,a;const x=C(),{data:s}=([t,a]=l(()=>x.from("profiles").select("*").eq("username",D().params.username).single()),t=await t,a(),t),{data:g}=([t,a]=l(async()=>u(async()=>{const{data:e}=await x.from("reviews").select("*, profiles(username)").eq("profile_id",s.id).order("created_at");return e},"$LWncVNobay")),t=await t,a(),t),{data:y}=([t,a]=l(async()=>u(async()=>{if(s.iems&&s.iems.length){const e=[];for(const c of s.iems)e.push(await h(c).findOne());return e}},"$w5bOblpuX5")),t=await t,a(),t),{data:v}=([t,a]=l(async()=>u(async()=>{if(s.daps&&s.daps.length){const e=[];for(const c of s.daps)e.push(await h(c).findOne());return e}},"$9OpXhuYSz2")),t=await t,a(),t),{data:b}=([t,a]=l(async()=>u(async()=>{if(s.dacs&&s.dacs.length){const e=[];for(const c of s.dacs)e.push(await h(c).findOne());return e}},"$DZ2MrGH9pv")),t=await t,a(),t);return(e,c)=>{const B=O,_=q,$=A;return o(),i("div",N,[r("div",R,[r("div",null,[w(B,{name:"ph:user-thin",class:"w-24 h-24 mb-8"})]),r("h1",S,k(p(s).username),1)]),V,r("ul",F,[(o(!0),i(d,null,m(p(y),n=>(o(),f(_,{product:n},null,8,["product"]))),256)),(o(!0),i(d,null,m(p(v),n=>(o(),f(_,{product:n},null,8,["product"]))),256)),(o(!0),i(d,null,m(p(b),n=>(o(),f(_,{product:n},null,8,["product"]))),256))]),H,r("div",L,[(o(!0),i(d,null,m(p(g),n=>(o(),i("div",X,[w($,{review:n},null,8,["review"])]))),256))])])}}};export{et as default};
