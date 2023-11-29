import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  text: string;
  onPress: () => void 
}

export function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="h-11 w-full mt-8 bg-zinc-950 rounded-md items-center justify-center"
      onPress={props.onPress}
    >
      <Text className="text-white">{props.text}</Text>
    </TouchableOpacity>
  )
}