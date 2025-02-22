import HttpInstance from "./http";
import type { GetCategoryAPIResponse } from "../utils/types";
export function getCategoryAPI(): Promise<GetCategoryAPIResponse> {
  return HttpInstance({ url: "home/category/head" });
}
