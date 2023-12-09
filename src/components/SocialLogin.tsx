import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import Facebook from '../../assets/facebook.svg';
import Google from '../../assets/google.svg';

export default function SocialLogin() {
  return (
    <View className="flex-row justify-around mt-5">
      <TouchableOpacity className="border p-4 border-[#CDCED1] rounded-md" disabled>
        <Facebook />
      </TouchableOpacity>
      <TouchableOpacity
        className="border p-4 border-[#CDCED1] rounded-md"
        // onPress={handleGoogleSignIn}
      >
        <Google />
      </TouchableOpacity>
    </View>
  );
}
