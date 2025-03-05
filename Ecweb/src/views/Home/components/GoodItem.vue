<template>
  <div class="good-item">
    <img v-lazy-img="item.picture" alt="商品图片" />
    <slot name="info"></slot>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
img {
  min-width: 160px;
  min-height: 160px;
  width: 100%;
}
</style>
