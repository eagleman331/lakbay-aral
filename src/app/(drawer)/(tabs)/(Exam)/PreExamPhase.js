import {
  View,
  Text,
  SafeAreaView,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Colors from '../../../../assets/constant/Colors';
import { Card, Button, Icon, SocialIcon, Divider } from '@rneui/themed';
import { Entypo } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';
import LottieView from 'lottie-react-native';
import { useRouter } from 'expo-router';
import firestore from '@react-native-firebase/firestore';

const PreExamPhase = () => {
  const { width, height } = useWindowDimensions();
    const [faqsData, setFaqsData] = useState([]);
  const animation = useRef(null);
  const router = useRouter();
  const item = {
    id: '1',
    title: 'Welcome to the Exam',
    description: 'Prepare yourself for the upcoming challenges.',
  };

    const getNestedCollection = async () => {
    const userId = 'USER_ID'; // Replace with actual user ID
    const postsRef = firestore()
      .collection('ArmyExams')
      .doc('fy6fB6lA3dZYrdXisuPQ')
      .collection('fy6fB6lA3dZYrdXisuPQ'); // <-- nested collection

    try {
      const snapshot = await postsRef.get();
      const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setFaqsData(posts)
      return posts;
    } catch (error) {
      console.error('Error fetching nested collection:', error);
    }
  };
useEffect(() => {
  getNestedCollection()
},[])
  return (
    <>
      <View className="flex-1 " style={{ backgroundColor: Colors.darkGreen }}>
        <SafeAreaView>
          <View style={{ marginTop: height * 0.2 }}>
            <Text style={{ fontSize: 20, color: 'white', fontFamily: 'roboto-bold' }}>
              Are You Ready
            </Text>
            <Divider inset={true} insetType="right" width={1.5} />
          </View>
          <View style={{ marginTop: 20, alignItems: 'center' }}>
            <View
              style={{
                width: width * 0.7,

                height: width * 0.9,
              }}>
              {/* <LottieView
                style={{  width: 120,
                                    height: 120,, alignSelf: 'center' }}
                source={test}
                autoPlay
                loop
              /> */}
              <LottieView
                autoPlay
                loop
                ref={animation}
                style={{
                  width: 250,
                  height: 250,
                  alignSelf: 'center',
                }}
                source={require('../../../../assets/lottie/test.json')}
              />
            </View>
            <Button
              onPress={() =>
                router.push({ pathname: '/(drawer)/(tabs)/(Exam)/ListExamScreen', params: item })
              } // OnPress event
              title="START"
              icon={{
                name: 'user',
                type: 'font-awesome',
                size: 30,
                color: Colors.darkGreen,
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10 }}
              titleStyle={{ fontFamily: 'mrt-bold', fontSize: 25, color: Colors.darkGreen }}
              buttonStyle={{
                backgroundColor: Colors.turbo,
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
                height: 60,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: -40,
              }}
            />
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default PreExamPhase;
