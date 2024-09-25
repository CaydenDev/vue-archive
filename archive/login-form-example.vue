<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="username" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p v-if="loginMessage">{{ loginMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      loginMessage: ''
    };
  },
  methods: {
    handleLogin() {

      if (this.username === 'user' && this.password === 'pass') {
        this.loginMessage = 'Login successful!';
      } else {
        this.loginMessage = 'Invalid credentials, please try again.';
      }
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
input {
  margin-bottom: 10px;
}
</style>
