import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: localStorage.getItem('username') ? true : false,
    formAinfo: {},
    formBinfo: {},

    // username: '',
  },
  getters: {
    getUserState: state => {
      return state.isLogin
    },
    getFormC: state => {
      const { formAinfo} = state
      const { formBinfo} = state
      const formCinfo = {
        formAinfo,
        formBinfo
      }
      console.log(formCinfo)
      return formCinfo
      // console.log(Object.assign({}, state.formAinfo, state.formBinfo))
      // return Object.assign({}, state.formAinfo, state.formBinfo)
    }
  },
  mutations: {
    setLogin(state,val) {
      state.isLogin = val
    },
    setFormAInfo(state, val) {
      state.formAinfo = val
    },
    setFormBInfo(state, val) {
      state.formBinfo = val
    }
  },
  actions: {
    setLogin: ({commit}, val) => {
      commit('setLogin', val)
    },
    setFormAInfo: ({commit}, val) => {
      console.log(val)
      commit('setFormAInfo', val)
    },
    setFormBInfo: ({commit}, val) => {
      console.log(val)
      commit('setFormBInfo', val)
    }
  }
})
