import { View, StyleSheet, Text, Image } from 'react-native';
import { colors } from '../../common/colors';

export default function ProductDescriptions({ data }) {
  const { title, price, oldPrice, description } = data;

  return (
    <View style={styles.wrapper}>
      <Text
        style={styles.title}
        numberOfLines={2}
      >
        {title}
      </Text>

      <View style={styles.wrapperPrice}>
        <Text style={styles.price}>
          <Text style={styles.priceTitle}>now:</Text> {price}
        </Text>

        <Text
          style={[
            styles.oldPrice,
            {
              transform: [{ rotate: '-15deg' }],
            },
          ]}
        >
          <Text style={styles.oldPriceTitle}>old:</Text>{' '}
          {Math.round(price * oldPrice * 100) / 100}
        </Text>
      </View>

      <Text
        style={styles.description}
        numberOfLines={2}
      >
        {description}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    flex: 4,
    zIndex: 2,
  },
  title: {
    padding: 5,
    flex: 2,
    fontSize: 16,
    fontWeight: '700',
    color: colors['product-title'],
  },
  wrapperPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 15,
    marginLeft: 5,
    flex: 3,
  },
  price: {
    fontSize: 30,
    fontWeight: '700',
    color: colors['product-price'],
  },
  priceTitle: {
    fontSize: 20,
    color: colors['product-price-title'],
  },
  oldPrice: {
    fontSize: 16,
    color: colors['product-price-old'],
    fontWeight: '600',
    textDecorationLine: 'line-through',
    marginBottom: -5,
  },
  oldPriceTitle: {
    fontSize: 12,
    color: colors['product-price-old'],
  },
  description: {
    marginLeft: 5,
    maxHeight: 80,
    fontSize: 16,
    color: colors['product-description'],
    flex: 5,
    zIndex: 0,
  },
});
