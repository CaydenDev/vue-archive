<template>
  <div>
    <h1>Stopwatch</h1>
    <p>{{ formattedTime }}</p>
    <button @click="startStopwatch">{{ isRunning ? 'Stop' : 'Start' }}</button>
    <button @click="resetStopwatch">Reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seconds: 0,
      isRunning: false,
      timer: null
    };
  },
  methods: {
    startStopwatch() {
      if (this.isRunning) {
        clearInterval(this.timer);
      } else {
        this.timer = setInterval(() => {
          this.seconds++;
        }, 1000);
      }
      this.isRunning = !this.isRunning;
    },
    resetStopwatch() {
      clearInterval(this.timer);
      this.seconds = 0;
      this.isRunning = false;
    }
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.seconds / 60);
      const seconds = this.seconds % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
  }
};
</script>

<style scoped>
button {
  margin-top: 10px;
}
</style>
