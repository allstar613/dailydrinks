
const state = {
  drink: {
    blackTea: {
      name: "紅茶",
      price: 20
    },
    greenTea: {
      name: "綠茶",
      price: 20
    },
    milkTea: {
      name: "奶茶",
      price: 30
    }
  },

  order: [{
    name: "小林",
    blackTea: 0,
    greenTea: 0,
    milkTea: 0,
    sum: 0
  }, {
    name: "小陳",
    blackTea: 1,
    greenTea: 0,
    milkTea: 0,
    sum: 20
  }, {
    name: "小張",
    blackTea: 1,
    greenTea: 0,
    milkTea: 0,
    sum: 20
  }, {
    name: "小黃",
    blackTea: 1,
    greenTea: 0,
    milkTea: 0,
    sum: 20
  }, {
    name: "小洪",
    blackTea: 1,
    greenTea: 0,
    milkTea: 0,
    sum: 20
  }]

};

// getters
const getters = {
};

const actions = {
  addOrder({ commit }, data) {
    commit('addOrder', data);
  },
  editOrder({ commit }, key) {
    console.log(key);
    commit('editOrder', key);
  },
  deleteOrder({ commit }, key) {
    commit('deleteOrder', key);
  },
};

const mutations = {
  addOrder(state, data) {
    state.order.push(data);
  },
  editOrder(state, key) {
    console.log(key.data);
    console.log(key.key);
    state.order[key.key] = key.data;

  },
  deleteOrder(state, key) {

    const temp = [];
    for (var i = 0; i < state.order.length; i++) {
      if (i != key) {
        temp.push(state.order[i])
      }
    }
    state.order = temp;
  }

};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}