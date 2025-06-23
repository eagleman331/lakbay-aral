import { View, Text, Pressable, useWindowDimensions } from 'react-native';
import React, { useRef } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import { router } from 'expo-router';

const MapLottieButton = ({pathDist, itemData}) => {
  const { width, height } = useWindowDimensions();
  const animation = useRef(null);

  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  return (
    <Pressable
      onPressIn={() => (scale.value = withSpring(0.9, { damping: 5, stiffness: 150 }))}
      onPressOut={() => (scale.value = withSpring(1, { damping: 5, stiffness: 150 }))}
      onPress={() =>
        router.push({ pathname: pathDist, params: itemData })}
    >
      <Animated.View
        className="w-1/5 justify-center rounded-2xl border-amber-400"
        style={[
          animatedStyle,
          {
            borderWidth: 0.5,
            height: height * 0.12, width: width * 0.4,
          },
        ]}>
        <View style={{ alignItems: 'center' }}>
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: 160,
              height: 160,
            }}
            source={require('../../../src/assets/lottie/MapGoogle.json')}
          />
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default MapLottieButton;
