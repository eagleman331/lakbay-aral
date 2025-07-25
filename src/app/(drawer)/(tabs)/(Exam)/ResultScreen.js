import {
  View,
  Text,
  SafeAreaView,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Colors from '../../../../assets/constant/Colors';
import { Divider } from '@rneui/themed';
import { Entypo } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';

const ResultScreen = () => {
  const { width, height } = useWindowDimensions();
  return (
    <>
      <View className="flex-1 " style={{ backgroundColor: Colors.darkGreen }}>
        <SafeAreaView>
          <View className=" ml-5 mt-24 flex-row" style={{ height: height * 0.05 }}>
            <Text className="text-4xl font-bold text-neutral-50">ROTC-</Text>
            <TouchableOpacity>
              <View
                style={{
                  borderColor: Colors.gray,
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 3,
                  marginLeft: 5,
                  backgroundColor: Colors.soaringEagle,
                }}>
                <Text className="align-bottom text-2xl  text-neutral-50">Region</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Divider
            inset={true}
            insetType="right"
            width={1}
            color="white"
            style={{ marginTop: 2, marginLeft: 10 }}
          />
          <View style={{ alignItems: 'center', marginTop: 50 }}>
            <View
              style={{
                height: height * 0.65,
                width: width * 0.9,
                borderRadius: 20,
                backgroundColor: Colors.light,
              }}>
              <View style={{ alignSelf: 'center' }}>
                <Text>Exam # 3</Text>
              </View>
              <View style={{ marginLeft: 5 }}>
                <Text>Question: 3/5</Text>
              </View>
              <View style={{ paddingRight: 10, paddingLeft: 10, marginTop: 10, marginBottom: 10,  }}>
                
                <Text style={{textAlign:'justify', flexDirection:'row'}}>
                    <Text>   </Text>
                  Several academic institutions in Calabarzon (CALABARZON) have Reserve Officers'
                  Training Corps (ROTC) units, including Cavite State University, Laguna State
                  Polytechnic University, and Southern Luzon State University. Other schools
                  mentioned
                </Text>
              </View>
              <Divider color="black" />
              <ScrollView style={{ marginTop: 15 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    borderColor: Colors.darkGreen,
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 10,
                  }}>
                  <View style={{ justifyContent: 'center' }}>
                    <Fontisto name="checkbox-passive" size={24} color={Colors.darkGreen} />
                  </View>

                  <Text style={{ marginLeft: 10, marginRight: 10, textAlign: 'justify' }}>
                    Chose a text Message with a very lengthy sentence that must wrap ng auto tab or
                    enter to be good looking. these ise better
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    borderColor: Colors.darkGreen,
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 10,
                  }}>
                  <View style={{ justifyContent: 'center' }}>
                    <Fontisto name="checkbox-passive" size={24} color={Colors.darkGreen} />
                  </View>

                  <Text style={{ marginLeft: 10, marginRight: 10, textAlign: 'justify' }}>
                    Chose a text Message with a very lengthy sentence that must wrap ng auto tab or
                    enter to be good looking. these ise better
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    borderColor: Colors.darkGreen,
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 10,
                  }}>
                  <View style={{ justifyContent: 'center' }}>
                    <Fontisto name="checkbox-passive" size={24} color={Colors.darkGreen} />
                  </View>

                  <Text style={{ marginLeft: 10, marginRight: 10, textAlign: 'justify' }}>
                    Chose a text Message with a very lengthy sentence that must wrap ng auto tab or
                    enter to be good looking. these ise better
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    borderColor: Colors.darkGreen,
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 10,
                  }}>
                  <View style={{ justifyContent: 'center' }}>
                    <Fontisto name="checkbox-passive" size={24} color={Colors.darkGreen} />
                  </View>

                  <Text
                    style={{
                      marginLeft: 10,
                      marginRight: 10,
                      textAlign: 'justify',
                      color: 'gray',
                    }}>
                    Chose a text Message with a very lengthy sentence that must wrap ng auto tab or
                    enter to be good looking. these ise better
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default ResultScreen;
