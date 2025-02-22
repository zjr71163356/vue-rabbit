import { getCategoryAPI } from "../api/layout";
import { defineStore } from "pinia";
import { ref } from "vue";
export const categoryStore = defineStore("category", () => {
  const categoryList = ref([]);
  const getCategory = async () => {
    const res = await getCategoryAPI();
    categoryList.value = res.data;
  };
  return {
    categoryList,
    getCategory,
  };
});
