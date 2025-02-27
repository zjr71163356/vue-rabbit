<template>
  <div class="good-item">
    <img :src="item.picture" alt="商品图片" />

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

<style scoped lang="scss"></style>
