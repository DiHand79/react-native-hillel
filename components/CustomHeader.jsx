import { View, StyleSheet, Pressable, Image } from 'react-native';
import SearchPanel from './searchPanel/SearchPanel';

import { colors } from '../common/colors/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
// import Animated from 'react-native-reanimated';

// const animatedHeader = Animated.createAnimatedComponent();

export default function CustomHeader({
  onSearch,
  onFreezeUpdate,
  loading,
  // searchText,
  // setSearchText,
  // isCollapsed,
  // setIsCollapsed,
}) {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View
      style={[
        styles.HeaderIconsWrapper,
        [{ display: !loading ? 'flex' : 'none' }],
      ]}
    >
      <SearchPanel
        onSearch={onSearch}
        onFreezeUpdate={onFreezeUpdate}
        // searchText={searchText}
        // setSearchText={setSearchText}
        // isCollapsed={isCollapsed}
        // setIsCollapsed={setIsCollapsed}
      />

      <Pressable onPress={() => navigation.navigate('Modal')}>
        <Image
          style={styles.buttonOpen}
          source={require('../assets/favorite-red.png')}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderIconsWrapper: {
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '96%',
    flexDirection: 'row',
    marginVertical: 10,
  },
  buttonOpen: {
    width: 40,
    height: 40,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
