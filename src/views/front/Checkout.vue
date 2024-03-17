<script setup>
import { ref, onMounted,watch,defineEmits } from 'vue';
import Swal from 'sweetalert2';

import * as api from '@/api.js';

import Nav from '../../components/NavComponent.vue';

const loadingStatus = ref({ loadingItem: '' });
const isLoading = ref(false);
 const emits = defineEmits();
const cartPrice= ref(0);
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
  updateTotal();
});

async function getCart() {
  isLoading.value = true;
  try {
    const res = await api.getCartAPI();
    cart.value = res.data.data.carts;
    console.log(cart.value);
    isLoading.value = false;
    updateTotal();
  }
  catch (err) {
    console.log(err);
  }
};
function updateTotal() {
      cartPrice.value = 0; 
      cart.value.forEach((item) => {
        cartPrice.value += item.final_total;
      });
          console.log(cartPrice.value)
      };

    watch(cartPrice, () => {
      // 直接调用 emit 方法
      emits('someEvent', cartPrice.value);
    });   
</script>

<template>
  <Nav />
  <div class="mt-5 pt-5 about">
    <!-- <Loading :active="isLoading"></Loading> -->
    <div class="pt-5 px-5 container">
      <div class="row">
        <div class="col-md-8 col-sm-5 mb-3">
          <div class="step-bar">
            <ul class="step-bar_list">
              <li class="step-bar_item step-bar_item--first">
                <div class="step-bar_circle "><span>1</span></div>
                <div class="step-bar_line"></div>
                <div class="step-bar_title"><span class="mx-2 text-light">購物車</span></div>
              </li>
              <li class="step-bar_item step-bar_item--secondary">
                <div class="step-bar_circle step-bar_circle--active"><span>2</span></div>
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
                        <h3 class="text-white font-weight-bold mb-0 mt-4 mt-md-0 mb-2">確認訂單</h3>

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
                <template v-if="cart.length > 0">
                  <tr v-for="(item, index) in cart" :key="item.id">
                    <td style="width: 5%;">
                      <div class="rounded-0 " style="background-size: cover; background-position: center;">
                        <img :src="item.product.imageUrl" class="cart_img">
                      </div>
                    </td>
                    <td>
                      <div class="d-flex flex-column align-items-stretch">
                      <div class="fs-3 mb-4">{{ item.product.title }}</div>
                      <div class="fs-5">{{ item.qty }}堂</div>
                      </div>
                    </td>
                    <td>
                      ${{ item.product.price }}
                    </td>
                    <td>${{ item.product.price* item.qty}}</td>
                  </tr>
                  <tfoot></tfoot>
                </template>
              </tbody>            
              <tfoot>
                <tr>
                  <td colspan="3" class="text-end">總計:</td>
                  <td >${{ cartPrice }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div class="col-md-4 text-white">
          <h3 class="font-weight-bold mb-0 mt-4 mt-md-0">填寫訂購資訊</h3>
          <hr class="border-white hr-border-width">
          <VForm v-slot="{ errors }">
            <div>
              <label for="email" class="form-label"><span class="text-danger">*
              </span> Email</label>
              <VField id="email" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email" rules="required|email"></VField>
              <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
            </div>

            <div>
              <label for="name" class="form-label"><span class="text-danger">*
              </span> 收件人姓名</label>
              <VField id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名" rules="required"></VField>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>

            <div>
              <label for="tel" class="form-label"><span class="text-danger">*
              </span> 收件人電話</label>
              <VField id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話" rules="required"></VField>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>

            <div>
              <label for="address" class="form-label"><span class="text-danger">*
              </span> 收件人地址</label>
              <VField id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址" rules="required"></VField>
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>

            <div>
              <label for="message" class="form-label">留言</label>
              <textarea name="" id="message" class="form-control" cols="30" rows="10"></textarea>
            </div>
            <div class="text-end mt-3">
              <button type="submit" class="btn btn-primary">送出訂單</button>
            </div>
          </VForm>
        </div>
        
      </div>     
    </div>
  </div>
</template>


