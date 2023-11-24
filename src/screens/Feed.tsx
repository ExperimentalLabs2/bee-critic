import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Header from '../components/Header';
import Card from '../components/Card';
import { StatusBar } from 'expo-status-bar';

export default function Feed() {
  return (
    <SafeAreaView className="bg-white h-full" >
        <Header />
          <View className="flex-1 items-center mt-6">
            <Card />
          </View>
        <StatusBar style="auto" />
    </SafeAreaView>
  )
}