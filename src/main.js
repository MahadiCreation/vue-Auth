import { createApp } from 'vue'
import Index from './App.vue'
import Router from './router'
import Store from './store/index'

const App = createApp(Index)
App.use(Router)
App.use(Store)
App.mount('#app')
