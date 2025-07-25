import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
  Platform,
} from 'react-native';
import React, { useContext, useEffect, useRef, useState, useLayoutEffect } from 'react';
import { SocialIcon, Divider, Icon } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../../../assets/constant/Colors';
import { PlazaHomeData } from '../../../../assets/DataApp/PlazaData';
import { NarrativeData } from '../../../../assets/DataApp/NarrativeData';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { PushUpData } from '../../../../assets/DataApp/PftSlidesFAQs/Push-UpFAQ';
import { RunningData } from '../../../../assets/DataApp/PftSlidesFAQs/RunningFAQs';
import { SitUpData } from '../../../../assets/DataApp/PftSlidesFAQs/SitUpFAQs';

import * as WebBrowser from 'expo-web-browser';
import { ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { router } from 'expo-router';

const ExerciseScreen = () => {
  const { width, height } = useWindowDimensions();
  const [location, setLocation] = useState();
  const [address, setAddress] = useState();
  const [commNarrative, setCommNarrative] = useState([]);
  const [data, setData] = useState([]);
  const [result, setResult] = useState(null);
  const LagayIndentation = '       ';
  const socialMedaApps = ['facebook', 'twitter', 'instagram'];

  const GoToFacebook = () => {
    WebBrowser.openBrowserAsync('https://www.facebook.com/profile.php?id=100089656629408');
  };
  const GoToYoutube = () => {
    WebBrowser.openBrowserAsync('https://www.youtube.com/@2idjunglefighter');
  };

  const navigateToPftViewer = (item) => {
    const core = item.core;
    let SampleData;
    if (core == 'Push-Up') {
      SampleData = PushUpData;
    } else if (core == 'Sit-Up') {
      SampleData = SitUpData;
    } else if (core == 'Running') {
      SampleData = RunningData;
    }

    router.push({
      pathname: '/(drawer)/(tabs)/(Exercise)/PftViewer',
      params: { PftData: JSON.stringify(SampleData) },
    });
  };
  // const navigateToPftViewer = (item) => {
  //   const core = item.core;
  //   let PftData;
  //   if (core == 'Push-Up') {
  //     router.push({
  //     pathname: '/(drawer)/(tabs)/(Exercise)/PftViewer',
  //     params: {PftData:PushUpData},
  //   });
  //   } else if (core == 'Sit-Up') {
  //      router.push({
  //     pathname: '/(drawer)/(tabs)/(Exercise)/PftViewer',
  //     params: {PftData:SitUpData},
  //   });
  //   } else if (core == 'Running') {
  //      router.push({
  //     pathname: '/(drawer)/(tabs)/(Exercise)/PftViewer',
  //     params: {PftData:RunningData},
  //   });
  //   }
  // };

  return (
    <View className="flex-1 " style={{ backgroundColor: Colors.darkGreen }}>
      <SafeAreaView>
        <View className=" ml-5 mt-5 flex-row" style={{ height: height * 0.05 }}>
          <Text className="text-4xl font-bold text-neutral-50">Military</Text>
          <Text className="align-bottom text-2xl  text-neutral-50"> -Basics</Text>
        </View>

        <View className="ml-4 mt-10">
          <Text className="text-xl font-bold text-neutral-50 ">Physical Fitness Test</Text>
        </View>
        <Divider
          inset={true}
          insetType="right"
          width={1}
          color="white"
          style={{ marginTop: 2, marginLeft: 10 }}
        />
        <ScrollView>
          <FlatList
            data={PlazaHomeData}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal
            bounces={false}
            decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
            renderToHardwareTextureAndroid
            contentContainerStyle={{ alignItems: 'center' }}
            renderItem={({ item, index }) => {
              return (
                <View
                  key={index}
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                  }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => navigateToPftViewer(item)}>
                      <View
                        style={{
                          backgroundColor: Colors.light,
                          width: width * 0.4,
                          height: width * 0.4,
                          borderRadius: 9,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={{ uri: item.icon }}
                          style={{ width: width * 0.3, height: width * 0.3 }}
                        />
                        <Text style={{ fontFamily: 'source-sans3-medium' }}>{item.core}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
          <View className="ml-4 mt-6">
            <Text className="text-xl font-bold text-neutral-50 ">Physical Fitness Videos</Text>
          </View>
          <Divider
            inset={true}
            insetType="right"
            width={1}
            color="white"
            style={{ marginTop: 2, marginLeft: 10 }}
          />

          <View className="mt-3" style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={GoToYoutube}>
              <View
                style={{
                  backgroundColor: Colors.light,
                  width: width * 0.4,
                  height: width * 0.4,
                  borderRadius: 9,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9717/9717820.png' }}
                  style={{ width: width * 0.3, height: width * 0.3 }}
                />
                <Text style={{ fontFamily: 'source-sans3-medium' }}>Running</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ExerciseScreen;
