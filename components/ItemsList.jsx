import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../../common/colors/colors';

export default function ItemList({ cardData }) {
  const { key } = cardData;

  return (
    <View
      style={styles.listWrapper}
      key={key}
    >
      <Text>ItemList</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listWrapper: {
    borderRadius: 10,
    flexDirection: 'row',
    width: '96%',
    margin: 10,
    backgroundColor: colors['card-background'],

    // overflow: 'hidden', // off for work shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
});
