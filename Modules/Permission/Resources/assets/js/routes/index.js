import {createRouter, createWebHistory} from "vue-router";
import store from "../controllers";
/*load views layout*/
import DefaultLayout from "../views/layouts/DefaultLayout";
import AuthLayout from "../views/layouts/AuthLayout";
import {DashboardV} from "../views/dashboard";
import {LoginV} from "../views/auth";
import {NotifyListV} from "../views/notify";
import {GuardListV,GuardCreateV,GuardViewV} from "../views/guard";

/*setup default*/
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
      {path: prefix+'/dashboard', name: 'Dashboard', component: DashboardV},
      {path: prefix+'/notify', name: 'Notify', component: NotifyListV},
      {path: prefix+'/guard', name: 'Guard', component: GuardListV},
      {path: prefix+'/guard/create', name: 'GuardCreate', component: GuardCreateV},
      {path: prefix+'/guard/:id', name: 'GuardView', component: GuardViewV},
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
        component: LoginV
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

/*middleware before direct to router*/
router.beforeEach( (to, from, next) => {
  if (to.meta.requiresAuth && !store.state.authController.user.token) {
    next({name: 'Login'})
  } else if (store.state.authController.user.token && to.meta.isGuest) {
    next({name: 'Dashboard'});
  } else {
    next();
  }
})

export default router;
