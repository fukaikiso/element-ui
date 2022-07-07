import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home/index',
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('../views/Index.vue'),
        meta: {
          keepAlive: true,
        },
      },
      {
        path: 'me',
        name: 'Me',
        component: () => import('../views/Me.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/field',
    name: 'Field',
    component: () => import('../testing/Field.vue'),
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: () => import('../testing/Navbar.vue'),
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('../views/Article.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
