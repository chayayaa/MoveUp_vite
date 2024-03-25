<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import Swal from 'sweetalert2';

import * as api from '@/api.js';

import Nav from '../../components/NavComponent.vue';
import Pagination from '../../components/Pagination.vue';
import { usePaginationStore } from '../../stores/paginationStore.js';

const loadingStatus = ref({ loadingproduct: '' });
const isLoading = ref(false);
const route = useRoute();
const products = ref([]);
const pages = usePaginationStore();

onMounted(async () => {
    await getProducts();
});

async function getProducts() {
    try {
        const res = await api.getProductsAPI();
        products.value = res.data.products;
        const totalPages = Math.ceil(products.value.length / pages.itemsPerPage);
        pages.totalPages = totalPages;
        pages.setCurrentPage(1);
        console.log(pages.totalPages);
    }
    catch (err) {
        console.log(err);
    }
};

//根據當前頁與每頁數量計算分頁資料
const paginatedItems = computed(() => {
    const startIndex = (pages.currentPage - 1) * pages.itemsPerPage;
    const endIndex = startIndex + pages.itemsPerPage;
    return products.value.slice(startIndex, endIndex)
});


</script>

<template>
    <Nav />
    <div class="mt-5 pt-5 about">
        <div class="container main-content pt-5 px-5">
            <div class="text-end">
                <button class="btn btn-success" @click="openModal('new')">
                    建立新的產品
                </button>
            </div>
            <table class="table mt-4">
                <thead>
                    <tr>
                        <th width="120">
                            分類
                        </th>
                        <th>產品名稱</th>
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
                                <button type="button" class="btn btn-outline-primary btn-sm"
                                    @click="openModal('edit', item)">
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
    </div>
</template>
