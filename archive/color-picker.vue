<template>
  <div>
    <h1>Color Picker</h1>
    <input type="color" v-model="selectedColor" />
    <p style="color: selectedColor">Selected Color: {{ selectedColor }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedColor: '#ffffff'
    };
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 10px;
}
</style>
