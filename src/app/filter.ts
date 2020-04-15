export enum FilterType {
  types = 'types',
  colors = 'colors',
  brands = 'brands',
  prices = 'prices'
}

export interface FilterItem {
  label: string;
  value: string;
}

export interface FilterGroup {
  header: string;
  filters: FilterItem[];
}

export interface FilterMap {
  [key: string]: FilterGroup;
}
