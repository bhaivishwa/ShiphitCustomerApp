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
import MapView, { Marker, Polyline, AnimatedRegion } from "react-native-maps";
import * as Location from "expo-location";

const GOOGLE_MAPS_API_KEY = "AIzaSyB_sePfGC7khG1CVlY87cTc4qNUnFsMS5Q"; // Replace with your API Key

export default function RealTimeNavigation() {
  const [location, setLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [loadingRoute, setLoadingRoute] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [buttonColor, setButtonColor] = useState("#007AFF");
  const [hasReached, setHasReached] = useState(false);
  const [distance, setDistance] = useState(0);
  const [eta, setETA] = useState(0); // Estimated time in minutes

  const mapRef = useRef(null);
  const locationSubscription = useRef(null);

  const destination = {
    latitude: 12.993075791296372,
    longitude: 80.21781445092202,
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

      locationSubscription.current = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 2000,
          distanceInterval: 1,
        },
        (newLocation) => {
          setLocation(newLocation.coords);
          animateUserLocation(newLocation.coords);
          if (isNavigating) updateNavigationStatus(newLocation.coords);
        }
      );
    })();

    return () => locationSubscription.current?.remove();
  }, [isNavigating]);

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

  const fetchRoute = async (origin) => {
    if (!origin) {
      Alert.alert("Error", "Current location not available.");
      return;
    }
    setLoadingRoute(true);
    try {
      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&mode=driving&key=${GOOGLE_MAPS_API_KEY}`;
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
      let shift = 0,
        result = 0;
      let b;
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

  const getDistance = (coord1, coord2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371e3;
    const lat1 = toRad(coord1.latitude);
    const lat2 = toRad(coord2.latitude);
    const deltaLat = toRad(coord2.latitude - coord1.latitude);
    const deltaLon = toRad(coord2.longitude - coord1.longitude);

    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(lat1) *
        Math.cos(lat2) *
        Math.sin(deltaLon / 2) *
        Math.sin(deltaLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c / 1000; // Convert meters to km
  };

  const updateNavigationStatus = (coords) => {
    const fastThreshold = 0.00008;

    const distanceKm = getDistance(coords, destination);
    setDistance(distanceKm.toFixed(2)); 

    const avgSpeed = 40; // Average speed in km/h
    const timeRemaining = (distanceKm / avgSpeed) * 60; 
    setETA(timeRemaining.toFixed(1)); 

    if (distanceKm < 0.05) {
      if (!hasReached) {
        setHasReached(true);
        setIsNavigating(false);
        setButtonColor("#32CD32");
        Alert.alert("🎯 Destination Reached!", "You have arrived at your destination.");
      }
    } else if (!hasReached) {
      setButtonColor("#9F4BDC");
    }
  };
  const fetchFastestRoute = async (origin) => {
    if (!origin) {
      Alert.alert("Error", "Current location not available.");
      return;
    }
    setLoadingRoute(true);
    try {
      const url = `https://maps.googleapis.com/maps/api/directions/json?
        origin=${origin.latitude},${origin.longitude}
        &destination=${destination.latitude},${destination.longitude}
        &mode=driving
        &alternatives=true
        &departure_time=now
        &traffic_model=best_guess
        &key=${GOOGLE_MAPS_API_KEY}`.replace(/\s+/g, ""); 
  
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.status !== "OK") {
        Alert.alert("API Error", `Error: ${data.status}`);
        setLoadingRoute(false);
        return;
      }
  
      let shortestRoute = data.routes.reduce((prev, curr) =>
        prev.legs[0].duration.value < curr.legs[0].duration.value ? prev : curr
      );
  
      const points = decodePolyline(shortestRoute.overview_polyline.points);
      setRouteCoordinates(points);
      
      const estimatedTime = shortestRoute.legs[0].duration.text;
      const estimatedDistance = shortestRoute.legs[0].distance.text;
  
      setDistance(estimatedDistance);
      setETA(estimatedTime);
      
    } catch (error) {
      Alert.alert("Error", `Could not fetch route. ${error.message}`);
    }
    setLoadingRoute(false);
  };
  
  

  return (
    <View style={styles.container}>
      <MapView ref={mapRef} style={styles.map}>
        {location && (
          <Marker.Animated coordinate={animatedLocation}>
            <Image source={require("./assets/bike.png")} style={{ width: 30, height: 30 }} />
          </Marker.Animated>
        )}
        <Marker coordinate={destination} title="Destination" />
        {routeCoordinates.length > 0 && <Polyline coordinates={routeCoordinates} strokeWidth={3} strokeColor="blue" />}
      </MapView>

      <View style={styles.controlsContainer}>
      <Text style={styles.infoText}>Distance: {distance} km | Timings: {eta} min</Text>



        <TouchableOpacity
          onPress={() => {
            fetchRoute(location);
            setIsNavigating(true);
          }}
          style={[styles.navButton, { backgroundColor: buttonColor }]}
          disabled={hasReached}
        >
          {loadingRoute ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.buttonText}>{hasReached ? "Reached" : "NAVIGATION"}</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#9F4BDC" },
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
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  infoText: { fontSize: 16, fontWeight: "bold", marginBottom: 6, color: "#2C3E50" },
  navButton: { 
    backgroundColor: "#9F4BDC", 
    paddingVertical: 12, 
    borderRadius: 12, 
    width: "85%", 
    alignItems: "center",
  },

  reachedButton: { backgroundColor: "#9F4BDC" },
  buttonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});


