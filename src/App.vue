<template>
  <div id="app">
    <ProblemPractice msg="Greetings"/>
  </div>
</template>

<script>
import ProblemPractice from './components/ProblemPractice.vue'

export default {
  name: 'App',
  components: {
    ProblemPractice
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
