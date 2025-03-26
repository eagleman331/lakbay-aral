import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Image, View } from 'react-native';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{ backgroundColor: '#dde3fe' }}>
      <View style={{ padding: 20 }}>
        <Image
          source={require('../../assets/ChildTour.png')}
          style={{ width: 100, height: 100, alignSelf: 'center', borderRadius:20 }}
        />
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label={'warren'} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
