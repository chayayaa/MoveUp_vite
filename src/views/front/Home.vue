<script setup>
import { ref, onMounted, computed } from 'vue';

import * as api from '@/api.js';
import Nav from '../../components/NavComponent.vue';
import Pagination from '../../components/Pagination.vue';
import { usePaginationStore } from '../../stores/paginationStore.js';
import Swal from 'sweetalert2';

// 狀態
const products = ref([]);
const pages = usePaginationStore();
const selectedCategory = ref('');


//生命週期
onMounted(() => {
  getProducts();
});

async function getProducts() {
  try {
    const res = await api.getProductsAPI();
    products.value = res.data.products;
    const totalPages = Math.ceil(products.value.length / pages.itemsPerPage);
    pages.totalPages = totalPages;
    console.log(res.data.products);
  }
  catch (err) {
    console.log(err);
  }
};

//加入購物車
async function addCartItem(id) {
  try {
    const orderData = {
      product_id: id,
      qty: 1
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

//根據當前頁與每頁數量計算分頁資料
const paginatedItems = computed(() => {
  const startIndex = (pages.currentPage - 1) * pages.itemsPerPage;
  const endIndex = startIndex + pages.itemsPerPage;
  //return products.value.slice(startIndex, endIndex)
  return filteredItems.value.slice(startIndex, endIndex);
});

//課程分類
const filteredItems = computed(() => {
  if (selectedCategory.value === '') {
    return products.value;
  } else {
    return products.value.filter(item => item.category === selectedCategory.value);
  }
});
function filterByCategory(category) {
  console.log(category)
  selectedCategory.value = category;
  const filteredProducts = filteredItems.value;
  const totalPages = Math.ceil(filteredProducts.length / pages.itemsPerPage);
  pages.totalPages = totalPages;
  pages.setCurrentPage(1);
};

</script>

<template>
  <Nav />
  <div class="banner" style="background-image: url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=720);
    ">
    <div class=" ps-5 ms-3 "></div>
    <div class=" ps-5  no-gutters move-right">
      <figure class="text-end">
        <blockquote class="blockquote">
          <label class="fw-bold text-white fs-1 ">
            Move
          </label>
          <label class="fw-bold text-color-1 fs-1 ">
            Up
          </label>
        </blockquote>
        <figcaption class="blockquote-footer">
          <cite title="Source Title" class="text-white">
            動起來，享受運動 !
          </cite>
        </figcaption>
      </figure>
      <input class="btn btn-secondary text-end" type="button" value="預約免費體驗->">
    </div>
  </div>
  <div>
    <div class="container pt-5 px-5">
      <div class="row ">
        <div class="col-md-3">
          <div class="list-group" id="list-tab" role="tablist">
            <a class="list-group-item list-group-item-action active border-bottom" id="list-home-list"
              data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home"
              @click.prevent="filterByCategory('')">所有課程</a>
            <a class="list-group-item list-group-item-action border-bottom" id="list-profile-list" data-bs-toggle="list"
              href="#list-profile" role="tab" aria-controls="list-profile"
              @click.prevent="filterByCategory('瑜珈')">瑜珈課程</a>
            <a class="list-group-item list-group-item-action border-bottom" id="list-messages-list" data-bs-toggle="list"
              href="#list-messages" role="tab" aria-controls="list-messages"
              @click.prevent="filterByCategory('有氧')">有氧課程</a>
            <a class="list-group-item list-group-item-action border-bottom" id="list-settings-list" data-bs-toggle="list"
              href="#list-settings" role="tab" aria-controls="list-settings"
              @click.prevent="filterByCategory('飲食')">飲食課程</a>
            <a class="list-group-item list-group-item-action border-bottom" id="list-settings-list" data-bs-toggle="list"
              href="#list-settings" role="tab" aria-controls="list-settings"
              @click.prevent="filterByCategory('器材')">器材課程</a>
          </div>
        </div>
        <div class="container col-md-9">
          <div class="row">

            <div class="col-md-4 text-white" v-for="(item) in paginatedItems" :key="item.id">
              <router-link :to="`/product/${item.id}`" class="text-decoration-none">
                <div class="card mb-4 shadow-sm  bg-dark border">
                  <img :src="item.imageUrl" class="card-img-top " style="height: 200px;" alt="主圖">
                  <div class="card-category">{{ item.category }}</div>

                  <div class="card-body text-center">
                    <div class="card-title d-flex justify-content-center align-items-center text-primary">
                      <!---->
                      <h3 class="text-white fw-bold">{{ item.title }}</h3>
                    </div>
                    <p class="card-text mb-4"><span class="fs-4 fw-bold" style="color: #FFD700;">${{ item.price }}</span>
                      <del class="text-light ms-2">$ {{ item.origin_price }} 元 </del>
                    </p>
                    <!-- <div class="btn-group d-flex justify-content-center">
                      <a href="#" class="btn  py-2 px-5 z-20 text-white fw-bold" style="background-color: #00D27A;"
                        @click.prevent="addCartItem(item.id)">加入購物車</a>
                    </div> -->
                  </div>
                  <router-link :to="`/product/${item.id}`" class="prod-link"></router-link>
                </div>
              </router-link>
            </div>

            <pagination :pages="pages" :get-products="getProducts"></pagination>

          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="py-4 bg-primary-lighter pb-5 mb-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class=" ps-5  no-gutters">
            <figure>
              <blockquote class="blockquote">
                <label class="fw-bold text-white fs-1 ">
                  Move
                </label>
                <label class="fw-bold text-color-1 fs-1 ">
                  Up
                </label>
              </blockquote>
              <figcaption class="blockquote-footer">
                <cite title="Source Title" class="text-white">
                  動起來，享受運動 !
                </cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="col-md-4 d-flex flex-column justify-content-between text-white " style="text-align:left">

          <ul class="list-unstyled">
            <li><label class=" fw-bold text-white fs-3 ">聯絡我們</label>
            </li>
            <li><label class="px-2">地址</label><label class="text-white-50 ">/ 404台中市西屯區台灣大道三段99號</label>
            </li>
            <li><label class="px-2">信箱</label><label class="text-white-50 ">/ move_up@gmail.com</label></li>
            <li><label class="px-2">手機</label><label class="text-white-50 ">/ 04-12345678</label></li>
          </ul>
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <hr class="text-white-50">
        <div class="col-md-5 text-md-right mt-2 text-white-50 text-center">
          <span>© Copyright 2023 | 動起來~運動有限公司</span>
          <i class="bi bi-facebook mx-1"></i>
          <i class="bi bi-instagram mx-1"></i>
        </div>
      </div>
    </div>
  </footer>
</template>../../stores/paginationStore.js
