import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from 'navigation';
import {Appearance} from 'react-native';
import useColorStore from 'store/useColorStore';
import {darkTheme, lightTheme} from 'style/themes';
export default function App() {
  const colorScheme = Appearance.getColorScheme();
  const {colors, setColors} = useColorStore();

  useEffect(() => {
    console.log('colorScheme :: ',colorScheme);
    colorScheme === 'dark' ? changeTheame(darkTheme) : changeTheame(lightTheme);
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      colorScheme === 'dark'
        ? changeTheame(darkTheme)
        : changeTheame(lightTheme);
    });

    return () => subscription.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeTheame = theme => {
    setColors({...theme});
  };

  return (
    <SafeAreaProvider style={{flex: 1}}>
      <Navigation />
    </SafeAreaProvider>
  );
}
