import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';

export function FormLogin() {
  return (
    <View>
      <Text className="font-semibold">E-mail</Text>
      <View className="h-11 font-regular mt-1.5 border-[#A2A2A6] rounded-md border flex flex-row items-center px-4">
        <Feather
          name="mail"
          size={20}
          color="#667085"
        />
        <TextInput
          placeholder="Your Email"
          placeholderTextColor="#747980"
          className="h-10 px-2"
          autoCapitalize='none'
        />
      </View>
      <Text className="font-semibold mt-5">Password</Text>
      <View className="h-11 font-regular mt-1.5 border-[#A2A2A6] rounded-md border flex flex-row items-center px-4">
        <Feather
          name="lock"
          size={20}
          color="#667085"
        />
        <TextInput 
          secureTextEntry={true} 
          placeholder="Your Password" 
          placeholderTextColor="#747980" 
          className="h-10 px-2 w-[85%]"
          returnKeyType='go'
          autoCorrect={false}
          autoCapitalize='none'
          />
        <TouchableOpacity>
          <Feather name="eye-off" size={20} color="#667085" />
        </TouchableOpacity>
      </View>
    </View>

  )
}