import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Image,
  Vibration,
} from "react-native";
import MapView, { Marker, Polyline, AnimatedRegion } from "react-native-maps";
import * as Location from "expo-location";

const GOOGLE_MAPS_API_KEY = "AIzaSyB_sePfGC7khG1CVlY87cTc4qNUnFsMS5Q";

export default function RealTimeNavigation() {
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [loadingRoute, setLoadingRoute] = useState(false);
  const [distance, setDistance] = useState(null);
  const [eta, setETA] = useState(null);
  const [isReached, setIsReached] = useState(false);
  const mapRef = useRef(null);

  const animatedLocation = useRef(
    new AnimatedRegion({
      latitude: 0,
      longitude: 0,
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

      Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 2000,
          distanceInterval: 1,
        },
        (newLocation) => {
          setLocation(newLocation.coords);
          animateUserLocation(newLocation.coords);
          if (destination) updateDistance(newLocation.coords, destination);
        }
      );
    })();
  }, []);

  const animateUserLocation = (coords) => {
    animatedLocation
      .timing({
        latitude: coords.latitude,
        longitude: coords.longitude,
        duration: 1000,
        useNativeDriver: false,
      })
      .start();

    if (mapRef.current) {
      mapRef.current.animateCamera({
        center: { latitude: coords.latitude, longitude: coords.longitude },
        zoom: 17,
      });
    }
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(2);
  };

  const updateDistance = (coords, dest) => {
    const dist = calculateDistance(
      coords.latitude,
      coords.longitude,
      dest.latitude,
      dest.longitude
    );
    setDistance(dist);

    if (parseFloat(dist) < 1) {
      Vibration.vibrate();
      setIsReached(true);
    } else {
      setIsReached(false);
    }
  };

  const fetchRoute = async () => {
    if (!location || !destination) {
      Alert.alert("Error", "Select a destination first.");
      return;
    }
    setLoadingRoute(true);
    try {
      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${location.latitude},${location.longitude}&destination=${destination.latitude},${destination.longitude}&mode=driving&key=${GOOGLE_MAPS_API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.status !== "OK") {
        Alert.alert("API Error", `Error: ${data.status}`);
        setLoadingRoute(false);
        return;
      }

      if (data.routes.length) {
        const points = decodePolyline(data.routes[0].overview_polyline.points);
        setRouteCoordinates(points);
        setETA(data.routes[0].legs[0].duration.text);
      } else {
        Alert.alert("Error", "No route found!");
      }
    } catch (error) {
      Alert.alert("Error", `Could not fetch route. ${error.message}`);
    }
    setLoadingRoute(false);
  };

  const decodePolyline = (encoded) => {
    let points = [];
    let index = 0,
      lat = 0,
      lng = 0;

    while (index < encoded.length) {
      let b, shift = 0,
        result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlat = (result & 1 ? ~(result >> 1) : result >> 1);
      lat += dlat;

      shift = 0;
      result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlng = (result & 1 ? ~(result >> 1) : result >> 1);
      lng += dlng;

      points.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
    }
    return points;
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        onPress={(e) => setDestination(e.nativeEvent.coordinate)}
      >
        {location && (
          <Marker.Animated coordinate={animatedLocation}>
            <Image
              source={require("./assets/bike.png")}
              style={{ width: 30, height: 30 }}
            />
          </Marker.Animated>
        )}
        {destination && <Marker coordinate={destination} title="Target Destination" />}
        {routeCoordinates.length > 0 && (
          <Polyline coordinates={routeCoordinates} strokeWidth={4} strokeColor="blue" />
        )}
      </MapView>

      <View style={styles.controlsContainer}>
        <Text style={styles.infoText}>
          {distance ? `Distance: ${distance} km` : "Tap on the map to select a destination"}
        </Text>
        <Text style={styles.infoText}>{eta ? `Timings: ${eta}` : ""}</Text>

        <TouchableOpacity
          onPress={fetchRoute}
          style={[styles.navButton, isReached ? styles.reachedButton : null]}
          disabled={loadingRoute || isReached || !destination}
        >
          {loadingRoute ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>
              {isReached ? "Reached" : "NAVIGATION"}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2F5F9" },
  map: { width: "100%", height: "100%" },
  controlsContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    elevation: 6,
    alignItems: "center",
  },
  infoText: { fontSize: 16, fontWeight: "bold", marginBottom: 6, color: "#2C3E50" },
  navButton: { backgroundColor: "#9F4BDC", paddingVertical: 12, borderRadius: 12, width: "85%", alignItems: "center" },
  reachedButton: { backgroundColor: "#22C55E" },
  buttonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});
