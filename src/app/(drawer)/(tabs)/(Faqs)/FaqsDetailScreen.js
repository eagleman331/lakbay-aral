import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';
import { Divider } from '@rneui/themed';
import Entypo from '@expo/vector-icons/Entypo';

const FaqsDetailScreen = () => {
  return (
    <View className="flex-1 bg-yellow-300">
      <SafeAreaView className="flex-1">
        <View className="ml-5 mt-24">
          <Text className="text-3xl font-bold text-neutral-50">Recruitment</Text>
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
            <Text className="px-2 py-2 text-2xl font-semibold italic">Officers</Text>
            <Text className="p-2 text-justify text-lg">
              Hello, aspiring applicants! Ready to take the first step toward serving the nation?
              Here are some frequently asked questions "FAQs" about joining the Philippine Army.
              Learn about the initial qualifications and requirements to join. Start your journey
              today!
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
            <Text className="px-2 py-2 text-2xl font-semibold italic">Requirements Bullets</Text>
            <View>
              <View className=" flex-row">
                <View className='w-1/12 items-center mt-0.5'>
                <Entypo name="controller-record" size={24} color="black"  />
                </View>
                <Text className="text-justify text-lg w-11/12 px-2">
                  The Army Recruitment Office-Luzon proudly announces the upcoming schedule for the
                  Philippine Army Pre-Entry Examination in the provinces of Cagayan, Isabela and
                  Apayao. This examination serves as a crucial step for individuals seeking to join
                  the distinguished ranks of the Philippine Army, showcasing their dedication,
                  discipline, and commitment to serving the nation with honor.
                </Text>
              </View>

              <View className=" flex-row">
                <View className='w-1/12 items-center mt-0.5'>
                <Entypo name="controller-record" size={24} color="black"  />
                </View>
                <Text className="text-justify text-lg w-11/12 px-2">
                  Somethings to say in the house
                </Text>
              </View>

              <View className=" flex-row">
                <View className='w-1/12 items-center mt-0.5'>
                <Entypo name="controller-record" size={24} color="black"  />
                </View>
                <Text className="text-justify text-lg w-11/12 px-2">
                  What other financial institutions to seek and use
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
            <Text className="px-2 py-2 text-2xl font-semibold italic">Enlisted Personnel</Text>
            <Text className="p-2 text-justify text-lg">
              Hello, aspiring applicants! Ready to take the first step toward serving the nation?
              Here are some frequently asked questions "FAQs" about joining the Philippine Army.
              Learn about the initial qualifications and requirements to join. Start your journey
              today!
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
            <Text className="px-2 py-2 text-2xl font-semibold italic">Requirements Bullets</Text>
            <View>
              <View className=" flex-row">
                <View className='w-1/12 items-center mt-0.5'>
                <Entypo name="controller-record" size={24} color="black"  />
                </View>
                <Text className="text-justify text-lg w-11/12 px-2">
                  The Army Recruitment Office-Luzon proudly announces the upcoming schedule for the
                  Philippine Army Pre-Entry Examination in the provinces of Cagayan, Isabela and
                  Apayao. This examination serves as a crucial step for individuals seeking to join
                  the distinguished ranks of the Philippine Army, showcasing their dedication,
                  discipline, and commitment to serving the nation with honor.
                </Text>
              </View>

              <View className=" flex-row">
                <View className='w-1/12 items-center mt-0.5'>
                <Entypo name="controller-record" size={24} color="black"  />
                </View>
                <Text className="text-justify text-lg w-11/12 px-2">
                  Somethings to say in the house
                </Text>
              </View>

              <View className=" flex-row">
                <View className='w-1/12 items-center mt-0.5'>
                <Entypo name="controller-record" size={24} color="black"  />
                </View>
                <Text className="text-justify text-lg w-11/12 px-2">
                  What other financial institutions to seek and use
                </Text>
              </View>
             
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default FaqsDetailScreen;
