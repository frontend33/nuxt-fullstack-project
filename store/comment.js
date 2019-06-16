export const actions = {
    async create({commit}, data) {
        try {
            console.log(data)
            return await this.$axios.$post('/api/comment', data)
        } catch (e) {
            commit('SetError', e, {root : true})
        }
    }
}