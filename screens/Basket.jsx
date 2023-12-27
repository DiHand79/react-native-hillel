import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../common/colors/colors';
import appState from '../store';

export default function BasketScreen(props) {
  const navigation = useNavigation();
  const onPress = () => navigation.goBack(); //navigation.navigate('Home');

  /**
   *  get state data
   *  render summ data
   *  user can remove item
   *  update icon - counter on TabBasketIcon
   */

  function SettingsPage() {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={colors['app-background-gradient']}
          style={styles.container}
        >
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>Basket Screen :</Text>
            <Text style={styles.text}>{JSON.stringify(appState)}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>
    );
  }
  return <SettingsPage />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors['primary-dark'], //colors['app-background'],
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
});
