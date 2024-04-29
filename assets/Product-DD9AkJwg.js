import{f as n,u as f,k as w,g as k,c as i,a as u,b as t,t as r,n as I,l as N,v as C,m as p,F as g,i as P,o as l,w as $,e as q,p as F,R as D}from"./index-CRSfcWBD.js";import{S as h}from"./sweetalert2.all-CUpMDFVy.js";import{a as V,b as B,c as S}from"./api-wHJjAYCR.js";import{N as U}from"./NavComponent-DgH0bBaw.js";import{F as A}from"./FooterComponent-Bjy2HOxr.js";const R={class:"mt-5 pt-5 about"},T={class:"container main-content pt-5 px-5"},j={key:0,class:"row align-products-center mb-4"},z={class:"col-lg-5 text-white"},E={class:"rounded-0",style:{height:"400px","background-size":"cover","background-position":"center"}},L=["src"],M={class:"col-lg-7 mt-3 text-white"},O={class:"font-weight-bold h1 mb-5"},G=t("p",{class:"mb-0 text-muted text-right"},[t("del",null,"NT$ 180")],-1),H={class:"card-text mb-4"},J={class:"fs-1 fw-bold",style:{color:"#FFD700"}},K={class:"text-light ms-2"},Q={class:"row"},W={class:"d-flex col-12"},X={class:"flex items-center justify-center pt-3 px-3"},Y=["disabled"],Z={class:"col-4"},tt={class:"btn-group d-flex justify-content-center my-3 mr-4"},st=t("hr",null,null,-1),et={class:"mx-5"},ot=t("h2",{class:"font-weight-bold mt-4 text-white text-center"},"推薦商品",-1),at={key:0,class:"row"},ct={class:"card mb-4 position-relative bg-dark border mx-3"},rt=["src"],it={class:"card-body"},lt={class:"text-white fw-bold"},nt={class:"card-text mb-4"},dt={class:"fs-1 fw-bold",style:{color:"#FFD700"}},ut={class:"text-light ms-2"},yt={__name:"Product",setup(_t){n({loadingproduct:""}),n(!1);const m=f(),c=n(1),d=n([]),o=w({Id:"",categoryName:"",price:0,imageUrl:""});k(async()=>{o.Id=m.path.split("/")[2],await v(o.Id),await b()});async function v(a){try{const s=await V(a);o.value=s.data.product}catch(s){console.log(s)}}async function b(){try{const a=await B();d.value=a.data.products.slice(0,3)}catch(a){console.log(a)}}async function y(a){const s=document.getElementById("quantityInput").value;var e=parseInt(s,10),x=isNaN(e)?0:e;try{(await S({product_id:a,qty:x})).data.success&&h.fire({title:"成功!",text:"已加入購物車",icon:"success"})}catch(_){console.log(_),h.fire({title:"失敗!",text:"請聯繫客服",allowOutsideClick:!1,icon:"error"})}}return(a,s)=>(l(),i(g,null,[u(U),t("div",R,[t("div",T,[o.value?(l(),i("div",j,[t("div",z,[t("div",E,[t("img",{src:o.value.imageUrl,class:"card-img-top"},null,8,L)])]),t("div",M,[t("h2",O,r(o.value.title),1),t("p",null,r(o.value.description),1),G,t("p",H,[t("span",J,"$"+r(o.value.price),1),t("del",K,"$ "+r(o.value.origin_price)+" 元 ",1)]),t("div",Q,[t("div",W,[t("div",X,[t("button",{class:I(["border border-gray-500 px-2 py-2 bg-gray-500",{"bg-gray-100":c.value===1,"bg-gray-200":c.value!==1}]),disabled:c.value===1,onClick:s[0]||(s[0]=e=>c.value--)}," - ",10,Y),N(t("input",{type:"number",class:"quantity border border-gray-500 text-center w-16 py-2 price",min:"1","onUpdate:modelValue":s[1]||(s[1]=e=>c.value=e),id:"quantityInput"},null,512),[[C,c.value]]),t("button",{class:"border border-gray-500 px-2 py-2 bg-gray-200",onClick:s[2]||(s[2]=e=>c.value++)}," + ")]),t("div",Z,[t("div",tt,[t("button",{class:"btn btn-primary text-white btn-block",onClick:s[3]||(s[3]=e=>y(o.value.id))},"加入購物車")])])])])])])):p("",!0),st,t("div",et,[ot,d.value.length>0?(l(),i("div",at,[(l(!0),i(g,null,P(d.value,e=>(l(),i("div",{class:"col-md-4",key:e.id},[t("div",ct,[t("img",{src:e.imageUrl,class:"card-img-top",style:{height:"200px"}},null,8,rt),t("div",it,[t("h3",lt,r(e.title),1),t("p",nt,[t("span",dt,"$"+r(e.price),1),t("del",ut,"$ "+r(e.origin_price)+" 元 ",1)]),u(F(D),{to:`/Product/${e.id}`,class:"btn btn-primary text-white mt-2 btn-block"},{default:$(()=>[q("查看更多")]),_:2},1032,["to"])])])]))),128))])):p("",!0)])])]),u(A)],64))}};export{yt as default};
