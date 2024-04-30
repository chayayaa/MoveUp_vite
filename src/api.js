import axios from 'axios';

const apiUrl = 'https://vue3-course-api.hexschool.io/v2';
const apiPath = 'chaya-apitest';
export { apiUrl, apiPath };


// 取得課程
export function getProductsAPI() {
  const url = `${apiUrl}/api/${apiPath}/products/all`;
  return axios.get(url);
};

// 取得單一課程
export function getProductAPI(id) {
  const url = `${apiUrl}/api/${apiPath}/product/${id}`;
  return axios.get(url);
};

//更新課程
export function editProductAPI(id, productData) {
  const url = `${apiUrl}/api/${apiPath}/cart/${id}`;
  return axios.put(url, { data: productData });
};

//新增課程
export function addProductAPI(productData) {
  const url = `${apiUrl}/api/${apiPath}/product`;
  return axios.post(url, { data: productData });
};

//刪除課程
export function deleteProductAPI(id) {
  const url = `${apiUrl}/api/${apiPath}/product/${id}`;
  return axios.delete(url);
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
  return axios.get(url);
};

//後台登入
export function login(userData) {
  const url = `${apiUrl}/admin/signin`;
  return axios.post(url, userData);
};

//後台更新課程
export function updateAdminProductAPI(productData) {
  const url = `${apiUrl}/api/${apiPath}/admin/product/${productData.id}`;
  return axios.put(url, { data: productData });
};

//後台新增課程
export function createAdminProductAPI(productData) {
  const url = `${apiUrl}/api/${apiPath}/admin/product`;
  return axios.post(url, { data: productData });
};


//後台取課程
export function getAdminProductsAPI() {
  const url = `${apiUrl}/api/${apiPath}/admin/products/all`;
  return axios.get(url);
};

//後台刪除課程
export function delAdminProductsAPI(id) {
  const url = `${apiUrl}/api/${apiPath}/admin/product/${id}`;
  return axios.delete(url);
};

//檢查登入狀態
export function checkLogin() {
  const token = axios.defaults.headers.common['Authorization'].split(' ')[1];
  axios.defaults.headers.common['Authorization']= token;
  const url = `${apiUrl}/api/user/check`;
  return axios.post(url);
};