<template>
    <div>Logout</div>
</template>
<script>
export default {
    layout: 'admin',
    middleware: ['admin-auth'],
    // очистим сессию
    beforeCreate () {
        this.$store.dispatch('auth/logout')
        this.$router.push('/admin/login?message=logout')
    }
}
</script>