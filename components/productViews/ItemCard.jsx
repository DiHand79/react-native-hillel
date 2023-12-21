import { StyleSheet, View, TouchableOpacity } from 'react-native';
import ProductImage from '../product/productImage/ProductImage';
import ProductDescriptions from '../product/ProductDescriptions';
import ProductHandlers from '../product/ProductHandlers';
import { colors } from '../../common/colors/colors';
import { useRef, useState, useCallback } from 'react';

/**
 *  FOR use with FlatList - input data ONLY named as 'item'
 *  AND set as  renderItem={Card} as simple function NOT <Component/>
 */
export default function ItemCard({ item, onPress }) {
  const [imageHeight, setImageHeinght] = useState(0);
  const layoutRef = useRef(null);

  const onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    // console.warn('imageHeight: ', height);
    setImageHeinght(height);
  };

  const { key } = item;

  return (
    <View
      ref={layoutRef}
      // onLayout={({ nativeEvent }) => setCardHeinght(nativeEvent.layout.height)}
      onLayout={onLayout}
      style={styles.cardWrapper}
      key={key}
    >
      <TouchableOpacity
        onPress={onPress}
        style={[styles.imageWrapper]}
      >
        <ProductImage
          data={item}
          height={imageHeight}
        />
      </TouchableOpacity>

      <ProductDescriptions data={item} />
      <ProductHandlers data={item} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    borderRadius: 12,
    flexDirection: 'row',
    flex: 7, // 2-4-1
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
  imageWrapper: {
    flex: 2,
    // borderWidth: 1,
    // borderColor: 'green',
  },
});
