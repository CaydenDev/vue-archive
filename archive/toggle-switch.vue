<template>
  <div>
    <label>
      <input type="checkbox" v-model="isToggled" />
      Toggle Switch
    </label>
    <p>The switch is: {{ isToggled ? 'ON' : 'OFF' }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isToggled: false
    };
  }
};
</script>

<style scoped>
label {
  font-size: 20px;
}
</style>
