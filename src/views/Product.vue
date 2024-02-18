<script setup>
import { ref, reactive, onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import Swal from 'sweetalert2';

import * as api from '@/api.js';

import Nav from '../components/NavComponent.vue';

const loadingStatus = ref({ loadingproduct: '' });
const isLoading = ref(false);
const route = useRoute();
const products = ref([]);
const qty = '1';
const product = reactive({
  Id: '',
  categoryName: '',
  price: 0,
  imageUrl: '',
})

onMounted(async () => {
  product.Id = route.path.split('/')[2];
  console.log(product.Id)
  await getProduct(product.Id);
  await getCart();
  await getProducts();
  
});

async function getCart() {
  isLoading.value = true;
  try {
    const res = await api.getCartAPI();
    cart.value = res.data.data.carts;
    isLoading.value = false;
  }
  catch (err) {
    console.log(err);
  }
};

async function getProduct(id) {
  try {
    const res = await api.getProductAPI(id);
    product.value = res.data.product;
    console.log(product.value)

  }
  catch (err) {
    console.log(err);
  }
};

async function getProducts() {
  try {
    const res = await api.getProductsAPI();
    products.value = res.data.products.slice(0, 3);
  }
  catch (err) {
    console.log(err);
  }
};

async function modifyCartItem(id,qty) {
  console.log(id+'，'+qty)
  try {
    const orderData={
      product_id: id,
      qty: qty
    };
    const res = await api.addCartAPI(orderData);
    if (res.data.success) {
      Swal.fire({
        title: '成功!',
        text: '已加入購物車',
        icon: 'success'
      })
    }
  }
  catch (err) {
    console.log(err);
    Swal.fire({
      title: '失敗!',
      text: '請聯繫客服',
      allowOutsideClick: false,
      icon: 'error'
    })
  }
};
</script>

<template>
  <Nav />
  <div class="mt-5 pt-5 about">
    <div class="container main-content pt-5 px-5">
      <div class="row align-products-center mb-4" v-if="product.value">
        <div class="col-lg-5 text-white">
          <a href="#" class="link-green">首頁</a> / <a href="{{ product.value.category}}" class="link-green">{{
            product.value.category
          }}</a>
          <div class="rounded-0" style="height: 400px; background-size: cover; background-position: center;">
            <img :src="product.value.imageUrl" class="card-img-top ">
          </div>
        </div>
        <div class="col-lg-7 mt-3 text-white">
          <h2 class="font-weight-bold h1 mb-5">{{ product.value.title }}</h2>
          <p>{{ product.value.description }}</p>
          <p class="mb-0 text-muted text-right">
            <del>NT$ 180</del>
          </p>
          <p class="card-text mb-4"><span class="fs-1 fw-bold" style="color: #FFD700;">${{ product.value.price }}</span>
            <del class="text-light ms-2">$ {{ product.value.origin_price }} 元 </del>
          </p>
          <div class="row">
            <div class="d-flex col-8">
              <div class="input-group my-3 mr-2 col-3">
                <select class="form-select" v-model="qty" aria-label="Default select example">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div class="col-3">
                <div class="btn-group d-flex justify-content-center my-3 mr-4">
                  <button class="btn btn-primary text-white btn-block"
                    @click="modifyCartItem(product.value.id,qty)">加入購物車</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <h2 class="font-weight-bold mt-4 text-white">熱門商品</h2>
      <template v-if="products.length > 0">
        <div class="row">
          <div class="col-md-4" v-for="item in products" :key="item.id" >
            <div class="card mb-4 position-relative bg-dark border">
              <img :src="item.imageUrl" class="card-img-top " style="height: 200px;">
              <div class="card-body">
                <h3 class="text-white fw-bold">{{ item.title }}</h3>
                <p class="card-text mb-4"><span class="fs-1 fw-bold" style="color: #FFD700;">${{ item.price }}</span>
                  <del class="text-light ms-2">$ {{ item.origin_price }} 元 </del>
                </p>
                <router-link :to="`/Product/${item.id}`" class="btn btn-primary text-white mt-2 btn-block">查看更多</router-link>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>  


