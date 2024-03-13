import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { IGoalProps } from "./intefaces/types";

export default function App() {
  const [goals, setGoals] = useState<IGoalProps[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addGoalHandler = (goal: string) => {
    console.log("input===>", goal);
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goal, id: Math.random().toString() },
    ]);

    setModalIsVisible(false);
  };
  const deleteGoalHandler = (goalId: string) => {
    console.log("DELETE goalId===>", goalId);
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const showHideModal = () => {
    setModalIsVisible(!modalIsVisible);
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add Goal" onPress={showHideModal} />
      {modalIsVisible && <GoalInput modalVisible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={showHideModal}/>}
      <View style={styles.goalContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem goal={itemData.item} onDeleteGoal={deleteGoalHandler} />
            );
          }}
          keyExtractor={(item) => {
            return item.id;
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
