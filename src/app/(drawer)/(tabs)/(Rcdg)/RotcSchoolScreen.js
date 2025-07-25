import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RotcSchoolData } from '~/src/assets/DataApp/RotcSchool';
import { RotcSchoolsList } from '~/src/components/Marques/RotcSchoolsList';
import { CdcMarqueList } from '../../../../components/Marques/CdcMarqueList';
import { useEffect, useState } from 'react';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '~/src/utils/firebase';
import Colors from '../../../../assets/constant/Colors';
import { Divider, BottomSheet, ListItem } from '@rneui/themed';

export default function RotcSchoolScreen() {
  const { width, height } = useWindowDimensions();
  const [rotcData, setRotcData] = useState([]);
  const[region, setRegion] = useState('CALABARZON')

  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: 'DAVAO',
        onPress: () => {
          setRegion('Davao Region')
          setIsVisible(false)},
     },
    { title: 'NCR' ,
      onPress: () => {
          setRegion('NCR')
          setIsVisible(false)},
    },
     { title: 'CAR',
      onPress: () => {
          setRegion('CAR')
          setIsVisible(false)},
      },
    { title: 'Central Luzon',
      onPress: () => {
          setRegion('Central Luzon')
          setIsVisible(false)},
     },
     { title: 'BICOL',
      onPress: () => {
          setRegion('Bicol')
          setIsVisible(false)},
      },
    { title: 'MIMAROPA',
      onPress: () => {
          setRegion('MIMAROPA')
          setIsVisible(false)},
     },
     { title: 'NEGROS',
      onPress: () => {
          setRegion('Negros')
          setIsVisible(false)},
      },
    { title: 'Cebu',
      onPress: () => {
          setRegion('Cebu')
          setIsVisible(false)},
     },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];

  useEffect(() => {
    const unsubscribed = async () => {
      const docRef = doc(db, 'rotcSchools');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setRotcData(docSnap.data().listOfQuestion);
      } else {
        // docSnap.data() will be undefined in this case
        console.log('No such document!');
      }
    };
    unsubscribed();
  }, []);
  console.log('dataRotc', rotcData);
  return (
    <>
      {/* <Stack.Screen options={{ title: 'Tab One' }} /> */}
      <View className="flex-1 " style={{ backgroundColor: Colors.darkGreen }}>
        {/* <Image
          className="absolute left-0 top-0 h-full w-full"
          source={require('../../../../assets/Background/RopeCourse.png')}
        /> */}
        <SafeAreaView>
          <View className=" ml-5 mt-16 flex-row" style={{ height: height * 0.05 }}>
            <Text className="text-4xl font-bold text-neutral-50">ROTC-</Text>
            <TouchableOpacity   
            // onPress={() => setIsVisible(true)}
            >
              <View
                style={{
                  borderColor: Colors.gray,
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 3,
                  marginLeft: 5,
                  backgroundColor: Colors.soaringEagle,
                }}>
                <Text className="align-bottom text-2xl  text-neutral-50">{region}</Text>
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
          {/* Container of category of places */}
          <View className=" mt-1 items-center" style={{ height: height * 0.8 }}>
            <FlatList
              data={RotcSchoolData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <RotcSchoolsList item={item} />}
            />
          </View>

          <BottomSheet modalProps={{}} isVisible={isVisible}>
            {list.map((l, i) => (
              <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                </ListItem.Content>
                   <ListItem.Chevron />
              </ListItem>
            ))}
          </BottomSheet>
        </SafeAreaView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});
