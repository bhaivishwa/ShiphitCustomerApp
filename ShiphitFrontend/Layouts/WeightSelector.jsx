import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Animated,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";

const weightOptions = ["1", "2", "3", "4", "5"];

export default function WeightSelector({ selectedWeight, setSelectedWeight }) {
  console.log(selectedWeight);
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(600)).current;

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: 600,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  return (
    <View style={styles.container}>
      {/* ✅ Clickable Row */}
      <TouchableOpacity
        style={styles.selectBox}
        onPress={openModal}
        activeOpacity={0.8}
      >
        <TouchableWithoutFeedback>
          <TextInput
            editable={false}
            value={selectedWeight}
            style={styles.input}
            keyboardType="numeric"
          />
        </TouchableWithoutFeedback>
        <MaskedView maskElement={<Text style={styles.text}>Kg</Text>}>
          <LinearGradient
            colors={["#6246D2", "#CE4FE3"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={[styles.text, { opacity: 0 }]}>Kg</Text>
          </LinearGradient>
        </MaskedView>
      </TouchableOpacity>

      {/* ✅ Bottom Sheet Modal */}
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <TouchableOpacity style={styles.overlay}>
          <Animated.View
            style={[
              styles.modalContainer,
              { transform: [{ translateY: slideAnim }] },
            ]}
          >
            <Text style={styles.modalTitle}>Choose Weight</Text>
            <FlatList
              data={weightOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    setSelectedWeight(item);
                    closeModal();
                  }}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: { flex: 1, justifyContent: "center", alignItems: "center" },
  selectBox: {
    flexDirection: "row",
    width: "60%",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#F6F3FC",
    justifyContent: "space-between",
  },
  input: {
    color: "black",
    fontWeight: "600",
    fontSize: 20,
    width: "82%",
    borderRadius: 6,
  },
  text: { fontSize: 20, fontWeight: "bold" },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    height: "60%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  option: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  optionText: { fontSize: 16 },
});
