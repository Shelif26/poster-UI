import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/loginLoyout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/loginPage.vue'),
      },
    ],
  },
  {
    path: '/s',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/l',
        component: () => import('pages/ErrorNotFound.vue'),
      },
    ],
  },
  // Always leave this as the last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
