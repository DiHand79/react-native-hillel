import { View, StyleSheet, Image } from 'react-native';
import ImagePromotion from './ImagePromotion';

export default function ProductImage({ data }) {
  return (
    <View style={styles.imageWrapper}>
      <Image
        style={styles.imagePromo}
        source={require('../../../assets/imgs/pizza/0001.jpeg')} // work
      />
      {data.isPromo && (
        <ImagePromotion
          color={'#ee4200ff'}
          text={data.isPromo}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    flex: 2,
    position: 'relative',
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  imagePromo: {
    resizeMode: 'cover',
    width: 100,
    height: 150,
    backgroundColor: '#999',
  },
});
