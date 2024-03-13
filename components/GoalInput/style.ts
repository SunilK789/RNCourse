import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    padding: 8,
    color: '#120438',
    borderRadius: 5
  },
  goalContainer: {
    flex: 4,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
});

export default styles;