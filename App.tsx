import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-stone-950">
      <Text className="text-slate-100">Teste</Text>
      <StatusBar style="auto" />
    </View>
  );
}