import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import { Checkbox } from "../components/Checkbox";
import { Button } from "../components/Button";
import { FormLogin } from "../components/FormLogin";
import { SocialLogin } from "../components/SocialLogin";

import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
        <View className="px-6 pt-16">
          <View>
            <Text className="font-semibold text-3xl pb-9">Login</Text>
          </View>
          <FormLogin />
          <View className="flex-row justify-between pt-4">
            <Checkbox />
            <TouchableOpacity>
              <Text className="text-gray-950 font-regular text-md">Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <Button text="Login" />
          <View className="justify-center items-center mt-[60px] flex-row">
            <View className="h-[3px] w-24 bg-[#CDCED1]"></View>
            <Text className="px-4 text-[#747980]">or continue with</Text>
            <View className="h-[3px] w-24 bg-[#CDCED1]"></View>
          </View>
          <SocialLogin />
          <View className="flex-row gap-2 justify-center mt-24">
            <Text className="text-[#747980]">Don't have an account?</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigate('register')}
            >
              <Text className="text-gray-950">Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  )
}