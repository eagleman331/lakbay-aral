import LottieView from 'lottie-react-native';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { useRef } from 'react';
import { FaqsData } from '~/src/assets/DataApp/FaqsData';
import QuestionAnswer from '~/src/components/Marques/QuestionAnswer';
import { Divider } from '@rneui/themed';
import { BlurView } from 'expo-blur';
import { Link, router } from 'expo-router';

export default function HomeFaqsScreen() {
  const { width, height } = useWindowDimensions();
  const animation = useRef(null);
  console.log();
  return (
    <>
      <View className="flex-1  bg-gray-400">
        <Image
          className="absolute left-0 top-0 h-full w-full"
          source={require('../../../../assets/Background/RopeCourse.png')}
        />

        <SafeAreaView>
          <View className="ml-5 mt-24">
            <Text className="text-4xl font-bold text-neutral-50">FAQs</Text>
          </View>
          <Divider
            inset={true}
            insetType="right"
            width={1}
            color="white"
            style={{ marginTop: 2, marginLeft: 10 }}
          />
<Link href="/FaqsMap/LevelTwoFaqs" asChild>
</Link>
          <Pressable onPress={() => router.replace('/(drawer)/(tabs)/(Information)/TestScreen')}>
            <View className="h-6" />
            <BlurView intensity={0} experimentalBlurMethod={'blur'}>
              <View className="mt-2 p-2">
                <Text className="text-lg font-semibold text-white">
                  How to Apply on the Philippine Army especially in Jungle Fighter Division
                </Text>
                <Divider inset={true} insetType="middle" width={1} color="white" />
              </View>
            </BlurView>
          </Pressable>

          {/* <LottieView
            autoPlay
            ref={animation}
            style={{
              width: 300,
              height: 300,
            }}
            source={require('../../../../assets/lottie/construction.json')}
          /> */}
          <View
            className="w-11/12 rounded-xl bg-green-400 drop-shadow-md"
            style={{ height: height * 0.55, alignSelf: 'center' }}>
            <Text className="mt-2 text-center text-xl font-bold">Frequently Ask Questions</Text>
            <FlatList
              data={FaqsData}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <QuestionAnswer item={item} />}
            />
          </View>
        </SafeAreaView>
      </View>
    </>
  );
}
