import{_ as B}from"./CCWLGi9l.js";import{_ as D}from"./BPUoiS4N.js";import{_ as V}from"./rFhTn0FA.js";import{H as A,A as S,r as x,c,e as d,h as t,f as e,F as z,C as M,w as a,k as m,B as s}from"./YKJGr53e.js";import{u as N}from"./s3-Ad5Vt.js";import{u as R}from"./CTAIbY_z.js";import{Y,G as $,V as j}from"./CdMcQILS.js";import{h as w,S as q}from"./5NyqR9yo.js";import"./C-gIM5Qq.js";import"./C3Kc88JK.js";import"./BgjWWMr1.js";import"./BHB5aYOm.js";import"./Di7j-vHa.js";import"./srjAdVVy.js";import"./DxjlTc0-.js";import"./BQkc-AXV.js";import"./B3pqwgWn.js";import"./Djmrkajt.js";import"./BboEKukF.js";import"./CBpMDLrE.js";const F={class:"flex flex-col items-center justify-center"},G=e("h1",{class:"text-3xl lg:text-6xl my-4 lg:mt-16 lg:mb-6"},[e("span",{class:"font-playfair"},"My "),e("span",{class:"font-bold"},"reviews")],-1),I={class:"mx-auto lg:mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-app lg:grid-cols-4"},E={class:"relative"},H={class:"absolute top-12 right-3 z-[1]"},L=e("div",{class:"fixed inset-0 bg-black/25"},null,-1),O={class:"fixed inset-0 overflow-y-auto"},T={class:"flex min-h-full items-center justify-center p-4 text-center"},U=e("div",{class:"mt-2"},[e("p",{class:"text-sm text-gray-500"}," Your review will be deleted permanently. Are you sure you want to do it? ")],-1),W={class:"mt-4 text-right"},xe={__name:"my",async setup(J){let l,p;const y=N(),u=A(),{data:i}=([l,p]=S(async()=>R("reviews",async()=>{const{data:o}=await u.from("reviews").select("id, model, brand, slug, cover, published, created_at, type, profiles (username)").eq("profile_id",y.value.id).order("created_at");return o})),l=await l,p(),l),r=x(),h=o=>{b(),r.value=o},g=async()=>{await u.from("reviews").delete().eq("id",r.value),i.value.splice(i.value.findIndex(o=>o.id===r.value),1),_()},n=x(!1);function _(){n.value=!1}function b(){n.value=!0}return(o,K)=>{const C=B,k=D,f=V;return c(),d("div",F,[G,t(C),e("div",I,[(c(!0),d(z,null,M(s(i),v=>(c(),d("div",E,[t(k,{review:v},null,8,["review"]),e("div",H,[t(f,{size:"small",color:"red",class:"absolute",onClick:P=>h(v.id)},{default:a(()=>[m("Delete")]),_:2},1032,["onClick"])])]))),256))]),t(s(q),{appear:"",show:s(n),as:"template"},{default:a(()=>[t(s(Y),{as:"div",onClose:_,class:"relative z-10"},{default:a(()=>[t(s(w),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[L]),_:1}),e("div",O,[e("div",T,[t(s(w),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[t(s($),{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:a(()=>[t(s(j),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:a(()=>[m(" Delete review? ")]),_:1}),U,e("div",W,[t(f,{color:"red",onClick:g},{default:a(()=>[m("Delete")]),_:1})])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}}};export{xe as default};
