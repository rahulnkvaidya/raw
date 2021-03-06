import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#36B1F0",
    marginBottom: 1
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600"
  }
});

export const RowItem = ({ onPress = () => {}, name, color }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.row, { backgroundColor: color }]}>
    <Text><AntDesign name="rightcircleo" size={24} color="black" /> {name}</Text>
    </View>
  </TouchableOpacity>
);
