<template>
  <div class="title">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: !hasPreviousPage }">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="previousPage">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li class="page-item" :class="{ active: page === currentPage }" v-for="page in totalPages "
          :key="page + 'page'">
          <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
        </li>

        <li class="page-item" :class="{ disabled: !hasNextPage }">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="nextPage">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { usePaginationStore } from '../stores/paginationStore.js';
import { ref, onMounted, computed } from 'vue';

const store = usePaginationStore();

const currentPage = computed(() => store.currentPage);
const totalPages = computed(() => store.totalPages);
const hasPreviousPage = computed(() => currentPage.value > 1);
const hasNextPage = computed(() => currentPage.value < totalPages.value);

onMounted(() => {
});

const changePage = (page) => {
  store.setCurrentPage(page);
};

const previousPage = () => {
  if (hasPreviousPage.value) {
    store.setCurrentPage(currentPage.value - 1);
  }
};

const nextPage = () => {
  if (hasNextPage.value) {
    store.setCurrentPage(currentPage.value + 1);
  }
};
</script>