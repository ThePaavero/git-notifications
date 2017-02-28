import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  events: []
}

const mutations = {
  addEvent(state, eventObject) {
    eventObject.socketMessageReceived = new Date()
    state.events.push(eventObject)
  }
}

export default new Vuex.Store({
  state,
  mutations
})
