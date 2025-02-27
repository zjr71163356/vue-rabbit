<template>
  <div class="container">
    <div class="flex">
      <h1>新鲜好物</h1>
      <span>新鲜出炉 品质靠谱</span>
    </div>
    <div class="hot-good">
      <GoodItem v-for="item in items" :key="item.id" :item="item">
        <template #info>
          <div class="hot-good-info">
            <div class="hot-good-name">{{ item.title }}</div>
            <div class="hot-good-price">{{ item.alt }}</div>
          </div>
        </template>
      </GoodItem>
    </div>
  </div>
</template>
<script lang="ts" setup>
import GoodItem from "./GoodItem.vue";
import { onMounted, ref } from "vue";
import { getHotAPI } from "@/api/home";
import { Hot } from "@/utils/types";
const items = ref<Hot[]>([]);
onMounted(async () => {
  const res = await getHotAPI();
  console.log(res);
  items.value = res.result;
});
</script>

<style scoped lang="scss">
h1 {
  display: inline-block;
  margin: 5px;
}
.hot-good {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-name {
    font-size: 18px;
    
  }
  &-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
}
</style>
