import { View, Text, SafeAreaView, TouchableOpacity, Image, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link, router } from 'expo-router';
import { Divider } from '@rneui/themed';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '~/src/utils/firebase';
import { BlurView } from 'expo-blur';

const HomeFaqsScreen = () => {
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

  // useEffect(() => {
  //   const unsubscribed = async () => {
  //     const querySnapshot = await getDocs(collection(db, 'faqs'));
  //     querySnapshot.forEach((doc) => {
  //       console.log(`${doc.id} => ${doc.data()}`);
  //     });
  //   };
  //   unsubscribed();
  // }, []);

  return (
    <View className="flex-1">
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
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                router.push({
                  pathname: '/FaqsDetailScreen',
                  params: item,
                })
              }>
              <View className="mt-2 p-2">
                <View style={{backgroundColor: 'green', borderRadius:10}}>
                  <Text className="text-lg font-semibold text-white p-3">{item.question}</Text>
                </View>
                {/* <Divider width={1} color="white" /> */}
              </View>
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity onPress={() => router.replace('/(drawer)/(tabs)/(Faqs)/SubInfoDataScreen')}>
          <View className="mt-2 p-2">
            <BlurView intensity={0} experimentalBlurMethod={'blur'}>
              <Text className="text-lg font-semibold text-white">
                How to Apply on the Philippine Army especially in Jungle Fighter Division
              </Text>
            </BlurView>
            <Divider width={1} color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(drawer)/(tabs)/(Faqs)/SubInfoDataScreen')}>
          <View className="mt-2 p-2">
            <BlurView intensity={0} experimentalBlurMethod={'blur'}>
              <Text className="text-lg font-semibold text-white">
                How to Apply on the Philippine Army especially in Jungle Fighter Division
              </Text>
            </BlurView>
            <Divider width={1} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/(drawer)/(tabs)/(Faqs)/SubInfoDataScreen')}>
          <View className="mt-2 p-2">
            <BlurView intensity={0} experimentalBlurMethod={'blur'}>
              <Text className="text-lg font-semibold text-white">
                How to Apply on the Philippine Army especially in Jungle Fighter Division
              </Text>
            </BlurView>
            <Divider width={1} color="white" />
          </View>
        </TouchableOpacity>

        <View className="mt-10">
          <Link href="/(drawer)/(tabs)/(Faqs)/TestScreen">
            <Text>index</Text>
          </Link>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeFaqsScreen;
