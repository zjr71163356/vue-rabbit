import { getCategoryAPI } from "../api/layout";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Category } from "../utils/types";
export const useCategoryStore = defineStore("category", () => {
  const categoryList = ref<Category[]>([]);
  const getCategory = async () => {
    const res = await getCategoryAPI();
    console.log(res);
    categoryList.value = res.result;
  };
  return {
    categoryList,
    getCategory,
  };
});
