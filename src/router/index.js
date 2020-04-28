import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/landing',
    name: 'Lading',
    component: () => import('../views/landing/Landing.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/Register.vue'),
  },
  {
    path: '/',
    component: () => import('../components/Layout.vue'),
    /* beforeEnter: (to, from, next) => {
      if (false) next({ name: 'Login' });
      else next();
    }, */
    children: [
      {
        path: '/',
        name: 'Init',
        component: () => import('../views/init/Init.vue'),
      },
      {
        path: '/messages',
        name: 'Messages',
        component: () => import('../views/messages/Messages.vue'),
      },
      {
        path: '/account',
        name: 'Account',
        component: () => import('../views/account/Account.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
