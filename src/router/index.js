import { createRouter, createWebHistory } from "vue-router";
import Store from '../store'
import Login from "../pages/login";
import Home from '../pages/home'
import Dashboard from '../pages/dashboard'

const routes = [
    {
      path: "/login",
      component: Login,
      name: "login",
      meta: {
        title: "login",
      },
      beforeEnter: (to, from, next)=>{
          if(Store.getters.getAuthenticated){
            return next({
                 name:'dashboard'
             }) 
          }else{
              next()
          }
      }
    },
    {
      path: "/",
      component: Home,
      name: "Home",
      meta: {
        title: "Home",
      },
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "dashboard",
      meta: {
        title: "dashboard",
      },
      beforeEnter: (to, from, next)=>{
          if(!Store.getters.getAuthenticated){
            return next({
                 name:'login'
             }) 
          }else{
              next()
          }
      }
    },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
