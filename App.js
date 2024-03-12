import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [input, setInput] = useState("");
  const [goals, setGoals] = useState([]);
  const handleInputText = (enteredText) => {
    setInput(enteredText);
  };

  const handleSubmit = () => {
    console.log("input===>", input);
    setGoals((currentGoals) => [...currentGoals, input]);
    setInput("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="add your goal.."
          onChangeText={handleInputText}
          value={input}
        />
        <Button title="Add Goal" onPress={handleSubmit} />
      </View>
      <View style={styles.goalContainer}>
        <ScrollView>
          {goals.map((goal, index) => (
            <GoalItem goal={goal} key={index} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 24,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    alignItems: "center",
    marginBottom: 24,
    borderBlockColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    width: "70%",
    borderColor: "#ccc",
    marginRight: 8,
    padding: 8,
  },
  goalContainer: {
    flex: 4,
  },
  
});
