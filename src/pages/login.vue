<template>
  <section class="login">
      <div class="login-wrap container mt-5">
          <div class="card">
              <div class="card-header">
                  Login
              </div>
              <div class="card-body">
                <div v-if="errorMessage" class="alert alert-danger" role="alert">
                    {{errorMessage}}
                </div>
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="user">UserName</label>
                        <input v-model="form.username" type="text" class="form-control" id="user">
                    </div>
                    <div class="form-group">
                        <label for="pass">Password</label>
                        <input v-model="form.password" type="password" class="form-control" id="pass">
                    </div>
                    <button type="submit" class="btn btn-success" :disabled="isLoading">
                        <span v-if="isLoading">Loading...</span>
                        <span v-else>Login</span>
                    </button>
                </form>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            form:{
                username:'tsakib360',
                password:'sakib123#@'
            },
            isLoading:false,
            errorMessage:'',
        }
    },
    methods:{
        login(){
            this.isLoading = true
            axios.post('http://lpapi.duckpeon.com/login', this.form).then(res=>{
                this.isLoading = false
                this.$store.commit('SET_USER', res.data);
                this.$store.commit('SET_AUTHHENTICATED', true);
                localStorage.setItem('userData',JSON.stringify(res.data))
                localStorage.setItem('auth', true)
                localStorage.setItem('token', res.data.token)
                this.$router.push({name:'dashboard'})
            }).catch(e=>{
                this.isLoading = false
                console.log(e);
                this.errorMessage = e.response.data.message
            })
        }
    }
}
</script>

<style>

</style>