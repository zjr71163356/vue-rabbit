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

export interface Spec {
  name: string;
  id: string;
  values: {
    name: string;
    picture: string | null;
    desc: string;
  }[];
}

export interface Sku {
  id: string;
  skuCode: string;
  price: string;
  oldPrice: string;
  inventory: number;
  picture: string;
  specs: {
    name: string;
    valueName: string;
  }[];
}

export interface DetailCategory {
  id: string;
  name: string;
  layer: number;
  parent: {
    id: string;
    name: string;
    layer: number;
    parent: null;
  } | null;
}

export interface Details {
  pictures: string[];
  properties: {
    name: string;
    value: string;
  }[];
}

export interface Detail {
  id: string;
  name: string;
  spuCode: string;
  desc: string;
  price: string;
  oldPrice: string;
  discount: number;
  inventory: number;
  brand: Brand;
  salesCount: number;
  commentCount: number;
  collectCount: number;
  mainVideos: any[];
  videoScale: number;
  mainPictures: string[];
  specs: Spec[];
  skus: Sku[];
  categories: DetailCategory[];
  details: Details;
  isPreSale: boolean;
  isCollect: boolean | null;
  recommends: null;
  userAddresses: null;
  similarProducts: Good[];
  hotByDay: Good[];
  evaluationInfo: null;
}