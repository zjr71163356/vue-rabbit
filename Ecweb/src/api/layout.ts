import HttpInstance from "./http";
import type { APIResponse,Category } from "../utils/types";
export function getCategoryAPI(): Promise<APIResponse<Category>> {
  return HttpInstance({ url: "home/category/head" });
}
