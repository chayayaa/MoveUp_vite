import axios from 'axios';

const apiUrl = 'https://vue3-course-api.hexschool.io/v2';
const apiPath = 'chaya-apitest';
export { apiUrl, apiPath };


// 取得產品
export function getProductsAPI() {
  const url = `${apiUrl}/api/${apiPath}/products`;
  return axios.get(url);
};
// 產品介紹
export function getProductAPI(id) {
  const url = `${apiUrl}/api/${apiPath}/product/${id}`;
  return axios.get(url);
};
//取購物車
export function getCartAPI() {
  const url = `${apiUrl}/api/${apiPath}/cart`;
  return axios.get(url);
};

//刪除購物車
export function deleteCartAPI(id) {
  const url = `${apiUrl}/api/${apiPath}/cart/${id}`;
  return axios.delete(url);
};

//新增購物車
export function addCartAPI(orderData) {
  const url = `${apiUrl}/api/${apiPath}/cart`;
  return axios.post(url, { data: orderData });
};
//更新購物車
export function editCartAPI(cid, orderData) {
  console.log(cid, orderData.product_id)
  const url = `${apiUrl}/api/${apiPath}/cart/${cid}`;
  return axios.put(url, { data: orderData });
};

//新增訂單
export function createOrderAPI(orderData) {
  const url = `${apiUrl}/api/${apiPath}/order`;
  return axios.post(url, { data: orderData });
};
//取訂單
export function getOrderDataAPI(oid) {
  const url = `${apiUrl}/api/${apiPath}/order/${oid}`;
  console.log(url)
  return axios.get(url);
};