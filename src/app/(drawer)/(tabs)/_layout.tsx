import { Tabs } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Colors from '~/src/assets/constant/Colors';

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="(Faqs)"
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="(TouristMap)"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome5 name="campground" size={24} color={Colors.darkGreen}/>,
        }}
      />
      <Tabs.Screen
        name="(Rcdg)"
        options={{
          title: 'ROTC',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="person-military-rifle" size={26} color={Colors.darkGreen} />
          ),
        }}
      />
      <Tabs.Screen
        name="(Faqs)"
        options={{
          title: 'FAQs',
          headerShown: false,
          tabBarIcon: ({ color }) => <Entypo name="clipboard" size={24} color={Colors.darkGreen} />,
        }}
      />
      {/* <Tabs.Screen
        name="(Exam)"
        options={{
          title: 'Exam',
          headerShown: false,
          tabBarIcon: ({ color }) => <Entypo name="clipboard" size={24} color={Colors.darkGreen} />,
        }}
        /> */}
         <Tabs.Screen name="(Exam)" options={{ href: null,   headerShown: false, }} />
      <Tabs.Screen name="(Exercise)" options={{ href: null,   headerShown: false, }} />
      <Tabs.Screen name="index" options={{ href: null }} />
    </Tabs>
  );
}
