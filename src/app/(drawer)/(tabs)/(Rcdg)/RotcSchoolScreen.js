import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
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
import { Divider } from '@rneui/themed';

export default function RotcSchoolScreen() {
  const { width, height } = useWindowDimensions();
  const [rotcData, setRotcData] = useState([]);

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
console.log('dataRotc',rotcData)
  return (
    <>
      {/* <Stack.Screen options={{ title: 'Tab One' }} /> */}
      <View className="flex-1 " style={{backgroundColor: Colors.soaringEagle}}>
        {/* <Image
          className="absolute left-0 top-0 h-full w-full"
          source={require('../../../../assets/Background/RopeCourse.png')}
        /> */}
        <SafeAreaView>
          <View className=" ml-5 mt-16 flex-row" style={{ height: height * 0.05 }}>
            <Text className="text-4xl font-bold text-neutral-50">ROTC</Text>
            <Text className="align-bottom text-2xl  text-neutral-50"> -CALABARZON</Text>
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
