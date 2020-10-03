import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {DrawerContent} from "./DrawerContent";
import { MainStackNavigator } from "./StackNavigatior";
import Home from "../App/screens/Home";
import SubCategory from "../App/screens/SubCategory";
import quizname from "../App/screens/quizname";
import result from "../App/screens/Result";
import question from "../App/screens/question";
import board from "../App/screens/School/board";
import Class from "../App/screens/School/class";
import Subject from "../App/screens/School/subject";
import Chapter from "../App/screens/School/chapter";
import SchoolDetail from "../App/screens/School/schooldetail";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
    <Drawer.Navigator initialRouteName="home"  drawerContent={props => <DrawerContent { ...props}/> }>
           
            <Drawer.Screen name="home" component={Home} />
            <Drawer.Screen name="Subcategory" options={{ drawerLabel: "Sub Category" }} component={SubCategory} />
            <Drawer.Screen name="quizname" component={quizname} />
            <Drawer.Screen name="question" component={question} />
            <Drawer.Screen name="Result" component={result} />
            <Drawer.Screen name="board" component={board} />
            <Drawer.Screen name="Class" component={Class} />
            <Drawer.Screen name="Subject" component={Subject} />
            <Drawer.Screen name="Chapter" component={Chapter} />
            <Drawer.Screen name="SchoolDetail" component={SchoolDetail} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;