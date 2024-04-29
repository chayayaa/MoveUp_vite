<template>
  <div>
    <Loading :active="isLoading"></Loading>
  </div>

  <Nav />
  <div class="banner" style="background-image: url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=720);
    ">
    <div class=" ps-5 ms-3 "></div>
    <div class=" ps-5  no-gutters move-right d-none d-lg-block">
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
      <ul class="list-unstyled prod-filter container">
        <li v-for="(item, index) in productCategory" :key="index" class="prod-filter__list text-white">
          <a class="btn rounded-pill list-group-item list-group-item-action btn-lg px-2 py-2"
            :class="{ 'active': selectedCategory === item }" id="list-home-list" role="tab" aria-controls="list-home"
            @click="filterByCategory(item)">
            {{ item }}
          </a>
        </li>
      </ul>
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
                <p class="card-text mb-4"><span class="fs-4 fw-bold" style="color: #FFD700;">${{ item.price
                    }}</span>
                  <del class="text-light ms-2">$ {{ item.origin_price }} 元 </del>
                </p>
                <div class="btn-group d-flex justify-content-center">
                  <router-link :to="`/product/${item.id}`" class="btn  py-2 px-5 z-20 text-white fw-bold"
                    style="background-color: #00D27A;">查看更多</router-link>
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <pagination :pages="pages" :get-products="getProducts"></pagination>

      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

import * as api from '@/api.js';
import Nav from '../../components/NavComponent.vue';
import Footer from '../../components/FooterComponent.vue';
import Pagination from '../../components/Pagination.vue';
import { usePaginationStore } from '../../stores/paginationStore.js';
import Swal from 'sweetalert2';

// 狀態
const products = ref([]);
const pages = usePaginationStore();
const selectedCategory = ref('所有');
const productCategory = ref(['所有', '瑜珈', '有氧', '飲食', '器材']);
const isLoading = ref(false);

//生命週期
onMounted(() => {
  getProducts();
});

async function getProducts() {
  isLoading.value = true;
  try {
    const res = await api.getProductsAPI();
    products.value = res.data.products;
    const totalPages = Math.ceil(products.value.length / pages.itemsPerPage);
    pages.totalPages = totalPages;
    isLoading.value = false;
  }
  catch (err) {
    console.log(err);
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
  if (selectedCategory.value === '所有') {
    return products.value;
  } else {
    return products.value.filter(item => item.category === selectedCategory.value);
  }
});
function filterByCategory(category) {
  selectedCategory.value = category;
  const filteredProducts = filteredItems.value;
  const totalPages = Math.ceil(filteredProducts.length / pages.itemsPerPage);
  pages.totalPages = totalPages;
  pages.setCurrentPage(1);
};

</script>