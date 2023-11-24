import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FeedScreen from './src/screens/Feed';
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
      >
        <Stack.Screen 
          options={{ headerShown: false }}
          name="login" 
          component={LoginScreen} 
        />
        <Stack.Screen 
          options={{ headerShown: false }}
          name="register" 
          component={RegisterScreen} 
        />
        <Stack.Screen 
          options={{ headerShown: false }}
          name="feed" 
          component={FeedScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}