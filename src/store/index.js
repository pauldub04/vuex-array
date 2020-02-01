import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    number: 0,
    array: [[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]],
  },
  mutations: {
    addDelta(state, delta) {
      state.array = state.array.map(line=>line.map(el=>el+delta));
    },
    multAll(state) {
      let sum = 0;
      let newArr = state.array.map(v=>v);
      for (let i = 0; i < newArr.length; i++)
        for (let j = 0; j < newArr[i].length; j++)
          if (i == j || i + j == newArr.length - 1)
            sum += newArr[i][j];

        newArr[0][0] = sum;
        state.array = newArr;
    },
    swapLine(state, obj) {
      let a = obj.a;
      let b = obj.b;
      let tmp = state.array;

      for (let i = 0; i < tmp.length; i++) {
        let q = tmp[i][a];
        tmp[i][a] = tmp[i][b];
        tmp[i][b] = q;
      }

      state.array = tmp;
    }
  },
  actions: {
    addOne(ctx) {
      ctx.commit('addDelta', 1)
    },
    plusDiag(ctx) {
      ctx.commit('multAll')
    },
    swapLine(ctx, obj) {
      ctx.commit('swapLine', obj);
    }
  },
  modules: {
  },
  getters: {
    getNumber: function (state) { return state.number },
    getArray: function (state) { return state.array },
  }
})
