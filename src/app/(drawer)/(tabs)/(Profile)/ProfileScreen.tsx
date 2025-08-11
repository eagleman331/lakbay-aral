import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
  useWindowDimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { Divider } from '@rneui/themed';
import { collection, query, where, getDocs, getFirestore } from '@react-native-firebase/firestore';
import FaqsList from '~/src/components/Marques/FaqsList';
import Colors from '~/src/assets/constant/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const [faqsData, setFaqsData] = useState([]);
  const { width, height } = useWindowDimensions();
  const [storageData, setStorageData] = useState(null);
    const [score, setScore] = useState(null);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('profile');
      setStorageData(JSON.parse(jsonValue));
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
  const getScore = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('lastExamScore');

      setScore(JSON.parse(jsonValue));
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  const getGender = (value) => {
    const gender = value.gender;
    if (gender == 0) {
      return 'Male';
    } else if (gender == 1) {
      return 'Female';
    } else {
      return 'Other';
    }
  };

  useEffect(() => {
    getData();
    getScore();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.darkGreen }}>
      {/* <Image
        className="absolute left-0 top-0 h-full w-full"
        source={require('../../../../assets/Background/RopeCourse.png')}
      /> */}
      <SafeAreaView>
        <View className="ml-5 mt-24">
          <Text className="text-4xl font-bold text-neutral-50">Profile</Text>
        </View>
        <View className="h-6" />
        <Divider
          inset={true}
          insetType="right"
          width={1}
          color="white"
          style={{ marginTop: 2, marginLeft: 10 }}
        />
        <View className="items-center">
          <View
            className="mt-2 p-2"
            style={{ width: width * 0.95, borderRadius: 10, backgroundColor: Colors.goldYellow }}>
            <View className="flex-row p-1">
              <Text className="text-lg font-bold ">Name:</Text>
              <Text className=" ml-2 text-lg font-semibold">
                {storageData ? storageData.name : 'No Name yet'}
              </Text>
            </View>

            <View className="flex-row p-1">
              <Text className="text-lg font-bold ">Gender:</Text>
              <Text className=" ml-2 text-lg font-semibold">
                {storageData ? getGender(storageData) : null}
              </Text>
            </View>
            <View className="mt-5 flex-row p-1">
              <Text className="text-lg font-bold ">Call Sign:</Text>
              <Text className=" ml-2 text-lg font-semibold">
                {storageData ? storageData.callSign : 'No Call Sign yet'}
              </Text>
            </View>
            <View className="flex-row p-1">
              <Text className="text-lg font-bold ">Position:</Text>
              <Text className=" ml-2 text-lg font-semibold">
                {storageData ? storageData.position : 'No position yet'}
              </Text>
            </View>
            <View className="flex-row p-1">
              <Text className="text-lg font-bold ">Unit:</Text>
              <Text className=" ml-2 text-lg font-semibold">
                {storageData ? storageData.unit : 'No unit yet'}
              </Text>
            </View>
            <View className="flex-row p-1">
              <Text className="text-lg font-bold ">Last AFPSAT Score:</Text>
              <Text className=" ml-2 text-lg font-semibold">
                    {score ? score : 'No score yet'}%
              </Text>
            </View>
            {/* <Divider width={1} color="white" /> */}
          </View>
        </View>
        <TouchableOpacity onPress={() => router.push('/(drawer)/(tabs)/(Profile)/UpdateProfile')}>
          <View
            style={{
              width: width * 0.2,
              height: width * 0.1,
              alignSelf: 'center',
              backgroundColor: Colors.light,
              marginTop: 10,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <Text
              className="text-lg font-bold"
              style={{ alignSelf: 'center', color: Colors.darkGreen }}>
              EDIT
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default ProfileScreen;
