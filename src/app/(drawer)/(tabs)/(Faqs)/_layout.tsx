import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack>
       <Stack.Screen name="MainFaqScreen" options={{ headerShown: false }} />
      <Stack.Screen name="HomeFaqsScreen" options={{ headerShown: false }} />
     
     
      <Stack.Screen name="SubInfoDataScreen" options={{ headerShown: false }} />
      <Stack.Screen name="FaqsDetailScreen" options={{ headerShown: false }} />
      <Stack.Screen name="TestScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
