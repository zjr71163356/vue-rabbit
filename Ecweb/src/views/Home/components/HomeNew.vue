<template>
  <div class="container">
    <div class="flex">
      <h1>新鲜好物</h1>
      <span>新鲜出炉 品质靠谱</span>
    </div>
    <div class="new-good">
      <GoodItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        class="new-good-item"
      >
        <template #info>
          <div class="new-good-info">
            <div class="new-good-name">{{ item.name }}</div>
            <div class="new-good-price">￥{{ item.price }}</div>
          </div>
        </template>
      </GoodItem>
    </div>
  </div>
</template>

<script lang="ts" setup>
import GoodItem from "./GoodItem.vue";
import { onMounted, ref } from "vue";
import { findNewAPI } from "@/api/home";
import { Good } from "@/utils/types";
const items = ref<Good[]>([]);
onMounted(async () => {
  const res = await findNewAPI();
  console.log("HomeNew" + res);
  items.value = res.result;
});
</script>

<style scoped lang="scss">
h1 {
  display: inline-block;
  margin: 5px;
}
.new-good {
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  &-name {
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  &-price {
    color: #f40;
  }
  &-info {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &-item {
    width: 25%;
    background-color: #f1f9f4;
  }
}
</style>
