import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';

type ItemProps = {
  item: {
    id: number;
    name: string;
    avatar: any;
    thumb: any;
    movie: {
      title: string;
      year: number;
    };
    description: string;
  };
  onPress: () => void;
};

function Item({ item, onPress }: ItemProps) {
  return (
    <TouchableOpacity onPress={onPress} className="px-4 rounded-lg mb-8">
      <View className="flex-row items-center mb-3">
        <Image className="w-[35px] h-[35px] mr-2" source={item.avatar} />
        <Text className="text-sm">{item.name}</Text>
        <TouchableOpacity className="ml-2">
          <Text className="text-link">follow</Text>
        </TouchableOpacity>
      </View>
      <Image className="w-full rounded-lg" style={{ height: 200 }} source={item.thumb} />
      <View className="flex-row justify-between items-center my-3">
        <Text className="text-lg font-medium">{item.movie.title}</Text>
        <Text className="text-lg font-medium">{item.movie.year}</Text>
      </View>
      <View className="bg-zinc-300 rounded-lg">
        <Text className="text-md m-2">{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Item;
