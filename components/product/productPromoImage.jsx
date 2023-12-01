import { View, StyleSheet, Image } from 'react-native';
export default function ProductPromoImage() {
  return (
    <View
      style={styles.imageWrapper}
      hoverStyle={[styles.imageWrapper, styles.imageWrapper_hover]}
    >
      <Image
        style={styles.imagePromo}
        // source={require('../../assets/imgs/pizza/0001.jpeg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  imagePromo: {
    width: 200,
    height: 200,
    backgroundColor: '#999',
  },
});
