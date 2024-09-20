<template>
  <LoginBox title="please login."/>
  <img width="300" height="400" alt="cat" src="./assets/thumbs.jpeg">
  <HelloWorld msg="Look at this Lazy Fuck."/>
  <div :style="{ backgroundColor: 'lightgray', padding: '10px' }">
    <button :style="{ color: 'blue', fontSize: '20px' }" @click="fetchRandom">click to generate a random number 1-100: {{ randomNumber }}</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LoginBox from './components/LoginBox.vue'
import axios from 'axios'



export default {
  name: 'App',
  components: {
    HelloWorld,
    LoginBox
  },
  data() {
    return {
      randomNumber: null
    }
  },
  methods: {
    async fetchRandom() {
      try {
        const res = await axios.get('http://localhost:8000/examples/random')
        this.randomNumber = res.data
      } catch (error) {
        console.error('couldnt get random no.')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
