<template>
  <div>
    <h1>My To-Do List</h1>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" />
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.text }}
        <button @click="removeTask(task.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === '') return;
      this.tasks.push({ id: Date.now(), text: this.newTask });
      this.newTask = '';
    },
    removeTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  }
};
</script>

<style scoped>
input {
  margin-bottom: 10px;
}
button {
  margin-left: 10px;
}
</style>
