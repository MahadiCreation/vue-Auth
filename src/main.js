import { createApp } from 'vue'
import Index from './App.vue'
import Router from './router'
import Store from './store/index'

let auth = localStorage.getItem('auth')
if(auth){
    Store.dispatch('authUser').then(()=>{
        const App = createApp(Index)
        App.use(Router)
        App.use(Store)
        App.mount('#app')
    })
}else{
    const App = createApp(Index)
    App.use(Router)
    App.use(Store)
    App.mount('#app')
}

