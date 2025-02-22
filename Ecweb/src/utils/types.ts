export interface Category {
  id: string;
  name: string;
  picture: string;
  children: Category[] | null;
  goods: Good[] | null;
}

export interface Good {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  orderNum: string | null;
}


export interface GetCategoryAPIResponse {
  code: string;
  msg: string;
  result: Array<Category>;
}
