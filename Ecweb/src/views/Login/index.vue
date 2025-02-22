<template>
  <div class="login">
    account: <input v-model="account" /> password <input v-model="password" />
    <button v-on:click="Login()">确认</button>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/userStore";
import { ref, onMounted } from "vue";
const userStore = useUserStore();
const account = ref<string>("");
const password = ref<string>("");
const Login = () => {
  console.log(`登录 ${account.value} ${password.value}`);
  userStore.getuserInfo({
    account: account.value,
    password: password.value,
  });
};
</script>

<style></style>
