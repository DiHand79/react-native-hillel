import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import DetailItemScreen from '../screens/DetailItem';
import ModalScreen from '../screens/Modal';
import HomeIconSVG from './HomeIcon';
import SettingsIconSVG from './SettingsIcon';

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
    </Tab.Navigator>
  );
}

export function Navigation() {
  // const appState = useAppState();
  // const prevStateRef = useRef({});
  // const [prevState, setPrevState] = useState(prevStateRef?.current);

  return (
    <NavigationContainer
    // ref={prevStateRef}
    // onStateChange={({ index, routes }) => {
    //   const currentTabIndex = index;
    //   const currentRouteName = prevStateRef.current.getCurrentRoute().name;
    //   setPrevState({
    //     tabIndex: index,
    //     routeName: currentRouteName,
    //   });
    //   // console.log('>>>> \t\tPREV STATE: \n', prevState);
    //   console.log('CURRENT STATE: ', currentTabIndex, currentRouteName);
    //   // prevStateRef({
    //   //   tabIndex: index,
    //   //   routeName: currentRouteName
    //   // })

    //   console.log('>>>> \t\tPREV STATE: \n', prevState);
    //   // appState
    //   //   ? navigation.navigate('Loader')
    //   //   : navigation.navigate(prevState.routeName);
    // }}
    >
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
