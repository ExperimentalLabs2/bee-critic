import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export function BackButton() {
  const { goBack } = useNavigation()

  return (
    <TouchableOpacity
      onPress={goBack}
    >
      <Feather name="arrow-left" size={24} color="gray" />
    </TouchableOpacity>
  )
}