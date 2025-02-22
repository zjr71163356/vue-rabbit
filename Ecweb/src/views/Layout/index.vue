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
import HelloWorld from "@/components/HelloWorld.vue";
import { getCategoryAPI } from "@/api/layout";
import { onMounted } from "vue";
onMounted(() => console.log(getCategoryAPI()));
</script>

<style scoped lang="scss"></style>
