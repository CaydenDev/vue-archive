<template>
  <div>
    <button @click="showModal = true">Open Modal</button>
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Modal Title</h2>
        <p>This is a modal dialog.</p>
        <button @click="showModal = false">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    };
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
