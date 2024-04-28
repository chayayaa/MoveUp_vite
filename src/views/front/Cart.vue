<template>
  <Nav />
  <div class="mt-5 pt-5 about">
    <!-- <Loading :active="isLoading"></Loading> -->
    <div class="pt-5 px-5 container">
      <div class="row mb-2">
        <div class="col-md-8 col-sm-5">
          <div class="step-bar">
            <ul class="step-bar_list">
              <li class="step-bar_item step-bar_item--first">
                <div class="step-bar_circle step-bar_circle--active"><span>1</span></div>
                <div class="step-bar_line"></div>
                <div class="step-bar_title"><span class="mx-2 text-light">購物車</span></div>
              </li>
              <li class="step-bar_item step-bar_item--secondary">
                <div class="step-bar_circle"><span>2</span></div>
                <div class="step-bar_line"></div>
                <div class="step-bar_title"><span class="text-light">結帳</span></div>
              </li>
              <li class="step-bar_item step-bar_item--last">
                <div class="step-bar_circle"><span>3</span></div>
                <div class="step-bar_line"></div>
                <div class="step-bar_title"><span class="text-light">購買完成</span></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-sm-5">
          <div class="border-white">
            <table class="table align-middle">
              <thead>
                <tr>
                  <th></th>
                  <th>商品</th>
                  <th style="width: 110px">數量</th>
                  <th>單價</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="cart.length > 0">
                  <tr v-for="(item, index) in cart" :key="item.id">
                    <td style="width: 5%;">
                      <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)"
                        :disabled="loadingStatus.loadingItem === item.id">
                        <i class="bi bi-trash-fill"></i>
                      </button>
                    </td>
                    <td style="width: 5%;">
                      <div class="rounded-0 " style="background-size: cover; background-position: center;">
                        <img :src="item.product.imageUrl" class="cart_img">
                      </div>
                    </td>
                    <td>
                      <div class="d-flex flex-column align-items-stretch">
                        <div class="fs-1 mb-4">{{ item.product.title }}</div>
                        <div class="input-group input-group-sm">
                          <button class="border border-gray-500 px-2 py-1 bg-gray-500" :disabled="item.qty === 1"
                            @click="item.qty--; editCartItem(item.id, item.product.id, item.qty)">
                            -
                          </button>
                          <input type="number" class="quantity border border-gray-500 text-center w-4 py-1 price"
                            min="1" :value="item.qty" :id="'quantityInput_' + index" />
                          <button class="border border-gray-500 px-2 py-1 bg-gray-500"
                            @click="item.qty++; editCartItem(item.id, item.product.id, item.qty)">
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      ${{ item.product.price }}
                    </td>
                  </tr>
                </template>
                <template v-else>
                  <td colspan="4" class="text-center text-light fs-2">購物車無商品，快來去逛逛!</td>
                </template>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-4 mt-2">
          <div class="checkout_summary">
            <div class="checkout_summary-title heading-tertiary--dark">
              訂單明細
            </div>
            <div class="checkout_summary-price">
              <div>原價</div>
              <div>${{ cartPrice }}</div>
            </div>

            <div class="checkout_summary-total">
              <div>總計</div>
              <h3>${{ cartPrice }}</h3>
            </div>
            <!-- <div class="form_row">
              <div class="form_group">
                <div class="form_label">使用折扣代碼</div><input type="text" placeholder="請輸入優惠券"
                  class="mb-sm form_input"><span class="text-warning"></span>
              </div>
            </div> -->
            <div class="form_row">
            </div>
            <router-link :to="`/checkout`" class="btn btn-primary" style="margin: 0px;"
              v-if="cart.length > 0">結帳</router-link>
            <button class="btn btn-primary--cancel" v-else>
              請選擇
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted, watch, defineEmits } from 'vue';
import Swal from 'sweetalert2';
import * as api from '@/api.js';

import Nav from '../../components/NavComponent.vue';
import Footer from '../../components/FooterComponent.vue';

const loadingStatus = ref({ loadingItem: '' });
const isLoading = ref(false);
const emits = defineEmits();
const cartPrice = ref(0);
const cart = ref([]);
const form = ref({
  user: {
    name: '',
    email: '',
    tel: '',
    address: '',
  },
  message: '',
});

onMounted(async () => {
  await getCart();
});

async function getCart() {
  isLoading.value = true;
  try {
    const res = await api.getCartAPI();
    cart.value = res.data.data.carts;
    isLoading.value = false;
    updateTotal();
  }
  catch (err) {
    console.log(err);
  }
};

async function removeCartItem(id) {
  isLoading.value = true;
  try {
    const res = await api.deleteCartAPI(id);
    getCart();
  }
  catch (err) {
    console.log(err);
  }
  loadingStatus.value.loadingItem = '';
  isLoading.value = false;
};

//修改購物車
async function editCartItem(cid, pid, quantity) {
  try {
    const orderData = {
      product_id: pid,
      qty: quantity
    };
    const res = await api.editCartAPI(cid, orderData);
    getCart();
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
function updateTotal() {
  cartPrice.value = 0;
  cart.value.forEach((item) => {
    cartPrice.value += item.final_total;
  });
};

watch(cartPrice, () => {
  // 直接调用 emit 方法
  emits('someEvent', cartPrice.value);
});

</script>