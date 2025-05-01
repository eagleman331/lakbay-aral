import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const MainFaqScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MainFaqScreen</Text>
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: '/SubInfoDataScreen',
            params: { name: 'Warren' },
          })
        }>
        <View className="mt-2 p-2">
          <View style={{ backgroundColor: 'green', borderRadius: 10 }}>
            <Text className="p-3 text-lg font-semibold text-white">Yup a Problem</Text>
          </View>
          {/* <Divider width={1} color="white" /> */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MainFaqScreen;
