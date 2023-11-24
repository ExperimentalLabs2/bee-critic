import { KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Button } from "./Button";

export function FormRegister() {
  return (
    <KeyboardAvoidingView keyboardVerticalOffset={150} behavior="padding" className="flex">
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Text className="font-semibold pb-2">First Name</Text>
        <View className="h-11 font-regular mb-2 border-[#A2A2A6] rounded-md border flex-row items-center px-4">
          <TextInput placeholder="Your First Name" placeholderTextColor="#747980" className="h-10 px-2" />
        </View>

        <Text className="font-semibold py-2">Last Name</Text>
        <View className="h-11 font-regular mb-2 border-[#A2A2A6] rounded-md border flex-row items-center px-4">
          <TextInput placeholder="Your Last Name" placeholderTextColor="#747980" className="h-10 px-2" />
        </View>

        <Text className="font-semibold py-2">E-mail</Text>
        <View className="h-11 font-regular mb-2 border-[#A2A2A6] rounded-md border flex-row items-center px-4">
          <Feather
            name="mail"
            size={20}
            color="#667085"
          />
          <TextInput placeholder="Your Email" placeholderTextColor="#747980" className="h-10 px-2" />
        </View>

        <Text className="font-semibold py-2">Password</Text>
        <View className="h-11 font-regular border-[#A2A2A6] rounded-md border flex-row items-center px-4">
          <Feather
            name="lock"
            size={20}
            color="#667085"
          />
          <TextInput placeholder="Your Password" placeholderTextColor="#747980" className="h-10 px-2 w-[85%]" />
          <TouchableOpacity>
            <Feather name="eye-off" size={20} color="#667085" />
          </TouchableOpacity>
        </View>
        <View className="flex-row gap-x-1 mt-4">
          <Text className="text-[#747980]">By signing up you agree to our</Text>
          <TouchableOpacity
            activeOpacity={0.7}
          >
            <Text className="text-[#312E49]">Terms & Condition</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row gap-x-1">
          <Text>and</Text>
          <TouchableOpacity
            activeOpacity={0.7}
          >
            <Text className="text-[#312E49]">Privacy Policy.</Text>
          </TouchableOpacity>
        </View>
        <Button text="Continue" />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}