import Cookies from 'js-cookie';

const state = {
  sidebar: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
};

const mutations = {
  SWITCH_SIDEBAR: (state) => {
    state.sidebar = !state.sidebar;
    if (state.sidebar) {
      Cookies.set('sidebarStatus', 1);
    } else {
      Cookies.set('sidebarStatus', 0);
    }
  },
};

const actions = {
  toggleSideBar({ commit }) {
    commit('SWITCH_SIDEBAR');
  },
};

export default { namespaced: true, state, mutations, actions };
