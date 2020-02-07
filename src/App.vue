<template>
  <div id="app">
    <div v-for="(arr, key) in $store.getters.getArray" :key="key">
      <div v-for="(value, index) in arr" :key="index" class="array-line">
        {{value}}
      </div>
    </div>
    <button @click="addOne">+1</button>
    <button @click="plusDiag">+ diag</button>
    <br/>
    Swap lines
    <input type="text" v-model="firstLine">
    <input type="text" v-model="secLine">
    <button @click="swapLine">Swap</button>
    <br/>
    Swap columns
    <input type="text" v-model="firstCol">
    <input type="text" v-model="secCol">
    <button @click="swapCol">Swap</button>
    <br/>
    <button @click="AddTable">AddTable</button>
    <button @click="AddLine">AddLine</button>
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
    swapLine() {
      if (this.firstLine > this.$store.getters.getArray.length ||
          this.secLine > this.$store.getters.getArray.length ||
          this.firstLine == 0 ||
          this.secLine == 0)
        alert('Value is not available');
      else
        this.$store.dispatch('swapLine', { a: this.firstLine - 1,
                                         b: this.secLine - 1 }
      );
    },
    swapCol() {
      if (this.firstCol > this.$store.getters.getArray.length ||
          this.secCol > this.$store.getters.getArray.length ||
          this.firstCol == 0 ||
          this.secCol == 0)
        alert('Value is not available');
      else
        this.$store.dispatch('swapCol', { a: this.firstCol - 1,
                                        b: this.secCol - 1 }
      );
    },
    AddTable(){
      this.$store.dispatch("addTable");
    },
    AddLine(){
      this.$store.dispatch("addLine");
    }
  },
  data() {
    return {
      firstLine: '',
      secLine: '',
      firstCol: '',
      secCol: '',
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
