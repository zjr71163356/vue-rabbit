import HttpInstance from "@/api/http";
import type { SingleAPIResponse, Detail } from "@/utils/types";
export const getDetail = (
  id: string | string[]
): Promise<SingleAPIResponse<Detail>> => {
  return HttpInstance({
    url: "/goods",
    params: {
      id,
    },
  });
};

export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return HttpInstance({
    url: "/goods/hot",
    params: {
      id,
      type,
      limit,
    },
  });
};
