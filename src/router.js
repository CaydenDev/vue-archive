import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import RepoList from './components/RepoList.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/repositories', component: RepoList } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
