<template>
  <div class="login">
    account: <input v-model="account" /> password <input v-model="password" />
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/userStore";
import { ref, onMounted } from "vue";
const userStore = useUserStore();
const account = ref<string>("");
const password = ref<string>("");

onMounted(() =>
  userStore.getuserInfo({ account: account.value, password: password.value })
);
</script>

<style></style>
