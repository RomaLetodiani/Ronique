import { Item } from "./Shared.interface";

export interface AddCategoryDto {
  name: string;
  image: string;
}

export interface CategoryI extends AddCategoryDto, Item {}
