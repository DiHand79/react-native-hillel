import { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PacmanIndicator } from 'react-native-indicators';
import { itemsTemplate } from './common/templates/item-card';
import { colors } from './common/colors/colors';
import Card from './components/productViews/Card';
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

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={colors['app-background-gradient']}
        style={styles.container}
      >
        <SearchPanel onSearch={onSearch} />
        <ScrollView style={styles.listItems}>
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

          {/* <ItemsList /> */}

          {!loading &&
            (filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <Card
                  cardData={item}
                  key={item.key}
                />
              ))
            ) : (
              <Text style={styles.warningText}>There is nothing</Text>
            ))}

          {/* {loading ? (s
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
        </ScrollView>
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
  listItems: {
    flex: 1,
    width: '100%',
  },
  warningText: {
    textAlign: 'center',
    fontSize: 20,
    color: colors['warning-text'],
    padding: 20,
    marginTop: 10,
  },
});
