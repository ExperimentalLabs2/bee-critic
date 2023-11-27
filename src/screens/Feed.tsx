import React from 'react'
import { View, SafeAreaView, FlatList } from 'react-native'
import Header from '../components/Header';
import Card from '../components/Card';
import { StatusBar } from 'expo-status-bar';
import mockCard from '../../mockdata/mockCard';
import Footer from '../components/Footer';


export default function Feed() {

  return (
    <SafeAreaView className="flex-1 bg-white h-full" >
        <Header />
          <View className="mt-6 bg-gray-950 flex-1 justify-center items-center">
            <FlatList data={mockCard} renderItem={Card} />
          </View>
        <StatusBar style="auto" />
        {/* <Footer /> */}
    </SafeAreaView>
  )
}