import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
  Share,
} from 'react-native';
import CustomShare from '../messages/CustomShare';
import { useState } from 'react';
import { colors } from '../../common/colors/colors';

export default function CustomSlider({ data, title, showsButtons }) {
  const mess = 'This great proposial Pizza very sexy and wait you';
  const onPressSlide = () => {
    console.warn('Pressed: ', mess);
  };

  const renderSlide = ({ item }) => {
    console.log(item);
    return (
      <View style={styles.slide}>
        <View style={styles.slideTitleWrapper}>
          <Text style={styles.slideTitle}>{item.title}</Text>
          <CustomShare
            style={styles.slideTitle}
            mess={mess}
            title={'Share:'}
          />
        </View>
        <Image
          // source={{ uri: 'file:/' + item.image }}
          source={item.image}
          style={styles.slideImage}
        />
      </View>
    );
  };
  return (
    <View style={styles.wrapperSwiper}>
      <Text
        style={styles.sliderTitle}
        numberOfLines={1}
      >
        {title}
      </Text>
      <FlatList
        data={data}
        renderItem={renderSlide}
        horizontal
      ></FlatList>
      {showsButtons && <Text>Buttons</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperSwiper: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderTitle: {
    fontSize: 40,
    textAlign: 'left',
    marginBottom: 10,
    width: '100%',
    fontWeight: '900',
    color: colors['primary-light'],
  },
  slide: {
    flex: 1,
    width: '100%',
    minWidth: 300,
    minHeight: 300,
    justifyContent: 'center',
    alignItems: 'center',

    position: 'relative',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: colors['primary-light'],

    // borderWidth: 10,
    // borderColor: 'violet',
  },
  slideTitleWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 1,
    width: '100%',
    backgroundColor: colors['promotion-image-overlay-dark'], //colors['primary-dark'],
    overlayColor: 'red',
  },
  slideTitle: {
    padding: 20,
    fontSize: 60,
    fontWeight: '300',
    textAlign: 'left',
    color: colors['primary-light'],

    // borderWidth: 1,
    // borderColor: 'red',
  },
  slideImage: {
    // flex: 1,
    width: '100%',
    height: '100%',
    minWidth: 300,
    minHeight: 300,
    resizeMode: 'cover',

    // borderWidth: 1,
    // borderColor: 'red',
  },
});
