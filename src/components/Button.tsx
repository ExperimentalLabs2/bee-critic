import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

export default function Button(props: ButtonProps) {
  const { onPress, text } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="h-11 w-full mt-8 bg-zinc-950 rounded-md items-center justify-center"
      onPress={onPress}
    >
      <Text className="text-white">{text}</Text>
    </TouchableOpacity>
  );
}
