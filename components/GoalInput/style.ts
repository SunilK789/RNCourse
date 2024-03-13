import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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

export default styles;