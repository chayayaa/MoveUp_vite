<template>
    <Nav />
    <div>
        <Loading :active="isLoading"></Loading>
    </div>
    <div class="mt-5 pt-5 about">
        <div class="container main-content pt-5 px-5">
            <div class="text-end">
                <button type="button" class="btn btn-success" @click="openModal('new')" data-bs-toggle="modal"
                    data-bs-target="#productModal">
                    建立新的課程
                </button>
            </div>
            <table class="table mt-4 text-center">
                <thead>
                    <tr>
                        <th width="120">
                            分類
                        </th>
                        <th>課程名稱</th>
                        <th width="120">
                            原價
                        </th>
                        <th width="120">
                            售價
                        </th>
                        <th width="100">
                            是否啟用
                        </th>
                        <th width="120">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item) in paginatedItems" :key="item.id">
                        <td>{{ item.category }}</td>
                        <td>{{ item.title }}</td>
                        <td>
                            {{ item.origin_price }}
                        </td>
                        <td>
                            {{ item.price }}
                        </td>
                        <td>
                            <span v-if="item.is_enabled" class="text-success fw-bolder">啟用</span>
                            <span v-else>未啟用</span>
                        </td>
                        <td>
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-primary btn-sm" data-bs-toggle="modal"
                                    data-bs-target="#productModal" @click="openModal('edit', item)">
                                    編輯
                                </button>
                                <button type="button" class="btn btn-outline-danger btn-sm"
                                    @click="openModal('delete', item)">
                                    刪除
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <pagination :pages="pages" :get-products="getProducts"></pagination>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span v-if="tempProduct.id">編輯課程 :</span>
                            <span v-else>新增課程</span>
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body mx-3">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="mb-3">
                                    <label for="imageUrl" class="form-label">主要圖片</label>
                                    <input v-model="tempProduct.imageUrl" type="text" class="form-control mb-2"
                                        placeholder="請輸入圖片連結">
                                    <img class="img-fluid" :src="tempProduct.imageUrl">
                                </div>
                                <h3 class="mb-3">多圖新增</h3>
                                <div v-if="Array.isArray(tempProduct.imagesUrl)">


                                    <template v-for="(img, key) in tempProduct.imagesUrl" :key="key">
                                        <input v-model="tempProduct.imagesUrl[key]" type="text" class="form-control">
                                        <img :src="tempProduct.imagesUrl[key]" alt="" class="img-fluid mb-2 mt-2">
                                    </template>
                                    <div
                                        v-if="!tempProduct.imagesUrl.length || tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]">
                                        <button class="btn btn-outline-primary btn-sm d-block w-100"
                                            @click="tempProduct.imagesUrl.push('')">
                                            新增圖片
                                        </button>
                                    </div>
                                    <div v-else>
                                        <button class="btn btn-outline-danger btn-sm d-block w-100"
                                            @click="tempProduct.imagesUrl.pop()">
                                            刪除圖片
                                        </button>
                                    </div>
                                </div>
                                <div v-else>
                                    <button class="btn btn-outline-primary btn-sm d-block w-100" @click="createImages">
                                        新增圖片
                                    </button>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <label for="title">標題</label>
                                    <input id="title" v-model="tempProduct.title" type="text" class="form-control"
                                        placeholder="請輸入標題">
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="category">分類</label>
                                        <input id="category" v-model="tempProduct.category" type="text"
                                            class="form-control" placeholder="請輸入分類">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="price">單位</label>
                                        <input id="unit" v-model="tempProduct.unit" type="unit" class="form-control"
                                            placeholder="請輸入單位">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="origin_price">原價</label>
                                        <input id="origin_price" v-model="tempProduct.origin_price" type="number"
                                            class="form-control" placeholder="請輸入原價">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="price">售價</label>
                                        <input id="price" v-model="tempProduct.price" type="number" class="form-control"
                                            placeholder="請輸入售價">
                                    </div>
                                </div>
                                <hr>
                                <div class="form-group">
                                    <label for="description">課程描述</label>
                                    <textarea id="description" v-model="tempProduct.description" type="text"
                                        class="form-control" placeholder="請輸入課程描述">
        </textarea>
                                </div>
                                <div class="form-group">
                                    <label for="content">說明內容</label>
                                    <textarea id="description" v-model="tempProduct.content" type="text"
                                        class="form-control" placeholder="請輸入說明內容">
        </textarea>
                                </div>
                                <div class="mb-3">
                                    <div class="form-check">
                                        <input id="is_enabled" v-model="tempProduct.is_enabled" class="form-check-input"
                                            type="checkbox" :true-value="1" :false-value="0">
                                        <label class="form-check-label" for="is_enabled">是否啟用</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-center mx-3">
                        <button type="button" class="btn btn-success btn-lg" @click="updateData(tempProduct)"
                            data-bs-dismiss="modal">確認</button>
                        <button type="button" class="btn btn-outline-secondary btn-lg"
                            data-bs-dismiss="modal">取消</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>
