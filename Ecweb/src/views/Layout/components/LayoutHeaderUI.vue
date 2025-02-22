<template>
  <div class="app-header-nav">
    <div><router-link to="/">首页</router-link></div>
    <div v-for="item in categoryStore.categoryList">
      <router-link to="/"> {{ item.name }}</router-link>
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

<style scoped>
.app-header-nav {
  display:  flex;
  align-items: center;

}
</style>
