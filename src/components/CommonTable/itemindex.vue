<template>
  <div>
    <el-table-column
      :key="item.name"
      :label="item.name"
      :min-width="item.breadth"
      :prop="item.valueconvert ? item.valueconvert[item.value] : item.value"
      v-if="item.type == 'simple'"
    >
    </el-table-column>
    <el-table-column
      :label="item.name"
      :min-width="item.breadth"
      :key="item.name"
      v-if="item.type == 'single'"
    >
      <template slot-scope="scope">
        {{ item.valueconvert ? item.valueconvert(scope.row[item.value]) : item.value }}
      </template>
    </el-table-column>
    <!-- selection -->
    <el-table-column
      :label="item.name"
      :min-width="item.breadth"
      fixed="left"
      :key="item.name"
      :reserve-selection="true"
      :prop="item.value"
      v-if="item.type == 'selection'"
      type="selection"
    >
    </el-table-column>
    <el-table-column
      :label="item.name"
      :min-width="item.breadth"
      v-if="item.type == 'btnspop'"
      :key="item.name"
    >
      <template slot-scope="scope">
        <el-popover placement="right" :min-width="item.breadth" trigger="click">
          <template v-for="(i, sub) in item.children">
            <template v-if="i.showValue.includes(scope.row[i.key])">
              <div @click="handleEdit(i.name)" :key="sub" class="show-background">
                {{ i.name }}
              </div>
            </template>
          </template>

          <div class="el-icon-more" slot="reference"></div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      :label="item.name"
      :min-width="item.breadth"
      v-if="item.type == 'btns'"
      :key="item.name"
    >
      <template slot-scope="scope">
        <template v-for="(i, sub) in item.children">
          <template v-if="i.showValue.includes(scope.row[i.key])">
            <el-link type="primary" @click="handleEdit(i.name)" :key="sub" class="show-background">
              {{ i.name }}</el-link
            >
          </template>
        </template>
      </template>
    </el-table-column>
    <el-table-column
      :label="item.name"
      :min-width="item.breadth"
      v-if="item.type == 'switch'"
      :key="item.name"
    >
      <template slot-scope="scope">
        <el-switch
          v-model="scope.row[item.value]"
          active-color="#13ce66"
          active-value="1"
          inactive-value="0"
          inactive-color="#ff4949"
          @change="change_val(scope.row.id)"
        >
        </el-switch>
      </template>
    </el-table-column>
    <el-table-column
      :key="item.name"
      :label="item.name"
      :min-width="item.breadth"
      v-if="item.type == 'canselect'"
    >
      <template slot-scope="scope">
        <el-select v-model="scope.row[item.value]" placeholder="请选择">
          <el-option
            v-for="item in item.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </template>
    </el-table-column>
  </div>
</template>

<script>
export default {
  name: 'itemIndex',
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  created() {
    // console.log(this.item.id);
  },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    // 操作
    handleEdit(row) {
      this.$emit('itemClick', row);
      // console.log(index, row);
    },
    change_val(val) {
      this.$emit('changeClick', val);
    },
    test(val) {
      console.log('🚀 ~ file: itemindex.vue ~ line 90 ~ test ~ val', val);
    },
  },
};
</script>

<style>
.show-background {
  margin-right: 5px;
  font-size: 13px;
}
.show-background:hover {
  background-color: bisque;
  cursor: pointer;
}
</style>
