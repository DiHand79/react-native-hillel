import { useEffect, useState, useRef, useCallback } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  Dimensions,
  View,
  RefreshControl,
  Alert,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PacmanIndicator } from 'react-native-indicators';
import { itemsTemplate, generateItems } from './common/templates/item-card';
import { colors } from './common/colors/colors';
import ItemCard from './components/productViews/ItemCard';
import SearchPanel from './components/SearchPanel/SearchPanel';
import CustomModal from './components/productViews/CustomModal';

let DEBUG_MENU = true;

export default function App() {
  const [loading, setLoading] = useState(true);
  const [nextItem, setNextItem] = useState({ count: 0, start: 0 });
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  const [refreshing, setRefreshing] = useState(false);
  const [freezeUpdate, onFreezeUpdate] = useState(false);

  const windowHeight = Dimensions.get('window').height; // screen

  let isItemsLoaded = false;
  useEffect(() => {
    if (!isItemsLoaded) {
      const firstGettedItems = generateItems(4, 0); // get first 5 pizzas from server :)
      setItems(firstGettedItems);
      setFilteredItems(firstGettedItems);
      setNextItem({ count: 1, start: 4 });
      isItemsLoaded = true;
    }
  }, []);

  const onRefresh = useCallback(() => {
    if (nextItem.start < 15) {
      setRefreshing(true);
      setTimeout(() => {
        const nextGettedItems = generateItems(nextItem.count, nextItem.start);
        setItems((prev) => [...nextGettedItems, ...prev]);
        setNextItem((prev) => ({
          ...prev,
          count: 1,
          start: prev.start + 1,
        }));
        setRefreshing(false);
      }, 3000);
    }
  }, []);

  const onUpdateEndList = ({ distanceFromEnd }) => {
    // console.warn('onUpdateEndList', distanceFromEnd);
    if (nextItem.start < 15 && !freezeUpdate) {
      // max 40
      setRefreshing(true);
      // setTimeout(() => {
      const nextGettedItems = generateItems(5, nextItem.start);
      setNextItem((prev) => ({ ...prev, start: prev.start + 5 }));
      setItems((prev) => [...prev, ...nextGettedItems]);
      setRefreshing(false);
      // }, 500);
    }
    // else if (!freezeUpdate && nextItem.start > 14)
    //   Alert.alert('Sorry, End Pizza today.');
  };

  // add new getted from server pizzas to list
  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  // simulate loader
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

  // // not work
  // const renderLoader = () => {
  //   const windowHeight = Dimensions.get('window').height; // screen
  //   return (
  //     <View style={{ display: loading ? 'flex' : 'none' }}>
  //       <PacmanIndicator
  //         color={colors['loader-color']}
  //         size={128}
  //         style={[styles.loaderContainer, { height: windowHeight }]}
  //       />
  //     </View>
  //   );
  // };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={colors['app-background-gradient']}
        style={styles.container}
      >
        {/*  if used - break good work FlatList.onEndReached
          <View style={{ display: loading ? 'flex' : 'none' }}>
            <PacmanIndicator
              color={colors['loader-color']}
              size={128}
              style={[styles.loaderContainer, { height: windowHeight }]}
            />
          </View>
        */}

        {/* DEBUG START */}
        {DEBUG_MENU && (
          <Text style={{ fontSize: 20, color: '#fff' }}>
            {'items: ' +
              items.length +
              ' filteredItems: ' +
              filteredItems.length +
              ' next start: ' +
              nextItem.start}
            {JSON.stringify(nextItem.start < 40 && !freezeUpdate)}
          </Text>
        )}
        {/* DEBUG END */}

        <View
          style={[
            styles.HeaderIconsWrapper,
            [{ display: !loading ? 'flex' : 'none' }],
          ]}
        >
          <SearchPanel
            onSearch={onSearch}
            onFreezeUpdate={onFreezeUpdate}
            style={styles.searchButton}
          />
          <CustomModal />
        </View>

        <FlatList
          style={[styles.listItems, { display: loading ? 'none' : 'flex' }]}
          data={filteredItems}
          renderItem={ItemCard}
          ListEmptyComponent={
            <Text style={styles.warningText}>There is nothing</Text>
          }
          refreshing={refreshing}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              progressViewOffset={0.5}
            />
          }
          onEndReachedThreshold={0.5}
          onEndReached={onUpdateEndList} // can CONFLICT with search bar - fixed
        />
      </LinearGradient>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors['primary-dark'], //colors['app-background'],
  },
  loaderContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: colors['card-background'],
  },
  HeaderIconsWrapper: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    width: '96%',
    // marginTop: 40,
    // marginBottom: 20,
    flexDirection: 'row',
  },
  searchButton: {
    flex: 1,
    maxWidth: '90%',
  },
  openModalButton: {
    flex: 1,
    maxHeight: 200,
    padding: 10,
    color: colors['primary-light'],
  },
  listItems: {
    flex: 1,
    width: '100%',

    // borderWidth: 3,
    // borderColor: 'red',
  },
  warningText: {
    textAlign: 'center',
    fontSize: 20,
    color: colors['warning-text'],
    padding: 20,
    marginTop: 20,
  },
});
