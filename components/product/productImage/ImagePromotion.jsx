import { View, Text, StyleSheet } from 'react-native';
export default function ImagePromotion({ text = 'New', color = '#f47018ff' }) {
  const useStyle = StyleSheet.create({
    props: {
      backgroundColor: color,
    },
  });

  return (
    <View
      style={[
        styles.wrapper,
        useStyle.props,
        {
          transform: [{ rotate: '-45deg' }],
        },
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 10,
    left: -25,
    backgroundColor: '#f47018ff',
    // minWidth: 50,
    // maxWidth: 200,
    width: 100,
    // borderBottomRightRadius: '50%',
    // borderTopRightRadius: '50%',
    padding: 3,

    // transform: rotateX('45deg'),// crash

    // overflow: 'hidden', // off wor work shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  text: {
    color: '#f9fafaff',
    fontSize: 16,
    textAlign: 'center',
  },
});
