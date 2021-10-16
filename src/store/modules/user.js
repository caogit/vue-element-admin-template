/**
 * 这里是为了统一管理用户方面的所有内容，就将token拿到这里了，其实直接setToken在外面也可以

 */
import { getToken, setToken, removeToken } from '@/utils/auth';
import { ApiUrl } from '@/api';

const getDefaultState = function () {
  return {
    token: getToken(),
    name: '',
    avatar: '',
  };
};

const state = getDefaultState();

const mutations = {
  // 退出登陆后还原初始状态
  RESET_STATE() {
    Object.assign(state, getDefaultState());
  },
  // 设置用户Token
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  // 设置用户姓名
  SET_NAME: (state, name) => {
    state.name = name;
  },
  // 设置用户头像
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
};
const actions = {
  // 设置用户Token值
  setUserToken({ commit }, parms) {
    return new Promise((resolve, reject) => {
      this._vm.request
        .post(ApiUrl.USER.LOGIN, parms)
        .then((res) => {
          if (res.code == 200) {
            let token = res.data.tokenHead + res.data.token;
            commit('SET_TOKEN', token);
            // 这步将token存到Cookies中，做的是一个双重保险
            setToken(token);
            resolve(token);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  // 获取用户信息
  getUserInfo({ commit }) {
    return new Promise((resolve, reject) => {
      this._vm.request
        .post('/userInfo')
        .then((res) => {
          if (res.code === 200) {
            const { assistant, avatar } = res.data;
            commit('SET_NAME', assistant);
            commit('SET_AVATAR', avatar);
            resolve(res.data);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  // 退出登陆
  loginOut({ commit }) {
    return new Promise((resolve, reject) => {
      removeToken();
      commit('RESET_STATE');
      this._vm.request
        .post(ApiUrl.USER.LOGOUT)
        .then((res) => {
          if (res.code === 200) {
            resolve();
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  // 清除Token
  resetToken({ commit }) {
    return new Promise(() => {
      removeToken();
      commit('RESET_STATE');
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
