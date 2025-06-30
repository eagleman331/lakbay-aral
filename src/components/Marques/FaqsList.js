import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const FaqsList = ({ index, item }) => {
  const { width, height } = useWindowDimensions();
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: '/SubInfoDataScreen',
          params: item,
        })
      }>
      <View className="mt-2 bg-yellow-300 p-2" style={{ width: width * 0.95, borderRadius: 10 }}>
        <Text className="p-3 text-lg font-semibold ">{item.question}</Text>

        {/* <Divider width={1} color="white" /> */}
      </View>
    </TouchableOpacity>
  );
};

export default FaqsList;
