<template>
  <div id="sidebarStyle" :class="sidebar ? 'sidebarWidthall' : 'sidebarWidth'">
    <div :class="sidebar ? 'iconTit' : 'noiconTit'">
      <img src="@/assets/navTitle.png" alt="" />
    </div>

    <!--  default-openeds的index取决于el-submenu的index值-->
    <el-menu
      :default-active="chooseActive"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#001529"
      unique-opened
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse-transition="false"
      :collapse="!sidebar"
    >
      <template v-for="(item, index) in $router.options.routes">
        <template v-if="item.children && item.children.length >= 1">
          <el-submenu :index="item.path" :key="index">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{ item.name }}</span>
            </template>
            <template v-for="(i, sub) in item.children">
              <el-menu-item v-if="!i.hidden" :key="sub" :index="item.path + '/' + i.path">{{
                i.name
              }}</el-menu-item>
            </template>

            >
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.path" :key="index">{{ item.name }}</el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
// import SidebarItem from './SidebarItem';
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['sidebar']),
    chooseActive() {
      const route = this.$route;
      const { path } = route;

      return path;
    },
  },
  data() {
    return {
      routerList: [],
      // chooseActive: 'iceVenueMaintain',
    };
  },
  watch: {
    // chooseActive(oldval, newval) {
    // console.log(oldval, newval);
    // },
  },
  created() {
    this.$router.options.routes.splice(0, 2);
    console.log(this.$router.options.routes);
  },
  components: {
    // SidebarItem,
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
