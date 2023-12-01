import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Card from './components/card';

export default function App() {
  return (
    <LinearGradient
      colors={['#840301ff', '#a51201ff', '#e95612ff', '#f47018ff']}
      style={styles.container}
    >
      <SafeAreaView style={styles.linearGradient}>
        {/* <View style={styles.container}> */}
        <Card />
        {/* </View> */}
      </SafeAreaView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0000',
  },
  linearGradient: {
    // flex: 1,
    borderRadius: 50,
    backgroundColor: '#0000ff',
  },
});
