import {createRouter, createWebHistory} from "vue-router";
import DefaultLayout from "../components/DefaultLayout";
import AuthLayout from "../components/AuthLayout";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import Register from "../views/Register";
import Notify from "../views/Notify";
import store from "../store";


const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: DefaultLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {path: '/dashboard', name: 'Dashboard', component: Dashboard},
      {path: '/notify', name: 'Notify', component: Notify},
    ]
  },
  {
    path: '/auth',
    redirect: '/login',
    name: 'Auth',
    meta:{isGuest:true},
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      }
    ]
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({name: 'Login'})
  } else if (store.state.user.token && to.meta.isGuest) {
    next({name: 'Dashboard'});
  } else {
    next();
  }
})

export default router;
