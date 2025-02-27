import { imageViewerProps } from "element-plus";
import httpInstance from "../api/http";
import type { APIResponse, Banner, Category, Good, Hot } from "../utils/types";
imageViewerProps;
// 获取banner

interface BannerParams {
  distributionSite?: string;
}

export function getBannerAPI(
  params: BannerParams = {}
): Promise<APIResponse<Banner>> {
  // 分销站点 1为首页 2为商品页
  // 默认为1 商品为2
  const { distributionSite = "1" } = params;
  return httpInstance({
    url: "/home/banner",
    params: {
      distributionSite,
    },
  });
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = (): Promise<APIResponse<Good>> => {
  return httpInstance({
    url: "/home/new",
  });
};

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = (): Promise<APIResponse<Hot>> => {
  return httpInstance({
    url: "/home/hot",
  });
};

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = (): Promise<APIResponse<Category>> => {
  return httpInstance({
    url: "/home/goods",
  });
};
