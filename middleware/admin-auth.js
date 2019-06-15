export default function({store, redirect}) {
    if (!store.getters['auth/isAuthenticated']) {
        // В момент редиректа передаем гет параметр
        redirect('/admin/login?message=login')
    }
}