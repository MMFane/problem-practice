<template>
  <div id="problem-practice">
    <label>Number</label>
    <input 
      placeholder="Enter any number" 
      type="number" 
      value="number" 
      @input="handleInput"
    />
    <p class="message">{{ msg }} {{ sum }}</p>
    <div v-if="number > 2">
      <p>How'd we get there?</p>
      <p>
        <span v-for="(num, index) in addList" :key="`add-${index}`">
          {{ num }}
          <span v-if="index < addList.length - 1"> + </span>
        </span>
        <span>= {{ sum }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProblemPractice',
  computed: {
    addList() {
      const tempArray = [];
      for (let i = 1; i <= this.number; i++) {    
        if (i % 3 === 0 || i % 5 === 0)
          tempArray.push(i);
      }
      return tempArray;
    },
    sum() {
      let sum = 0;
      for (let i = 1; i <= this.number; i++) {
        if (i % 3 === 0 || i % 5 === 0)
          sum += i;
      }
      return sum;
    },
    sumAlt() {
      return (this.number * (this.number + 1))/2;
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('handleNumInput', event.target.value);
    }
  },
  props: {
    msg: String,
    number: Number,
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
