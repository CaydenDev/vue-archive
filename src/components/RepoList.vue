<template>
  <div>
    <h2>Repositories</h2>
    <div v-if="isLoading">Loading...</div>
    <ul v-else>
      <li v-for="repo in repos" :key="repo.id">
        <strong>{{ repo.name }}</strong> - {{ repo.language || "Not Specified" }}
        <LanguageStats :languageStats="languageStats" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import LanguageStats from './LanguageStats.vue';

export default {
  components: {
    LanguageStats,
  },
  data() {
    return {
      repos: [],
      isLoading: true,
      languageStats: {},
    };
  },
  methods: {
    async fetchRepositories() {
      const users = ['caydendev', 'ProjectHaven', 'dieatzen'];
      const allRepos = [];

      for (const user of users) {
        const response = await axios.get(`https://api.github.com/users/${user}/repos`);
        allRepos.push(...response.data);
      }

      this.repos = allRepos;
      this.calculateLanguageStats(allRepos);
      this.isLoading = false;
    },
    calculateLanguageStats(repos) {
      const langCount = {};
      let totalLangs = 0;

      repos.forEach(repo => {
        if (repo.language) {
          langCount[repo.language] = (langCount[repo.language] || 0) + 1;
          totalLangs++;
        }
      });

      Object.keys(langCount).forEach(lang => {
        langCount[lang] = ((langCount[lang] / totalLangs) * 100).toFixed(2);
      });

      this.languageStats = langCount;
    },
  },
  created() {
    this.fetchRepositories();
  },
};
</script>

<style>
</style>
