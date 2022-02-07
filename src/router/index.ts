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
  {
    path: '/modal',
    name: 'Modal',
    component: () => import(/* webpackChunkName: "modal" */ '../views/Modal.vue'),
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: () => import(/* webpackChunkName: "tabs" */ '../views/Tabs.vue'),
  },
  {
    path: '/formmodal',
    name: 'FormModal',
    component: () => import(/* webpackChunkName: "formmodal" */ '../views/FormModal.vue'),
  },
  {
    path: '/pagination',
    name: 'Pagination',
    component: () => import(/* webpackChunkName: "pagination" */ '../views/Pagination.vue'),
  },
  {
    path: '/alerts',
    name: 'Alerts',
    component: () => import(/* webpackChunkName: "alerts" */ '../views/Alerts.vue'),
  },
  {
    path: '/spinner',
    name: 'Spinner',
    component: () => import(/* webpackChunkName: "spinner" */ '../views/Spinner.vue'),
  },
  {
    path: '/popover',
    name: 'Popover',
    component: () => import(/* webpackChunkName: "popover" */ '../views/Popover.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
