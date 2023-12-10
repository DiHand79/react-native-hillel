import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  Dimensions,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import CustomShare from '../messages/CustomShare';
import { useEffect, useState, useRef, useCallback } from 'react';
import { colors } from '../../common/colors/colors';

export default function CustomSlider({ data, title, showsButtons }) {
  const flatListRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const screen = new Dimensions.get('screen');

  // const nextIndex = (activeIndex + 1) % (data.length - 1);
  // console.warn('REFRESH', nextIndex);
  // setActiveIndex(nextIndex);

  const mess = 'This great proposial Pizza very sexy and wait you';

  const renderSlide = ({ item }) => {
    return (
      <View style={[styles.slide, { width: screen.width }]}>
        <View style={styles.imageCropWrapper}>
          <View style={styles.slideTitleWrapper}>
            <CustomShare
              style={styles.slideShare}
              mess={mess}
              title={'Share:'}
            />
            <Text style={styles.slideTitle}>{item.title}</Text>
          </View>
          <Image
            source={item.image}
            style={[styles.slideImage, { width: screen.width - 50 }]}
          />
        </View>
      </View>
    );
  };

  function CustomPaggination({
    size = 10,
    activeColor = 'red',
    inactiveColor = 'gray',
    activeIndex = 0,
    count = 3,
    onPress,
    children,
  }) {
    const Pagginations = [];
    for (let i = 0; i < count; i++) {
      const el = (
        <Pressable
          onPress={() => onPress(i)}
          key={'paggination_' + i}
        >
          <View
            style={[
              stylesPagginations.pagginationItem,
              {
                backgroundColor:
                  activeIndex === i ? activeColor : inactiveColor,
                width: size,
                height: size,
              },
            ]}
          >
            {children}
          </View>
        </Pressable>
      );

      Pagginations.push(el);
    }
    return (
      <View style={stylesPagginations.pagginationWrapper}>{Pagginations}</View>
    );
  }

  const onUserScroll = (nativeEvent) => {
    const index = Math.round(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    setActiveIndex(index);
  };

  const onClickPaggination = (index) => {
    setActiveIndex(index);
    if (flatListRef?.current) {
      flatListRef.current.scrollToIndex({ index: index, animated: false });
      // flatListRef?.current?.scrollTo({
      //   x: screen.width * index,
      //   x: 0,
      //   animated: true,
      // });
    }
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
        ref={flatListRef}
        data={data}
        renderItem={renderSlide}
        initialNumToRender={4}
        horizontal
        pagingEnabled
        onScroll={({ nativeEvent }) => onUserScroll(nativeEvent)}
        getItemLayout={(data, index) => ({
          length: screen.width,
          offset: screen.width * index,
          index,
        })}
        // refreshing
        // onRefresh={() => {}}
      />
      <CustomPaggination
        activeColor={colors['primary-light-alpha']}
        inactiveColor={colors['primary-dark-alpha']}
        activeIndex={activeIndex}
        count={data.length}
        onPress={onClickPaggination}
      />
    </View>
  );
}
//   ○●
const styles = StyleSheet.create({
  wrapperSwiper: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  sliderTitle: {
    fontSize: 40,
    textAlign: 'left',
    margin: 20,
    marginBottom: 0,
    width: '90%',
    fontWeight: '900',
    color: colors['primary-light'],

    // borderWidth: 1,
    // borderColor: 'red',
  },
  slide: {
    flex: 1,
    width: '100%',

    position: 'relative',
    justifyContent: 'top',
    alignItems: 'center',

    // backgroundColor: colors['primary-light'],
    // borderWidth: 10,
    // borderColor: 'violet',
  },
  imageCropWrapper: {
    // width: '100%',
    position: 'relative',
  },
  slideTitleWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    // width: '100%',
    backgroundColor: colors['promotion-image-overlay-dark'], //colors['primary-dark'],
  },
  slideTitle: {
    margin: 20,
    fontSize: 60,
    fontWeight: '300',
    textAlign: 'right',
    color: colors['primary-light'],

    // borderWidth: 1,
    // borderColor: 'red',
  },
  slideImage: {
    height: 500, //'100%',
    resizeMode: 'cover',

    // borderWidth: 1,
    // borderColor: 'red',
  },
});

const stylesPagginations = StyleSheet.create({
  pagginationWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-between',
    position: 'absolute',
    bottom: 60,
  },
  pagginationItem: {
    borderRadius: '50%',
    margin: 3,
    width: 10,
    height: 10,
    backgroundColor: 'lightgray',
  },
});
