import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import * as Location from 'expo-location';
import { Stack } from 'expo-router';
import Constants from 'expo-constants';
import LottieView from 'lottie-react-native';
import MapViewDirections from 'react-native-maps-directions';

const SiteCategory = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const animation = useRef(null);
  const GoogleMAPI = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API;

  const API_GOOGLE_MAPS =
    process.env.NODE_ENV === 'development'
      ? 'AIzaSyD2vd0xYzrKHixVMCqIWSvIJgQwrcqI9IE'
      : PROVIDER_GOOGLE;

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

  return (
    <View style={{ flex: 1 }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ height: '100%', width: '100%' }}
        initialRegion={{
          longitude: 121.36279850956352,
          latitude: 14.534941949811,
          latitudeDelta: 0.0031,
          longitudeDelta: 0.0031,
        }}>
        {location ? (
          <Marker coordinate={location.coords} title="Tourist" description="Current Location">
            <View>
              <LottieView
                autoPlay
                ref={animation}
                style={{
                  width: 80,
                  height: 50,
                  top: 15,
                }}
                source={require('../../../../assets/lottie/BallWalking.json')}
              />
            </View>
          </Marker>
        ) : null}
        <Marker
          coordinate={{
            latitude: 14.541445082627884,
            longitude: 121.36519107963379,
            latitudeDelta: 0.07,
            longitudeDelta: 0.07,
          }}
          title="Target Destination"
          description="Target Desc"
        />
        {/* <Marker
          coordinate={{
            latitude: 14.541445082627884,
            longitude: 121.36519107963379,
            latitudeDelta: 0.07,
            longitudeDelta: 0.07,
          }}
          title="Destination"
          description="description2">
          <View>
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: 80,
                height: 50,
              }}
              source={require('../../../../assets/lottie/BallWalking.json')}
            />
          </View>
        </Marker> */}
        {location ? (
          <MapViewDirections
            origin={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
            destination={{ latitude: 14.541445082627884, longitude: 121.36519107963379 }}
            apikey={GoogleMAPI}

            strokeWidth={3}
            strokeColor="hotpink"

            onReady={result => {
              console.log(`Distance: ${result.distance} km`)
              console.log(`Duration: ${result.duration} min.`)
            }}
          />
        ) : null}

        {/* {location ? (
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
        ) : null} */}
      </MapView>
      <Text>Warren</Text>
    </View>
  );
};

export default SiteCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
