import { View, Text, SafeAreaView, useWindowDimensions } from 'react-native';
import React, { useEffect } from 'react';
import Colors from '../../../../assets/constant/Colors';
import { Card, Button, Icon } from '@rneui/themed';
import { useLocalSearchParams, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResultScreen = () => {
  const { width, height } = useWindowDimensions();
  const router = useRouter();
  const params = useLocalSearchParams();
  const { score, questions, id } = params;
  const correctAAnswer = parseInt(score) + parseInt(1);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('listExams');

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const getMultiple = async (value) => {
    let values;
    try {
      values = await AsyncStorage.multiGet(value);
    } catch (e) {
      // read error
    }
  };

  const getAllKeys = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      // read key error
    }
    getMultiple(keys);
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
  };
  useEffect(() => {
    getAllKeys();
  }, []);
  return (
    <>
      <View className="flex-1 " style={{ backgroundColor: Colors.darkGreen }}>
        <SafeAreaView>
          <Card containerStyle={{ borderRadius: 20, marginTop: height * 0.2 }}>
            <Text style={{ fontFamily: 'mrt-bold', fontSize: 25, alignSelf: 'center' }}>
              {' '}
              Exam Result
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 15, fontFamily: 'roboto-medium' }}>
                Question # {correctAAnswer}/ {parseInt(questions)}
              </Text>
              <Text style={{ fontSize: 15, fontFamily: 'roboto-medium' }}>Time: --</Text>
            </View>
            <Card.Divider />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Button
                title={`${correctAAnswer}/${parseInt(questions)}`}
                buttonStyle={{
                  borderColor: 'transparent',
                  borderWidth: 0,
                  backgroundColor: Colors.turbo,
                  height: 100,
                }}
                type="outline"
                raised
                titleStyle={{
                  fontWeight: '700',
                  color: Colors.darkGreen,
                  fontFamily: 'roboto-medium',
                }}
                containerStyle={{
                  width: 100,
                }}
                icon={
                  <Icon
                    name="checkbox-outline"
                    type="ionicon"
                    color={Colors.darkGreen}
                    iconStyle={{ marginLeft: 3 }}
                  />
                }
                iconRight
              />
              <Button
                title={`${Math.round((correctAAnswer / parseInt(questions)) * 100)}%`}
                type="outline"
                raised
                titleStyle={{
                  fontWeight: '700',
                  color: Colors.darkGreen,
                  fontFamily: 'roboto-medium',
                }}
                buttonStyle={{
                  borderColor: 'transparent',
                  borderWidth: 0,
                  backgroundColor: Colors.turbo,
                  height: 100,
                }}
                containerStyle={{
                  width: 100,
                }}
                icon={
                  <Icon
                    name="piechart"
                    type="antdesign"
                    color={Colors.darkGreen}
                    iconStyle={{ marginLeft: 3 }}
                  />
                }
                iconRight
              />
            </View>
            <View
              style={{
                marginTop: 80,
              }}>
              <Text style={{ fontFamily: 'roboto-medium', alignSelf: 'center', fontSize: 20 }}>
                Do Your Best Next Time{' '}
              </Text>
            </View>
            <Card.Divider inset={true} insetType="rimiddleght" />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginTop: 10,
              }}>
              <Button
                title="Try Again"
                onPress={() => router.push({ pathname: '/(drawer)/(tabs)/(Exam)/PreExamPhase' })}
                buttonStyle={{
                  borderColor: 'transparent',
                  borderWidth: 0,
                  backgroundColor: Colors.turbo,
                }}
                type="outline"
                raised
                titleStyle={{ color: Colors.darkGreen, fontFamily: 'roboto-medium' }}
                containerStyle={{
                  width: 150,
                }}
                icon={
                  <Icon
                    name="cycle"
                    type="entypo"
                    color={Colors.darkGreen}
                    iconStyle={{ marginLeft: 4 }}
                  />
                }
                iconRight
              />
              <Button
                onPress={() => router.push({ pathname: '/(drawer)/(tabs)/(Exam)/PreExamPhase' })}
                type="outline"
                raised
                titleStyle={{ color: Colors.darkGreen, fontFamily: 'roboto-medium' }}
                buttonStyle={{
                  borderColor: 'transparent',
                  borderWidth: 0,
                  backgroundColor: Colors.turbo,
                }}
                containerStyle={{
                  width: 100,
                }}
                title="REVIEW"
                icon={
                  <Icon
                    name="rightcircle"
                    type="antdesign"
                    color={Colors.darkGreen}
                    iconStyle={{ marginLeft: 3 }}
                  />
                }
                iconRight
              />
            </View>
          </Card>
        </SafeAreaView>
      </View>
    </>
  );
};

export default ResultScreen;
