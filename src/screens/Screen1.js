import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

export default function Screen1({ navigation }) {
  const [counter, setCounter] = useState(0);
  console.log(counter);
  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Button
        title="Go to Second Page"
        onPress={() => navigation.navigate("SecScreen")}
      ></Button>
      <Button
        title="increment"
        onPress={() => setCounter(counter + 1)}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
