<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-success">
    <div class="nav-wrap container">
      <router-link class="navbar-brand" :to="{ name: 'Home' }"
        >Auth</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse float-right"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link
              v-if="!auth"
              class="nav-link text-white"
              :to="{ name: 'login' }"
              >Login</router-link
            >
            <router-link
              v-if="auth"
              class="nav-link text-white"
              :to="{ name: 'dashboard' }"
              >Dashboard</router-link
            >
          </li>
          <li class="nav-item">
            <a
              v-if="auth"
              class="nav-link text-white"
              href=""
              @click.prevent="logout"
              >Logout</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axiosConfig from '../axiosConfig'
export default {
  computed: {
    auth() {
      return this.$store.getters.getAuthenticated;
    },
  },
  methods: {
    logout() {
      axiosConfig.post('/logout')
        .then(() => {
          localStorage.removeItem('auth')
          localStorage.removeItem('token')
          localStorage.removeItem('userData')
          this.$store.commit('SET_AUTHHENTICATED', false)
          this.$router.push({name:'login'})
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style></style>
