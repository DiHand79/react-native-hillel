import { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PacmanIndicator } from 'react-native-indicators';
import { itemsTemplate } from './common/templates/item-card';
import { colors } from './common/colors/colors';
import Card from './components/Card';
import SearchPanel from './components/SearchPanel/SearchPanel';

export default function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  const [loading, setLoading] = useState(true);

  let isItemsLoaded = false;
  useEffect(() => {
    if (!isItemsLoaded) {
      setItems(itemsTemplate);
      setFilteredItems(itemsTemplate);
      isItemsLoaded = true;
    }
  }, []);

  useEffect(() => {
    if (isItemsLoaded) {
      setTimeout(() => setLoading(false), 2000);
    }
  }, []);

  const onSearch = (e) => {
    /**
     *  TODO add search type - price, description, favorites, promo
     */
    const filtered = items.filter((item) => {
      return item.title.toLowerCase().includes(e.toLowerCase());
    });
    setFilteredItems(filtered);
  };

  // const onClearSearch = (input) => {
  //   setFilteredItems(items);
  //   input
  // };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={colors['app-background-gradient']}
        style={styles.container}
      >
        {/* <ActivityIndicator
          size={'large'}
          color={colors['loader-color']}
          style={{ display: loading ? 'flex' : 'none' }}
        /> */}

        <PacmanIndicator
          color={colors['loader-color']}
          size={128}
          style={{ display: loading ? 'flex' : 'none' }}
        />

        <SearchPanel onSearch={onSearch} />

        {/* {loading ? (
          <ActivityIndicator
            size={'large'}
            color={colors['loader-color']}
            style={{ display: loading ? 'flex' : 'none' }}
          />
        ) : (
          items.map((item) => (
            <Card
              cardData={item}
              key={item.key}
            />
          ))
        )} */}
        {!loading &&
          filteredItems.map((item) => (
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
