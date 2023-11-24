import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import { BackButton } from "../components/BackButton";
import { FormRegister } from "../components/FormRegister";

export default function Register() {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 pt-6 px-6">
        <View className="mb-4">
          <BackButton />
          <Text className="font-semibold text-3xl pt-4 pb-11">Sign up</Text>
        </View>
        <FormRegister />
      </View>
      <View className="flex-row gap-2 justify-center mt-24">
        <Text className="text-[#747980]">Already signed up?</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigate('login')}
        >
          <Text className="text-gray-950">Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}