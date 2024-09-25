<template>
  <div>
    <h1>Notes</h1>
    <textarea v-model="newNote" placeholder="Write a new note..."></textarea>
    <button @click="addNote">Add Note</button>
    <ul>
      <li v-for="(note, index) in notes" :key="index">
        {{ note }}
        <button @click="removeNote(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newNote: '',
      notes: []
    };
  },
  methods: {
    addNote() {
      if (this.newNote.trim() === '') return;
      this.notes.push(this.newNote);
      this.newNote = '';
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    }
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 100px;
}
button {
  margin-top: 10px;
}
</style>
