export interface Category {
  id: string;
  name: string;
  picture: string;
  children: Category[] | SubCategory[] | null;
  goods: Good[] | null;
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
