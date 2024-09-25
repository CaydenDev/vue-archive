<template>
  <div>
    <h1>Image Gallery</h1>
    <div class="gallery">
      <img v-for="image in images" :key="image.id" :src="image.url" @click="showImage(image.url)" class="thumbnail" />
    </div>
    <div v-if="selectedImage">
      <h2>Selected Image:</h2>
      <img :src="selectedImage" class="large-image" @click="selectedImage = null" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { id: 1, url: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Image1' },
        { id: 2, url: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Image2' },
        { id: 3, url: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Image3' }
      ],
      selectedImage: null
    };
  },
  methods: {
    showImage(url) {
      this.selectedImage = url;
    }
  }
};
</script>

<style scoped>
.gallery {
  display: flex;
  gap: 10px;
}
.thumbnail {
  cursor: pointer;
  width: 150px;
  height: 150px;
}
.large-image {
  margin-top: 20px;
  cursor: pointer;
  width: 300px;
}
</style>
