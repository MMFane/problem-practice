<template>
  <div id="problem-practice">
    <label>Number</label>
    <input placeholder="Enter any number" type="number" v-model.number="number"/>
    <p class="message">{{ msg }} {{ sum }}, aka {{ sumAlt }}, yo!</p>
  </div>
</template>

<script>
export default {
  name: 'ProblemPractice',
  computed: {
    sum() {
      let sum = 0;
      for (let i = 1; i <= this.number; i++) {
          sum += i;
      }
      return sum;
    },
    sumAlt() {
      return (this.number * (this.number + 1))/2;
    }
  },
  data() {
    return {
      number: 1
    }
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.message {
  font-size: 1.25rem;
  font-weight: bold;
}

label {
  margin-right: 1rem;
}
</style>
