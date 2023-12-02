import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProductHandlers({ data }) {
  return (
    <View style={styles.wrapper}>
      {data.isFavorite ? (
        <Image
          style={styles.favoriteIcon}
          source={require('../../assets/favorite-red.png')}
        />
      ) : (
        <Image
          style={styles.favoriteIcon}
          source={require('../../assets/favorite-black.jpeg')}
        />
      )}

      <View style={styles.buyWrapper}>
        <Image
          style={styles.buyIcon}
          source={require('../../assets/buy.png')}
        />
        <Text style={styles.buyText}>Buy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    zIndex: 0,
  },
  favoriteIcon: {
    width: 40,
    height: 40,
  },
  buyWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buyIcon: {
    width: 40,
    height: 40,
  },
  buyText: {
    fontSize: 16,
    fontWeight: '600',
    margin: 5,
    color: '#EE4200ff',
  },
});
