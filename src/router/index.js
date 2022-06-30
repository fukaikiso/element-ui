import Vue from 'vue';
import VueRouter from 'vue-router';
import Nav from '../views/Nav.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/nav',
    name: 'Navigation',
    component: Nav,
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue'),
  },
  {
    path: '/container',
    name: 'Container',
    component: () => import('../views/Container.vue'),
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('../views/Components.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
