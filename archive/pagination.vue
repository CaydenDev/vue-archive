<template>
  <div>
    <button @click="prevPage" :disabled="page === 1">Previous</button>
    <span>Page {{ page }} of {{ totalPages }}</span>
    <button @click="nextPage" :disabled="page === totalPages">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      totalPages: 10 
    };
  },
  methods: {
    nextPage() {
      if (this.page < this.totalPages) {
        this.page++;
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
      }
    }
  }
};
</script>

<style scoped>
button {
  margin: 0 5px;
}
</style>
