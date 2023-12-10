import { Alert, Share, View, Text, StyleSheet, Pressable } from 'react-native';
import { colors } from '../../common/colors/colors';

export default function CustomShare({ mess, title }) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: mess,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.warn("Shared doesn't work. Please Try again later");
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={onShare} />
      <Text style={styles.shareText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginVertical: 20,
  },
  shareText: {
    color: colors['primary-light'],
    fontSize: 30,
    marginLeft: 20,

    textAlign: 'left',
  },
});
