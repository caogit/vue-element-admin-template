<template>
  <div>
    <div :class="sidebar ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="foldEvent"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['sidebar']),
  },
  methods: {
    foldEvent() {
      this.$emit('toggleClick');
    },
  },
};
</script>

<style></style>
