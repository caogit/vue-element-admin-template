import router from '@/router';
import { getToken, removelocalStorage } from '@/utils/auth';
import { Message } from 'element-ui';

router.beforeEach((to, from, next) => {
  console.log(to, from);
  if (getToken('token')) {
    if (to.path == '/login') {
      //如果有token且是登陆页，则重定向到主页
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    removelocalStorage();
    if (to.path == '/login') {
      next();
      return;
    } else if (from.path == '/login') {
      Message({
        showClose: true,
        message: '请先登陆',
        type: 'error',
      });
      next({ path: '/login' });
    } else {
      next({ path: '/login' });
    }
  }
});
