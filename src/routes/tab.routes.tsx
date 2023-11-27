import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Feather } from '@expo/vector-icons';

import FeedScreen from '../screens/Feed';
import SearchScreen from '../screens/Search';
import NewPostScreen from '../screens/NewPost';
import NotificationsScreen from '../screens/Notifications';
import AccountScreen from '../screens/Account';

const feed = "FeedScreen";
const search = "SearchScreen";
const newPost = "NewPostScreen";
const notifications = "NotificationScreen"
const account = "AccountScreen"

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
      <Tab.Navigator 
        initialRouteName="Login"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === feed) {
              iconName = 'home'
            } else if (rn === search) {
              iconName = 'search';
            } else if (rn === newPost) {
              iconName = 'plus-circle';
            } else if (rn === notifications) {
              iconName = 'bell';
            } else if (rn === account) {
              iconName = 'user';
            }

            return <Feather name={iconName} size={size} color={color} />;
          },
        })}
        >
        <Tab.Screen 
          name="FeedScreen" 
          component={FeedScreen}
          options={{ tabBarLabel: () => null, headerShown: false }}
        />
        <Tab.Screen 
          name="SearchScreen" 
          component={SearchScreen} 
          options={{ tabBarLabel: () => null }}
        />
        <Tab.Screen 
          name="NewPostScreen" 
          component={NewPostScreen}
          options={{ tabBarLabel: () => null }}
        />
        <Tab.Screen 
          name="NotificationScreen" 
          component={NotificationsScreen} 
          options={{ tabBarLabel: () => null }}
        />
        <Tab.Screen 
          name="AccountScreen" 
          component={AccountScreen}
          options={{ tabBarLabel: () => null }}
        />
      </Tab.Navigator>
  )
}
