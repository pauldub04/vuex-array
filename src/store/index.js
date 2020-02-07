import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    number: 0,
    arr: [[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]],
  },
  mutations: {
    AddDelta(state, delta) {
      state.arr = state.arr.map(line=>line.map(el=>el+delta));
    },
    MultAll(state) {
      let sum = 0;
      let newArr = state.arr.map(v=>v);
      for (let i = 0; i < newArr.length; i++)
        for (let j = 0; j < newArr[i].length; j++)
          if (i == j || i + j == newArr.length - 1)
            sum += newArr[i][j];

        newArr[0][0] = sum;
        state.arr = newArr;
    },
    SwapLine(state, obj) {
      let brr = state.arr.map(v => v);
      let a;
      for(let i = 0; i < brr.length; i++){
        a = brr[obj.a][i];
        brr[obj.a][i] = brr[obj.b][i];
        brr[obj.b][i] = a;
      }
      state.arr = brr;
    },
    SwapCol(state, obj) {
      let brr = state.arr.map(v => v);
      let a;
      for(let i = 0; i < brr.length; i++){
        a = brr[i][obj.a];
        brr[i][obj.a] = brr[i][obj.b];
        brr[i][obj.b] = a;
      }
      state.arr = brr;
    },
    AddLine(state){
      let brr = state.arr;
      brr.push(state.arr[0]);
      state.arr = brr;
    },
    AddTable(state){
      let brr = state.arr;
      for(let i = 0; i < state.arr.length; i++){
        brr[i].push(1);
      }
      state.arr = brr;
    }
  },
  actions: {
    addOne(ctx) {
      ctx.commit('AddDelta', 1)
    },
    plusDiag(ctx) {
      ctx.commit('MultAll')
    },
    swapLine(ctx, obj) {
      ctx.commit('SwapLine', obj);
    },
    swapCol(ctx, obj) {
      ctx.commit('SwapCol', obj);
    },
    addTable(ctx){
      ctx.commit('AddTable')
    },
    addLine(ctx){
      ctx.commit("AddLine")
    }
  },
  modules: {
  },
  getters: {
    getNumber: function (state) { return state.number },
    getArray: function (state) { return state.arr },
  }
})
