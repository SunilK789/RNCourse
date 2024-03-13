import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  
   const handleSubmit = (input: string) => {
    console.log("input===>", input);
    setGoals((currentGoals) => [...currentGoals, { text: input, key: Math.random().toString() }]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onSubmit={handleSubmit} />
      <View style={styles.goalContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem goal={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.key
          }}
        />
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
