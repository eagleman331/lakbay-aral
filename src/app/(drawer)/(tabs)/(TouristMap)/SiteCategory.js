import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import * as Location from 'expo-location';
import { Stack, useLocalSearchParams } from 'expo-router';
import Constants from 'expo-constants';
import LottieView from 'lottie-react-native';
import MapViewDirections from 'react-native-maps-directions';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useFrameCallback } from 'react-native-reanimated';


const SiteCategory = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const animation = useRef(null);
  const sheetRef = useRef(null);
  const GoogleMAPI = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API;
  const { width, height } = useWindowDimensions();
  const params = useLocalSearchParams();

  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );
  const snapPoints = useMemo(() => ['50%', '15%', '90%'], []);
  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log('handleSheetChange', index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  const renderItem = useCallback(
    (item) => (
      <View key={item} style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );

  const API_GOOGLE_MAPS =
    process.env.NODE_ENV === 'development'
      ? 'AIzaSyD2vd0xYzrKHixVMCqIWSvIJgQwrcqI9IE'
      : PROVIDER_GOOGLE;

  // useEffect(() => {
  //   async function getCurrentLocation() {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   }

  //   getCurrentLocation();
  // }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.Best,
          timeInterval: 10000, // Update every 10 seconds
          distanceInterval: 10, // Update when moving 10 meters
        },
        (location) => {
          // setLocation(location.coords);
          // console.log('location', location);
        }
      );
    })();
  }, []);

  // useFrameCallback((frameInfo) => {
  //   const deltaSeconds = (frameInfo.timeSincePreviousFrame ?? 0) / 1000;
  // //  console.log('deltaSeconds', deltaSeconds)
  // });

  return (
    <View style={{ flex: 1 }}>
      {/* <View style={{backgroundColor:'red', width, height:height*.15}}></View> */}
      <MapView
        style={{ height: '100%', width: '100%' }}
        initialRegion={{
          longitude: 121.36279850956352,
          latitude: 14.534941949811,
          latitudeDelta: 0.0031,
          longitudeDelta: 0.0031,
        }}>
        {location ? (
          <Marker coordinate={location} title="Tourist" description="Current Location">
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
        {/* Target Area */}
        <Marker
          coordinate={{
            latitude: Number(params.latitude),
            longitude: Number(params.longitude),
            latitudeDelta: 0.07,
            longitudeDelta: 0.07,
          }}
          title="Target Destination"
          description="Target Desc"
          mapType="mutedStandard"
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
            origin={location}
            destination={{ latitude: Number(params.latitude), longitude: Number(params.longitude) }}
            apikey={GoogleMAPI}
            strokeWidth={3}
            strokeColor="hotpink"
            onReady={(result) => {
              // console.log(`Distance: ${result.distance} km`);
              // console.log(`Duration: ${result.duration} min.`);
            }}
          />
        ) : null}

        {location ? (
          <Polyline
            coordinates={[
              location,
              { latitude: Number(params.latitude), longitude: Number(params.longitude) },
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
      </MapView>
      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        backgroundStyle={{
          backgroundColor: '#7ff03e',
        }}
        onChange={handleSheetChange}>
        <View className="flex-row" style={{ paddingLeft: 10 }}>
          <Text>Distance: </Text>
          <Text style={{ paddingLeft: 10 }}>500 Meters</Text>
        </View>
        <View className="mt-1 flex-row" style={{ paddingLeft: 10 }}>
          <Text>Destination: </Text>
          <Text style={{ paddingLeft: 10 }}>FIRING RANGE</Text>
        </View>

        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          {data.map(renderItem)}
        </BottomSheetScrollView>
      </BottomSheet>
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
  contentContainer: {
    backgroundColor: 'white',
    marginTop: 40,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
});
