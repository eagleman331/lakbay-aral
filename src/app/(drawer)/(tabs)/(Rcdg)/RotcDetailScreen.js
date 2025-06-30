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
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router, useLocalSearchParams } from 'expo-router';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import MapLottieButton from '../../../../components/ButtonComponent/MapLottieButton';
import { Divider } from '@rneui/themed';
import { AntDesign, Entypo } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import Colors from '~/src/assets/constant/Colors';

const RotcDetailScreen = () => {
  const { width, height } = useWindowDimensions();
  const params = useLocalSearchParams(); // Retrieves query params
  const animation = useRef(null);

  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const locCoord = {
    latitude: params.latitude,
    longitude: params.longitude,
  };

  return (
    <>
      {/* <View className="flex-1 bg-slate-300">
        <View className="h-2/5 w-full bg-red-500">
          <Image
            className=" h-full w-full object-contain drop-shadow-xl"
            source={params.imageFacility}
          />
        </View>
        <ScrollView className="-top-5 min-h-screen-safe-or-0.5 w-full rounded-3xl bg-green-400">
          <Text className="mt-2 text-center text-xl font-semibold">ROTC Details</Text>

          <View className="mt-2 p-2">
            <Text className="font-bold">School:</Text>
            <Text className="ml-2 mt-2 font-light">{params.purpose}</Text>
          </View>

          <View className="mt-2 p-2">
            <Text className="font-bold">Location:</Text>
            <Text className="ml-2 mt-2 font-light">{params.location}</Text>
          </View>

          <View className="mt-2 p-2">
            <Text className="font-bold">Director:</Text>
            <Text className="ml-2 mt-2 font-light">{params.Commander}</Text>
          </View>
          <View className="mt-2 p-2">
            <Text className="font-bold">Corps Commander:</Text>
            <Text className="ml-2 mt-2 font-light">1Cadet Zeb Francisco Ching</Text>
          </View>
          <View className="mt-10 flex-row" style={{ justifyContent: 'space-around' }}>
            <Pressable
              onPressIn={() => (scale.value = withSpring(0.9, { damping: 5, stiffness: 150 }))}
              onPressOut={() => (scale.value = withSpring(1, { damping: 5, stiffness: 150 }))}
              onPress={() => router.push({ pathname: '/(drawer)/(tabs)/(Rcdg)/RotcSchoolScreen' })}>
              <Animated.View
                className="w-1/5 justify-center rounded-2xl border-amber-400 "
                style={[
                  animatedStyle,
                  { height: height * 0.12, width: width * 0.4, borderWidth: 0.5 },
                ]}>
                <View style={{ alignItems: 'center' }}>
                  <LottieView
                    autoPlay
                    ref={animation}
                    style={{
                      width: 120,
                      height: 120,
                    }}
                    source={require('../../../../assets/lottie/Faqs.json')}
                  />
                </View>
              </Animated.View>
            </Pressable>
            <MapLottieButton
              pathDist="/(drawer)/(tabs)/(TouristMap)/SiteCategory"
              itemData={params}
            />
          </View>
          <View style={{width:width, height:height*.4}}/>
        </ScrollView>
      </View> */}
      <View className="flex-1" style={{ backgroundColor: Colors.turbo }}>
        <SafeAreaView className="flex-1">
          <View className="ml-5 mt-24">
            <Text className="text-4xl font-bold text-neutral-50">UST</Text>
          </View>
          <View className="h-6" />
          <Divider
            inset={true}
            insetType="right"
            width={1}
            color="white"
            style={{ marginTop: 2, marginLeft: 10 }}
          />
          <ScrollView>
            <View>
              <Text className="px-2 py-2 text-2xl font-semibold italic">ROTC</Text>
              <Text className="p-2 text-justify text-lg">
                The Reserve Officers' Training Course (ROTC) is a military training program for
                college students designed to develop leadership skills and prepare them for service
                as officers in the reserve force. It combines academic instruction with physical and
                tactical training under the supervision of the Armed Forces.
              </Text>
            </View>
            <Divider
              inset={true}
              insetType="right"
              width={1}
              color="white"
              style={{ marginTop: 2, marginLeft: 10 }}
            />

            <View>
              <Text className="px-2 py-2 text-2xl font-semibold italic">Task Organization</Text>
              <Text className="p-2 text-justify text-lg">
                The task organization of ROTC typically includes a Headquarters unit overseeing
                administrative, training, and operational functions, supported by companies or
                platoons composed of cadets grouped by year level or specialization. Each unit is
                led by cadet officers under the guidance of military instructors and school
                administrators.
              </Text>
            </View>
            <Divider
              inset={true}
              insetType="right"
              width={1}
              color="white"
              style={{ marginTop: 2, marginLeft: 10 }}
            />
            <View>
              <Text className="px-2 py-2 text-2xl font-semibold italic">Mission</Text>
              <View>
                <View className=" flex-row">
                  <View className="mt-0.5 w-1/12 items-center">
                    <Entypo name="controller-record" size={24} color="black" />
                  </View>
                  <Text className="w-11/12 px-2 text-justify text-lg">
                  Instill discipline, leadership, and patriotism among the youth.
                  </Text>
                </View>

                <View className=" flex-row">
                  <View className="mt-0.5 w-1/12 items-center">
                    <Entypo name="controller-record" size={24} color="black" />
                  </View>
                  <Text className="w-11/12 px-2 text-justify text-lg">
                  Develop a pool of trained reservists for national defense and disaster response.
                  </Text>
                </View>

                <View className=" flex-row">
                  <View className="mt-0.5 w-1/12 items-center">
                    <Entypo name="controller-record" size={24} color="black" />
                  </View>
                  <Text className="w-11/12 px-2 text-justify text-lg">
                  Prepare students for potential commission as officers in the reserve force.
                  </Text>
                </View>
              </View>
            </View>
            <Divider
              inset={true}
              insetType="right"
              width={1}
              color="white"
              style={{ marginTop: 2, marginLeft: 10 }}
            />
            <View>
              <Text className="px-2 py-2 text-2xl font-semibold italic">Other Details</Text>
              <View>
                <View className=" flex-row">
                  <View className="mt-0.5 w-1/12 items-center">
                    <Entypo name="controller-record" size={24} color="black" />
                  </View>
                  <Text className="w-11/12 px-2 text-justify text-lg">
                  The ROTC students also promote civic consciousness and commitment to public service.
                  </Text>
                </View>

                <View className=" flex-row">
                  <View className="mt-0.5 w-1/12 items-center">
                    <Entypo name="controller-record" size={24} color="black" />
                  </View>
                  <Text className="w-11/12 px-2 text-justify text-lg">
                  Support the Armed Forces of the Philippines in nation-building efforts.
                  </Text>
                </View>
              </View>
            </View>
            <Divider
              inset={true}
              insetType="right"
              width={1}
              color="white"
              style={{ marginTop: 2, marginLeft: 10 }}
            />
            <View className="mb-safe-offset-10">
              <Text className="px-2 py-2 text-2xl font-semibold italic">Social Media</Text>
              <TouchableOpacity
                onPress={() => {
                  WebBrowser.openBrowserAsync('https://www.facebook.com/junglefighterdivision');
                }}>
                <View className="mt-2 flex-row p-2">
                  <Text className="w-10/12 text-lg font-semibold">Check the 2ID Facebook Page</Text>
                  <View className="w-2/12 items-center justify-center ">
                    <AntDesign name="doubleright" size={24} color="black" />
                  </View>
                  <Divider width={1} color="white" />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  WebBrowser.openBrowserAsync('https://www.youtube.com/@2idjunglefighter')
                }>
                <View className="mt-2 flex-row p-2">
                  <Text className="w-10/12 text-lg font-semibold italic">
                    Subscribe to Youtube Channel
                  </Text>
                  <View className="w-2/12 items-center justify-center ">
                    <AntDesign name="arrowright" size={24} color="black" />
                  </View>
                  <Divider width={1} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

export default RotcDetailScreen;

const styles = StyleSheet.create({
  button: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});
