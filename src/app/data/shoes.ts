import { Shoe } from '../shoe';

export class ShoeData {
  static shoes: Shoe[] = [
    {
      name: 'Big Baller',
      type: 'bball',
      colors: ['red', 'white'],
      brand: 'nike',
      price: 99,
    },
    {
      name: 'Jump Ninja',
      type: 'bball',
      colors: ['black'],
      brand: 'adidas',
      price: 129,
    },
    {
      name: 'Gazelle',
      type: 'running',
      colors: ['black', 'red'],
      brand: 'puma',
      price: 59,
    },
    {
      name: 'Rio',
      type: 'running',
      colors: ['red'],
      brand: 'puma',
      price: 69,
    },
    {
      name: 'StrideFast',
      type: 'running',
      colors: ['black'],
      brand: 'nike',
      price: 39,
    },
    {
      name: 'Speedster',
      type: 'running',
      colors: ['black', 'white'],
      brand: 'adidas',
      price: 85,
    },
    {
      name: 'Coaster',
      type: 'casual',
      colors: ['black', 'blue'],
      brand: 'crevo',
      price: 45,
    },
    {
      name: 'Freeform',
      type: 'casual',
      colors: ['black', 'red'],
      brand: 'nike',
      price: 59,
    },
    {
      name: 'No Arch',
      type: 'casual',
      colors: ['black', 'white'],
      brand: 'crevo',
      price: 29,
    },
  ];
}
