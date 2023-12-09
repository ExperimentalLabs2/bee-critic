import React from 'react';

import { View } from 'react-native';
import Logo from './Logo';

export default function Header() {
  return (
    <View className="items-center">
      <Logo />
    </View>
  );
}
