import { Alert, Share, View, Text, StyleSheet, Pressable } from 'react-native';
import { colors } from '../../common/colors/colors';

export default function CustomShare({ mess, title, img }) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: mess,
        url: img,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.info('Shared sended.');
          // shared with activity type of result.activityType
        } else {
          // shared
          console.info('In progress...');
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.warn('Shared was calceled.');
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={onShare}
        style={styles.pressable}
      >
        <Text style={styles.shareText}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    marginVertical: 20,
  },
  // pressable: {
  //   // padding: 20,
  //   // borderWidth: 3,
  //   // borderColor: 'red',
  // },
  shareText: {
    color: colors['primary-light'],
    fontSize: 30,
    marginLeft: 20,
    textAlign: 'left',
  },
});
