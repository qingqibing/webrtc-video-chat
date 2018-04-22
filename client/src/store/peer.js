import Peer from 'simple-peer'

export default {
  state: {
    peer: null,
    conn: {
      sdp: null,
      type: null
    }
  },

  getters: {
    currentPeer: state => state.peer,
    currentConn: state => state.conn
  },

  mutations: {
    SET_PEER(state, data) {
      state.peer = data
    },

    SET_CONN(state, data) {
      state.conn.sdp = data.sdp
      state.conn.type = data.type
    }
  },

  actions: {
    setPeer({ commit }, data) {
      const peer = new Peer({
        initiator: data,
        trickle: false
      })

      commit('SET_PEER', peer)
    },

    setConn({ commit }, data) {
      commit('SET_CONN', data)
    }
  }
}