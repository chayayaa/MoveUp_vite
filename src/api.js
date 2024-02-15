import axios from 'axios';

const apiUrl = 'https://vue3-course-api.hexschool.io/v2';
const apiPath = 'chaya-apitest';
export { apiUrl, apiPath };


// 取得產品
export function getProductsAPI() {
    const url = `${apiUrl}/api/${apiPath}/products`;
    console.log(url);
    return axios.get(url);
  };
// 產品介紹
export function getProductAPI(id) {
  const url = `${apiUrl}/api/${apiPath}/product/${id}`;
  console.log(url);
  return axios.get(url);
};
//取購物車
export function getCartAPI() {
  const url = `${apiUrl}/api/${apiPath}/cart`;
  console.log(url);
  return axios.get(url);
};

//刪除購物車
export function deleteCartAPI(id) {
  const url = `${apiUrl}/api/${apiPath}/cart/${id}`;
  console.log(url);
  return axios.delete(url);
};

//新增購物車
export function addCartAPI(orderData) {
  const url = `${apiUrl}/api/${apiPath}/cart`;
  console.log(url);
  console.log({data:orderData})
  return axios.post(url,{data:orderData});
};