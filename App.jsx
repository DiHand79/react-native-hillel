// import { useEffect, useState } from 'react';
// import {
//   StyleSheet,
//   SafeAreaView,
//   FlatList,
//   Text,
//   RefreshControl,
//   TouchableOpacity
// } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';
import DetailItemScreen from './screens/DetailItem';
// import { PacmanIndicator } from 'react-native-indicators';
// import { itemsTemplate, generateItems } from './common/templates/item-card';
// import { colors } from './common/colors/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  // // not work
  // const renderLoader = () => {
  //   return (
  //     <View style={{ display: loading ? 'flex' : 'none' }}>
  //       <PacmanIndicator
  //         color={colors['loader-color']}
  //         size={128}
  //         style={styles.loaderContainer}
  //       />
  //     </View>
  //   );
  // };

  {
    /*  if used - break good work FlatList.onEndReached
          <View style={{ display: loading ? 'flex' : 'none' }}>
            <PacmanIndicator
              color={colors['loader-color']}
              size={128}
              style={[styles.loaderContainer, { height: windowHeight }]}
            />
          </View>
        */
  }

  {
    /* 
    <FlatList
          style={[styles.listItems, { display: loading ? 'none' : 'flex' }]}
          data={filteredItems}
          renderItem={ItemCard}
          ListEmptyComponent={
            <Text style={styles.warningText}>There is nothing</Text>
          }
          refreshing={refreshing}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              progressViewOffset={0.15}
            />
          }
          onEndReachedThreshold={0.15}
          onEndReached={onUpdateEndList} // can CONFLICT with search bar - fixed
        /> 
        */
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
        />
        <Stack.Screen
          name='Settings'
          component={SettingsScreen}
        />
        <Stack.Screen
          name='Detail'
          component={DetailItemScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const styles = StyleSheet.create({});
