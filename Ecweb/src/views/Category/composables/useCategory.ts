import { onMounted, ref } from "vue";
import type { Category } from "@/utils/types.ts";
import { getCategoryAPI } from "@/api/category.ts";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
export function useCategory() {
  const categoryData = ref<Category>({ id: "", name: "", picture: "", children: null });
  const route = useRoute();
  const getCategory = async (id: string | string[] = route.params.id) => {
    console.log(id);
    const res = await getCategoryAPI(id);
    console.log(res);
    categoryData.value = res.result;
  };
  onMounted(() => {
    getCategory();
  });
  onBeforeRouteUpdate((to) => getCategory(to.params.id));

  return {
    categoryData,
  };
}
