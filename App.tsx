import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Routes from './src/routes/tab.routes'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen 
          name="LoginScreen" 
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="RegisterScreen" 
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Routes" 
          component={Routes}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}