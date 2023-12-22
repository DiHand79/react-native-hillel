import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppStateComponentWrapper } from '../hooks/useAppState';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../common/colors/colors';

export default function SettingsScreen(props) {
  const navigation = useNavigation();
  const onPress = () => navigation.goBack(); //navigation.navigate('Home');

  function SettingsPage() {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={colors['app-background-gradient']}
          style={styles.container}
        >
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>Settings Screen :</Text>
          </TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>
    );
  }
  return (
    <AppStateComponentWrapper>
      <SettingsPage />
    </AppStateComponentWrapper>
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
