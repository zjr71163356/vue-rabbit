import HttpInstance from "../api/http";
import type {
  FilterData,
  SingleAPIResponse,
  Category,
  CategoryData,
  GoodList,
} from "@/utils/types";
export function getCategoryAPI(
  id: string | string[]
): Promise<SingleAPIResponse<Category>> {
  return HttpInstance({
    url: "/category",
    params: {
      id,
    },
  });
}

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id
 * @return {*}
 */

export const getCategoryFilterAPI = (
  id: string | string[]
): Promise<SingleAPIResponse<CategoryData>> => {
  return HttpInstance({
    url: "/category/sub/filter",
    params: {
      id,
    },
  });
};

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (
  data: FilterData
): Promise<SingleAPIResponse<GoodList>> => {
  return HttpInstance({
    url: "/category/goods/temporary",
    method: "POST",
    data,
  });
};
