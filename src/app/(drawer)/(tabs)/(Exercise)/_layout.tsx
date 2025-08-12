import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="ExerciseScreen" options={{ headerShown: false }} />
      <Stack.Screen name="PftViewer" options={{ headerShown: false }} />
    </Stack>
  );
}
