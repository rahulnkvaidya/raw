import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import question from "../App/screens/question";
// import News from '../screens/News';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="question" component={question} />
    </Stack.Navigator>
  );
}

export {MainStackNavigator} ;