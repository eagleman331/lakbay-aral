import {
  View,
  Text,
  useWindowDimensions,
  FlatList,
  Image,
  Button,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router, useLocalSearchParams } from 'expo-router';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import MapLottieButton from '../../../../components/ButtonComponent/MapLottieButton'

const SiteDetails = () => {
  const { width, height } = useWindowDimensions();
  const params = useLocalSearchParams(); // Retrieves query params
  const animation = useRef(null);

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
          <View className="mt-10 flex-row" style={{ justifyContent: 'space-around' }}>
            <Pressable
              onPressIn={() => (scale.value = withSpring(0.9, { damping: 5, stiffness: 150 }))}
              onPressOut={() => (scale.value = withSpring(1, { damping: 5, stiffness: 150 }))}
              onPress={() =>
                router.push({ pathname: '/(drawer)/(tabs)/(TouristMap)/VideoScreen' })
              }>
              <Animated.View
                className="w-1/5 justify-center rounded-2xl border-amber-400 "
                style={[
                  animatedStyle,
                  { height: height * 0.12, width: width * 0.3, borderWidth: 0.5 },
                ]}>
                <View style={{ alignItems: 'center' }}>
                  <LottieView
                    autoPlay
                    ref={animation}
                    style={{
                      width: 120,
                      height: 120,
                    }}
                    source={require('../../../../assets/lottie/PlayAnime.json')}
                  />
                </View>
              </Animated.View>
            </Pressable>
            <MapLottieButton pathDist='/(drawer)/(tabs)/(TouristMap)/SiteCategory' />
          </View>
        </View>
      </View>
    </>
  );
};

export default SiteDetails;

const styles = StyleSheet.create({
  button: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});
