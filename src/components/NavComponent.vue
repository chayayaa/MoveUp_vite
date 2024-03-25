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
        console.log(cart.value)
        totalQuantity.value = cart.value.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.qty;
        }, 0);
        console.log(totalQuantity.value)
    }
    catch (err) {
        console.log(err);
    }
}

</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-dark position-absolute top-0 start-50 translate-middle-x container"
        style=" width: 100%;">
        <div class="container-fluid mx-5 navbar-brand">
            <a class="navbar-brand fs-1 fw-bold demo text-white" href="#" id="fp">動起來~ </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-lg-end" id="navbarSupportedContent"
                style="margin-right: auto;">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link text-color-1" aria-current="page" href="#">首頁</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">探索課程</a>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link ">預約體驗</a>
                    </li> -->
                </ul>
                <a class=" text-color-2 fs-4 position-relative" href="/#/cart">
                    <i class="bi bi-cart4"></i>
                    <span
                        class="mt-1 d-flex align-items-center justify-content-center badge badge-light badge-title rounded-pill position-absolute top-0 start-100 translate-middle bg-secondary">{{ totalQuantity }}</span>
                </a>
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
