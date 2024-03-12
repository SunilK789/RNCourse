import { Text, StyleSheet, View } from "react-native";
import React from "react";

export default GoalItem = ({ goal }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{goal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
