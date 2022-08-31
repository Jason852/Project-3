import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";

const Stack = createStackNavigator();

export default function MainNav() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Screen1} />
      <Stack.Screen name="SecScreen" component={Screen2} />
    </Stack.Navigator>
  );
}
