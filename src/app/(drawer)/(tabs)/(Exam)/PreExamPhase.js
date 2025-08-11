import { View, Text, SafeAreaView, useWindowDimensions } from 'react-native';
import React, { useRef } from 'react';
import Colors from '../../../../assets/constant/Colors';
import { Button, Divider } from '@rneui/themed';
import LottieView from 'lottie-react-native';
import { useRouter } from 'expo-router';

const PreExamPhase = () => {
  const { width, height } = useWindowDimensions();
  const animation = useRef(null);
  const router = useRouter();
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
              onPress={() => router.push({ pathname: '/(drawer)/(tabs)/(Exam)/ListExamScreen' })}
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
