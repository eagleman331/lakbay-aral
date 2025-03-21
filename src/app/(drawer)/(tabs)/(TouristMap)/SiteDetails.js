import { View, Text, useWindowDimensions, FlatList, Image, Button, Pressable } from 'react-native';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const SiteDetails = () => {
  const { width, height } = useWindowDimensions();
  const params = useLocalSearchParams(); // Retrieves query params

  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  console.log('params', params);
  return (
    <>
      <View className="flex-1 bg-slate-300">
        <View className="h-2/5 w-full bg-red-500">
          <Image
            className=" h-full w-full object-contain drop-shadow-xl"
            source={params.imageFacility}
          />
        </View>
        <View className="-top-5 h-4/5 w-full rounded-3xl bg-green-400">
          <Text className="mt-2 text-center text-xl font-semibold">SITE DETAILS</Text>

          <View className="mt-2 p-2">
            <Text className="font-bold">Purpose</Text>
            <Text className="ml-2 mt-2 font-light">{params.purpose}</Text>
          </View>

          <View className="mt-2 p-2">
            <Text className="font-bold">Location</Text>
            <Text className="ml-2 mt-2 font-light">{params.location}</Text>
          </View>

          <View className="mt-2 p-2">
            <Text className="font-bold">Aminities</Text>
            <Text className="ml-2 mt-2 font-light">{params.Aminities}</Text>
          </View>
          <View className='flex-row ' style={{justifyContent:'space-around'}}>
            <Pressable
              onPressIn={() => (scale.value = withSpring(0.9, { damping: 5, stiffness: 150 }))} // Press effect
              onPressOut={() => (scale.value = withSpring(1, { damping: 5, stiffness: 150 }))} // Release effect
              onPress={() => router.push({ pathname: '/(drawer)/(tabs)/(TouristMap)/VideoScreen' })} // OnPress event
            >
              <Animated.View
                className="w-1/5 rounded-2xl bg-red-500 justify-center"
                style={{ animatedStyle, height: height * 0.12, width:width*.3 }}>
                <Text className='text-center' >warren</Text>
              </Animated.View>
            </Pressable>
            <View className='bg-slate-500' style={{justifyContent:'flex-end'}}>
              <Text>Directions</Text>
            </View>
          </View>

          <Button
            onPress={() =>
              router.push({
                pathname: '/(drawer)/(tabs)/(TouristMap)/VideoScreen',
              })
            } // OnPress event
            title="Play Video"
          />
        </View>
      </View>
    </>
  );
};

export default SiteDetails;
