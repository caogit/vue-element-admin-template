<template>
  <div class="screen-root">
    <div id="screen" class="screen">
      打开控制台手机，选择尺寸自适应查看变化
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
  // 初始化自适应  ----在刚显示的时候就开始适配一次
    this.handleScreenAuto()
    // 绑定自适应函数   ---防止浏览器栏变化后不再适配
    window.onresize = () => this.handleScreenAuto()
  },
  beforeDestroy() {
    window.onresize = null
  },
  methods: {
  // 数据大屏自适应函数
    handleScreenAuto() {
      const designDraftWidth = 1920 // 设计稿的宽度
      const designDraftHeight = 960 // 设计稿的高度
      // 根据屏幕的变化适配的比例
      const scale =
      document.documentElement.clientWidth /
        document.documentElement.clientHeight <
      designDraftWidth / designDraftHeight
        ? document.documentElement.clientWidth / designDraftWidth
        : document.documentElement.clientHeight / designDraftHeight
      // 缩放比例
      document.querySelector(
        '#screen'
      ).style.transform = `scale(${scale}) translate(-50%, -50%)`
    }
  }
}
</script>
<style lang="scss" scoped>
/*
  除了设计稿的宽高是根据您自己的设计稿决定以外，其他复制粘贴就完事
*/
.screen-root {
    height: 100%;
    width: 100%;
    background-image: url('./img/bigscreen.png');
    background-size: 100% 100%;
    position: relative;
    .screen {
      color: #fff;
      text-align: center;
      background-color:black;
      font-size: 30px;
        width: 1920px;  //设计稿的宽度
        height: 960px;  //设计稿的高度
        transform-origin: 0 0;
        position: absolute;
        left: 50%;
        top: 50%;
    }
}
</style>
