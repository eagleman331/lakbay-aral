import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';
import { Divider } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';

const index = () => {
  return (
    <View className="flex-1 bg-lime-400">
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
        <TouchableOpacity onPress={() => router.push('/(drawer)/(tabs)/(Faqs)/SubInfoDataScreen')}>
          <View className="mt-2 p-2">
            <Text className="text-lg font-semibold text-white">
              How to Apply on the Philippine Army especially in Jungle Fighter Division
            </Text>
            <Divider width={1} color="white" />
          </View>
        </TouchableOpacity>

        <View className="mt-2 p-2">
          <Text className="text-lg font-semibold text-white">
            How to Apply on the Philippine Army especially in Jungle Fighter Division
          </Text>
          <Divider width={1} color="white" />
        </View>

        <View className="mt-2 p-2">
          <Text className="text-lg font-semibold text-white">
            How to Apply on the Philippine Army especially in Jungle Fighter Division
          </Text>
          <Divider width={1} color="white" />
        </View>

        <View className="mt-10">
          <Link href="/(drawer)/(tabs)/(Information)/TestScreen">
            <Text>index</Text>
          </Link>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default index;
