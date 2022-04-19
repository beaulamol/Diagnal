// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from './src/screens/SplashScreen';
import { HOME_SCREEN, SPLASH_SCREEN } from './src/router';
import { Text } from 'react-native';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} options={{ headerShown: false }} /> */}
        <Stack.Screen name={HOME_SCREEN} component={HomeScreen} options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;