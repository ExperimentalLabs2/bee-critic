import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

interface FooterItemProps {
 name: string;
 screen: string;
}

export default function FooterItem({ name, screen }: FooterItemProps) {
  const navigation = useNavigation();

 return (
   <TouchableOpacity className="p-4" onPress={() => navigation.navigate(screen)}>
     <Feather name={name} size={28} color="black" />
   </TouchableOpacity>
 );
};
