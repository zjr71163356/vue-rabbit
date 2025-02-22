<template>
  <div class="app-nav">
    <ul>
      <li><RouterLink to="/Login">请登录 </RouterLink></li>
      <li><RouterLink to="/Login">请登录 </RouterLink></li>
      <li><RouterLink to="/Login">请登录 </RouterLink></li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.app-nav {
  background-color: #333333;
  height: 80px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: end;
  a {
    color: #fff;
    padding: 0 10px;
  }

  ul {
    display: flex;
    gap: 20px;
    margin-right: 10%;
    li {
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
