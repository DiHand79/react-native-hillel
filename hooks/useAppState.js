import { useRef, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppState } from 'react-native';
import LoaderScreen from '../screens/Loader.jsx';

// https://blog.logrocket.com/using-appstate-react-native-improve-performance/
export function useAppState() {
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const appStateListener = AppState.addEventListener(
      'change',
      (nextAppState) => {
        // console.warn('NextAppState: ', nextAppState);
        setAppState(nextAppState);
      }
    );

    return () => {
      appStateListener?.remove();
    };
  }, []);

  return appState === 'active' || appState === 'focus' ? true : false;
}

export function AppStateComponentWrapper({ children }) {
  let appState = useAppState();

  return (
    <View style={styles.wrapper}>{appState ? children : <LoaderScreen />}</View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
