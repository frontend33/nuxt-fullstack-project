import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
    token: null
})

export const mutations  = {
    SetToken(state, token) {
        state.token = token
    },
    clearToken (state) {
        state.token = null
    }
}

export const actions  = {
    async login  ({commit, dispatch}, formData) {
        const token =  await new Promise (resolve => {
            setTimeout(() => resolve('mock-token'), 2000)
        })
        dispatch('setToken', token)
        
    },
    setToken ({commit}, token) {
        commit('SetToken', token)
    },
    logout({commit}) {
        commit('clearToken')
    }
}

export const getters = {
    isAuthenticated: state => Boolean(state.token)

}
