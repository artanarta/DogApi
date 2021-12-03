import React from 'react';
import { NativeBaseProvider } from 'native-base';
import TabsNavigation from './TabsNavigation';

export default function App() {
    return (
      <NativeBaseProvider >
        <TabsNavigation />
      </NativeBaseProvider>
    );
}
