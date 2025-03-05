export interface Category {
  id: string;
  name: string;
  picture: string;
  children: Category[] | SubCategory[] | null;
  goods?: Good[] | null;
}

export interface SubCategory {
  id: string;
  name: string;
  layer: number;
  parent: string | null;
}

export interface Good {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  orderNum: string | null;
}

export interface APIResponse<T> {
  code: string;
  msg: string;
  result: Array<T>;
}
export interface SingleAPIResponse<T> {
  code: string;
  msg: string;
  result: T;
}
export interface Banner {
  id: number;
  imgUrl: string;
}

export interface Hot {
  alt: string;
  id: string;
  picture: string;
  title: string;
}

export interface FilterData {
  categoryId: string  ;
  page: number;
  pageSize: number;
  sortField: "publishTime" | "orderNum" | "evaluateNum";
}
export interface Brand {
  desc: string;
  id: string;
  logo: string;
  name: string;
  nameEn: string;
  picture: string;
  place: string;
  type: string | null;
}

export interface Property {
  id: string;
  name: string;
}

export interface CategoryData {
  brands: Brand[];
  categories: SubCategory[];
  goods: Good[];
  id: string;
  name: string;
  parentId: string;
  parentName: string;
  picture: string;
  saleProperties: Property[];
}

export interface GoodList {
  counts: number;
  items: Good[];
  page: number;
  pageSize: number;
  pages: number;
}
