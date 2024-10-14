import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginPage from "./src/screens/loginPage";
import FilterPage from "./src/screens/filterPage";
import SignUpPage from "./src/screens/SignUpPage";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SignUpPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
