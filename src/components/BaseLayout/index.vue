<template>
  <div class="baseLayout">
    <!-- search -->
    <div class="search_Input">
      <slot name="search"> </slot>
    </div>
    <!-- content -->
    <div :class="hasTabs ? 'hasTab content' : 'content'">
      <!-- tabs -->
      <slot name="tabs"></slot>
      <!-- 头部文字 -->
      <div class="topTitle">
        <slot name="topTitle"></slot>
      </div>

      <!-- 文字下的选项 -->
      <div class="middleStyle">
        <slot name="middle"></slot>
      </div>
      <!-- table -->
      <div class="tableClass">
        <slot name="table"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    hasTabs: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/styles/commonTable.scss';
.baseLayout {
  height: 100%;
  padding: 20px 20px;
  padding-bottom: 0;
  .search_Input {
    background-color: #fff;
    padding: 40px 20px;
    margin-bottom: 20px;
    .search_btn_class {
      float: right;
    }
  }
  .content {
    background-color: #fff;
    // height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    padding: 40px 20px;

    .topTitle {
      font-size: 22px;
      font-weight: bold;
    }

    .tableClass {
      flex: 1;
      // height: 70%;
      // overflow-y: scroll;
    }
  }
  .hasTab {
    padding-top: 0;
    padding-left: 0;
    .middleStyle {
      padding: 0 20px;
    }
    .tableClass {
      padding: 0 20px;
    }
  }
}
</style>
