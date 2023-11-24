import React from 'react'
import { View, Text, SafeAreaView, FlatList, ListRenderItem } from 'react-native'
import Header from '../components/Header';
import Card from '../components/Card';
import { StatusBar } from 'expo-status-bar';
import mockCard from '../../mockdata/mockCard';


export default function Feed() {

  return (
    <SafeAreaView className="flex-1 bg-white h-full" >
        <Header />
          <View className=" mt-6">
            <FlatList data={mockCard} renderItem={Card} />
            
          </View>
        <StatusBar style="auto" />
    </SafeAreaView>
  )
}