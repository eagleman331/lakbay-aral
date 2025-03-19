import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import {
  useWindowDimensions,
  View,
} from 'react-native';
import * as Location from 'expo-location';
import { Stack } from 'expo-router';

const SiteCategory = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);


  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  console.log('location', location);
  return (
    
    <View style={{ flex: 1 }}>
        <Stack.Screen options={{ title: 'CategoryOptions' }} />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ height: '100%', width: '100%' }}
        initialRegion={{
          longitude: 121.36279850956352,
          latitude: 14.534941949811,
          latitudeDelta: 0.0031,
          longitudeDelta: 0.0031,
        }}>
        {/* <Marker
          coordinate={location.coords}
          title="Tourist"
          description="Current Location"
          pinColor="blue"
        /> */}
        {/* <Marker
          coordinate={{
            latitude: 14.541445082627884,
            longitude: 121.36519107963379,
            latitudeDelta: 0.07,
            longitudeDelta: 0.07,
          }}
          title="Destination"
          description="description2"
        /> */}
        {location ? (
          <Polyline
            coordinates={[
              { latitude: location.coords.latitude, longitude: location.coords.longitude },
              { latitude: 14.541445082627884, longitude: 121.36519107963379 },
            ]}
            strokeColor={'blue'}
            strokeWidth={5}
            lineCap={'butt'}
            lineDashPattern={[20, 20]}
            tappable={true}
            onPress={() => {
              console.log('polyline tapped');
            }}
          />
        ) : null}

        {/* <Polyline
          coordinates={[
            { latitude: location.coords.latitude, longitude: location.coords.longitude },
            { latitude: 14.541445082627884, longitude: 121.36519107963379 },
          ]}
          strokeColor={'blue'}
          strokeWidth={5}
          lineCap={'butt'}
        /> */}
      </MapView>
    </View>
  );
};

export default SiteCategory;
