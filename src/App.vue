<template>
  <div id="app">
    <ProblemPractice 
      :msg="`If we only count multiples of 3 and 5, the sum of all those integers from 1 to ${number} is `" 
      :number="number"
      @handleNumInput="updateNumber"
    />
  </div>
</template>

<script>
import ProblemPractice from './components/ProblemPractice.vue'

export default {
  name: 'App',
  components: {
    ProblemPractice
  },
  data() {
    return {
      number: 0,
    }
  },
  methods: {
    updateNumber(value) {
        this.number = value === '' ? 0 : parseInt(value, 10);   
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
