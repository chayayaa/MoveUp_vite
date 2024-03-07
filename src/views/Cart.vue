<script setup>
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';

import * as api from '@/api.js';

import Nav from '../components/NavComponent.vue';

const loadingStatus = ref({ loadingItem: '' });
const isLoading = ref(false);
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
const decrementQuantity = (index) => {
  const inputElement = document.querySelector('#quantityInput_' + index);
  if (parseInt(inputElement.value) > 0) {
    const newValue = parseInt(inputElement.value) - 1;
    inputElement.value = newValue.toString();
    //this.updateTotal(index);
  }
}

const incrementQuantity = (index) => {
  console.log(index);
  const inputElement = document.querySelector('#quantityInput_' + index);
  const newValue = parseInt(inputElement.value) + 1;
  inputElement.value = newValue.toString();
  updateCartItem(index);
}

//加入購物車
async function updateCartItem(index) {
  const quantityString = document.getElementById('quantityInput_'+index).value;
  var quantity = parseInt(quantityString, 10);
  var qty= isNaN(quantity) ? 0 : quantity;
  console.log(cart[index])
  try {
    const orderData = {
      product_id: cart[index].product.id,
      qty: qty
    };
    console.log(orderData);

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
    <!-- <Loading :active="isLoading"></Loading> -->
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
        <!-- <div class="col-md-7">
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
        </div> -->
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
                        <button class="border border-gray-500 px-2 py-1 bg-gray-500" @click="decrementQuantity(index)">
                          -
                        </button>
                        <input type="number" class="quantity border border-gray-500 text-center w-4 py-1 price" min="1"
                          :value="item.qty" :id="'quantityInput_' + index" />
                        <button class="border border-gray-500 px-2 py-1 bg-gray-500" @click="incrementQuantity(index)">
                          +
                        </button>
                      </div>
                      </div>
                    </td>
                    <td>
                      {{ item.product.price }}
                    </td>
                  </tr>
                </template>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3" class="text-end">總計:</td>
                  <td colspan="2" class="text-end">{{ cart.total }}</td>
                </tr>
              </tfoot>
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
              <div></div>
            </div>

            <div class="checkout_summary-total">
              <div>總計</div>
              <h3>$0</h3>
            </div>
            <div class="form_row">
              <div class="form_group">
                <div class="form_label">使用折扣代碼</div><input type="text" placeholder="請輸入優惠券" class="mb-sm form_input"><span
                  class="text-warning"></span>
              </div>
            </div>
            <div class="form_row">
            </div><button class="btn btn-primary--cancel" style="margin: 0px;">
              請選擇
            </button>
            <button class="btn btn-primary">
              結帳
            </button>
          </div>
        </div>
      </div>
      <!-- <div class="row text-center">
        <h2 class="text-white font-weight-bold mb-1 mt-4 mt-md-0">購物車</h2>
        <hr class="border-white hr-border-width">
        <h3 class="text-white font-weight-bold mb-0 mt-4 mt-md-0">購物車無商品，快來去逛逛!</h3>

      </div> -->
    </div>
  </div>
</template>


