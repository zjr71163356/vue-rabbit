<template>
  <div class="container">
    <div v-for="item in items" :id="item.id" class="panel">
      <h1>{{ item.name }}</h1>
      <div class="flex">
        <div class="block-info">
          <img :src="item.picture" />
        </div>

        <div class="good-list">
          <GoodItem
            v-for="good in item.goods"
            :item="good"
            :id="item.id"
            class="good-item"
          >
            <template #info>
              <p class="name">{{ good.name }}</p>
              <p class="desc">{{ good.desc }}</p>
              <p class="price">{{ good.price }}</p>
            </template>
          </GoodItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import GoodItem from "./GoodItem.vue";
import { onMounted, ref } from "vue";
import { getGoodsAPI } from "@/api/home";
import { Category } from "@/utils/types";
const items = ref<Category[]>([]);
onMounted(async () => {
  const res = await getGoodsAPI();
  items.value = res.result;
  console.log(res);
});
</script>

<style scoped lang="scss">
.container {
  .panel {
    display: flex;
    flex-direction: column;
    align-items: center;

    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .block-info {
        width: 240px;
        height: 610px;

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .good-list {
      display: flex;
      justify-content: center;
      align-items: start;
      flex-wrap: wrap;
      width: 80%;
      .good-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 50%;
        width: 25%;
        padding: 30px;
        .name,
        .desc {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        text-overflow: ellipsis;
        .name {
          font-size: 20px;
          color: #333;
        }
        .desc {
          font-size: 16px;
          color: #666;
        }
      }
      .good-item:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease-in-out;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>
