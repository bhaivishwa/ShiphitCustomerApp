import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; // For close button

const screenHeight = Dimensions.get("window").height;

const CountrySelector = () => {
  const [fromCountry, setFromCountry] = useState("Tamil Nadu");
  const [toCountry, setToCountry] = useState("UK");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedType, setSelectedType] = useState("from"); // Track which selector is active

  const countryOptions = [
    { key: "UK", label: "United Kingdom" },
    { key: "USA", label: "United States" },
    { key: "Austa", label: "Australia" },
    { key: "Germany", label: "Germany" },
    { key: "India", label: "India" },
  ];

  // Open Modal for From or To selection
  const openModal = (type) => {
    setSelectedType(type);
    setModalVisible(true);
  };

  // Select country
  const selectCountry = (country) => {
    if (selectedType === "from") setFromCountry(country.label);
    else setToCountry(country.label);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* From Country Selector */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ justifyContent: "space-between" }}>
          <Text style={styles.label}>From</Text>
          <TouchableOpacity
            style={styles.selector}
            // onPress={() => openModal("from")}
          >
            <Text style={styles.selectorText}>{fromCountry}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 60,
          }}
        >
          <Image
            source={require("../assets/transfer.png")}
            style={{ width: 22, top: 30, height: "20" }}
          />
        </View>

        <View>
          {/* To Country Selector */}
          <Text style={styles.label}>To Country</Text>
          <TouchableOpacity
            style={styles.selector}
            onPress={() => openModal("to")}
          >
            <Text style={styles.selectorText}>{toCountry}</Text>
            <AntDesign name="down" size={20} color="#60606C" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Sheet Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Country</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>

            {/* Country List */}
            <FlatList
              data={countryOptions}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.countryOption}
                  onPress={() => selectCountry(item)}
                >
                  <Text style={styles.countryText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  label: {
    fontSize: 16,
    fontWeight: "regular",
    color: "#60606C",
    marginBottom: 5,
  },
  selector: {
    height: 60,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    width: 140,
  },
  selectorText: {
    fontSize: 18,
    color: "#CCCCCC",
  },

  /** Modal Styling **/
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // ✅ Semi-transparent background
    justifyContent: "flex-end",
  },
  modalContainer: {
    width: "100%",
    height: screenHeight * 0.6, // ✅ 60% height
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 30,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  countryOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  countryText: {
    fontSize: 16,
  },
});

export default CountrySelector;
