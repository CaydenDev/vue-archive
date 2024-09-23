<template>
  <div class="language-stats">
    <h4>Language Stats</h4>
    <ul>
      <li v-for="(percentage, language) in languageStats" :key="language">
        {{ language }}: {{ percentage }}%
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    languageStats: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.language-stats {
  margin-left: 20px;
  font-size: 0.9em;
}
</style>
