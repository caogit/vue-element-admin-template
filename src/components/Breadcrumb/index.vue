<template>
  <div class="breadCrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  watch: {
    $route: function () {
      this.getRouterMarched();
    },
  },
  methods: {
    getRouterMarched() {
      console.log(this.$route.matched);
    },
  },
};
</script>

<style></style>
