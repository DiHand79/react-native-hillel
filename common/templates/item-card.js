import { pizzaImages } from '../templates/pizza-links';
import {
  pizzaDescriptionsArray,
  pizzaNamesArray,
} from '../templates/pizza-names';
import uids from '../templates/uids';
import { colors } from '../colors/colors';

const itemsTemplate = [
  {
    key: uids[0],
    title: pizzaNamesArray[0].pizzaName_eng,
    isPromo: 'HOT', // null 'HOT' 'Sale' '50%' '2=1' & etc
    promoColor: colors['promotion-hot'],
    isFavorite: false,
    rating: Math.round(Math.random() * 5),
    image: require('../../assets/imgs/pizza/0001.jpeg'),
    // image: pizzaImages[Math.round(Math.random() * pizzaImages.length)],
    price: Math.round(Math.random() * 500),
    oldPrice: 1.1, // more proce now
    description: pizzaDescriptionsArray[0].pizza_eng,
  },
  {
    key: uids[1],
    title: pizzaNamesArray[1].pizzaName_eng,
    isPromo: 'NEW', // null 'HOT' 'Sale' '50%' '2=1' & etc
    promoColor: colors['promotion-new'],
    isFavorite: true,
    rating: Math.round(Math.random() * 5),
    image: require('../../assets/imgs/pizza/0002.jpeg'),
    // image: pizzaImages[Math.round(Math.random() * pizzaImages.length) + 1],
    price: Math.round(Math.random() * 500),
    oldPrice: 1.2, // more proce now
    description: pizzaDescriptionsArray[1].pizza_eng,
  },
  {
    key: uids[2],
    title: pizzaNamesArray[2].pizzaName_eng,
    isPromo: 'SALE', // null 'HOT' 'Sale' '50%' '2=1' & etc
    promoColor: colors['promotion-sale'],
    isFavorite: Math.round(Math.random()),
    rating: Math.round(Math.random() * 5),
    image: require('../../assets/imgs/pizza/0003.jpeg'),
    // image: pizzaImages[Math.round(Math.random() * pizzaImages.length) + 2],
    price: Math.round(Math.random() * 500),
    oldPrice: 1.25, // more proce now
    description: pizzaDescriptionsArray[2].pizza_vegetarian_eng,
  },
  {
    key: uids[3],
    title: pizzaNamesArray[3].pizzaName_eng,
    isPromo: '50%', // null 'HOT' 'Sale' '50%' '2=1' & etc
    promoColor: colors['promotion-sale'],
    isFavorite: Math.round(Math.random()),
    rating: Math.round(Math.random() * 5),
    image: require('../../assets/imgs/pizza/0004.jpeg'),
    // image: pizzaImages[Math.round(Math.random() * pizzaImages.length) + 3],
    price: Math.round(Math.random() * 500),
    oldPrice: 1.75, // more proce now
    description: pizzaDescriptionsArray[3].pizza_bbq_beef_eng,
  },
  {
    key: uids[4],
    title: pizzaNamesArray[4].pizzaName_eng,
    isPromo: null, // null 'HOT' 'Sale' '50%' '2=1' & etc
    promoColor: colors['promotion-sale'],
    isFavorite: Math.round(Math.random()),
    rating: Math.round(Math.random() * 5),
    image: require('../../assets/imgs/pizza/0005.jpeg'),
    // image: pizzaImages[Math.round(Math.random() * pizzaImages.length) + 4],
    price: Math.round(Math.random() * 500),
    oldPrice: 1.75, // more proce now
    description: pizzaDescriptionsArray[2].pizza_vegetarian_eng,
  },
  {
    key: uids[5],
    title: pizzaNamesArray[5].pizzaName_eng,
    isPromo: null, // null 'HOT' 'Sale' '50%' '2=1' & etc
    promoColor: colors['promotion-hot'],
    isFavorite: Math.round(Math.random()),
    rating: Math.round(Math.random() * 5),
    image: require('../../assets/imgs/pizza/0006.jpeg'),
    // image: pizzaImages[Math.round(Math.random() * pizzaImages.length) + 5],
    price: Math.round(Math.random() * 500),
    oldPrice: 1.75, // more proce now
    description: pizzaDescriptionsArray[4].pizza_mediterranean_eng,
  },
  {
    key: uids[6],
    title: pizzaNamesArray[6].pizzaName_eng,
    isPromo: 'NEW', // null 'HOT' 'Sale' '50%' '2=1' & etc
    promoColor: colors['promotion-new'],
    isFavorite: Math.round(Math.random()),
    rating: Math.round(Math.random() * 5),
    image: require('../../assets/imgs/pizza/0007.jpeg'),
    // image: pizzaImages[Math.round(Math.random() * pizzaImages.length) + 6],
    price: Math.round(Math.random() * 500),
    oldPrice: 1.15, // more proce now
    description: pizzaDescriptionsArray[1].pizza_hawaiian_eng,
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
