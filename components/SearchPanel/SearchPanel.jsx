import { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Pressable } from 'react-native';
import { colors } from '../../common/colors/colors';
import ClearSVG from './ClearIcon';

export default function SearchPanel({ onSearch }) {
  const [isPressed, setIsPressed] = useState(false);
  const [searchText, setSearchText] = useState('');

  const onTextChange = (e) => {
    onSearch(e);
    setSearchText(e);
  };

  const onClearSearch = () => {
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
              ? colors['primary-light-alpha-pressed']
              : colors['primary-light-alpha'],
          },
        ]}
      >
        <TextInput
          style={styles.text}
          placeholder='Start Enter text to search:'
          onChangeText={onTextChange}
          maxLength={100}
          multiline={true}
          numberOfLines={3}
          value={searchText}
        />
        <ClearSVG
          style={[
            styles.svgIcon,
            {
              stroke: isPressed
                ? colors['primary-dark-pressed']
                : colors['primary-dark'],
            },
          ]}
          width='24'
          height='24'
          stroke={colors['primary-dark-alpha']}
          onPress={onClearSearch}
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
  },
  wrapperSearchPanel: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  wrapperSearchIcon: {
    padding: 10,
    borderRadius: 3,
    width: '96%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  svgIcon: {
    // // not work for SVG params - only as CSSImage container
    // fill: colors['primary-light'],
  },
});
