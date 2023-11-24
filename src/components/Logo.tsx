import React from 'react'
import { View, Text } from 'react-native'

import LogoSvg from "../../assets/Logo.svg"

export default function Logo() {
  return (
    <View className="items-center"><LogoSvg width={80} height={80} />
      <Text className="absolute mt-16"><Text className="font-semibold">Bee</Text>Critic</Text>
    </View>
  )
}