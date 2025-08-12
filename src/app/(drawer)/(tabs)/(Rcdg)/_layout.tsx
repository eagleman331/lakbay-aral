import { Stack } from 'expo-router';

export default function MapLayout() {
  return (
    <Stack>
        <Stack.Screen name="RotcSchoolScreen" options={{ headerShown: false }} />
      <Stack.Screen name="RcdgCampHome" options={{ headerShown: false }} />
      <Stack.Screen name="CdcOfficeScreen" options={{ headerShown: false }} />
      <Stack.Screen name="CdcDetailScreen" options={{ headerShown: false }} />

    
      <Stack.Screen name="RotcDetailScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
