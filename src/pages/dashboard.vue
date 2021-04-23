<template>
<div class="dashboard container mt-5">
    <div class="card">
        <div class="card-header">
            Dashboard
        </div>
        <div class="card-body">
            <h1>Welcome, {{getUser.user.first_name+' '+getUser.user.last_name}}</h1>
        </div>
    </div>
</div>
</template>

<script>
export default {
    computed:{
        getUser(){
            return this.$store.getters.getUser
        }
    }
}
</script>

<style>

</style>