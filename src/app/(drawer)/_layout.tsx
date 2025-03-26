import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

import { HeaderButton } from '../../components/HeaderButton';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{ backgroundColor: '#dde3fe', flex: 1 }}>
      <View style={{ padding: 20 }}>
        <Image
          source={require('../../assets/ChildTour.png')}
          style={{ width: 100, height: 100, alignSelf: 'center', borderRadius: 20 }}
        />
        <Text style={{ alignSelf: 'center', fontSize: 18, paddingTop: 10, color: '#5363df' }}>
          Lakbay Aral CY-2025
        </Text>
      </View>
      <View style={{ paddingTop: 10 }}>
      <TouchableOpacity className="flex-row" style={{ paddingLeft: 15, marginTop:15 }}>
        <Ionicons name="home-outline" size={24} color={"grey"} />
          <Text style={{ paddingLeft: 10, alignSelf: 'center' }}>Welcome Home</Text>
          </TouchableOpacity>

        <TouchableOpacity className="flex-row" style={{ paddingLeft: 15, marginTop:15 }}>
          <Entypo name="clipboard" size={24} color="black" />
          <Text style={{ paddingLeft: 10, alignSelf: 'center' }}>Home</Text>
        </TouchableOpacity>
      
{/*         
        <DrawerItemList {...props} />
        <DrawerItem label={'warren'} /> */}
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerLayout = () => {
  return (
    <Drawer drawerContent={CustomDrawerContent}>
      <Drawer.Screen
        name="index"
        options={{
          headerTitle: 'Home',
          headerShown: false,
          drawerLabel: 'Home',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          headerTitle: 'Tabs',
          drawerLabel: 'Tabs',
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="border-bottom" size={size} color={color} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
