<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="
        tableList.slice(
          pageList.pageSize * (pageList.pageIndex - 1) + 1,
          pageList.pageSize * pageList.pageIndex + 1,
        )
      "
      tooltip-effect="dark"
      style="width: 100%; height: 572px"
      @selection-change="handleSelectionChange"
      :header-cell-style="{
        color: 'black',
        backgroundColor: '#FAFAFA',
        borderColor: 'black',
      }"
      v-loading="loading"
    >
      <template v-for="(col, index) in headerText">
        <itemindex
          :key="index + Math.random()"
          v-if="col.isshow"
          :item="col"
          @itemClick="itemVal"
          @changeClick="changeSwitch"
        ></itemindex>
      </template>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageList.pageIndex"
        :page-sizes="[5, 10, 20, 40]"
        :page-size="pageList.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageList.total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import tableMix from '@/mixins/tableMix';
import itemindex from './itemindex.vue';
export default {
  props: {
    tableList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    headerText: {
      type: Array,
      default: () => {
        return [];
      },
    },
    pageList: {
      type: Object,
      default: () => {
        return {};
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    itemindex,
  },
  mixins: [tableMix()],
  created() {},
  data() {
    return {};
  },
  methods: {
    //
    itemVal(val) {
      this.$emit('itemClick', val);
    },
    changeSwitch(val) {
      this.$emit('itemClick', val);
    },
    handleSizeChange(val) {
      this.pageList.pageSize = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.pageList.pageIndex = val;
      console.log(`当前页: ${val}`);
    },
    handleSelectionChange(val) {
      this.$emit('showChangeNum', val);
    },
  },
};
</script>

<style>
.el-table__header {
  width: 100%;
}
.block {
  /* position: fixed;
  bottom: 0; */
}
</style>
