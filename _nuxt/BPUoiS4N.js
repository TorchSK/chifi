import{_}from"./C-gIM5Qq.js";import{_ as y}from"./C3Kc88JK.js";import{_ as b}from"./Di7j-vHa.js";import g from"./srjAdVVy.js";import{_ as p}from"./B3pqwgWn.js";import{c as t,e as i,B as f,v as x,h as s,w as c,k as o,t as n,g as m,f as a,D as w,n as k}from"./YKJGr53e.js";const j={class:"flex flex-col items-start justify-start"},z={key:0,class:"flex gap-2"},B={class:"relative w-full transition flex items-center"},R={key:1,class:"mt-2 flex justify-between w-full"},C={key:0,class:"rounded text-xs px-2 py-1 bg-red-400 text-white"},N={key:1,class:"rounded text-xs px-2 py-1 bg-green-600 text-white"},V={class:"w-full mt-2"},q={class:"group relative"},D={class:"flex w-full items-center gap-3"},S={class:"text-gray-500 dark:text-gray-200 flex items-center justify-center"},I={class:"text-gray-500 dark:text-gray-200 italic flex items-center justify-center"},L={key:0,class:"mt-6 mb-1 text-2xl font-bold leading-6 h-12 align-top"},U={key:1,class:"mt-5 line-clamp-5 text-sm leading-6 min-h-[96px]"},G={__name:"ReviewBox",props:{review:{type:Object,required:!0},size:{type:String,default:"normal"}},setup(e){return(l,E)=>{const d=_,u=y,r=b,v=g,h=p;return t(),i("article",j,[("useRoute"in l?l.useRoute:f(x))().name!="iems-brand-model"?(t(),i("div",z,[s(d,{class:"mb-2 capitalize",color:"orange"},{default:c(()=>[o("review")]),_:1}),s(d,{class:"mb-2",color:"blue"},{default:c(()=>[o(n(e.review.type.toUpperCase()),1)]),_:1})])):m("",!0),a("div",B,[e.review.cover?(t(),w(u,{key:0,src:e.review.cover,alt:"",class:"aspect-square w-full rounded-2xl bg-gray-100 object-cover",densities:"x1",format:"webp",width:"480",height:"480",fit:"contain"},null,8,["src"])):(t(),w(u,{key:1,src:"placeholder.webp",alt:"",class:"aspect-square w-full rounded-2xl bg-gray-100 object-cover",densities:"x1",format:"webp",width:"480",height:"480",fit:"contain"})),s(r,{to:e.review._path,class:"absolute inset-0"},null,8,["to"]),s(r,{to:"/reviews/"+e.review.profiles.username+"/"+e.review.brand+"/"+e.review.model,class:"absolute inset-0 flex"},null,8,["to"])]),("useRoute"in l?l.useRoute:f(x))().name=="reviews-my"?(t(),i("div",R,[e.review.published?(t(),i("div",N,"Published")):(t(),i("div",C,"Unpublished"))])):m("",!0),a("div",V,[a("div",q,[a("div",D,[a("div",{class:k(["flex flex-1 justify-between gap-4 mt-0",[e.size=="normal"?"text-sm":"text-xs"]])},[a("div",S,[s(v,{name:"ph:user-light",size:"16px",class:"mr-1"}),s(r,{to:"/users/"+e.review.profiles.username,class:"text font-semibold"},{default:c(()=>[o(n(e.review.profiles.username),1)]),_:1},8,["to"])]),a("div",I,[s(h,{class:"w-4 h-4 mr-1"}),o(" "+n(new Date(e.review.created_at).toLocaleString("en-us",{month:"short",day:"numeric",year:"numeric"})),1)])],2)]),e.size=="normal"?(t(),i("h3",L,[s(r,{to:"/reviews/"+e.review.profiles.username+"/"+e.review.brand+"/"+e.review.model,class:"text"},{default:c(()=>[o(n(e.review.product_title),1)]),_:1},8,["to"])])):m("",!0),e.size=="normal"?(t(),i("p",U,n(e.review.description),1)):m("",!0)])])])}}};export{G as _};