<template>
  <div>
    <h1>Weather Display</h1>
    <div>
      <input v-model="city" placeholder="Enter city name" />
      <button @click="getWeather">Get Weather</button>
    </div>
    <div v-if="weather">
      <h2>Weather in {{ city }}</h2>
      <p>Temperature: {{ weather.main.temp }} °C</p>
      <p>Weather: {{ weather.weather[0].description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: '',
      weather: null
    };
  },
  methods: {
    async getWeather() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=ABC&units=metric`); // at "ABC" put yout OPW API-Key
      if (response.ok) {
        this.weather = await response.json();
      } else {
        alert('City not found!');
      }
    }
  }
};
</script>

<style scoped>
input {
  margin-bottom: 10px;
}
button {
  margin-left: 5px;
}
</style>
