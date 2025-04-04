import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Image,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker, Polyline, AnimatedRegion } from "react-native-maps";
import * as Location from "expo-location";
import * as Progress from "react-native-progress";
import Header_without_currency_change from "./Layouts/Header_without_currency_change";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const GOOGLE_MAPS_API_KEY = "AIzaSyB_sePfGC7khG1CVlY87cTc4qNUnFsMS5Q";

export default function Navigatemapversion() {
  const [location, setLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [loadingRoute, setLoadingRoute] = useState(false);
  const [progress, setProgress] = useState(0);
  const [eta, setETA] = useState(0);
  const mapRef = useRef(null);
  const locationSubscription = useRef(null);

  const pickupLocation = {
    latitude: 13.01675013777671,
    longitude: 80.20522225092238,
  };

  const animatedLocation = useRef(
    new AnimatedRegion({
      latitude: 12.9911,
      longitude: 80.2183,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    })
  ).current;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission Denied", "Enable location services.");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
      animatedLocation.setValue({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });

      updateNavigationStatus(currentLocation.coords);
      fetchRoute(currentLocation.coords);

      // Wait for 30 seconds before zooming in
      setTimeout(() => {
        if (mapRef.current) {
          mapRef.current.animateToRegion({
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
        }
      }, 30000); // 30 seconds delay

      locationSubscription.current = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 2000,
          distanceInterval: 1,
        },
        (newLocation) => {
          setLocation(newLocation.coords);
          animatedLocation.setValue(newLocation.coords);
          updateNavigationStatus(newLocation.coords);
          fetchRoute(newLocation.coords);

          mapRef.current?.animateToRegion({
            latitude: newLocation.coords.latitude,
            longitude: newLocation.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
        }
      );
    })();

    return () => locationSubscription.current?.remove();
  }, []);
  

  const fetchRoute = async (currentCoords) => {
    if (!currentCoords) return;
    setLoadingRoute(true);
    try {
      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${currentCoords.latitude},${currentCoords.longitude}&destination=${pickupLocation.latitude},${pickupLocation.longitude}&mode=driving&key=${GOOGLE_MAPS_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.status !== "OK")
        return Alert.alert("Error", `Error: ${data.status}`);

      const points = decodePolyline(data.routes[0].overview_polyline.points);
      setRouteCoordinates(points);

      // Extract ETA from API response
      const duration = data.routes[0].legs[0].duration.value / 60; // Convert seconds to minutes
      setETA(Math.round(duration));
    } catch (error) {
      Alert.alert("Error", "Could not fetch route.");
    }
    setLoadingRoute(false);
  };
  

  const decodePolyline = (encoded) => {
    let points = [],
      index = 0,
      lat = 0,
      lng = 0;
    while (index < encoded.length) {
      let shift = 0,
        result = 0,
        b;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlat = result & 1 ? ~(result >> 1) : result >> 1;
      lat += dlat;
      shift = 0;
      result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlng = result & 1 ? ~(result >> 1) : result >> 1;
      lng += dlng;
      points.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
    }
    return points;
  };

  

  const updateNavigationStatus = (coords) => {
    const totalDistance = Math.sqrt(
      Math.pow(pickupLocation.latitude - location?.latitude, 2) +
        Math.pow(pickupLocation.longitude - location?.longitude, 2)
    );

    const remainingDistance = Math.sqrt(
      Math.pow(pickupLocation.latitude - coords.latitude, 2) +
        Math.pow(pickupLocation.longitude - coords.longitude, 2)
    );

    const newProgress = Math.max(
      0,
      Math.min(1, 1 - remainingDistance / totalDistance)
    );
    setProgress(newProgress);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FBF5FF" }}>
      <Header_without_currency_change />

      <View style={{ height: "63%" }}>
      <MapView ref={mapRef} style={styles.map}>
  {location && (
    <Marker.Animated coordinate={animatedLocation}>
      <Image
        source={require("./assets/deliverybiker.png")} // Bike icon
        style={{ width: 30, height: 40 }}
        resizeMode="contain"
      />
    </Marker.Animated>
  )}
  <Marker coordinate={pickupLocation} title="Pickup Location" />
  {routeCoordinates.length > 0 && (
    <Polyline
      coordinates={routeCoordinates}
      strokeWidth={3}
      strokeColor="blue"
    />
  )}
</MapView>

      
          
      </View>

      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>ARRIVING IN</Text>
          <Text style={styles.etaText}>{eta} mins</Text>
          <Progress.Bar
            progress={progress}
            width={330}
            color="#6246D2"
            backgroundColor="#6246D2"
            borderRadius={13}
            padding={1}
            style={styles.progressBar}
          />
        </View>
        <View style={styles.courierContainer}>
          <View style={styles.courierInfo}>
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/men/10.jpg" }}
              style={styles.avatar}
            />
            <View style={styles.textContainer}>
              <Text style={styles.courierName}>Hari <Text style={styles.font}>is on the way to pick</Text></Text>
              <Text style={styles.courierMessage}>
                 up your courier.
              </Text>
            </View>
          </View>



          <TouchableOpacity
            onPress={() => Linking.openURL("tel:7708350630")}
            style={styles.callButton}
          >
            <FontAwesome6 name="phone-volume" size={25} color="#6246D2"/>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  map: { ...StyleSheet.absoluteFillObject },
  container: {
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 5,
  },
  infoContainer: { padding: 8, width: "100%" },
  title: { fontSize: 16, fontWeight: "500", color: "#9B4BDB", marginLeft:10, },
  etaText: { fontSize: 25, fontWeight: "500", color: "#05040B", marginTop: 5, marginLeft:10, },
  progressBar: { marginTop: 15, alignSelf: "center" },
  courierContainer: { flexDirection: "row", alignItems: "center", padding: 15 },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },

  courierContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F8F5FF",
    padding: 16,
    borderRadius: 10,
    elevation: 4,
    marginTop:20,
  },
  courierInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: "column",
    marginLeft:10,
  },
  courierName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  courierMessage: {
    fontSize: 14,
    color: "#666",
  },
  callButton: {
    backgroundColor: "whitesmoke",
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    alignItems:"center",
  },
  font:{
   color:"#60606C",
   fontWeight:400,
  },
});
