import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppStateComponentWrapper } from '../hooks/useAppState';
import CustomShare from '../components/messages/CustomShare';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../common/colors/colors';

/**
 *  TODO:
 *   ◊ add rating 5-star
 *   ◊ replace local pizza_images to online & add to share &
 *      add :
 *          ◊ address
 *          ◊ time
 *
 */

export default function DetailItemScreen(props) {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;
  const screen = new Dimensions.get('screen');

  function DetsilPage() {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={colors['app-background-gradient']}
          style={styles.container}
        >
          <ScrollView style={styles.contentWrapper}>
            {/* <TouchableOpacity onPress={onPress}> */}
            <Text
              style={styles.title}
              numberOfLines={2}
            >
              {item.title}
            </Text>
            <View style={styles.shareWrapper}>
              <Image
                source={item.image}
                style={[
                  styles.image,
                  {
                    width: screen.width,
                    // height: screen.height / 3,
                    height: screen.width,
                  },
                ]}
              />

              <CustomShare
                mess={`Go eat this: ${item.title}! On this address.`}
                // img={item.shareLink}
                title={'Invite to pizza:'}
              />
            </View>
            <Text
              style={styles.description}
              numberOfLines={7}
            >
              {item.description}
            </Text>
          </ScrollView>
          {/* </TouchableOpacity> */}
        </LinearGradient>
      </SafeAreaView>
    );
  }
  return (
    <AppStateComponentWrapper>
      <DetsilPage />
    </AppStateComponentWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors['primary-dark'], //colors['app-background'],
    flexDirection: 'column',
  },
  contentWrapper: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: colors['primary-light'],
    padding: 20,
  },
  image: {
    resizeMode: 'cover',
  },
  description: {
    fontSize: 16,
    padding: 20,
    color: colors['primary-light'],
  },
  shareWrapper: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
});
