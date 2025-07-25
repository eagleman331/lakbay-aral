import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="ResultScreen" options={{ headerShown: false }} />
      <Stack.Screen name="ExamScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
