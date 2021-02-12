import { IProductSortOptions } from '../app/models/productSort';

export const sortProductsOptions: IProductSortOptions[] = [
  {
    id: 1,
    name: 'Featured',
    key: 'isFavorite',
    type: 'number',
    desc: true,
  },
  {
    id: 2,
    name: 'Best Selling',
    key: 'sellNo',
    type: 'number',
    desc: true,
  },
  {
    id: 3,
    name: 'Alphabetically, A-Z',
    key: 'title',
    type: 'string',
    desc: false,
  },
  {
    id: 4,
    name: 'Alphabetically, Z-A',
    key: 'title',
    type: 'string',
    desc: true,
  },
  {
    id: 5,
    name: 'Price, low to high',
    key: 'price',
    type: 'number',
    desc: false,
  },
  {
    id: 6,
    name: 'Price, high to low',
    key: 'price',
    type: 'number',
    desc: true,
  },
  {
    id: 7,
    name: 'Date, new to old',
    key: 'openDate',
    type: 'number',
    desc: true,
  },
  {
    id: 8,
    name: 'Date, old to new',
    key: 'openDate',
    type: 'number',
    desc: false,
  },
];
