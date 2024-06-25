import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface AgeDisplayProps {
  age: number;
}

const AgeDisplay: React.FC<AgeDisplayProps> = ({ age }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.ageText}>Você tem {age} anos de idade.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10, // Um padding menor para este componente
  },
  ageText: {
    fontSize: 18,
    color: "#333",
  },
});

export default AgeDisplay;
