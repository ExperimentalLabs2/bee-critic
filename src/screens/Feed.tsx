import React from 'react'
import { View, SafeAreaView, FlatList } from 'react-native'

import Header from '../components/Header';
import Card from '../components/Card';
import mockCard from '../../mockdata/mockCard';

import { StatusBar } from 'expo-status-bar';

export default function Feed() {

  return (
    <SafeAreaView className="flex-1 bg-white h-full" >
        <Header />
          <View className="mt-3 flex-1 justify-center items-center">
            <FlatList data={mockCard} renderItem={Card} />
          </View>
        <StatusBar style="auto" />
    </SafeAreaView>
  )
}