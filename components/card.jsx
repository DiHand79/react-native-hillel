import { StyleSheet, View, Text } from 'react-native';
import ProductImage from './product/productImage/ProductImage';
import ProductDescriptions from './product/ProductDescriptions';
import ProductHandlers from './product/ProductHandlers';
import { colors } from '../common/colors/colors';

function Card({ cardData }) {
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
    margin: 10,
    backgroundColor: colors['card-background'],

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

export default Card;
