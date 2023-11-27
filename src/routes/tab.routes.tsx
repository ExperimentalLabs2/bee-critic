import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';

import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import FeedScreen from '../screens/Feed';
import SearchScreen from '../screens/Search';
import NewPostScreen from '../screens/NewPost';
import NotificationsScreen from '../screens/Notifications';
import AccountScreen from '../screens/Account';

const feed = "FeedScren";
const search = "SearchScreen";
const newPost = "NewPostScreen";
const notifications = "NotificationScreen"
const account = "AccountScreen"

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Login"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === feed) {
              iconName = focused ? 'home' : 'home';
            } else if (rn === search) {
              iconName = focused ? 'search' : 'search';
            } else if (rn === newPost) {
              iconName = focused ? 'plus-circle' : 'plus-circle';
            } else if (rn === notifications) {
              iconName = focused ? 'bell' : 'bell';
            } else if (rn === account) {
              iconName = focused ? 'user' : 'user';
            }

            // You can return any component that you like here!
            return <Feather name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 0, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>
        <Tab.Screen 
          options={{ headerShown: false }}
          name="LoginScreen" 
          component={LoginScreen} 
        />
        <Tab.Screen 
          options={{ headerShown: false }}
          name="RegisterScreen"
          component={RegisterScreen} 
        />
        <Tab.Screen 
          // options={{ headerShown: false }}
          name="FeedScreen" 
          component={FeedScreen} 
        />
        <Tab.Screen 
          // options={{ headerShown: false }}
          name="SearchScreen" 
          component={SearchScreen} 
        />
        <Tab.Screen 
          // options={{ headerShown: false }}
          name="NewPostScreen" 
          component={NewPostScreen} 
        />
        <Tab.Screen 
          // options={{ headerShown: false }}
          name="NotificationScreen" 
          component={NotificationsScreen} 
        />
        <Tab.Screen 
          options={{ headerShown: false }}
          name="AccountScreen" 
          component={AccountScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
