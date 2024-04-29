<template>
  <Nav />
  <div class="mt-5 pt-5 about">
    <div class="container main-content pt-5 px-5">
      <div class="row align-products-center mb-4" v-if="product.value">
        <div class="col-lg-5 text-white">
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
            <div class="d-flex col-12">
              <div class="flex items-center justify-center pt-3 px-3">
                <button class="border border-gray-500 px-2 py-2 bg-gray-500"
                  :class="{ 'bg-gray-100': qty === 1, 'bg-gray-200': qty !== 1 }" :disabled="qty === 1" @click="qty--">
                  -
                </button>
                <input type="number" class="quantity border border-gray-500 text-center w-16 py-2 price" min="1"
                  v-model="qty" id="quantityInput" />
                <button class="border border-gray-500 px-2 py-2 bg-gray-200" @click="qty++">
                  +
                </button>
              </div>
              <div class="col-4">
                <div class="btn-group d-flex justify-content-center my-3 mr-4">
                  <button class="btn btn-primary text-white btn-block"
                    @click="addCartItem(product.value.id)">加入購物車</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="mx-5">
        <h2 class="font-weight-bold mt-4 text-white text-center">推薦商品</h2>
        <template v-if="products.length > 0">
          <div class="row">
            <div class="col-md-4" v-for="item in products" :key="item.id">
              <div class="card mb-4 position-relative bg-dark border mx-3">
                <img :src="item.imageUrl" class="card-img-top " style="height: 200px;">
                <div class="card-body">
                  <h3 class="text-white fw-bold">{{ item.title }}</h3>
                  <p class="card-text mb-4"><span class="fs-1 fw-bold" style="color: #FFD700;">${{ item.price
                      }}</span>
                    <del class="text-light ms-2">$ {{ item.origin_price }} 元 </del>
                  </p>
                  <div class="btn-group d-flex justify-content-center">
                    <button class="btn btn-primary text-white mt-2 btn-block" @click="openProductPage(item.id)">
                      查看更多
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import Swal from 'sweetalert2';
import * as api from '@/api.js';
import { useRouter } from 'vue-router'

import Nav from '../../components/NavComponent.vue';
import Footer from '../../components/FooterComponent.vue';

const router = useRouter()
const isLoading = ref(false);
const route = useRoute();
const qty = ref(1);
const products = ref([]);
const product = reactive({
  Id: '',
  categoryName: '',
  price: 0,
  imageUrl: '',
})

onMounted(async () => {
  product.Id = route.path.split('/')[2];

  await getProduct(product.Id);
  await getProducts();

});

async function getProduct(id) {
  isLoading.value = true;
  try {
    const res = await api.getProductAPI(id);
    product.value = res.data.product;
    isLoading.value = false;
  }
  catch (err) {
    console.log(err);
  }
};

async function getProducts() {
  isLoading.value = true;
  try {
    const res = await api.getProductsAPI();
    products.value = res.data.products.slice(0, 3);
    isLoading.value = false;
  }
  catch (err) {
    console.log(err);
  }
};

//加入購物車
async function addCartItem(id) {
  const quantityString = document.getElementById('quantityInput').value;
  var quantity = parseInt(quantityString, 10);
  var qty = isNaN(quantity) ? 0 : quantity;
  try {
    const orderData = {
      product_id: id,
      qty: qty
    };
    const res = await api.addCartAPI(orderData);
    if (res.data.success) {
      Swal.fire({
        title: '成功!',
        text: '已加入購物車',
        icon: 'success'
      }).then(async (result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
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

const decrementQuantity = (index) => {
  const inputElement = document.querySelector('#quantityInput')
  if (parseInt(inputElement.value) > 0) {
    const newValue = parseInt(inputElement.value) - 1
    inputElement.value = newValue.toString()
  }
}

const incrementQuantity = (index) => {
  const inputElement = document.querySelector('#quantityInput')
  const newValue = parseInt(inputElement.value) + 1
  inputElement.value = newValue.toString()
}

async function openProductPage(id) {
  router.push(`/product/${id}`);
  await getProduct(product.Id);
  window.location.reload();
};
</script>
