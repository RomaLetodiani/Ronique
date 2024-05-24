import { Item } from "./Shared.interface";

export interface addProductDto {
  title: string;
  category_name: string;
  description: string;
  image: string;
  salePrice: number | null;
  price: number;
}

export interface ProductI extends addProductDto, Item {}

export interface ProductFilterI {
  categoryName?: string;
  page?: string;
  pageSize?: number;
  minPrice?: number;
  maxPrice?: number;
  productName?: string;
  onlySales?: boolean;
}
