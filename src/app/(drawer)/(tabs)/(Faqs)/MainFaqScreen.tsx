import { View, Text, Image, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { Divider } from '@rneui/themed';

import { collection, query, where, getDocs, getFirestore } from '@react-native-firebase/firestore';

import FaqsList from '~/src/components/Marques/FaqsList';
import Colors from '~/src/assets/constant/Colors';

const MainFaqScreen = () => {
  const [faqsData, setFaqsData] = useState([]);


  const pressFirebase = async () => {
    const combinedQuestions = [];
    const db = getFirestore();
    const q = query(collection(db, 'faqs'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const questions = doc.data().listOfQuestion;
      if (Array.isArray(questions)) {
        combinedQuestions.push(...questions);
      }
      console.log(doc.id, ' => ', doc.data());
    });
    setFaqsData(combinedQuestions);
  };

  useEffect(() => {
    const unsubscribed = async () => {
    const combinedQuestions = [];
    const db = getFirestore();
    const q = query(collection(db, 'faqs'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const questions = doc.data().listOfQuestion;
      if (Array.isArray(questions)) {
        combinedQuestions.push(...questions);
      }
      console.log(doc.id, ' => ', doc.data());
    });
    setFaqsData(combinedQuestions);
  }
  unsubscribed()
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.darkGreen }}>
      {/* <Image
        className="absolute left-0 top-0 h-full w-full"
        source={require('../../../../assets/Background/RopeCourse.png')}
      /> */}
      <SafeAreaView>
        <View className="ml-5 mt-24">
          <Text className="text-4xl font-bold text-neutral-50">FAQs</Text>
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
          {faqsData.map((item, index) => {
            console.log('Count', index);
            return <FaqsList item={item} key={index} />;
          })}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MainFaqScreen;
