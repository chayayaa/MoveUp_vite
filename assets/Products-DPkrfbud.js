import{b as M}from"./_plugin-vue_export-helper-DuOzn-xM.js";import{N as B}from"./NavComponent-B4g5ixYk.js";import{F}from"./FooterComponent-CM06e-i4.js";import{u as N,_ as $}from"./Pagination-C7NZQ07e.js";import"./sweetalert2.all-CSWagdpp.js";import{f as u,g as q,s as h,c,b as t,a as l,F as _,i as b,x as D,d as I,r as x,o as r,n as V,t as n,w as y,e as L}from"./index-DM-pJ6u8.js";const S=I('<div class="banner" style="background-image:url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1280&amp;q=720);"><div class="ps-5 ms-3"></div><div class="ps-5 no-gutters move-right d-none d-lg-block"><figure class="text-end"><blockquote class="blockquote"><label class="fw-bold text-white fs-1"> Move </label><label class="fw-bold text-color-1 fs-1"> Up </label></blockquote><figcaption class="blockquote-footer"><cite title="Source Title" class="text-white"> 動起來，享受運動 ! </cite></figcaption></figure><input class="btn btn-secondary text-end" type="button" value="預約免費體驗-&gt;"></div></div>',1),j={class:"container pt-5 px-5"},A={class:"list-unstyled prod-filter container"},H=["onClick"],z={class:"row"},G={class:"card mb-4 shadow-sm bg-dark border"},T=["src"],U={class:"card-category"},E={class:"card-body text-center"},W={class:"card-title d-flex justify-content-center align-items-center text-primary"},Y={class:"text-white fw-bold"},J={class:"card-text mb-4"},K={class:"fs-4 fw-bold",style:{color:"#FFD700"}},O={class:"text-light ms-2"},Q={class:"btn-group d-flex justify-content-center"},lt={__name:"Products",setup(R){const i=u([]),o=N(),d=u("所有"),w=u(["所有","瑜珈","有氧","飲食","器材"]),p=u(!1);q(()=>{f()});async function f(){p.value=!0;try{const s=await M();i.value=s.data.products;const a=Math.ceil(i.value.length/o.itemsPerPage);o.totalPages=a,p.value=!1}catch(s){console.log(s)}}const P=h(()=>{const s=(o.currentPage-1)*o.itemsPerPage,a=s+o.itemsPerPage;return m.value.slice(s,a)}),m=h(()=>d.value==="所有"?i.value:i.value.filter(s=>s.category===d.value));function k(s){d.value=s;const a=m.value,g=Math.ceil(a.length/o.itemsPerPage);o.totalPages=g,o.setCurrentPage(1)}return(s,a)=>{const g=x("Loading"),v=x("router-link");return r(),c(_,null,[t("div",null,[l(g,{active:p.value},null,8,["active"])]),l(B),S,t("div",null,[t("div",j,[t("ul",A,[(r(!0),c(_,null,b(w.value,(e,C)=>(r(),c("li",{key:C,class:"prod-filter__list text-white"},[t("a",{class:V(["btn rounded-pill list-group-item list-group-item-action btn-lg px-2 py-2",{active:d.value===e}]),id:"list-home-list",role:"tab","aria-controls":"list-home",onClick:X=>k(e)},n(e),11,H)]))),128))]),t("div",z,[(r(!0),c(_,null,b(P.value,e=>(r(),c("div",{class:"col-md-4 text-white",key:e.id},[l(v,{to:`/product/${e.id}`,class:"text-decoration-none"},{default:y(()=>[t("div",G,[t("img",{src:e.imageUrl,class:"card-img-top",style:{height:"200px"},alt:"主圖"},null,8,T),t("div",U,n(e.category),1),t("div",E,[t("div",W,[t("h3",Y,n(e.title),1)]),t("p",J,[t("span",K,"$"+n(e.price),1),t("del",O,"$ "+n(e.origin_price)+" 元 ",1)]),t("div",Q,[l(v,{to:`/product/${e.id}`,class:"btn py-2 px-5 z-20 text-white fw-bold",style:{"background-color":"#00D27A"}},{default:y(()=>[L("查看更多")]),_:2},1032,["to"])])])])]),_:2},1032,["to"])]))),128)),l($,{pages:D(o),"get-products":f},null,8,["pages"])])])]),l(F)],64)}}};export{lt as default};
