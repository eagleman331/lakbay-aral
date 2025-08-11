import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { router } from 'expo-router';
import { Card, Divider } from '@rneui/themed';
import firestore from '@react-native-firebase/firestore';
import LottieView from 'lottie-react-native';
import Colors from '~/src/assets/constant/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListExamScreen = () => {
  const [faqsData, setFaqsData] = useState([]);
  const [testData, setTestData] = useState([]);
  const { width, height } = useWindowDimensions();
  const animation = useRef(null);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('listExams', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getNestedCollection = async () => {
    const postsRef = firestore().collection('afpExam');
    try {
      const snapshot = await postsRef.get();
      const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const listID = posts.map((item) => item.id);
      setFaqsData(posts);
      // Store the fetched data in AsyncStorage

      storeData(listID);
      return posts;
    } catch (error) {
      console.error('Error fetching nested collection:', error);
    }
  };
  useEffect(() => {
    getNestedCollection();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: Colors.darkGreen }}>
      <SafeAreaView>
        <View className="ml-5 mt-24">
          <Text className="text-3xl font-bold text-neutral-50">Free AFPSAT Exam</Text>
        </View>
        <View className="h-3" />
        <Divider
          inset={true}
          insetType="right"
          width={1}
          color="white"
          style={{ marginTop: 2, marginLeft: 10 }}
        />
        <View className="items-center">
          <FlatList
            data={faqsData}
            showsHorizontalScrollIndicator={false}
            // snapToInterval={FULL_SIZE}
            decelerationRate="fast"
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
           
              return (
                <View key={index}>
                  <TouchableOpacity
                    onPress={() =>
                      router.push({
                        pathname: '/(drawer)/(tabs)/(Exam)/ExamScreen',
                        params: {
                          id: item.id,
                          className: item.className,
                          questionNum: item.questionNum,
                          statusPay: item.statusPay,
                          indexCard: index,
                        },
                      })
                    }>
                    <Card
                      containerStyle={{
                        borderRadius: 20,
                        backgroundColor: Colors.turbo,
                        borderColor: Colors.yellow,
                      }}
                      wrapperStyle={{}}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontFamily: 'roboto-medium',
                          alignSelf: 'center',
                          fontColor: Colors.darkGreen,
                        }}>
                        Exam # {index + 1}
                      </Text>
                      <Card.Divider />
                      <View
                        style={{
                          position: 'relative',
                          alignItems: 'center',
                        }}>
                        <View style={{ width: width * 0.35, height: width * 0.3 }}>
                          <LottieView
                            autoPlay
                            loop
                            ref={animation}
                            style={{
                              width: width * 0.3,
                              height: width * 0.3,
                              alignSelf: 'center',
                            }}
                            source={require('../../../../assets/lottie/test.json')}
                          />
                        </View>
                        <Text
                          style={{
                            fontSize: 16,
                            fontFamily: 'source-sans3-medium',
                            alignSelf: 'center',
                            fontColor: Colors.darkGreen,
                          }}>
                          Click to Start
                        </Text>
                      </View>
                    </Card>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ListExamScreen;
