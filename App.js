import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Src/Navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';

export default function App({ navigation }) {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer >
      <Navigation {...navigation} />
    </NavigationContainer>
  );
}
