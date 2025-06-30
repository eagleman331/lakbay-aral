import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link, router, useLocalSearchParams } from 'expo-router';
import { Divider } from '@rneui/themed';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import * as WebBrowser from 'expo-web-browser';
import Colors  from '~/src/assets/constant/Colors';

const SubInfoDataScreen = () => {
  const [bullets, setBullets] = useState([]);
  const params = useLocalSearchParams();
  const { addInfo, answer, otherInfo, question, anotherInfo } = params;
  const { width, height } = useWindowDimensions();

  console.log('addInfo', typeof addInfo);
  useEffect(() => {
    const unsubsribed = () => {
      setBullets(addInfo.split(','));
    };
    unsubsribed();
  }, []);
console.log('anotherInfo', anotherInfo)
  return (
    <View className="flex-1" style={{backgroundColor:Colors.turbo}}>
      <SafeAreaView>
        <View className="ml-3 mt-24" style={{ height: height * 0.05 }}>
          <Text className="text-4xl font-bold  text-neutral-50">FAQs</Text>
        </View>
        {/* <View className="h-6" /> */}
        <Divider
          inset={true}
          insetType="right"
          width={1}
          color="white"
          style={{ marginTop: 2, marginLeft: 10 }}
        />
        <ScrollView style={{ height: height * 0.8 }}>
        <View>
            <Text className="px-2 py-2 text-2xl font-semibold italic">Question</Text>
            <Text className="p-2 text-justify text-lg">{question}</Text>
          </View>
          <Divider
            inset={true}
            insetType="right"
            width={1}
            color="white"
            style={{ marginTop: 2, marginLeft: 10 }}
          />
          <View>
            <Text className="px-2 py-2 text-2xl font-semibold italic">Answer</Text>
            <Text className="p-2 text-justify text-lg">{answer}</Text>
          </View>
          <Divider
            inset={true}
            insetType="right"
            width={1}
            color="white"
            style={{ marginTop: 2, marginLeft: 10 }}
          />
          <View>
            <Text className="px-2 py-2 text-2xl font-semibold italic">Other Information</Text>
            {bullets.map((item, index) => {
              return (
                <View key={index} className=" flex-row">
                  <View className="mt-1 w-1/12 items-center">
                  <Entypo name="controller-record" size={24} color='#464342' />
                  </View>
                  <Text className="w-11/12 px-2 text-justify text-lg">{item}</Text>
                </View>
              );
            })}
           

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
  );
};

export default SubInfoDataScreen;
