<template>
  <RouterLink :to="`/detail/${item.id}`" class="goods-item">
    <img v-lazy-img="item.picture" alt="商品图片" />
    <slot name="info">
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </slot>
  </RouterLink>
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
.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  transition: all 0.5s;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }

  img {
    width: 160px;
    height: 160px;
  }

  p {
    padding-top: 10px;
  }

  .name {
    font-size: 16px;
  }

  .desc {
    color: #999;
    height: 29px;
  }

  .price {
    color: $priceColor;
    font-size: 20px;
  }
}
</style>
