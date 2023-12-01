import { StyleSheet, View, Text } from 'react-native';
import ProductPromoImage from './product/productPromoImage';
import ProductDescriptions from './product/productDescriptions';
import ProductHandlers from './product/productHandlers';

export default function Card() {
  return (
    <View style={styles.cardWrapper}>
      <Text style={styles.text1}>test tesxt1</Text>
      <Text style={styles.text2}>test tesxt2</Text>
      <Text style={styles.text3}>test tesxt3</Text>
      {/* <ProductPromoImage />
      <ProductDescriptions />
      <ProductHandlers /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    padding: 10,
    backgroundColor: 'tomato',
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  text2: {
    padding: 10,
    backgroundColor: 'red',
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  text3: {
    padding: 10,
    backgroundColor: 'lightblue',
    flex: 2,
    padding: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  cardWrapper: {
    flexDirection: 'row',
    width: '96%',
    padding: 20,
    backgroundColor: '#234567',

    // overflow: 'hidden',
    // display: 'flex',
    // flexDirection: 'column',
    // heigth: 250,
    // width: '90%',
    // padding: 10,
    // borderWidth: 10,
    // borderColor: '#333',

    // backgroundColor: '#234567',

    // margin: 10,
    // minHeight: 20,
    // borderWidth: 5,
    // borderRadius: 3,
    // justifyContent: 'center',
    // alignItems: 'center',

    // shadowOffset: { width: 10, height: 10 },
    // shadowOpacity: 0.5,
    // shadowRadius: 10,
  },
});
