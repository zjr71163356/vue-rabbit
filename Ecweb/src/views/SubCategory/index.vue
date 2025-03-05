<template>


  
</template>

<script lang="ts" setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from "@/api/category";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import GoodsItem from "@/views/Home/components/GoodItem.vue";
import { FilterData, Good, CategoryData } from "@/utils/types";
// 获取面包屑导航数据
const categoryData = ref<CategoryData>({} as CategoryData);
const route = useRoute();
const getCategoryData = async () => {
  const res = await getCategoryFilterAPI(route.params.id);
  console.log(res);
  categoryData.value = res.result;
};
onMounted(() => getCategoryData());

// 获取基础列表数据渲染
const goodList = ref<Good[]>([]);
const reqData = ref<FilterData>({
  categoryId: route.params.id as string,
  page: 1,
  pageSize: 20,
  sortField: "publishTime",
});
const getGoodList = async () => {
  const res = await getSubCategoryAPI(reqData.value);
  console.log(res);
  goodList.value = res.result.items;
};
onMounted(() => getGoodList());

// tab切换回调
const tabChange = () => {
  console.log("tab切换了", reqData.value.sortField);
  reqData.value.page = 1;
  getGoodList();
};

// 加载更多
const disabled = ref(false);
const load = async () => {
  console.log("加载更多数据咯");
  // 获取下一页的数据
  reqData.value.page++;
  const res = await getSubCategoryAPI(reqData.value);
  goodList.value = [...goodList.value, ...res.result.items];
  // 加载完毕 停止监听
  if (res.result.items.length === 0) {
    disabled.value = true;
  }
};
</script>

<style></style>
