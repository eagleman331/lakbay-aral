import { Tabs } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';


export default function TabLayout() {
  return (
    <Tabs
    initialRouteName='(Faqs)'
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="(TouristMap)"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome5 name="campground" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="(Faqs)"
        options={{
          title: 'FAQs',
          headerShown: false,
          tabBarIcon: ({ color }) => <Entypo name="clipboard" size={24} color="black" />,
        }}
      />
       <Tabs.Screen
        name="(Information)"
        options={{
          title: 'Info',
          headerShown: false,
          tabBarIcon: ({ color }) => <Entypo name="clipboard" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{href:null,}}
        />
    </Tabs>
  );
}
