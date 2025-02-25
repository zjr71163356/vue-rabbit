<template>
  <div class="good-item">
    <img :src="item.picture" alt="商品图片" />
    <div class="good-item-info">
      <slot name="info"></slot>
    </div>
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
$good-width: 240px;
.good-item {
  width: $good-width;
  height: 300px;

  img {
    width: inherit;
    height: $good-width;
  }

  &-info {
    width: inherit;
    height: 60px;
    background-color: #f1f9f4;
  }
}
</style>
