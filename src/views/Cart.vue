<script setup>
import { ref, onMounted } from 'vue';

import * as api from '@/api.js';

import Nav from '../components/NavComponent.vue';

const loadingStatus = ref({ loadingItem: '' });
const isLoading = ref(false);
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

onMounted(() => {
  getCart();
});

async function getCart() {
  isLoading.value = true;
  try {
    const res = await api.getCartAPI();
    cart.value = res.data.data.carts;
    console.log(cart.value);
    isLoading.value = false;
  }
  catch (err) {
    console.log(err);
  }
};

async function removeCartItem(id) {
  isLoading.value = true;
  try {
    console.log(id)
    const res = await api.deleteCartAPI(id);
    getCart();
  }
  catch (err) {
    console.log(err);
  }
  loadingStatus.value.loadingItem = '';
  isLoading.value = false;
};
</script>

<template>
  <Nav />
  <div class="mt-5 pt-5 about">
    <Loading :active="isLoading"></Loading>
    <div class="pt-5 px-5 container">
      <div class="row" v-if="cart.length > 0">
        <div class="col-md-7">
          <h3 class="text-white font-weight-bold mb-0 mt-4 mt-md-0">訂購人資訊</h3>
          <hr class="border-white hr-border-width">
          <Form v-slot="{ errors }">
            <div>
              <label for="email" class="form-label">Email</label>
              <Field id="email" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email" rules="email|required"></Field>
              <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
            </div>

            <div>
              <label for="name" class="form-label">收件人姓名</label>
              <Field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名" rules="required"></Field>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>

            <div>
              <label for="tel" class="form-label">收件人電話</label>
              <Field id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話" rules="required"></Field>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>

            <div>
              <label for="address" class="form-label">收件人地址</label>
              <Field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址" rules="required"></Field>
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>

            <div>
              <label for="message" class="form-label">留言</label>
              <textarea name="" id="message" class="form-control" cols="30" rows="10"></textarea>
            </div>
            <div class="text-end mt-3">
              <button type="submit" class="btn btn-danger">送出訂單</button>
            </div>
          </Form>
        </div>
        <div class="col-md-5">
          <div class="border-white">
            <h3 class="text-white font-weight-bold mb-3 mt-4 mt-md-0">訂單明細</h3>
            <table class="table align-middle">
              <thead>
                <tr>
                  <th></th>
                  <th>品名</th>
                  <th style="width: 110px">數量</th>
                  <th>單價</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="cart.length > 0">
                  <tr v-for="item in cart" :key="item.id">
                    <td>
                      <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)"
                        :disabled="loadingStatus.loadingItem === item.id">
                        <i class="bi bi-trash-fill"></i>
                      </button>
                    </td>
                    <td>
                      {{ item.product.title }}
                    </td>
                    <td>
                      <div class="input-group input-group-sm">
                        {{ item.qty }} / {{ item.product.unit }}
                      </div>
                    </td>
                    <td>
                      {{ item.final_total }}
                    </td>
                  </tr>
                </template>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3" class="text-end">總計:</td>
                  <td class="text-end">{{ cart.total }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <div class="row text-center" v-else>
        <h2 class="text-white font-weight-bold mb-1 mt-4 mt-md-0">購物車</h2>
        <hr class="border-white hr-border-width">
        <h3 class="text-white font-weight-bold mb-0 mt-4 mt-md-0">購物車無商品，快來去逛逛!</h3>

      </div>
    </div>
  </div>
</template>


