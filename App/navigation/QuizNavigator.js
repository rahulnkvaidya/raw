import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from "react-native";
import { createAppContainer, SafeAreaView } from "react-navigation";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
// import QuizIndex from "../App/screens/QuizIndex";
 import Quiz from "../App/screens/Quiz";
 import Result from "../App/screens/Result";
import Home from "../App/screens/Home";

// import Quizzes from "../App/screens/Quiz";


SafeAreaView.setStatusBarHeight(0);

const UnloggedDrawer = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        drawerLabel: "Home",
        drawerIcon: () => <FontAwesome name="home" size={20} color="green" />
      }
    },
    // QuizIndex: {
    //   screen: QuizIndex,
    //   navigationOptions: {
    //     drawerLabel: "Category",
    //     drawerIcon: () => <FontAwesome name="home" size={20} color="green" />
    //   }
    // },
    // Quizzes: {
    //   screen: Quizzes,
    //   navigationOptions: {
    //     drawerLabel: "Basic Computer",
    //     drawerIcon: () => <FontAwesome name="home" size={20} color="green" />
    //   }
    // }
  },
  {
    contentComponent: (props) => (
      <View>
        <View
          style={{
            height: 180,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black"
          }}
        >
          <Image
            style={{ width: 150, height: 150, justifyContent: "center" }}
            source={require("../assets/icon.png")}
          />
        </View>

        <DrawerItems {...props} />

        <Text
          style={{
            padding: 20,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          www.employmentnewsinindia.com
        </Text>
      </View>
    )
  },
  {
    drawerWidth: 250
  }
);

const MainStack = createStackNavigator(
  {
    UnloggedDrawer: { screen: UnloggedDrawer },
    Quiz: Quiz,
    Result: Result
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(MainStack);
