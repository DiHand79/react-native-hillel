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
          style={[styles.centeredView, { marginTop: modalVisible ? 0 : 20 }]}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Pizza now going to you.</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Please wait...</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.buttonOpen}
      >
        <Text style={styles.buttonOpenText}>Press me</Text>
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
    backgroundColor: colors['primary-dark-alpha'], //colors['primary-light'], //colors['primary-light-alpha'],
    color: colors['primary-light'],
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalView: {
    marginTop: 20,
    backgroundColor: colors['primary-light'],
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
    backgroundColor: colors['promotion-hot-dark'], //colors['primary-light'], //colors['primary-light-alpha'],
    color: colors['primary-light'],
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
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
    backgroundColor: colors['promotion-hot-dark'],
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
