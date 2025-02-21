
<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>

<script lang="ts" setup>
import LayoutFixed from "./components/LayoutFixed.vue";
import LayoutNav from "./components/LayoutFixed.vue";
import LayoutHeader from "./components/LayoutFixed.vue";
import LayoutFooter from "./components/LayoutFixed.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { getCategoryAPI } from "@/axios/test";
import { onMounted } from "vue";
onMounted(() => console.log(getCategoryAPI()));
</script>

<style scoped lang="scss">

</style>
