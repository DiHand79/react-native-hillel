import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import { colors } from '../../common/colors/colors';
import ClearSVG from './ClearIcon';
import SearchSVG from './SearchIcon';

export default function SearchPanel({ onSearch }) {
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

  const onCollapsed = () => {
    setIsCollapsed((prev) => !prev);
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
              onPress={onClearSearch}
            />
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
        <SearchSVG
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
          onPress={onCollapsed}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors['primary-dark-alpha'],
    fontSize: 20,
    marginRight: 20,
    maxHeight: 90,
    textAlign: 'left',
    width: 'auto',
    flex: 1,
  },
  wrapperSearchPanel: {
    marginVertical: 10,
    width: '80%',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    zIndex: 1,

    // borderWidth: 1,
    // borderColor: 'red',
  },
  wrapperSearchIcon: {
    padding: 10,
    borderRadius: 3,
    // width: '96%',
    // alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  svgIcon: {
    // // not work for SVG params - only as CSSImage container
    padding: 10,
    // fill: colors['primary-light'],
  },
});
