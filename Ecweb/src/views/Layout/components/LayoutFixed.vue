<template>
  <div class="app-header-sticky">
    <div class="container">
      <LayoutHeaderUI></LayoutHeaderUI>
      <div class="line"></div>
      <div class="nav-end">
        <router-link to="/"> 品牌</router-link>
        <router-link to="/"> 专题</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LayoutHeaderUI from "./LayoutHeaderUI.vue";
</script>

<style scoped lang="scss">
.app-header-sticky {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #fff;
  color: blue;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #e4e4e4;
  font-size: 16px;
  opacity: 0;
  transform: translateY(-100%);
  transition: all 0.3s;
  /*display:flex会让容器中的项块化*/
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

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
}
</style>
