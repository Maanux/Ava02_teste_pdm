import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>Olá, {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Greeting;
