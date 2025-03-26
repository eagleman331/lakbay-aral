import { Stack } from 'expo-router';

export default function MapLayout() {
  return (
    <Stack>
      <Stack.Screen name="TouristHomeScreen" options={{ headerShown: false }} />
      <Stack.Screen name="SiteCategory" options={{ headerShown: false }} />
      <Stack.Screen name="SiteDetails" options={{ headerShown: false }} />
      <Stack.Screen name="VideoScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
