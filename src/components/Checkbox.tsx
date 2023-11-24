import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Feather } from '@expo/vector-icons'

interface Props extends TouchableOpacityProps {
  checked?: boolean;
}

export function Checkbox({ checked = false, ...rest }: Props) {
  return (
    <View className="flex-row justify-between items-center gap-2">
      <TouchableOpacity
        activeOpacity={0.7}
        {...rest}
      >
        {
          checked
            ?
            <View
              className="h-5 w-5 rounded-md border-2 border-[#667085] items-center justify-center"
            >
              <Feather
                name="check"
                size={16}
                color="#2805FF"
              />
            </View>
            :
            <View className="h-5 w-5 rounded-md border-2 border-[#667085]" />
        }
      </TouchableOpacity>
      <Text className="text-[#747980]">Remember Me</Text>
    </View>
  );
}