import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    borderBottomWidth: 1,
    alignItems: "center",
    marginBottom: 24,
    borderBlockColor: "#cccccc",
    padding: 16
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    borderColor: "#ccc",
    padding: 8,
  },
  goalContainer: {
    flex: 4,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: '30%',
    marginHorizontal: 8
  }
});

export default styles;