import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../common/colors/colors';

export default function ProductHandlers({ data }) {
  const [favorite, setFavorite] = useState(data.isFavorite);

  const onPressFavorite = () => {
    setFavorite(!favorite);
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPressFavorite}>
        {favorite ? ( //data.isFavorite
          <Image
            style={styles.favoriteIcon}
            source={require('../../assets/favorite-red.png')}
            on
          />
        ) : (
          <Image
            style={styles.favoriteIcon}
            source={require('../../assets/favorite-black.jpeg')}
          />
        )}
      </TouchableOpacity>

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
    color: colors['button-buy-text'],
  },
});
