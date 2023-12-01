import { StyleSheet, SafeAreaView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Card from './components/card';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#840301ff', '#a51201ff', '#e95612ff', '#f47018ff']}
        style={styles.container}
      >
        <Card />
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
    backgroundColor: '#111',
  },
});
