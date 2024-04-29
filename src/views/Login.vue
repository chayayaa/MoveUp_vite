<template>
      <Nav />
    <div class="container mt-5 pt-5">
        <div class="row justify-content-center mt-3 text-white">
            <div class="col-5">
                <h1 class="font-weight-normal text-center">
                    請先登入
                </h1>
                <VForm class="form-signin" v-slot="{ errors }" @submit="signin">
                    <div>
                        <VField id="email" v-model="form.user.username" name="email" type="email" class="form-control"
                            :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="required|email">
                        </VField>
                        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
                    </div>
                    <div class="mt-4">
                        <VField id="password" v-model="form.user.password" name="password" type="password"
                            class="form-control" :class="{ 'is-invalid': errors['password'] }" placeholder="請輸入密碼"
                            rules="required">
                        </VField>
                        <ErrorMessage name="password" class="invalid-feedback"></ErrorMessage>
                    </div>
                    <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
                        登入
                    </button>
                </VForm>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, defineEmits, reactive } from 'vue';
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2';
import * as api from '@/api.js';
import axios from 'axios';

import Nav from '../components/NavComponent.vue';

const router = useRouter()
const loadingStatus = ref({ loadingItem: '' });
const isLoading = ref(false);
const emits = defineEmits();
const form = reactive({
    user: {
        username: '',
        password: '',
    },
});

async function signin() {
    try {
        const user = form.user;
        const res = await api.login(user);
        if (res.data.success) {
            const { token } = res.data;
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            router.push('/admin/products');
        }
    }
    catch (err) {
        console.log(err);
        Swal.fire({
            title: '失敗!',
            text: '帳號或密碼錯誤，請重新登入',
            allowOutsideClick: false,
            icon: 'error'
        })
    }

};
</script>
