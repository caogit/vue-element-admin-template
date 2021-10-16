<template>
  <div class="navberStyle">
    <div class="iconStyle">
      <!-- 收起展开icon -->
      <Hamburger @toggleClick="toggleSideBar"></Hamburger>
      <!-- 面包屑 -->
      <Breadcrumb></Breadcrumb>
    </div>

    <div class="iconPeople">
      <span class="el-icon-bell"></span>
      <el-avatar :src="avatar"></el-avatar>
      <span class="text">{{ name }}</span>
      <el-popconfirm title="确定退出登陆吗？" @confirm="confirm">
        <el-button slot="reference">退出登陆</el-button>
      </el-popconfirm>
    </div>
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger';
import Breadcrumb from '@/components/Breadcrumb';
import { mapGetters } from 'vuex';
// import { mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(['name', 'avatar']),
  },
  components: {
    Hamburger,
    Breadcrumb,
  },
  data() {
    return {
      isCollapse: false,
    };
  },

  methods: {
    changeBtn() {
      // this.isCollapse = bol;
      // this.$emit('getisCollapse', bol);
    },
    toggleSideBar() {
      // this.$store.dispatch('app/toggleSideBar');
      this.$store.dispatch('app/toggleSideBar');
    },
    // 退出登陆
    confirm() {
      this.$store.dispatch('user/loginOut').then(() => {
        this.$router.push(`/login?redirect=${this.$route.fullPath}`);
      });
    },
  },
};
</script>
