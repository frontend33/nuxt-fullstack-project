export default function({store, redirect}) {
    console.log(store.getters['auth/isAuthenticated'])
    if (!store.getters['auth/isAuthenticated']) {
        // В момент редиректа передаем гет параметр
        redirect('/admin/login?message=login')
    }
}