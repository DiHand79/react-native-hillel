import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import BasketScreen from '../screens/Basket';
import DetailItemScreen from '../screens/DetailItem';
import ModalScreen from '../screens/Modal';
import HomeIconSVG from './HomeIcon';
import SettingsIconSVG from './SettingsIcon';
import BasketIconSVG from './BasketIcon';

export function ScreensStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
        />
        <Stack.Screen
          name='Detail'
          component={DetailItemScreen}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{ presentation: 'modal', headerShown: false }}
      >
        <Stack.Screen
          name='Modal'
          component={ModalScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const TabIconHome = (props) => {
  return (
    <HomeIconSVG
      width={20}
      height={20}
      fill={props.focused ? '#333' : '#ccc'}
    />
  );
};

const TabIconSettings = (props) => {
  return (
    <SettingsIconSVG
      width={20}
      height={20}
      fill={props.focused ? '#333' : '#ccc'}
    />
  );
};

const TabIconBasket = (props) => {
  return (
    <BasketIconSVG
      width={20}
      height={20}
      stroke={props.focused ? '#333' : '#ccc'}
    />
  );
};

export function BottomTabsStack() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name='HomeTab'
        component={ScreensStack}
        options={{ headerShown: false, tabBarIcon: TabIconHome }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{ headerShown: false, tabBarIcon: TabIconSettings }}
      />
      <Tab.Screen
        name='Basket'
        component={BasketScreen}
        options={{ headerShown: false, tabBarIcon: TabIconBasket }}
      />
    </Tab.Navigator>
  );
}

export function Navigation() {
  return (
    <NavigationContainer>
      {/* <ScreensStack /> */}
      <BottomTabsStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 28,
    height: 28,
  },
});
