<template>
  <div class="app-header-sticky">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <LayoutHeaderUI></LayoutHeaderUI>
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
  /*display:flex会让容器中的项块化*/
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
  .logo {
    width: 200px;
    height: 80px;
    background: url("@/assets/images/logo.png") no-repeat right 2px;
    background-size: 160px auto;
  }
}
</style>
