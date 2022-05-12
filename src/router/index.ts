import { createRouter, createWebHashHistory, NavigationFailure, NavigationGuardNext, RouteLocationNormalized, Router, RouteRecordRaw } from "vue-router";
import NProgress from 'nprogress';

NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });

const Login = () => import('@/Views/Login/login.vue');
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/index',
    component: () => import('@/Views/Layout/home/index.vue'),
    name: 'home',
    redirect: '/home',
    children: [
      {
        path: '/home',
        meta: {
          title: '首页',
        },
        component: () => import('@/Views/Page/home/index.vue'),
      },
      {
        path: '/systemManager',
        component: () => import('@/Views/Page/systemManager/index.vue'),
        children: [
          {
            path: '/systemManager/userManager',
            component: () => import('@/Views/Page/systemManager/userManager.vue'),
          },
          {
            path: '/systemManager/roleManager',
            component: () => import('@/Views/Page/systemManager/roleManager.vue'),
          }
        ],
      },
      {
        path: '/logManager/operationManager',
        component: () => import('@/Views/Page/logManager/operationLog.vue'),
      },
      {
        path: '/logManager/loginLog',
        component: () => import('@/Views/Page/logManager/loginLog.vue'),
      }
    ]
  }
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});


const LOGIN_PAGE = 'login';
const toMenuList = () => {
  const menu = sessionStorage.getItem('menu');
  const menuList: any[] = menu && Object.values(JSON.parse(menu)) || [];
  const result: Array<RouteRecordRaw> = [];

  for (let i = 0; i < menuList.length; i++) {
    result.push(menuList[i]);
    if (menuList[i].children && menuList[i].children.length) {
      for (let j = 0; j < menuList[i].children.length; j++) {
        result.push(menuList[i].children[j]);
      }
    }
  }
  return result;
}
const isHasAccess = function (path: string) {
  const menuList: Array<RouteRecordRaw> = toMenuList();
  let result = false;
  for (let i = 0; i < menuList.length; i++) {
    if (path == menuList[i].path) {
      result = true;
      break;
    }
  }
  return result;
}
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  NProgress.start();
  const token = sessionStorage.getItem('token');

  if (!token && to.name !== 'login') {
    next({ name: LOGIN_PAGE });
  }
  else if (to.name == 'login' || isHasAccess(to.path)) {
    next();
  }
  else {
    next({ name: LOGIN_PAGE });
  }
});
router.afterEach(() => {
  NProgress.done();
})
export default router;