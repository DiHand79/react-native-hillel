import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { colors } from '../../common/colors/colors';
import ClearSVG from './ClearIcon';
import SearchSVG from './SearchIcon';

export default function SearchPanel({ onSearch, onFreezeUpdate }) {
  const [isPressed, setIsPressed] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(true);

  const onTextChange = (e) => {
    onSearch(e);
    setSearchText(e);
  };

  const onClearSearch = () => {
    onSearch('');
    setSearchText('');
  };

  const onCollapse = () => {
    setIsCollapsed((prev) => !prev);
    onFreezeUpdate((prev) => !prev);
    onSearch('');
    setSearchText('');
  };

  return (
    <View style={styles.wrapperSearchPanel}>
      <Pressable
        onPress={() => setIsPressed((prev) => !prev)}
        style={({ pressed }) => [
          styles.wrapperSearchIcon,
          {
            backgroundColor: pressed
              ? colors['primary-light-pressed']
              : colors['primary-light'],
            width: isCollapsed ? 40 : '100%',
            zIindex: isCollapsed ? 1 : 10,
          },
        ]}
      >
        {!isCollapsed ? (
          <>
            <Pressable
              style={styles.clearIconWrapper}
              onPress={onClearSearch}
            >
              <ClearSVG
                style={[
                  styles.svgIcon,
                  // {
                  //   stroke: isPressed
                  //     ? colors['primary-dark-pressed']
                  //     : colors['primary-dark'],
                  // },
                ]}
                width='24'
                height='24'
                stroke={colors['primary-dark-alpha']}
              />
            </Pressable>
            <TextInput
              style={styles.text}
              placeholder='Enter text for search:'
              onChangeText={onTextChange}
              maxLength={100}
              multiline={true}
              numberOfLines={3}
              value={searchText}
            />
          </>
        ) : (
          <></>
        )}
        <Pressable
          onPress={onCollapse}
          style={styles.seachIconWrapper}
        >
          <Image
            source={require('../../assets/imgs/icons/search.png')}
            style={styles.pngIcon}
          />
          {/* <SearchSVG
            style={[
              styles.svgIcon,
              {
                fill: isPressed
                  ? colors['primary-dark-pressed']
                  : colors['primary-dark'],
              },
            ]}
            width='24'
            height='24'
            stroke={colors['primary-dark-alpha']}
            // onPress={onCollapsed}
          /> */}
        </Pressable>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperSearchPanel: {
    width: '90%',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',

    // borderWidth: 1,
    // borderColor: 'red',
  },
  wrapperSearchIcon: {
    borderRadius: 3,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    height: 40,
  },
  seachIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVerticalas: 10,
    paddingRight: 10,
  },
  pngIcon: {
    width: 24,
    height: 24,
  },
  clearIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVerticalas: 10,
  },
  svgIcon: {
    // not work for SVG params - only as CSSImage container
    fill: colors['primary-light'],
  },
  text: {
    color: colors['primary-dark-alpha'],
    fontSize: 20,
    maxHeight: 90,
    textAlign: 'left',
    width: 'auto',
    flex: 1,
  },
});
