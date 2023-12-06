import React from 'react'
import { View, SafeAreaView, FlatList } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'

import Header from '../components/Header';
import Card from '../components/Card';
import mockCard from '../../mockdata/mockCard';

import { StatusBar } from 'expo-status-bar';

export default function Feed() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <Header />
        <View className="mt-3 justify-center items-center bg-purple-500">
              <FlatList data={mockCard} renderItem={Card}/>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  )
}