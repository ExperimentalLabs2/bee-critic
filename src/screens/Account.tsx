import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { BackButton } from '../components/BackButton'
import Footer from '../components/Footer'

export default function Account() {
  return (
      <SafeAreaView className="flex-1 ">
        <BackButton />
        <Text>Account</Text>
        <Footer />
      </SafeAreaView>
  )
}
