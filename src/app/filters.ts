import { FilterMap, FilterType } from './filter';

export const FilterData: FilterMap = {
  [FilterType.types]: {
    header: 'Types',
    filters: [
      {
        label: 'Bball',
        value: 'bball',
      },
      {
        label: 'Running',
        value: 'running',
      },
      {
        label: 'Casual',
        value: 'casual',
      },
    ],
  },
  [FilterType.colors]: {
    header: 'Colors',
    filters: [
      {
        label: 'Red',
        value: 'red',
      },
      {
        label: 'White',
        value: 'white',
      },
      {
        label: 'Black',
        value: 'black',
      },
      {
        label: 'Blue',
        value: 'blue',
      },
    ],
  },
  [FilterType.brands]: {
    header: 'Brands',
    filters: [
      {
        label: 'Nike',
        value: 'nike',
      },
      {
        label: 'Puma',
        value: 'puma',
      },
      {
        label: 'Adidas',
        value: 'adidas',
      },
      {
        label: 'Crevo',
        value: 'crevo',
      },
    ],
  },
  [FilterType.prices]: {
    header: 'Prices',
    filters: [
      {
        label: 'Low',
        value: 'low',
      },
      {
        label: 'Med',
        value: 'med',
      },
      {
        label: 'High',
        value: 'high',
      },
    ],
  },
};
