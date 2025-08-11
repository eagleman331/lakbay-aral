import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack>
             <Stack.Screen name="ProfileScreen" options={{ headerShown: false }} />
             <Stack.Screen name="UpdateProfile" options={{ headerShown: false }} />

    </Stack>
  );
}

