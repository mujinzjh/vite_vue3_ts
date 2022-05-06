import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home/component1'
  },
  {
    path: '/login',
    component: () => import('@/Views/Login/login.vue'),
  },
  {
    path: '/home',
    component: () => import('@/Views/Layout/home/index.vue'),
    children: [
      {
        path: '/home/component1',
        meta: {
          title: '组件一',
        },
        component: () => import('@/Views/Page/component1/index.vue'),
      },
      {
        path: '/home/component2',
        meta: {
          title: '组件二',
        },
        component: () => import('@/Views/Page/component2/index.vue'),
      }
    ]
  }
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;