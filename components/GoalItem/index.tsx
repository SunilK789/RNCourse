import { Text, View, Pressable } from "react-native";
import React from "react";
import styles from "./style";
import { IGoalItemProps } from "../../intefaces/types";

const GoalItem: React.FC<IGoalItemProps> = ({ goal, onDeleteGoal }) => {
  return (
    <Pressable
      android_ripple={{ color: "blue" }}
      onPress={onDeleteGoal.bind(this, goal.id)}
      // style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{goal.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;
