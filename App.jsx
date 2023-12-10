import { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  Text,
  Dimensions,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PacmanIndicator } from 'react-native-indicators';
import { itemsTemplate } from './common/templates/item-card';
import { colors } from './common/colors/colors';
import ItemCard from './components/productViews/ItemCard';
import SearchPanel from './components/SearchPanel/SearchPanel';
import CustomModal from './components/productViews/CustomModal';

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

  const windowHeight = Dimensions.get('window').height; // screen

  const renderHeader = () => {
    return (
      <View
        style={[
          styles.HeaderIconsWrapper,
          [{ display: !loading ? 'flex' : 'none' }],
        ]}
      >
        <CustomModal>
          <Text style={styles.openModalButton}>Press me</Text>
        </CustomModal>
        <SearchPanel
          onSearch={onSearch}
          style={styles.searchButton}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={colors['app-background-gradient']}
        style={styles.container}
      >
        <View style={[{ display: loading ? 'flex' : 'none' }]}>
          <PacmanIndicator
            color={colors['loader-color']}
            size={128}
            style={[styles.loaderContainer, { height: windowHeight }]}
          />
        </View>

        {/* <View
          style={[
            styles.HeaderIconsWrapper,
            [{ display: !loading ? 'flex' : 'none' }],
          ]}
        >
          <SearchPanel
            onSearch={onSearch}
            style={styles.searchButton}
          />
          <CustomModal>
            <Text style={styles.openModalButton}>Press me</Text>
          </CustomModal>
        </View> */}

        <FlatList
          style={styles.listItems}
          data={filteredItems}
          renderItem={ItemCard}
          ListHeaderComponent={renderHeader}
          ListEmptyComponent={
            <Text style={styles.warningText}>There is nothing</Text>
          }
          // ListFooterComponent={
          //   <CustomModal>
          //     <Text style={styles.openModalButton}>Press me</Text>
          //   </CustomModal>
          // }
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
    justifyContent: 'center',
    backgroundColor: colors['app-background'],
  },
  loaderContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  HeaderIconsWrapper: {
    justifyContent: 'flex-end',
    width: '96%',
    margin: 10,
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

    // backgroundColor: colors['promotion-hot-dark'], //colors['primary-light'], //colors['primary-light-alpha'],
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    // width: '100%',
  },
  listItems: {
    // flex: 10,
    width: '100%',
    // marginTop: 60,
  },
  warningText: {
    textAlign: 'center',
    fontSize: 20,
    color: colors['warning-text'],
    padding: 20,
    marginTop: 20,
  },
});
