import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../common/colors/colors';
import orderStore from '../store/Order';

export default function BasketScreen(props) {
  /**
   *  get state data
   *  render summ data
   *  user can remove item
   *  update icon - counter on TabBasketIcon
   */

  function onRemoveItem(data) {
    orderStore.removeOrder(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={colors['app-background-gradient']}
        style={styles.container}
      >
        <Text style={styles.title}>SUMMARY ORDER INFO:</Text>
        <ScrollView>
          {orderStore.orders.map((order) => {
            return (
              <View style={styles.itemLine}>
                <Text
                  style={styles.name}
                  key={order.id}
                  numberOfLines={3}
                >
                  {order.title} :
                </Text>
                <Text
                  style={styles.price}
                  key={order.id}
                >
                  {order.price}
                </Text>
                <TouchableOpacity
                  style={styles.itemButton}
                  onPress={onRemoveItem}
                >
                  <Text style={styles.itemButtonText}>X</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <Text style={styles.sum}>
          Summ: {orderStore.orders.reduce((sum, curr) => sum + curr.price, 0)}$
        </Text>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors['primary-dark'], //colors['app-background'],
  },
  title: {
    width: '100%',
    padding: 14,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#ffffff50',
  },
  itemLine: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors['primary-light-alpha'],
  },
  name: {
    width: '75%',
    fontSize: 20,
    textAlign: 'left',
    color: '#fff',
    width: '75%',
  },
  price: {
    width: '15%',
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
  itemButton: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemButtonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
  sum: {
    width: '100%',
    padding: 14,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'right',
    color: '#fff',
    backgroundColor: '#ffffff50',
  },
});
