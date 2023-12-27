import { StyleSheet, View, Text } from 'react-native';
import BasketIconSVG from './BasketIcon';
import orderStore from '../store/Order';
import { observer } from 'mobx-react';

const ICON_SIZE = 28; // TODO - get from appState

/**
 *  get data from State
 *  update counter on icon (? TODO use SVG inline code OR simple clear components)
 */
const TabIconBasket = (props) => {
  return (
    <View>
      <BasketIconSVG
        width={ICON_SIZE}
        height={ICON_SIZE}
        stroke={props.focused ? '#333' : '#ccc'}
      />
      <View style={styles.iconBasketWrapper}>
        <Text
          style={styles.iconBasketCounter}
          numberOfLines={1}
        >
          {orderStore.orders.length}
        </Text>
      </View>
    </View>
  );
};

export default TabIconBasket;

const styles = StyleSheet.create({
  // tabIcon: {
  //   width: 28,
  //   height: 28,
  // },
  iconBasketWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: 'blue',
    position: 'relative',
    borderRadius: '50%',
    overflow: 'hidden',

    maxWidth: 128,
    position: 'absolute',
    top: -ICON_SIZE / 2,
    right: -ICON_SIZE / 2,

    borderWidth: 1,
    borderColor: orderStore.orders.length > 0 ? 'darkred' : '#777',
    backgroundColor: orderStore.orders.length > 0 ? 'red' : '#ccc',
  },
  iconBasketCounter: {
    minWidth: ICON_SIZE,
    minHeight: ICON_SIZE,
    lineHeight: ICON_SIZE,
    color: orderStore.orders.length > 0 ? 'white' : '#333',
    fontSize: ICON_SIZE * 0.65,
    textAlign: 'center',

    // padding: 3,
    zIndex: 5,
  },
});
