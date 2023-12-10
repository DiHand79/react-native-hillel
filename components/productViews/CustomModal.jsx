import {
  StyleSheet,
  View,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { colors } from '../../common/colors/colors';
import CustomSlider from './CustomSlider';
import {
  itemsTemplate,
  generateItems,
  generatePromoItems,
} from '../../common/templates/item-card';

export default function CustomModal({ children }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
        style={styles.modalWrapper}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <TouchableOpacity
          style={styles.touchWrapper}
          onPress={() => setModalVisible(!modalVisible)}
        ></TouchableOpacity>
        <View
          style={[
            styles.centeredViewModal,
            { marginTop: modalVisible ? 0 : 20 },
          ]}
        >
          <View style={styles.modalView}>
            <CustomSlider
              // style={stylesSwiper.wrapperSwiper}
              // data={itemsTemplate}
              data={generateItems(10)}
              title={'SALE:'}
              showsButtons={true}
            />
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Please wait...</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>

      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.buttonOpen}
      >
        <Text style={styles.buttonOpenText}>Detail</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  touchWrapper: {
    flex: 0.2,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: colors['primary-light'],
    // backgroundColor: colors['primary-dark-alpha'], //colors['primary-light'], //colors['primary-light-alpha'],
  },
  centeredViewModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: colors['primary-light'],
    backgroundColor: colors['primary-dark-alpha'], //colors['primary-light'], //colors['primary-light-alpha'],
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalView: {
    width: '100%',
    flex: 1,
    marginTop: 20,
    backgroundColor: colors['promotion-hot'],

    borderRadius: 20,
    padding: 35,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: colors['promotion-hot'], //colors['primary-light'], //colors['primary-light-alpha'],
    color: colors['primary-light'],
    padding: 15,
    maxWidth: 100,
    maxHeight: 70,
    position: 'absolute',
    left: 0,
    top: 10,
  },
  buttonOpenText: {
    color: colors['primary-light'],
  },
  buttonClose: {
    backgroundColor: colors['promotion-hot'],
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors['primary-light'],
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
