import React from 'react'
import { Text, View } from 'react-native'

import FooterItem from './FooterItem';
import FeedScren from "../screens/Feed"
import AccountScreen from "../screens/Account"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

interface FooterProps {
  navigation?: any;
}

const Tab = createBottomTabNavigator();

export default function Footer({ navigation }: FooterProps) {
  return (
    <View><Text>Footer</Text></View>
  //   <View className="absolute bottom-1 left-0 right-0 bg-white flex-row justify-around h-16">
  //    <FooterItem name="home" screen="FeedScreen" navigation={navigation} />
  //    <FooterItem name="search" screen="SearchScreen" navigation={navigation} />
  //    <FooterItem name="plus-circle" screen="NewPostScreen" navigation={navigation} />
  //    <FooterItem name="bell" screen="NotificationScreen" navigation={navigation} />
  //    <FooterItem name="user" screen="AccountScreen" navigation={navigation} />
  //  </View>
  )
}