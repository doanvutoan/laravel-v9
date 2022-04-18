import {createRouter, createWebHistory} from "vue-router";
import DefaultLayout from "../components/DefaultLayout";
import AuthLayout from "../components/AuthLayout";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import Notify from "../views/Notify";
import store from "../store";

const prefix = '/permission';

const routes = [
  {
    path: prefix+'/',
    redirect: prefix+'/dashboard',
    component: DefaultLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {path: prefix+'/dashboard', name: 'Dashboard', component: Dashboard},
      {path: prefix+'/notify', name: 'Notify', component: Notify},
    ]
  },
  {
    path: prefix+'/auth',
    redirect: prefix+'/login',
    name: 'Auth',
    meta:{isGuest:true},
    component: AuthLayout,
    children: [
      {
        path: prefix+'/login',
        name: 'Login',
        component: Login
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach( (to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({name: 'Login'})
  } else if (store.state.user.token && to.meta.isGuest) {
    next({name: 'Dashboard'});
  } else {
    next();
  }
})

export default router;
