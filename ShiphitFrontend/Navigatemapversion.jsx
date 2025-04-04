import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker, Polyline, AnimatedRegion } from "react-native-maps";
import * as Location from "expo-location";
import * as Progress from "react-native-progress";
import Header_without_currency_change from "./Layouts/Header_without_currency_change";
import { Ionicons } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


const GOOGLE_MAPS_API_KEY = "AIzaSyB_sePfGC7khG1CVlY87cTc4qNUnFsMS5Q";

export default function Navigatemapversion() {
  const [location, setLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [loadingRoute, setLoadingRoute] = useState(false);
  const [progress, setProgress] = useState(0);
  const [eta, setETA] = useState(0);
  const mapRef = useRef(null);
  const locationSubscription = useRef(null);

  const destination = { latitude: 12.993075, longitude: 80.217814 };
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
  
      // 📌 Call `updateNavigationStatus` on first location update
      updateNavigationStatus(currentLocation.coords);
  
      mapRef.current?.animateToRegion({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
  
      locationSubscription.current = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, timeInterval: 2000, distanceInterval: 1 },
        (newLocation) => {
          setLocation(newLocation.coords);
          animatedLocation.setValue(newLocation.coords);
          updateNavigationStatus(newLocation.coords);
  
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
  
  

  const fetchRoute = async () => {
    if (!location) return Alert.alert("Error", "Current location not available.");
    setLoadingRoute(true);
    try {
      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${location.latitude},${location.longitude}&destination=${destination.latitude},${destination.longitude}&mode=driving&key=${GOOGLE_MAPS_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.status !== "OK") return Alert.alert("Error", `Error: ${data.status}`);
  
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
    let points = [], index = 0, lat = 0, lng = 0;
    while (index < encoded.length) {
      let shift = 0, result = 0, b;
      do { b = encoded.charCodeAt(index++) - 63; result |= (b & 0x1f) << shift; shift += 5; } while (b >= 0x20);
      let dlat = result & 1 ? ~(result >> 1) : result >> 1; lat += dlat;
      shift = 0; result = 0;
      do { b = encoded.charCodeAt(index++) - 63; result |= (b & 0x1f) << shift; shift += 5; } while (b >= 0x20);
      let dlng = result & 1 ? ~(result >> 1) : result >> 1; lng += dlng;
      points.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
    }
    return points;
  };

const updateNavigationStatus = (coords) => {
  const totalDistance = Math.sqrt(
    Math.pow(destination.latitude - location.latitude, 2) +
    Math.pow(destination.longitude - location.longitude, 2)
  );

  const remainingDistance = Math.sqrt(
    Math.pow(destination.latitude - coords.latitude, 2) +
    Math.pow(destination.longitude - coords.longitude, 2)
  );

  // Ensure progress is between 0 and 1
  const newProgress = Math.max(0, Math.min(1, 1 - remainingDistance / totalDistance));

  setProgress(newProgress);
};

  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FBF5FF" }}>
      <Header_without_currency_change />

      <View style={{ height: "65%" }}>
        <MapView ref={mapRef} style={styles.map}>
          {location && <Marker.Animated coordinate={animatedLocation} />}
          <Marker coordinate={destination} title="Destination" />
          {routeCoordinates.length > 0 && <Polyline coordinates={routeCoordinates} strokeWidth={3} strokeColor="blue" />}
        </MapView>
      </View>
      <View style={styles.container}>
      {/* Arrival Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>ARRIVING IN</Text>
        <Text style={styles.etaText}>10 mins</Text>

        {/* Progress Bar */}
        <Progress.Bar progress={progress} width={320} color="#9F4BDC" backgroundColor="#A64CDD" borderRadius={13} padding={3} style={styles.progressBar} />
      </View>

      {/* Courier Info Section */}
      <View style={styles.courierContainer}>
        <Image source={{ uri: "https://randomuser.me/api/portraits/men/10.jpg" }} style={styles.avatar} />
        <Text style={styles.courierText}>
          <Text style={{ fontWeight: "bold" }}>Hari</Text> is on the way to pick up your courier.
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL("tel:+919876543210")} style={styles.callButton}>
          <FontAwesome6 name="phone-volume" size={25} color="#9B4BDB" />
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
  infoContainer: {
    padding:8,
    width:"100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#555",
  },
  etaText: {
    fontSize: 25,
    fontWeight: "500",
    color: "#000",
    marginTop: 5,
  },
  progressBar: {
    marginTop: 15,
    alignSelf: "center",
  },
  courierContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5EFFD",
    padding: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  courierText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  callButton: {
    padding: 10,
    borderRadius:5,
    backgroundColor:"#FFFFFF",
  },
  
});
