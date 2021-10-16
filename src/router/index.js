import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout/index.vue';
// import SidebarRouter from './modules/SidebarRouter';
Vue.use(VueRouter);
import nestedRouter from './modules/nested';

// constantRoutes： 代表那些不需要动态判断权限的路由，如登录页、404、等通用页面。
export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/index'),
  },
  {
    path: '/',
    // 你可以选择不同的layout组件
    component: Layout,
    // 这里开始对应的路由都会显示在app-main中
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home'),
        name: 'Home',
        meta: { title: 'Dashboard', icon: 'dashboard' },
      },
    ],
  },
  // 博客管理
  {
    path: '/blog',
    component: Layout,
    redirect: '/blog/article',
    name: 'Blog',
    meta: { title: '博客管理', icon: 'el-icon-notebook-2' },
    children: [
      {
        path: 'article',
        name: 'Article',
        component: () => import('@/views/article/index'),
        meta: { title: '文章管理', icon: 'el-icon-notebook-1' },
      },
      {
        path: 'category',
        name: 'Category',
        component: () => import('@/views/category/index'),
        meta: { title: '分类管理', icon: 'el-icon-s-order' },
      },
      {
        path: 'label',
        name: 'Label',
        component: () => import('@/views/label/index'),
        meta: { title: '标签管理', icon: 'el-icon-collection-tag' },
      },
    ],
  },
  /** when your routing map is too long, you can split it into small modules **/
  // ...SidebarRouter,
];
// asyncRoutes： 代表那些需求动态判断权限并通过 addRoutes 动态添加的页面。
export const asyncRoutes = [nestedRouter];
const router = new VueRouter({
  routes: constantRoutes,
});

export default router;
