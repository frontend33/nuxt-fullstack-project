import { Store } from "vuex";

export default function ({$axios}) {
    $axios.onError(error => {
        if(error.response) {
            if(error.response.status === 401) {
                redirect('/admin/login?message=session')
                store.dispatch('auth/logout')
            }
            if(error.response.status = 500) {
                console.error('Server 500 error')
            }
        }
    })
}