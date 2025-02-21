<template>
  <div class="app-header-sticky">
    <div class="container">
      <img class="logo"  alt="" />
    </div>
    LayoutFixed
  </div>
</template>

<script lang="ts" setup>
 
</script>

<style scoped lang="scss">
.app-header-sticky {
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  background-color: #fff;
  color: blue;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #e4e4e4;
  .logo {
    width: 200px;
    height: 80px;
    background: url("@/assets/images/logo.png") no-repeat right 2px;
    background-size: 160px auto;
  }
}
</style>
