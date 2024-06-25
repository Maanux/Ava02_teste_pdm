import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Greeting from "./Greeting";
import AgeDisplay from "./AgeDisplay";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Testes para PDM!</Text>
      <Greeting name="Kani" />
      <AgeDisplay age={22} />
      <StatusBar style="auto" />
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
