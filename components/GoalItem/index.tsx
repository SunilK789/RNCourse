import { Text, StyleSheet, View } from "react-native";
import React from "react";
import styles from "./style";
import { IGoalItemProps } from "../../intefaces/types";

const GoalItem:React.FC<IGoalItemProps> = ({ goal }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{goal}</Text>
    </View>
  );
};

export default GoalItem;