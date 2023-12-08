import { useMemo } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Card from './components/Card'; /// WTF Double importr??
import { LinearGradient } from 'expo-linear-gradient';
import { itemsTemplate, generateItems } from './common/templates/item-card';

export default function App() {
  // const [items] = useMemo(generateItems(3));
  // console.log('ITEMS GENERATED: ', items);
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
