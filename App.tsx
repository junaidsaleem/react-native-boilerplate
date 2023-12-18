import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import Navigation from './src/navigation/index';
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider style={{flex: 1}}>
        <Navigation />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
