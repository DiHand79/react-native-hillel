import { pizzaImages } from '../templates/pizza-links';
import {
  pizzaDescriptopnsArray,
  pizzaNamesArray,
} from '../templates/pizza-names';
import uids from '../templates/uids';

const itemsTemplate = [
  {
    key: uids[0],
    title: pizzaNamesArray[0].pizzaName_eng,
    isPromo: null, // null 'HOT' 'Sale' '50%' '2=1' & etc
    promoColor: '#ee4200ff',
    isFavorite: false,
    rating: Math.round(Math.random() * 5),
    image: pizzaImages[Math.round(Math.random() * pizzaImages.length)],
    price: Math.round(Math.random() * 500),
    oldPrice: 1.1, // more proce now
    description: pizzaDescriptopnsArray[0].pizza_margherita_eng,
  },
  {
    key: uids[1],
    title: pizzaNamesArray[1].pizzaName_eng,
    isPromo: 'NEW', // null 'HOT' 'Sale' '50%' '2=1' & etc
    promoColor: '#ee4200ff',
    isFavorite: true,
    rating: Math.round(Math.random() * 5),
    image: pizzaImages[Math.round(Math.random() * pizzaImages.length)],
    price: Math.round(Math.random() * 500),
    oldPrice: 1.2, // more proce now
    description: pizzaDescriptopnsArray[1].pizza_hawaiian_eng,
  },
  {
    key: uids[2],
    title: pizzaNamesArray[2].pizzaName_eng,
    isPromo: 'HOT', // null 'HOT' 'Sale' '50%' '2=1' & etc
    promoColor: '#478900',
    isFavorite: true,
    rating: Math.round(Math.random() * 5),
    image: pizzaImages[Math.round(Math.random() * pizzaImages.length)],
    price: Math.round(Math.random() * 500),
    oldPrice: 2.2, // more proce now
    description: pizzaDescriptopnsArray[2].pizza_vegetarian_eng,
  },
];

export { itemsTemplate };
