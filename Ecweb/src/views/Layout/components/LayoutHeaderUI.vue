<template>
  <div class="container">
    <RouterLink class="logo" to="/" />
    <div class="app-header-nav">
      <div><router-link to="/">首页</router-link></div>
      <div v-for="item in categoryStore.categoryList" :key="item.id">
        <router-link to="/"> {{ item.name }}</router-link>
      </div>
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
.logo {
  display: block;
  width: 200px;
  height: 80px;
  background: url("@/assets/images/logo.png") no-repeat right 2px;
  background-size: 160px auto;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  .app-header-nav {
    display: flex;
    align-items: center;
    gap: 50px;
    color: #000;
  }
}
</style>
