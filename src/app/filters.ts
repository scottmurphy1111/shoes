import { FilterMap, FilterType, FilterItem } from './filter';

export const FilterData: FilterMap = {
  [FilterType.types]: {
    header: 'Types',
    filters: [
      {
        label: 'Bball',
        value: 'bball',
        checked: false
      },
      {
        label: 'Running',
        value: 'running',
        checked: false
      },
      {
        label: 'Casual',
        value: 'casual',
        checked: false
      },
    ] as FilterItem[],
  },
  [FilterType.colors]: {
    header: 'Colors',
    filters: [
      {
        label: 'Red',
        value: 'red',
        checked: false
      },
      {
        label: 'White',
        value: 'white',
        checked: false
      },
      {
        label: 'Black',
        value: 'black',
        checked: false
      },
      {
        label: 'Blue',
        value: 'blue',
        checked: false
      },
    ] as FilterItem[],
  },
  [FilterType.brands]: {
    header: 'Brands',
    filters: [
      {
        label: 'Nike',
        value: 'nike',
        checked: false
      },
      {
        label: 'Puma',
        value: 'puma',
        checked: false
      },
      {
        label: 'Adidas',
        value: 'adidas',
        checked: false
      },
      {
        label: 'Crevo',
        value: 'crevo',
        checked: false
      },
    ] as FilterItem[],
  },
  [FilterType.prices]: {
    header: 'Prices',
    filters: [
      {
        label: 'Low',
        value: 'low',
        checked: false
      },
      {
        label: 'Med',
        value: 'med',
        checked: false
      },
      {
        label: 'High',
        value: 'high',
        checked: false
      },
    ] as FilterItem[],
  },
};
