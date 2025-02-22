import { loginAPI } from "../api/user";
import { defineStore } from "pinia";
import { ref } from "vue";
export const useUserStore = defineStore("category", () => {
  const userInfo = ref();
  const getuserInfo = async ({
    account,
    password,
  }: {
    account: string;
    password: string;
  }) => {
    const res = await loginAPI({ account, password });
    console.log(res);
  };
  return {
    getuserInfo,
  };
});
