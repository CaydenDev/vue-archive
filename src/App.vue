<template>
  <div id="app">
    <h1>GitHub Repositories Viewer</h1>
    <RepoList />
  </div>
</template>

<script>
import RepoList from './components/RepoList.vue';

export default {
  components: {
    RepoList,
  },
};
</script>

<style>

</style>
