import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  RefreshControl,
  View,
} from 'react-native';
import { itemsTemplate, generateItems } from '../common/templates/item-card';
import { LinearGradient } from 'expo-linear-gradient';
import CustomHeader from '../components/CustomHeader';
import ItemCard from '../components/productViews/ItemCard';
import { colors } from '../common/colors/colors';
import { observer } from 'mobx-react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const AnimatedHeader = Animated.createAnimatedComponent(
  React.forwardRef((props, ref) => {
    return (
      <CustomHeader
        // ref={ref}
        {...props}
      />
    );
  })
);

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [nextItem, setNextItem] = useState({ count: 0, start: 0 });
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  const [refreshing, setRefreshing] = useState(false);
  const [freezeUpdate, onFreezeUpdate] = useState(false);

  // const [searchText, setSearchText] = useState('');
  // const [isCollapsed, setIsCollapsed] = useState(!searchText.length && true);
  // const [isCollapsed, setIsCollapsed] = useState(true);

  /**
   *  ANIMATION
   */
  const scrollY = useSharedValue(0);
  // const animateHeaderStyle = useAnimatedStyle(() => ({
  //   height: interpolate(scaleHeaderValue, 0, 40),
  //   opacity: scaleHeaderValue.value,
  //   overflow: 'hidden',
  // }));
  const animateHeaderStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [0, 100], // Scroll range for animation start and end
      [40, 0], // Height interpolation from 40 to 0
      Extrapolate.CLAMP
    );

    return {
      height,
      opacity: height / 40, // Opacity changes with height
      overflow: 'hidden',
    };
  });

  const navigation = useNavigation();

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

  const onRefresh = () => {
    setRefreshing(true);
    const nextGettedItems = generateItems(nextItem.count, nextItem.start);
    setTimeout(
      (nextGettedItems) => {
        setItems((prev) => [...nextGettedItems, ...prev]);
        setNextItem((prev) => ({
          count: 1,
          start: prev.start + 1,
        }));
        setRefreshing(false);
      },
      3000,
      nextGettedItems
    );
  };

  const onUpdateEndList = ({ distanceFromEnd }) => {
    if (!refreshing && !freezeUpdate && nextItem.start < 15) {
      // max 40
      const nextGettedItems = generateItems(5, nextItem.start);
      setTimeout(
        (nextGettedItems) => {
          setNextItem((prev) => ({ ...prev, start: prev.start + 5 }));
          setItems((prev) => [...prev, ...nextGettedItems]);
          setRefreshing(false);
        },
        500,
        nextGettedItems
      );
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

  const onItemsScroll = (e) => {
    scrollY.value = e.nativeEvent.contentOffset.y;
  };

  function HomePage({ show }) {
    return (
      <LinearGradient
        colors={colors['app-background-gradient']}
        style={styles.container}
      >
        <AnimatedHeader
          style={animateHeaderStyle}
          onSearch={onSearch}
          onFreezeUpdate={onFreezeUpdate}
          loading={loading}
        >
          <CustomHeader
          // onSearch={onSearch}
          // onFreezeUpdate={onFreezeUpdate}
          // loading={loading}
          // searchText={searchText}
          // setSearchText={setSearchText}
          // isCollapsed={isCollapsed}
          // setIsCollapsed={setIsCollapsed}
          />
        </AnimatedHeader>
        <FlatList
          style={[styles.listItems, { display: loading ? 'none' : 'flex' }]}
          data={filteredItems}
          renderItem={({ item }) => (
            <ItemCard
              item={item}
              onPress={() => navigation.navigate('Detail', { item })}
            />
          )}
          // keyExtractor={({ item, index }) => console.warn(item, index)}
          onPress={(data) => console.warn('TEST onPress: ', data)}
          onScroll={onItemsScroll}
          scrollEventThrottle={16} // Adjust as needed for performance
          ListEmptyComponent={
            <Text style={styles.warningText}>There is nothing</Text>
          }
          refreshing={refreshing}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              progressViewOffset={0.15}
            />
          }
          onEndReachedThreshold={0.15}
          onEndReached={onUpdateEndList} // can CONFLICT with search bar - fixed
        />
      </LinearGradient>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <HomePage />
    </SafeAreaView>
  );
};

export default observer(HomeScreen);

const styles = StyleSheet.create({
  wrapper: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    width: '96%',
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
  },
  warningText: {
    textAlign: 'center',
    fontSize: 20,
    color: colors['warning-text'],
  },
});
