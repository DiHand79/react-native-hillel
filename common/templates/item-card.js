import { pizzaImages } from '../templates/pizza-links';
const itemTemplate = {
  key: self.crypto.randomUUID(),
  title: 'Pizza 1',
  isNew: true,
  isFavorite: true,
  rating: Math.round(Math.random() * 5),
  image: Math.round(Math.random() * pizzaImages.length),
  price: Math.round(Math.random() * 500),
  sale: 0.1, // new price in percent = 100%-sale% = result
  description: 'wait ChatGPT text',
};

export { itemTemplate };
