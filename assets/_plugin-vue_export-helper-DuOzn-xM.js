import{y as n}from"./index-DM-pJ6u8.js";const a="https://vue3-course-api.hexschool.io/v2",o="chaya-apitest";function i(){const t=`${a}/api/${o}/products`;return n.get(t)}function d(t){const r=`${a}/api/${o}/product/${t}`;return n.get(r)}function p(){const t=`${a}/api/${o}/cart`;return n.get(t)}function $(t){const r=`${a}/api/${o}/cart/${t}`;return n.delete(r)}function l(t){const r=`${a}/api/${o}/cart`;return n.post(r,{data:t})}function f(t,r){const u=`${a}/api/${o}/cart/${t}`;return n.put(u,{data:r})}function P(t){const r=`${a}/api/${o}/order`;return n.post(r,{data:t})}function A(t){const r=`${a}/api/${o}/order/${t}`;return n.get(r)}function m(t){const r=`${a}/admin/signin`;return n.post(r,t)}function g(t){const r=`${a}/api/${o}/admin/product/${t.id}`;return n.put(r,{data:t})}function h(t){const r=`${a}/api/${o}/admin/product`;return n.post(r,{data:t})}function I(){const t=`${a}/api/${o}/admin/products/all`;return n.get(t)}function k(t){const r=`${a}/api/${o}/admin/product/${t}`;return n.delete(r)}function _(){const t=n.defaults.headers.common.Authorization.split(" ")[1];n.defaults.headers.common.Authorization=t;const r=`${a}/api/user/check`;return n.post(r)}const v=(t,r)=>{const u=t.__vccOpts||t;for(const[e,c]of r)u[e]=c;return u};export{v as _,d as a,i as b,l as c,$ as d,f as e,P as f,p as g,A as h,I as i,_ as j,k,h as l,m,g as u};
