<template>
    <div>
        <Loading :active="isLoading"></Loading>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark position-absolute top-0 start-50 translate-middle-x container"
        style=" width: 100%;">
        <div class="container-fluid mx-5 navbar-brand">
            <router-link :to="`/`" class="navbar-brand fs-1 fw-bold demo text-white" id="fp">動起來~ </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-lg-end" id="navbarSupportedContent"
                style="margin-right: auto;">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="`/`" class="nav-link text-color-1" aria-current="page">首頁</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="`/products`" class="nav-link">探索課程</router-link>
                    </li>
                </ul>
                <router-link :to="`/cart`" class="text-color-2 fs-4 position-relative">
                    <i class="bi bi-cart4"></i>
                    <span v-if="totalQuantity!==0"
                        class="mt-1 d-flex align-items-center justify-content-center badge badge-light badge-title rounded-pill position-absolute top-0 start-100 translate-middle bg-secondary">{{
            totalQuantity }}</span>
                </router-link>
            </div>
        </div>
    </nav>
</template>
<style scoped>
@media (max-width: 576px) {

    /* 在手機模式下將導航欄設置為固定在上方 */
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        /* 確保在最上層顯示 */
    }
}
</style>
<script setup>
import { ref, onMounted } from 'vue';
import * as api from '@/api.js';

const cart = ref([]);
const totalQuantity = ref(0); // 儲存購物車中商品的總數量
const isLoading = ref(false);

onMounted(async () => {
    await getCart();
});
async function getCart() {
    isLoading.value = true;
    try {
        const res = await api.getCartAPI();
        cart.value = res.data.data.carts;
        totalQuantity.value = cart.value.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.qty;
        }, 0);
        isLoading.value = false;
    }
    catch (err) {
        console.log(err);
    }
}

</script>