import { StyleSheet, SafeAreaView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { itemsTemplate } from './common/templates/item-card';
import Card from './components/Card';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#840301ff', '#a51201ff', '#e95612ff', '#f47018ff']}
        style={styles.container}
      >
        {itemsTemplate.map((item) => (
          <Card
            cardData={item}
            key={item.key}
          />
        ))}
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
