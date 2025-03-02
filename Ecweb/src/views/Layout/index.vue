<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>

<script lang="ts" setup>
import LayoutFixed from "./components/LayoutFixed.vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import { useCategoryStore } from "@/stores/categoryStore";
import { onMounted } from "vue";

const categoryStore = useCategoryStore();
onMounted(() => categoryStore.getCategory());
</script>

<style scoped lang="scss"></style>
