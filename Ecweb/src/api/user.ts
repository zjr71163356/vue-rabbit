// 封装所有和用户相关的接口函数
import HttpInstance from "../api/http";

export const loginAPI = ({
  account,
  password,
}: {
  account: string;
  password: string;
}) => {
  return HttpInstance({
    url: "/login",
    method: "POST",
    data: {
      account,
      password,
    },
  });
};

export const getLikeListAPI = ({ limit = 4 }) => {
  return HttpInstance({
    url: "/goods/relevant",
    params: {
      limit,
    },
  });
};
