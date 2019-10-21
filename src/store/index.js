import Vue from 'vue'
import Vuex from 'vuex'
import drink from './modules/drink'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    drink
  }
})
