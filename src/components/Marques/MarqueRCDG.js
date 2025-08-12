import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const MarqueRCDG = ({ index, item }) => {
  return (
             <TouchableOpacity
               key={index}
               onPress={() =>
                 router.push({
                   pathname: '/SubInfoDataScreen',
                   params: item,
                 })
               }>
               <View className="mt-2 p-2">
                 <View style={{ backgroundColor: 'green', borderRadius: 10 }}>
                   <Text className="p-3 text-lg font-semibold text-white">{item.question}</Text>
                 </View>
                 {/* <Divider width={1} color="white" /> */}
               </View>
             </TouchableOpacity>
  );
};

export default MarqueRCDG;