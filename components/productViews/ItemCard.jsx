import {
  StyleSheet,
  View,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import ProductImage from '../product/productImage/ProductImage';
import ProductDescriptions from '../product/ProductDescriptions';
import ProductHandlers from '../product/ProductHandlers';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colors } from '../../common/colors/colors';

/**
 *  FOR use with FlatList - input data ONLY named as 'item'
 *  AND set as  renderItem={Card} as simple function NOT <Component/>
 */
export default function ItemCard({ item, onPress }) {
  const { key, test } = item;
  // const bavigation = useNavigation();
  // const route = useRoute();

  // const onPress = (data) => {
  //   this.onPress('up');
  // };

  // const onPizzaPress = () => {
  //   console.warn('Image Press');
  //   navigation.navigate('Settings', {
  //     test: 'test',
  //   });
  //   // onPress={onPizzaPress}
  // };

  return (
    <View
      style={styles.cardWrapper}
      key={key}
    >
      <TouchableOpacity onPress={onPress}>
        <ProductImage data={item} />
      </TouchableOpacity>

      <ProductDescriptions data={item} />
      <ProductHandlers data={item} />
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
