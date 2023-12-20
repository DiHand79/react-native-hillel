import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import CustomModal from '../components/productViews/CustomModal';
import CustomSlider from '../components/productViews/CustomSlider';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../common/colors/colors';
import { generatePromoItems } from '../common/templates/item-card';

export default function ModalScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={colors['app-background-gradient']}
        style={styles.container}
      >
        {/* <CustomModal /> */}
        <View style={styles.modalView}>
          <CustomSlider
            data={generatePromoItems(10)}
            title={'SALE:'}
            showsButtons={true}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors['primary-dark'], //colors['app-background'],
  },
  modalView: {
    // width: '100%',
    flex: 1,
    backgroundColor: colors['promotion-hot'],

    // borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
