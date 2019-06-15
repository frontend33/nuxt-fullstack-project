import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'cookie'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
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
            const {token} =  await this.$axios.$post('/api/auth/admin/login', formData)
            dispatch('setToken', token)

        } catch (e) {
            // Третий параметр передать что setError смотрим из корня
            commit('setError', e, { root: true })
            throw e
        }
    },
    async createUser({commit},formData) {
        try {
            await this.$axios.$post('/api/auth/admin/create', formData)
            
        } catch (e) {
            commit('setError', e, { root: true })
            throw e
        }
    },
    setToken({ commit }, token) {
        this.$axios.setToken(token, 'Bearer')
        commit('SetToken', token)
        Cookies.set('jwt-token', token)
    },
    logout({ commit }) {
        this.$axios.setToken(false)
        commit('clearToken')
        Cookies.remove('jwt-token')
    },
    autoLogin({dispatch}) {
        // Если загружается страница где уже нужен токен в начале рендериться на сервере, 
        // там надо проверять есть ли токен локал сторэйдж не будет работать
        // Куки сохраняются на сервере и сохраняются с любым запросом
         // Если на клиенте используем document.cookie , на сервере
        const cookieStr = process.browser
         ? document.cookie
         : this.app.context.req.headers.cookie

        const cookies = Cookie.parse(cookieStr || '') || {}
        const token = cookies['jwt-token']
        console.log(token)
       if (isJWTValid(token)) {
           dispatch('setToken', token)
       } else {
           dispatch('logout')
       }

    }
}

export const getters = {
    isAuthenticated: state => Boolean(state.token),
    token: state => state.token

}

function isJWTValid(token) {
    if (!token) {
        return false
    }
    const jwtData = jwtDecode(token) || {}
    const expires = jwtData.exp || 0
    return (new Date().getTime() / 1000) < expires
}
