<template>
  <div id="app">
    <div v-for="(arr, key) in $store.getters.getArray" :key="key">
      <div v-for="(value, index) in arr" :key="index" class="array-line">
        {{value}}
      </div>
    </div>
    <button @click="addOne">+1</button>
    <button @click="plusDiag">+ diag</button>
    <input type="number" v-model="firstInd"><br/>
    <input type="number" v-model="secInd">
    <button @click="swapCols">swap</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  methods: {
    addOne() {
      this.$store.dispatch('addOne');
    },
    plusDiag() {
      this.$store.dispatch('plusDiag');

    },
    swapCols() {
      this.$store.dispatch('swapLine', { 'a' : this.firstInd,
                                         'b' : this.secInd }
      );
    }
  },
  data() {
    return {
      firstInd: '',
      secInd: '',
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.array-line {
  display: inline;
}
</style>
