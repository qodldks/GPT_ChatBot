import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Navigation } from './screens/navigation/Navigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
