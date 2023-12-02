import { pizzaImages } from '../templates/pizza-links';
import {
  pizzaDescriptopnsArray,
  pizzaNamesArray,
} from '../templates/pizza-names';
import uids from '../templates/uids';

const itemTemplate = {
  key: uids[0],
  title: pizzaNamesArray[0].pizzaName1_eng,
  isPromo: '50%', // null 'HOT' 'Sale' '50%' '2=1' & etc
  isFavorite: true,
  rating: Math.round(Math.random() * 5),
  image: pizzaImages[Math.round(Math.random() * pizzaImages.length)],
  price: Math.round(Math.random() * 500),
  oldPrice: 1.1, // more proce now
  description: pizzaDescriptopnsArray[0].pizza_margherita_eng,
};

export { itemTemplate };
