import React from 'react'
import { View, Text } from 'react-native'

import LogoSvg from "../../assets/Logo.svg"

export default function Logo() {
  return (
    <View className="items-center">
      <LogoSvg width={70} height={70} />
      <Text className="absolute mt-[58px]"><Text className="font-semibold">Bee</Text>Critic</Text>
    </View>
  )
}