import { pizzaImages } from '../templates/pizza-links';
import {
  pizzaDescriptionsArray,
  pizzaNamesArray,
} from '../templates/pizza-names';
import uids from './uids';

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
    description: pizzaDescriptionsArray[0].pizza_eng,
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
    description: pizzaDescriptionsArray[1].pizza_eng,
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
    description: pizzaDescriptionsArray[2].pizza_eng,
  },
];

const generateItems = (count = 10) => {
  const PROMO_COLORS = ['#ee4200ff', '#478900', '#007cc3'];
  let items = [];

  for (let i = 0; i < count; i++) {
    const cardTemplate = {
      key: uids[i],
      title: pizzaNamesArray[i].pizzaName_eng,
      isPromo: Math.round(Math.random()), // null 'HOT' 'Sale' '50%' '2=1' & etc
      promoColor: PROMO_COLORS[Math.round(Math.random()) * PROMO_COLORS.length],
      isFavorite: Math.round(Math.random()),
      rating: Math.round(Math.random() * 5),
      image: pizzaImages[Math.round(Math.random() * pizzaImages.length)],
      price: Math.round(Math.random() * 500) + 50,
      oldPrice: 1.1, // more proce now
      description: pizzaDescriptionsArray[i].pizza_eng,
    };
    items.push(cardTemplate);
  }

  return items;
};

export { itemsTemplate, generateItems };
