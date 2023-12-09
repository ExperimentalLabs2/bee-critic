import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import BackButton from '../components/BackButton';

export default function Account() {
  return (
    <SafeAreaView className="flex-1 ">
      <BackButton />
      <Text>Account</Text>
    </SafeAreaView>
  );
}
