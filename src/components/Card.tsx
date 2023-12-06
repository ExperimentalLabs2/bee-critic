import { TouchableOpacity, Text } from 'react-native';

type ItemProps = {
  item: {
    id: number;
    name: string;
    avatar: any;
    thumb: string;
    title: string;
    description: string;
  };
  onPress: () => void;
 };
 
 
const Item = ({ item, onPress }: ItemProps) => (
  <TouchableOpacity onPress={onPress} className="p-4 bg-zinc-100 rounded-lg mb-8">
    <Text className="text-xl">{item.id}</Text>
    <Text className="text-xl">{item.name}</Text>
    <Text className="text-xl">{item.avatar}</Text>
    <Text className="text-xl">{item.thumb}</Text>
    <Text className="text-xl">{item.title}</Text>
    <Text className="text-xl">{item.description}</Text>
  </TouchableOpacity>
);

export default Item;