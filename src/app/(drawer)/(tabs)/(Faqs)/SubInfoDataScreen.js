import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';
import { Divider } from '@rneui/themed';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

const SubInfoDataScreen = () => {
  return (
    <View className="flex-1 bg-yellow-300">
      <SafeAreaView className="flex-1">
        <View className="ml-5 mt-24">
          <Text className="text-4xl font-bold text-neutral-50">General Question</Text>
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
            <Text className="px-2 py-2 text-2xl font-semibold italic">Answer</Text>
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
            <Text className="px-2 py-2 text-2xl font-semibold italic">Title Bullets</Text>

            <View className=" flex-row">
              <View className="mt-1 w-1/12 items-center">
                <Feather name="circle" size={20} color="black" />
              </View>
              <Text className="w-11/12 px-2 text-justify text-lg">
                Somethings to say in the house
              </Text>
            </View>
            <View className=" flex-row">
              <View className="mt-0.5 w-1/12 items-center">
                <Entypo name="controller-record" size={24} color="black" />
              </View>
              <Text className="w-11/12 px-2 text-justify text-lg">
                The Army Recruitment Office-Luzon proudly announces the upcoming schedule for the
                Philippine Army Pre-Entry Examination in the provinces of Cagayan, Isabela and
                Apayao. This examination serves as a crucial step for individuals seeking to join
                the distinguished ranks of the Philippine Army, showcasing their dedication,
                discipline, and commitment to serving the nation with honor.
              </Text>
            </View>
          </View>
          <Divider
            inset={true}
            insetType="right"
            width={1}
            color="white"
            style={{ marginTop: 2, marginLeft: 10 }}
          />
          <View className="mb-safe-offset-10">
            <Text className="px-2 py-2 text-2xl font-semibold italic">Other Information</Text>
            <TouchableOpacity
              onPress={() => router.push('/(drawer)/(tabs)/(Faqs)/FaqsDetailScreen')}>
              <View className="mt-2 flex-row p-2">
                <Text className="w-10/12 text-lg font-semibold">
                  Requirements in the application in the pursuit of army recruitment in the
                  philippines
                </Text>
                <View className="w-2/12 items-center justify-center ">
                  <AntDesign name="doubleright" size={24} color="black" />
                </View>
                <Divider width={1} color="white" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/(drawer)/(tabs)/(Faqs)/FaqsDetailScreen')}>
              <View className="mt-2 flex-row p-2">
                <Text className="w-10/12 text-lg font-semibold italic">
                  Requirements in the application
                </Text>
                <View className="w-2/12 items-center justify-center ">
                  <AntDesign name="arrowright" size={24} color="black" />
                </View>
                <Divider width={1} color="white" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/(drawer)/(tabs)/(Faqs)/TestScreen')}>
              <View className="mt-2 flex-row p-2">
                <Text className="w-10/12 text-lg font-semibold italic">
                  Requirements in the application
                </Text>
                <View className="w-2/12 items-center justify-center">
                  <Entypo name="arrow-right" size={24} color="black" />
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
