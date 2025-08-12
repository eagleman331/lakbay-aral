import { useRouter } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export const RotcSchoolsList = ({ item }) => {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable
      onPressIn={() => (scale.value = withSpring(0.9, { damping: 5, stiffness: 150 }))} // Press effect
      onPressOut={() => (scale.value = withSpring(1, { damping: 5, stiffness: 150 }))} // Release effect
      onPress={() =>
        router.push({ pathname: '/(drawer)/(tabs)/(Rcdg)/RotcDetailScreen', params: item })
      } 
    >
      <Animated.View
        key={item.id}
        className="flex-row justify-between rounded-lg bg-slate-50 "
        style={[
          styles.button,
          animatedStyle,
          { marginTop: 20, height: height * 0.3, width: width * 0.95 },
        ]}>
        <Image
          source={require('../../assets//Background/UPLBRotc.jpg')}
          className="absolute left-0 top-0 h-full w-full "
          style={{ borderRadius: 10, opacity: 0.8 }}
        />
        <View className="mt-4 w-3/5">
          <View className="mb-1">
            <Text className="ml-4 text-wrap text-base antialiased">
             
              <Text
              className="font-extrabold"
              style={{
                  color: 'black',
                  textShadowColor: 'white',
                  textShadowRadius: 10,
                  fontSize: 18
                }}>{item.title}</Text>
            </Text>
          </View>

          <View className="mb-1">
            <Text className="ml-4 text-wrap text-base antialiased">
              <Text
                className="font-bold "
                style={{
                  color: 'black',
                  textShadowColor: 'white',
                  textShadowRadius: 5,
                }}>
                Cmdt:{' '}
              </Text>
              <Text style={{
                  color: 'black',
                  textShadowColor: 'white',
                  textShadowRadius: 5,
                }}>{item.Commander}</Text>
            </Text>
          </View>

          <Text className="ml-4 text-wrap text-base antialiased">
            <Text
              className="font-bold "
              style={{
                color: 'black',
                textShadowColor: 'white',
                textShadowRadius: 5,
              }}>
              Location:{' '}
            </Text>
            <Text
              style={{
                color: 'black',
                textShadowColor: 'white',
                textShadowRadius: 5,
              }}>
              {item.location}
            </Text>
          </Text>
        </View>

        <View className="w-2/5 items-center justify-center">
          <Image
            className="bottom-1 rounded-lg drop-shadow-xl"
            style={{ width: 100, height: 100 }}
            source={item.image}
          />
        </View>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 10,
  },
});
