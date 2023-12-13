import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
export default function App() {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      {/* <Navigation /> */}
    </SafeAreaProvider>
  );
}
