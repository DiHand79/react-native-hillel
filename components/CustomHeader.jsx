import { View, StyleSheet } from 'react-native';
import SearchPanel from './searchPanel/SearchPanel';
import CustomModal from './productViews/CustomModal';

export default function CustomHeader({ onSearch, onFreezeUpdate, loading }) {
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
        style={styles.searchButton}
      />
      <CustomModal />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
