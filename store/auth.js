import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
    token: null
})

export const mutations = {
    SetToken(state, token) {
        state.token = token
    },
    clearToken(state) {
        state.token = null
    }
}

export const actions = {
    async login({ commit, dispatch }, formData) {
        try {
            const {token} = this.$axios.$post('/api/auth/admin/login', formData)
            console.log('token',token)

        } catch (e) {
            // Третий параметр передать что setError смотрим из корня
            commit('setError', e, { root: true })
            throw e
        }


    },
    async createUser({commit},formData) {
        try {
            console.log('createUser',formData)
        } catch (e) {

        }
    },
    setToken({ commit }, token) {
        commit('SetToken', token)
    },
    logout({ commit }) {
        commit('clearToken')
    }
}

export const getters = {
    isAuthenticated: state => Boolean(state.token)

}
