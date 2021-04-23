<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-success">
<div class="nav-wrap container">
  <router-link class="navbar-brand" :to="{name:'Home'}">Auth</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse float-right" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link v-if="!auth" class="nav-link text-white" :to="{name:'login'}">Login</router-link>
        <router-link v-else class="nav-link text-white" :to="{name:'dashboard'}">Dashboard</router-link>
      </li>
    </ul>
  </div>
</div>
</nav>
</template>

<script>
export default {
    computed:{
        auth(){
            return this.$store.getters.getAuthenticated
        }
    }
}
</script>

<style>

</style>