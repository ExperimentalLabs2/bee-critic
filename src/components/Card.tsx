import { Text, View, ListRenderItem } from "react-native";

interface CardItems {
  name: String,
  avatar: String,
  thumb: String,
  title: String,
  description: String,
}

const Card: ListRenderItem<CardItems> = ({item, index}) => {

  return (
    <View className=" bg-red-100 h-[300px] w-[70%] self-center">
      <Text>{item.name}</Text>
    </View>
  )
}

export default Card;