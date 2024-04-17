import { defineStore } from 'pinia';

export const usePaginationStore = defineStore('pagination', {
    state: () => ({
        currentPage: 1,
        itemsPerPage: 6,
        totalPages: 0,
        filteredItems: [],
    }),
    getters: {
        hasPreviousPage(state) {
            return state.currentPage > 1;
        },

        hasNextPage(state) {
            return state.currentPage < state.totalPages;
        },
    },

    actions: {
        setCurrentPage(page) {
            this.currentPage = page;
        },
    },
});
