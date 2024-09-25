<template>
  <div>
    <h1>Countdown Timer</h1>
    <div>
      <label>Enter seconds:</label>
      <input type="number" v-model="seconds" />
      <button @click="startCountdown">Start</button>
    </div>
    <h2 v-if="remainingTime >= 0">{{ remainingTime }} seconds remaining</h2>
    <h2 v-if="remainingTime < 0">Time's up!</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seconds: 0,
      remainingTime: null,
      timer: null
    };
  },
  methods: {
    startCountdown() {
      this.remainingTime = this.seconds;
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.remainingTime > 0) {
          this.remainingTime--;
        } else {
          clearInterval(this.timer);
        }
      }, 1000);
    }
  }
};
</script>

<style scoped>
input {
  width: 100px;
  margin-right: 10px;
}
button {
  margin-top: 10px;
}
</style>
