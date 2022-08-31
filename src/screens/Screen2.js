import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

export default function Screen2() {
  const [counter, setCounter] = useState(0);
  console.log(counter);
  return (
    <View style={styles.container}>
      <Text>Screen2</Text>
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
