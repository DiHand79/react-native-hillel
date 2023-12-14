import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../common/colors/colors';

export default function DetailItemScreen(props) {
  const navigation = useNavigation();
  const route = useRoute();

  const onPress = () => navigation.goBack(); //navigation.navigate('Home');
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={colors['app-background-gradient']}
        style={styles.container}
      >
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.text}>
            {JSON.stringify(route.params)}
            {'\n\n'}
            Detail Item Screen : {route.params.test}
          </Text>
        </TouchableOpacity>
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
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
});
