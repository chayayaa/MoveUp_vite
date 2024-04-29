import{f as m,u as P,r as S,o as l,c as n,b as t,a as u,w as x,e as k,y as L,z as N,A as j,g as B,s as F,F as g,i as U,x as D,m as i,v as d,B as T,t as h}from"./index-DM-pJ6u8.js";import{S as f}from"./sweetalert2.all-CSWagdpp.js";import{_ as z,i as E,j as O,k as R,u as q,l as G}from"./_plugin-vue_export-helper-DuOzn-xM.js";import{F as H}from"./FooterComponent-CM06e-i4.js";import{u as J,_ as K}from"./Pagination-C7NZQ07e.js";const C=p=>(N("data-v-02349226"),p=p(),j(),p),Q={class:"navbar navbar-expand-lg navbar-dark position-absolute top-0 start-50 translate-middle-x container",style:{width:"100%"}},W={class:"container-fluid mx-5 navbar-brand"},X=C(()=>t("h2",null,"後台管理頁面",-1)),Y=C(()=>t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1)),Z={class:"collapse navbar-collapse justify-content-lg-end",id:"navbarSupportedContent",style:{"margin-right":"auto"}},tt={class:"navbar-nav mb-2 mb-lg-0"},et={class:"nav-item"},st={class:"nav-item"},ot={__name:"AdminNavComponent",setup(p){m(!1);const w=P();function b(){L.defaults.headers.common.Authorization="",w.push("/login")}return(v,r)=>{const e=S("router-link");return l(),n("nav",Q,[t("div",W,[u(e,{to:"/",class:"navbar-brand fs-1 fw-bold demo text-white",id:"fp"},{default:x(()=>[k("動起來~ ")]),_:1}),X,Y,t("div",Z,[t("ul",tt,[t("li",et,[u(e,{to:"/",class:"nav-link text-color-1","aria-current":"page"},{default:x(()=>[k("首頁")]),_:1})]),t("li",st,[u(e,{to:"/adminProducts",class:"nav-link"},{default:x(()=>[k("課程管理")]),_:1})]),t("li",null,[t("button",{type:"button",class:"btn btn-outline-primary",onClick:b},"登出")])])])])])}}},at=z(ot,[["__scopeId","data-v-02349226"]]),lt={class:"mt-5 pt-5 about"},nt={class:"container main-content pt-5 px-5"},it={class:"text-end"},dt={class:"table mt-4 text-center"},rt=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"課程名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100"}," 是否啟用 "),t("th",{width:"120"})])],-1),ct={key:0,class:"text-success fw-bolder"},ut={key:1},pt={class:"btn-group"},_t=["onClick"],mt=["onClick"],bt={class:"modal fade",id:"productModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},vt={class:"modal-dialog modal-xl"},gt={class:"modal-content"},ht={class:"modal-header bg-dark text-white"},ft={class:"modal-title",id:"exampleModalLabel"},yt={key:0},xt={key:1},kt=t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),wt={class:"modal-body mx-3"},Ut={class:"row"},Pt={class:"col-sm-4"},Ct={class:"mb-3"},$t=t("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),Vt=["src"],At=t("h3",{class:"mb-3"},"多圖新增",-1),It={key:0},Mt=["onUpdate:modelValue"],St=["src"],Lt={key:0},Nt={key:1},jt={key:1},Bt={class:"col-sm-8"},Ft={class:"form-group"},Dt=t("label",{for:"title"},"標題",-1),Tt={class:"row"},zt={class:"form-group col-md-6"},Et=t("label",{for:"category"},"分類",-1),Ot={class:"form-group col-md-6"},Rt=t("label",{for:"price"},"單位",-1),qt={class:"row"},Gt={class:"form-group col-md-6"},Ht=t("label",{for:"origin_price"},"原價",-1),Jt={class:"form-group col-md-6"},Kt=t("label",{for:"price"},"售價",-1),Qt=t("hr",null,null,-1),Wt={class:"form-group"},Xt=t("label",{for:"description"},"課程描述",-1),Yt={class:"form-group"},Zt=t("label",{for:"content"},"說明內容",-1),te={class:"mb-3"},ee={class:"form-check"},se=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),oe={class:"modal-footer d-flex justify-content-center mx-3"},ae=t("button",{type:"button",class:"btn btn-outline-secondary btn-lg","data-bs-dismiss":"modal"},"取消",-1),ce={__name:"Products",setup(p,{emit:w}){m({loadingproduct:""}),m(!1);const b=P(),v=m([]),r=J(),e=m({imageUrl:[]});B(async()=>{await I(),await _()});async function _(){try{const a=await E();v.value=Object.values(a.data.products);const s=Math.ceil(v.value.length/r.itemsPerPage);r.totalPages=s,r.setCurrentPage(1)}catch(a){console.log(a)}}const $=F(()=>{const a=(r.currentPage-1)*r.itemsPerPage,s=a+r.itemsPerPage;return v.value.slice(a,s)});async function y(a,s){a==="new"?e.value={imageUrl:[]}:a==="edit"?(this.isLoading=!0,e.value={...s}):a==="delete"&&(this.isLoading=!0,await R(s.id),await _())}async function V(a){this.isLoading=!0;try{a.id?(await q(a)).data.success?f.fire({title:"成功!",text:"課程編輯成功",icon:"success"}).then(async o=>{o.isConfirmed&&await _()}):f.fire({title:"失敗!",text:"課程編輯失敗",icon:"error"}):(await G(a)).data.success?f.fire({title:"成功!",text:"課程新增成功",icon:"success"}).then(async o=>{o.isConfirmed&&await _()}):f.fire({title:"失敗!",text:"課程新增失敗",icon:"error"})}catch(s){console.log(s)}}function A(){e.value.imagesUrl=[],e.value.imagesUrl.push("")}async function I(){try{(await O()).data.success||b.push("/login")}catch{b.push("/login")}}return(a,s)=>(l(),n(g,null,[u(at),t("div",lt,[t("div",nt,[t("div",it,[t("button",{type:"button",class:"btn btn-success",onClick:s[0]||(s[0]=o=>y("new")),"data-bs-toggle":"modal","data-bs-target":"#productModal"}," 建立新的課程 ")]),t("table",dt,[rt,t("tbody",null,[(l(!0),n(g,null,U($.value,o=>(l(),n("tr",{key:o.id},[t("td",null,h(o.category),1),t("td",null,h(o.title),1),t("td",null,h(o.origin_price),1),t("td",null,h(o.price),1),t("td",null,[o.is_enabled?(l(),n("span",ct,"啟用")):(l(),n("span",ut,"未啟用"))]),t("td",null,[t("div",pt,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm","data-bs-toggle":"modal","data-bs-target":"#productModal",onClick:c=>y("edit",o)}," 編輯 ",8,_t),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:c=>y("delete",o)}," 刪除 ",8,mt)])])]))),128))])]),u(K,{pages:D(r),"get-products":_},null,8,["pages"])]),t("div",bt,[t("div",vt,[t("div",gt,[t("div",ht,[t("h5",ft,[e.value.id?(l(),n("span",yt,"編輯課程 :")):(l(),n("span",xt,"新增課程"))]),kt]),t("div",wt,[t("div",Ut,[t("div",Pt,[t("div",Ct,[$t,i(t("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>e.value.imageUrl=o),type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結"},null,512),[[d,e.value.imageUrl]]),t("img",{class:"img-fluid",src:e.value.imageUrl},null,8,Vt)]),At,Array.isArray(e.value.imagesUrl)?(l(),n("div",It,[(l(!0),n(g,null,U(e.value.imagesUrl,(o,c)=>(l(),n(g,{key:c},[i(t("input",{"onUpdate:modelValue":M=>e.value.imagesUrl[c]=M,type:"text",class:"form-control"},null,8,Mt),[[d,e.value.imagesUrl[c]]]),t("img",{src:e.value.imagesUrl[c],alt:"",class:"img-fluid mb-2 mt-2"},null,8,St)],64))),128)),!e.value.imagesUrl.length||e.value.imagesUrl[e.value.imagesUrl.length-1]?(l(),n("div",Lt,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:s[2]||(s[2]=o=>e.value.imagesUrl.push(""))}," 新增圖片 ")])):(l(),n("div",Nt,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:s[3]||(s[3]=o=>e.value.imagesUrl.pop())}," 刪除圖片 ")]))])):(l(),n("div",jt,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:A}," 新增圖片 ")]))]),t("div",Bt,[t("div",Ft,[Dt,i(t("input",{id:"title","onUpdate:modelValue":s[4]||(s[4]=o=>e.value.title=o),type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[d,e.value.title]])]),t("div",Tt,[t("div",zt,[Et,i(t("input",{id:"category","onUpdate:modelValue":s[5]||(s[5]=o=>e.value.category=o),type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[d,e.value.category]])]),t("div",Ot,[Rt,i(t("input",{id:"unit","onUpdate:modelValue":s[6]||(s[6]=o=>e.value.unit=o),type:"unit",class:"form-control",placeholder:"請輸入單位"},null,512),[[d,e.value.unit]])])]),t("div",qt,[t("div",Gt,[Ht,i(t("input",{id:"origin_price","onUpdate:modelValue":s[7]||(s[7]=o=>e.value.origin_price=o),type:"number",class:"form-control",placeholder:"請輸入原價"},null,512),[[d,e.value.origin_price]])]),t("div",Jt,[Kt,i(t("input",{id:"price","onUpdate:modelValue":s[8]||(s[8]=o=>e.value.price=o),type:"number",class:"form-control",placeholder:"請輸入售價"},null,512),[[d,e.value.price]])])]),Qt,t("div",Wt,[Xt,i(t("textarea",{id:"description","onUpdate:modelValue":s[9]||(s[9]=o=>e.value.description=o),type:"text",class:"form-control",placeholder:"請輸入課程描述"},`\r
        `,512),[[d,e.value.description]])]),t("div",Yt,[Zt,i(t("textarea",{id:"description","onUpdate:modelValue":s[10]||(s[10]=o=>e.value.content=o),type:"text",class:"form-control",placeholder:"請輸入說明內容"},`\r
        `,512),[[d,e.value.content]])]),t("div",te,[t("div",ee,[i(t("input",{id:"is_enabled","onUpdate:modelValue":s[11]||(s[11]=o=>e.value.is_enabled=o),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[T,e.value.is_enabled]]),se])])])])]),t("div",oe,[t("button",{type:"button",class:"btn btn-success btn-lg",onClick:s[12]||(s[12]=o=>V(e.value)),"data-bs-dismiss":"modal"},"確認"),ae])])])])]),u(H)],64))}};export{ce as default};