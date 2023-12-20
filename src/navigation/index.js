import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './rootNavigation';
import routes from '~routes';
//Screens
import SplashScreen from 'screens/splash';
import BottomTabNavigation from './bottomTabs';

const Stack = createNativeStackNavigator();

const Navigation = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
      }}>
      <Stack.Screen name={routes.splash} component={SplashScreen} />
      <Stack.Screen
        name={routes.bottomTab}
        component={BottomTabNavigation}
        options={{
          animation: 'slide_from_right', // Customize the transition animation
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
