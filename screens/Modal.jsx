import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
// import CustomModal from '../components/productViews/CustomModal';
import CustomSlider from '../components/productViews/CustomSlider';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../common/colors/colors';
import { generatePromoItems } from '../common/templates/item-card';
import { AppStateComponentWrapper } from '../hooks/useAppState';

export default function ModalScreen() {
  function ModalPage() {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={colors['app-background-gradient']}
          style={styles.container}
        >
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
  return (
    <AppStateComponentWrapper>
      <ModalPage />
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
