import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/dummy',
    name: 'Dummy',
    component: () => import(/* webpackChunkName: "dummy" */ '../views/Dummy.vue'),
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: () => import(/* webpackChunkName: "buttons" */ '../views/Buttons.vue'),
  },
  {
    path: '/badge',
    name: 'Badge',
    component: () => import(/* webpackChunkName: "badge" */ '../views/Badge.vue'),
  },
  {
    path: '/formgroup',
    name: 'FormGroup',
    component: () => import(/* webpackChunkName: "formgroup" */ '../views/FormGroup.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
