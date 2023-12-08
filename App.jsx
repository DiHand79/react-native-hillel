import { useMemo } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Card from './components/Card'; /// WTF Double importr??
import { LinearGradient } from 'expo-linear-gradient';
import { itemsTemplate } from './common/templates/item-card';
import Card from './components/Card';
import { colors } from './common/colors';

export default function App() {
  // const [items] = useMemo(generateItems(3));
  // console.log('ITEMS GENERATED: ', items);
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={colors['app-background-gradient']}
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
    backgroundColor: colors['app-background'],
  },
});
