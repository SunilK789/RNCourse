import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { IGoalInputProps } from "../../intefaces/types";

const GoalInput: React.FC<IGoalInputProps> = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleInputText = (enteredText) => {
    setInput(enteredText);
  };

  const handleSubmit = () => {
    onSubmit(input);
    setInput("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="add your goal.."
        onChangeText={handleInputText}
        value={input}
      />
      <Button title="Add Goal" onPress={handleSubmit} />
    </View>
  );
};

export default GoalInput;
