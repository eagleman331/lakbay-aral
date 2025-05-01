import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import Purchases from 'react-native-purchases';
import RevenueCatUI from 'react-native-purchases-ui';

const paywallScreen = () => {
  const [offerings, setOfferings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOfferings = async () => {
      try {
        const offerings = await Purchases.getOfferings();
        setOfferings(offerings);
      } catch (e) {
        console.warn('Error fetching offerings', e);
      } finally {
        setLoading(false);
      }
    };
    fetchOfferings();
  }, []);
console.log("offerings", offerings)
  return (
    // <View className="flex-1 items-center justify-center">
    //   <Text>PaywallScreen</Text>
    //   <Button title="Paywall" onPress={() => alert('Paywall')} />
    // </View>
    <View style={{ flex: 1 }}>
    <RevenueCatUI.Paywall 
      onDismiss={() => {
        // Dismiss the paywall, i.e. remove the view, navigate to another screen, etc.
        // Will be called when the close button is pressed (if enabled) or when a purchase succeeds.
      }}
    />
</View>


  );
};

export default paywallScreen;
