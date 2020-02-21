<template>
  <div id="problem-practice">
    <label>Name</label>
    <input placeholder="Enter your name" v-model="name"/>
    <p class="message">{{ msg }}<span v-show="name">, {{ name }}!</span></p>
  </div>
</template>

<script>
export default {
  name: 'ProblemPractice',
  data() {
    return {
      name: '',
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
