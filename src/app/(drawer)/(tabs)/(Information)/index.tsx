import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Link href="/(drawer)/(tabs)/(Information)/TestScreen">
        <Text>index</Text>
      </Link>
      <View className="mt-10">
        <Button
          title="Go to TestScreen"
          onPress={() => {
            router.push('/(drawer)/(tabs)/(Information)/TestScreen');
          }}
        />
      </View>
    </View>
  );
};

export default index;
