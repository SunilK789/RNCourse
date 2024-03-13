import { View, TextInput, Button, Modal, Image } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { IGoalInputProps } from "../../intefaces/types";
import { GoalImage } from "../../Utils/Images";

const GoalInput: React.FC<IGoalInputProps> = ({
  onAddGoal,
  modalVisible,
  onCancel,
}) => {
  const [input, setInput] = useState<string>("");

  const handleInputText = (enteredText: string) => {
    setInput(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(input);
    setInput("");
  };

  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={GoalImage} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="add your goal.."
          onChangeText={handleInputText}
          value={input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
