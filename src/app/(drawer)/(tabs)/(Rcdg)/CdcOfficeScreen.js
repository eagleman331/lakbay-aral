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

import { IconsCampTour } from '~/src/assets/DataApp/CampTourSpots';
import { CdcMarqueList } from '~/src/components/Marques/CdcMarqueList';

export default function CdcOfficeScreen() {
  const { width, height } = useWindowDimensions();

  return (
    <>
      {/* <Stack.Screen options={{ title: 'Tab One' }} /> */}
      <View className="flex-1  bg-gray-400">
        <Image
          className="absolute left-0 top-0 h-full w-full"
          source={require('../../../../assets/Background/RopeCourse.png')}
        />
        <SafeAreaView>
          <View className=" ml-5 mt-16" style={{ height: height*0.05 }}>
            <Text className="text-4xl font-bold text-neutral-50">Camp Tour</Text>
          </View>
          {/* Container of category of places */}
          <View className=" mt-3 items-center" style={{height: height*0.8}}>
            <FlatList
              data={IconsCampTour}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <CdcMarqueList item={item} />}
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
