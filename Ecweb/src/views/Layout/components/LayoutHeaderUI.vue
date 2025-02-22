<template>
  <div class="app-header-nav">
    <div><router-link to="/">首页</router-link></div>
    <div v-for="item in categoryStore.categoryList" :key="item.id">
      <router-link to="/"> {{ item.name }}</router-link>
    </div>
    <div class="line"></div>
    <div class="nav-end">
      <router-link to="/"> 品牌</router-link>
      <router-link to="/"> 专题</router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usecategoryStore } from "@/stores/categoryStore";
import { onMounted } from "vue";
const categoryStore = usecategoryStore();
onMounted(() => {
  console.log(categoryStore.categoryList);
});
</script>

<style scoped lang="scss">
.app-header-nav {
  display: flex;
  align-items: center;
  gap: 50px;
  color: #000;
  font-size: 16px;

  .nav-end {
    display: flex;
    gap: 50px;
  }
  .line {
    height: 20px;
    width: 5px;
    background-color: $xtxColor;
  }
}
</style>