<script setup>
import { ref, reactive, onMounted, computed, defineEmits } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Swal from 'sweetalert2';
import axios from 'axios';
import * as api from '@/api.js';

import Nav from '../../components/AdminNavComponent.vue';
import Footer from '../../components/FooterComponent.vue';
import Pagination from '../../components/Pagination.vue';
import { usePaginationStore } from '../../stores/paginationStore.js';

const isLoading = ref(false);
const emits = defineEmits();
const router = useRouter()
const products = ref([]);
const pages = usePaginationStore();
const tempProduct = ref({ imageUrl: [] });

onMounted(async () => {
    await getProducts();
});

async function getProducts() {
    await checkLogin();
    isLoading.value = true;
    try {
        const res = await api.getAdminProductsAPI();
        products.value = Object.values(res.data.products);
        const totalPages = Math.ceil(products.value.length / pages.itemsPerPage);
        pages.totalPages = totalPages;
        pages.setCurrentPage(1);
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
    return products.value.slice(startIndex, endIndex);
});

async function openModal(status, item) {
    isLoading.value = true;
    await checkLogin();
    if (status === 'new') {
        tempProduct.value = {
            imageUrl: [],
        };
    } else if (status === 'edit') {
        tempProduct.value = { ...item };
    } else if (status === 'delete') {
        this.isLoading = true;
        const res = await api.delAdminProductsAPI(item.id);
        await getProducts();
    }
    isLoading.value = false;
};

async function updateData(item) {
    try {
        await checkLogin();
        if (item.id) {
            const res = await api.updateAdminProductAPI(item);
            if (res.data.success) {
                // Swal.fire({
                //     title: '成功!',
                //     text: '課程編輯成功',
                //     icon: 'success'
                // }).then(async (result) => {
                //     if (result.isConfirmed) {
                await getProducts();
                //     }
                // });
            }
            else {
                Swal.fire({
                    title: '失敗!',
                    text: '課程編輯失敗',
                    icon: 'error'
                })
            }
        }
        else {
            const res = await api.createAdminProductAPI(item);
            if (res.data.success) {
                // Swal.fire({
                //     title: '成功!',
                //     text: '課程新增成功',
                //     icon: 'success'
                // }).then(async (result) => {
                //     if (result.isConfirmed) {
                await getProducts();
                //     }
                // });
            }
            else {
                Swal.fire({
                    title: '失敗!',
                    text: '課程新增失敗',
                    icon: 'error'
                })
            }
        }
    }
    catch (err) {
        console.log(err)

    }


};

function createImages() {
    tempProduct.value.imagesUrl = [];
    tempProduct.value.imagesUrl.push('');
};

async function checkLogin() {
    isLoading.value = true;
    const token = localStorage.getItem('token');
    const expirationTime = localStorage.getItem('tokenExpiration');
    try {
        if (token && expirationTime) {
            const currentTime = new Date().getTime();
            if (currentTime < expirationTime) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const res = await api.checkLogin();
                if (!res.data.success) {
                    router.push('/login');
                }
            }
            else {
                localStorage.removeItem('token');
                localStorage.removeItem('tokenExpiration');
                router.push('/login');
            }
        }
        else
            router.push('/login');
    }
    catch (err) {
        router.push('/login');
    }
    finally {
        isLoading.value = false;

    }
}

</script>