import { StyleSheet, View, Text } from 'react-native';
export default function Card() {
  return (
    <View styles={styles.cardWrapper}>
      <Text style={styles.title}>Item</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={{ backgroundColor: 'blue', flex: 0.3 }} />
      <View style={{ backgroundColor: 'green', flex: 0.5 }} />
      <Text style={styles.title}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    width: 100,
    minHeight: 20,
    borderWidth: 5,
    borderColor: '#333',
    borderRadius: 3,
    backgroundColor: 'tomato',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    margin: 20,
    fontFamily: 'Verdana',
    color: 'white',
  },
});
