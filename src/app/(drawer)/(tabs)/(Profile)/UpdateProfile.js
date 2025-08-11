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
import { Divider, Icon, Input, Overlay } from '@rneui/themed';
import { collection, query, where, getDocs, getFirestore } from '@react-native-firebase/firestore';
import FaqsList from '~/src/components/Marques/FaqsList';
import Colors from '~/src/assets/constant/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ButtonGroup } from '@rneui/themed';

const UpdateProfile = () => {
  const [faqsData, setFaqsData] = useState([]);
  const { width, height } = useWindowDimensions();
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [callSign, setCallSign] = useState('');
  const [position, setPosition] = useState('');
  const [unit, setUnit] = useState('');
  const [storageData, setStorageData] = useState(null);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const profileData = {
    name: name,
    gender: selectedIndex,
    callSign: callSign,
    position: position,
    unit: unit,
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('profile', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const saveProfile = () => {
    storeData(profileData);
    router.push({
      pathname: '/(drawer)/(tabs)/(Profile)/ProfileScreen',
    });
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('profile');
      setStorageData(JSON.parse(jsonValue));
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await getData();
      setName(storageData ? storageData.name : '');
      setGender(storageData ? storageData.gender : '');
      setCallSign(storageData ? storageData.callSign : '');
      setPosition(storageData ? storageData.position : '');
      setUnit(storageData ? storageData.unit : '');
      setSelectedIndex(storageData ? storageData.gender : 0);
    };
    fetchData();
  }, []);
 

  return (
    <View style={{ flex: 1, backgroundColor: Colors.darkGreen }}>
      {/* <Image
        className="absolute left-0 top-0 h-full w-full"
        source={require('../../../../assets/Background/RopeCourse.png')}
      /> */}

      <SafeAreaView>
        <View className="ml-5 mt-24 flex-row">
          <Text className="text-4xl font-bold text-neutral-50">Profile</Text>
          <Text className="align-bottom text-2xl font-light text-neutral-50"> -Update</Text>
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
            <View className="flex-row ">
              <Text className="text-lg font-bold " style={{ alignSelf: 'center' }}>
                Name:
              </Text>
              <Input
                placeholder={storageData ? storageData.name : 'No Name yet'}
                type="string"
                value={name}
                onChangeText={(text) => setName(text)}
                inputContainerStyle={{ width: width * 0.6 }}
                style={{ textAlign: 'center' }}
              />
            </View>

            <View className="flex-row ">
              <Text className="text-lg font-bold " style={{ alignSelf: 'center' }}>
                Call Sign:
              </Text>
              <Input
                placeholder={storageData ? storageData.callSign : 'No Name yet'}
                type="string"
                value={callSign}
                onChangeText={(text) => setCallSign(text)}
                inputContainerStyle={{ width: width * 0.6 }}
                style={{ textAlign: 'center' }}
              />
            </View>

            <View className="flex-row ">
              <Text className="text-lg font-bold " style={{ alignSelf: 'center' }}>
                Position:
              </Text>
              <Input
                placeholder={storageData ? storageData.position : 'No Name yet'}
                type="string"
                value={position}
                onChangeText={(text) => setPosition(text)}
                inputContainerStyle={{ width: width * 0.6 }}
                style={{ textAlign: 'center' }}
              />
            </View>

            <View className="flex-row ">
              <Text className="text-lg font-bold " style={{ alignSelf: 'center' }}>
                Unit:
              </Text>
              <Input
                placeholder={storageData ? storageData.unit : 'No Name yet'}
                type="string"
                value={unit}
                onChangeText={(text) => setUnit(text)}
                inputContainerStyle={{ width: width * 0.6 }}
                style={{ textAlign: 'center' }}
              />
            </View>
            <View>
              <Text className="text-lg font-bold " style={{ alignSelf: 'center' }}>
                Gender
              </Text>
              <ButtonGroup
                buttons={['MALE', 'FEMALE']}
                selectedIndex={selectedIndex}
                onPress={(value) => {
                  setSelectedIndex(value);
                }}
                // containerStyle={{ marginBottom: 20 }}
              />
            </View>

            {/* <Divider width={1} color="white" /> */}
          </View>
        </View>
        <TouchableOpacity
          onPress={toggleOverlay}
          // onPress={() => saveProfile()}
        >
          <View
            style={{
              width: width * 0.25,
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
              UPDATE
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text style={{ alignSelf: 'center', fontSize: 15 }}>Warning!</Text>
        <Text style={{ marginTop: 10, fontSize: 15 }}>Are you sure to update your profile?</Text>
        <View className="mb-5 mt-10 flex-row justify-around">
          <TouchableOpacity
            onPress={() => {
              saveProfile();
              toggleOverlay();
            }}>
                 <View
            style={{
              width: width * 0.25,
              height: width * 0.1,
              alignSelf: 'center',
              backgroundColor: Colors.darkGreen,
              marginTop: 10,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <Text className="text-lg font-bold" style={{ alignSelf: 'center', color: 'white' }}>
              YES
            </Text>
          </View>
            </TouchableOpacity>
       
          <TouchableOpacity
            onPress={() => {
              toggleOverlay();
            }}>
                 <View
            style={{
              width: width * 0.25,
              height: width * 0.1,
              alignSelf: 'center',
              backgroundColor: Colors.bloodRed,
              marginTop: 10,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <Text className="text-lg font-bold" style={{ alignSelf: 'center', color: 'white' }}>
              NO
            </Text>
          </View>
            </TouchableOpacity>
        </View>
      </Overlay>
    </View>
  );
};

export default UpdateProfile;
