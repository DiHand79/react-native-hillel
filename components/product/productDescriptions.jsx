import { View, StyleSheet, Text, Image } from 'react-native';
export default function ProductDescriptions({ data }) {
  const { title, price, oldPrice, description } = data;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>

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

      <Text style={styles.description}>{description}</Text>
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
    color: '#4e2f20ff',
  },
  wrapperPrice: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginVertical: 15,
    marginLeft: 5,
    flex: 3,
  },
  price: {
    fontSize: 30,
    fontWeight: '700',
    color: '#849006ff', //'#B9B807ff', //'#4e2f20ff',
  },
  priceTitle: {
    fontSize: 20,
    color: '#4e2f20ff',
  },
  oldPrice: {
    fontSize: 16,
    color: '#840000ff', //'#4e2f20ff',
    fontWeight: '600',
    textDecorationLine: 'line-through',
    marginBottom: -5,
  },
  oldPriceTitle: {
    fontSize: 12,
    color: '#4e2f20ff',
  },
  description: {
    marginLeft: 5,
    maxHeight: 80,
    fontSize: 16,
    color: '#4e2f20ff',
    flex: 6,
    zIndex: 0,
  },
});
