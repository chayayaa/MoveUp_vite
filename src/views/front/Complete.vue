<template>
    <Nav />
    <div>
        <Loading :active="isLoading"></Loading>
    </div>
    <div class="mt-5 pt-5 about">
        <div class="pt-5 px-5 container">
            <div class="row">
                <div class="col-md-8 col-sm-5">
                    <div class="step-bar">
                        <ul class="step-bar_list">
                            <li class="step-bar_item step-bar_item--first">
                                <div class="step-bar_circle step-bar_circle--active"><span>1</span></div>
                                <div class="step-bar_line"></div>
                                <div class="step-bar_title"><span class="mx-2 text-light">購物車</span></div>
                            </li>
                            <li class="step-bar_item step-bar_item--secondary">
                                <div class="step-bar_circle step-bar_circle--active"><span>2</span></div>
                                <div class="step-bar_line"></div>
                                <div class="step-bar_title"><span class="text-light">結帳</span></div>
                            </li>
                            <li class="step-bar_item step-bar_item--last">
                                <div class="step-bar_circle step-bar_circle--active"><span>3</span></div>
                                <div class="step-bar_line"></div>
                                <div class="step-bar_title"><span class="text-light">購買完成</span></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-8 col-sm-5">
                    <h3 class="text-white font-weight-bold mb-0 mt-4 mt-md-0 mb-2">結帳完成</h3>

                    <div class="border-white">
                        <table class="table align-middle">
                            <thead>
                                <tr>
                                    <th>商品</th>
                                    <th style="width: 110px">數量</th>
                                    <th>單價</th>
                                    <th>合計</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-if="orderData && orderData.products">
                                    <tr v-for="(productId, index) in Object.keys(orderData.products)" :key="index">
                                        <td style="width: 5%;">
                                            <div class="rounded-0 "
                                                style="background-size: cover; background-position: center;">
                                                <img :src="orderData.products[productId].product.imageUrl"
                                                    class="cart_img">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="d-flex flex-column align-items-stretch">
                                                <div class="fs-3 mb-4">{{ orderData.products[productId].product.title }}
                                                </div>
                                                <div class="fs-5">{{ orderData.products[productId].qty }}堂</div>
                                            </div>
                                        </td>
                                        <td>
                                            ${{ orderData.products[productId].product.price }}
                                        </td>
                                        <td>
                                            ${{ orderData.products[productId].total }}
                                        </td>
                                    </tr>
                            <tfoot></tfoot>
</template>
</tbody>
<tfoot>
    <tr>
        <td colspan="3" class="text-end">總計:</td>
        <td>${{ orderData.total }}</td>
    </tr>
</tfoot>
</table>
</div>
</div>
<div class="col-md-4 text-white text-center">
    <div class="mt-5">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bag-check"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0">
                </path>
                <path
                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z">
                </path>
            </svg>
            <h3 class="mt-4"> 感謝您的購買!</h3>
            <p class="text-start">
                我們將於 1~3 個工作天內與您聯繫，若有任何問題也可撥打客服與聯繫我們謝謝。
            </p>
        </div>
        <router-link :to="`/`" class="btn btn-primary" style="margin: 0px;">回首頁</router-link>
    </div>
</div>

</div>
<div class="row">
    <div class="col-md-8 col-sm-5 text-white">
        <div class="checkout_summary  text-start">
            <template v-if="orderData && orderData.user">
                <h3 class="fs-2 mb-0 mt-4 mt-md-0 fw-bold">訂購人資訊</h3>
                <hr class="border-white hr-border-width">
                <div class="text-start fw-bold">
                    <h4 class="fs-4 mt-4 mt-md-0 fw-bold">Email:{{ orderData.user.email }}</h4>
                    <h4 class="fs-4 mt-4 mt-md-0 fw-bold">收件人姓名:{{ orderData.user.name }}</h4>
                    <h4 class="fs-4 mt-4 mt-md-0 fw-bold">收件人電話:{{ orderData.user.tel }}</h4>
                    <h4 class="fs-4 mt-4 mt-md-0 fw-bold">收件人地址:{{ orderData.user.address }}</h4>
                    <div>
                        <label class="fs-4 fw-bold">購買方式:</label>
                        <label class="fs-4 mt-4 mt-md-0 fw-bold" v-show="orderData.user.payment === '1'">WebATM</label>
                        <label class="fs-4 mt-4 mt-md-0 fw-bold" v-show="orderData.user.payment === '2'">ATM</label>
                        <label class="fs-4 mt-4 mt-md-0 fw-bold" v-show="orderData.user.payment === '3'">Credit</label>
                        <label class="fs-4 mt-4 mt-md-0 fw-bold" v-show="orderData.user.payment === '4'">ApplePay</label>
                        <label class="fs-4 mt-4 mt-md-0 fw-bold" v-show="orderData.user.payment === '5'">GooglePay</label>
                    </div>
                </div>
            </template>
        </div>
    </div>

</div>
</div>
</div>
<Footer />
</template>

<script setup>
import { ref, onMounted, defineEmits, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import * as api from '@/api.js';

import Nav from '../../components/NavComponent.vue';
import Footer from '../../components/FooterComponent.vue';

const route = useRoute()
const isLoading = ref(false);
const emits = defineEmits();
const orderData = ref([]);

onMounted(async () => {
    orderData.Id = route.path.split('/')[2];
    await getOrderData(orderData.Id);
});

async function getOrderData(id) {
    isLoading.value = true;
    try {
        const res = await api.getOrderDataAPI(id);
        orderData.value = res.data.order;
        isLoading.value = false;
    }
    catch (err) {
        console.log(err);
    }
};
</script>