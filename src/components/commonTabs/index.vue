<template>
  <el-tabs v-model="selectTab" @tab-click="changeTabType">
    <el-tab-pane v-for="item in tabs" :label="item" :name="item" :key="item"> </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'CommonTabs',
  props: {
    // tab标签
    tabs: {
      type: Array,
      default() {
        return [];
      },
    },
    // 控制tab位置
    applyType: {
      type: Number,
    },
  },
  data() {
    return {
      selectTab: '',
      selectTabIndex: 0,
    };
  },
  created() {
    if (this.tabs.length > 0) {
      this.selectTab = this.tabs[this.applyType || 0];
      this.selectTabIndex = 0;
    }
  },
  methods: {
    // tab切换
    changeTabType(tabEl, defaultTab = '0') {
      const tabIndex = parseInt(tabEl ? tabEl.index : defaultTab);
      // console.log('changeTabTypexxxxx', tabIndex)
      if (tabIndex != this.selectTabIndex) {
        this.selectTabIndex = parseInt(tabIndex);
        this.selectTab = this.tabs[this.selectTabIndex];
        this.$emit('tabChange', tabIndex, this.selectTab);
      }
    },
  },
};
</script>
