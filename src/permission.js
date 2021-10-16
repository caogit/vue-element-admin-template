import router from './router';
import store from './store';
import { Message } from 'element-ui';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
//auth文件主要依赖js-cookie模块，把getToken，setToken，removeToken设置在这里
// import { getToken } from '@/utils/auth';
// 我这里的auth文件时直接setToken getToken removeToken设置 没有存在cookie中
import { getToken } from '@/utils/auth';
//get-page-title文件主要是网站的标题，get-page-title通过依赖setting.js里的title变量修改网站标题
//如果需要更改网站的标题，可以直接到setting.js修改title属性
// import getPageTitle from '@/utils/get-page-title';

//NProgress是封装的进度条，基本不用动
NProgress.configure({ showSpinner: false });

//路由白名单列表，把路由添加到这个数组，不用登陆也可以访问
const whiteList = ['/login'];

router.beforeEach(async (to, from, next) => {
  // 请求路由时进度条开始
  NProgress.start();

  // 设置标题
  // document.title = getPageTitle(to.meta.title);

  // 这里的getToken()就是在上面导入的auth.js里的getToken()方法
  const hasToken = getToken('token');

  //如果存在token，即存在已登陆的令牌
  if (hasToken) {
    //如果用户存在令牌的情况请求登录页面，就让用户直接跳转到首页，避免存在重复登录的情况
    if (to.path === '/login') {
      // 直接跳转到首页，当然取决于你的路由重定向到哪里
      next({ path: '/' });
      //一定要关闭进度条
      NProgress.done();
    } else {
      //如果已经有令牌的用户请求的不是登录页，是其他页面
      //就从Vuex里拿到用户的信息，这里也证明用户不是第一次登录了
      const hasGetUserInfo = store.getters.name;
      if (hasGetUserInfo) {
        //信息拿到后，用户请求哪就跳转哪
        next();
      } else {
        try {
          // 如果有令牌，但是没有用户信息，证明用户是第一次登录，通过Vuex设置用户信息
          await store.dispatch('user/getUserInfo');
          //设置好了之后，依然可以请求哪就跳转哪
          next();
        } catch (error) {
          // 如果出错了，把令牌去掉，并让用户重新去到登录页面
          await store.dispatch('user/resetToken');
          Message.error(error || 'Has Error');
          next(`/login?redirect=${to.path}`);
          //关闭进度条
          NProgress.done();
        }
      }
    }
  } else {
    //这里是没有令牌的情况
    //还记得上面的白名单吗，现在起作用了
    //whiteList.indexOf(to.path) !== -1)判断用户请求的路由是否在白名单里
    console.log(to.path);
    if (whiteList.indexOf(to.path) !== -1) {
      // 不是-1就证明存在白名单里，不管你有没有令牌，都直接去到白名单路由对应的页面
      next();
    } else {
      // 如果这个页面不在白名单里，直接跳转到登录页面
      next(`/login?redirect=${to.path}`);
      //关闭进度条
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  //每次请求结束后都需要关闭进度条
  NProgress.done();
});
