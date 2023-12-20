// src/screens/SplashScreen.js
import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useHooks} from './hooks';
import useColorStore from '~store/useColorStore';
const SplashScreen = () => {
  const {handleSplash} = useHooks();
  const {colors} = useColorStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSplash();
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, [handleSplash]);

  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="slideInDown"
        duration={2000}
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#888888', // or any background color you prefer
  },
  logo: {
    width: 150, // Adjust based on your image
    height: 150, // Adjust based on your image
  },
});
export default SplashScreen;
