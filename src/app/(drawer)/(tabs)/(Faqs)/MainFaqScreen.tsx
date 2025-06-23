import { View, Text, Image, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Divider } from '@rneui/themed';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '~/src/utils/firebase';
import FaqsList from '~/src/components/Marques/FaqsList';

const MainFaqScreen = () => {
  const [faqsData, setFaqsData] = useState([]);

  useEffect(() => {
    const unsubscribed = async () => {
      const docRef = doc(db, 'faqs', 'KXdxBME0zbWkuwGZ1hs9');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setFaqsData(docSnap.data().listOfQuestion);
      } else {
        // docSnap.data() will be undefined in this case
        console.log('No such document!');
      }
    };
    unsubscribed();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Image
        className="absolute left-0 top-0 h-full w-full"
        source={require('../../../../assets/Background/RopeCourse.png')}
      />
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
        {faqsData.map((item, index) => {
          console.log('item', item);

          console.log('index', index);
          return (
            <FaqsList item={item}  key={index}/>
          );
        })}
      </SafeAreaView>
    </View>
  );
};

export default MainFaqScreen;
