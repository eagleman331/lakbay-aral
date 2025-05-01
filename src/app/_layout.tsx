import '../../global.css';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Purchases from 'react-native-purchases';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect } from 'react';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
 
  // useEffect(() => {
  //   Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);
  //   Purchases.configure({ apiKey: 'goog_kagakDhukcvooWTiFYKGleMhYQM' });
  //   const checkUser = async () => {
  //     try {
  //       const customerInfo = await Purchases.getCustomerInfo();
  //       console.log('getUserId', customerInfo);
  //       // access latest customerInfo
  //     } catch (e) {
  //       // Error fetching customer info
  //     }
  //   };
  //   checkUser();
  // }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ title: 'Modal', presentation: 'modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
