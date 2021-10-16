<template>
  <div class="layoutStyle">
    <Sidebar />
    <div :class="sidebar ? 'main-containerall' : 'main-container'">
      <Navbar @getisCollapse="getisCollapse" />
      <AppMain>
        <router-view></router-view>
      </AppMain>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar/Sidebar.vue';
import Navbar from './components/Navbar.vue';
import AppMain from './components/AppMain.vue';
import { mapGetters } from 'vuex';
import Cookies from 'js-cookie';

export default {
  computed: {
    ...mapGetters(['sidebar']),
  },
  components: {
    Sidebar,
    Navbar,
    AppMain,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  created() {
    console.log(Cookies.get('sidebarStatus'));
    // console.log(+Cookies.get('sidebarStatus') ? 'asdf' : 'qwer');
    console.log('asdf', this.sidebar);
  },
  methods: {
    getisCollapse(val) {
      this.isCollapse = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.layoutStyle {
  width: 100%;
  height: 100%;
  .main-container {
    min-height: 100%;
    transition: margin-left 0.5s;
    margin-left: 64px;
    background-color: #f0f2f5;
  }
  .main-containerall {
    min-height: 100%;
    transition: margin-left 0.5s;
    margin-left: 210px;
    background-color: #f0f2f5;
  }
}
</style>
