import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './rootNavigation';
import ScreenNames from '../constants/screenNames';
//Screens
import SplashScreen from 'screens/splash';
import HomeScreen from 'screens/home';

const Stack = createNativeStackNavigator();

const Navigation = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenNames.Splash} component={SplashScreen} />
      <Stack.Screen
        name={ScreenNames.Home}
        component={HomeScreen}
        options={{
          animation: 'slide_from_right', // Customize the transition animation
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
