<template>
  <div class="home-banner">
    <el-carousel trigger="click" autoplay class="carousel">
      <el-carousel-item
        v-for="item in banners"
        :key="item.id"
        class="carousel-item"
      >
        <img :src="item.imgUrl" alt="banner" class="banner-img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import type { Banner, APIResponse } from "@/utils/types";
import { getBannerAPI } from "@/api/home";
const banners = ref<Banner[]>([]);
onMounted(async () => {
  const res: APIResponse<Banner> = await getBannerAPI();
  console.log(res);
  banners.value = res.result;
});
</script>

<style scoped lang="scss">
.home-banner,
.carousel-item,
.carousel {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
