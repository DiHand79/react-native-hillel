import { StyleSheet, View, Text } from 'react-native';
import ProductImage from './product/productImage/productImage';
import ProductDescriptions from './product/productDescriptions';
import ProductHandlers from './product/productHandlers';

export default function Card({ cardData }) {
  const { key } = cardData;

  return (
    <View
      style={styles.cardWrapper}
      key={key}
    >
      <ProductImage data={cardData} />
      <ProductDescriptions data={cardData} />
      <ProductHandlers data={cardData} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    borderRadius: 10,
    flexDirection: 'row',
    width: '96%',
    padding: 0,
    backgroundColor: '#f9fafaff',

    // overflow: 'hidden', // off for work shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
});
