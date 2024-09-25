<template>
  <div>
    <h1>Random Quote Generator</h1>
    <p>{{ quote }}</p>
    <button @click="generateQuote">Get a new quote</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: "Click the button to get a quote!"
    };
  },
  methods: {
    generateQuote() {
      const quotes = [
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "Your time is limited, don't waste it living someone else's life.",
        "You only live once, but if you do it right, once is enough.",
        "In the end, we only regret the chances we didn't take.",
        "Life is what happens when you're busy making other plans."
      ];
      this.quote = quotes[Math.floor(Math.random() * quotes.length)];
    }
  }
};
</script>

<style scoped>
button {
  margin-top: 10px;
}
</style>
