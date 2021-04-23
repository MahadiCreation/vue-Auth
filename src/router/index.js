import { createRouter, createWebHistory } from "vue-router";
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
    },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
