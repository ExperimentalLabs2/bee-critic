import { ScrollView } from 'react-native-virtualized-view'
import React, { useState } from 'react'
import { View, SafeAreaView, FlatList, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import Header from '../components/Header';
import { DATA } from '../../mockdata/mockCard';
import Item from '../components/Card';

type ItemData = {
  id: number;
  name: string;
  avatar: any;
  thumb: string;
  movie: {
    title: string;
    year: number;
  };
  description: string;
};

export default function Feed() {
 const [selectedId, setSelectedId] = useState<number>();

 const renderItem = ({ item }: { item: ItemData }) => {
   return (
     <Item
       item={item}
       onPress={() => setSelectedId(item.id)}
     />
   );
 };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <Header />
          <View className="mt-3 flex-1 justify-center items-center">
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            extraData={selectedId}
            showsVerticalScrollIndicator={false}
          />
          </View>
        <StatusBar style="auto" />
        </ScrollView>
    </SafeAreaView>
  )
}
