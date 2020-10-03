import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

import {
    Body,
    Title,
    Button,
    Container,
    Header,
    Content,
    List,
    ListItem,
    Card,
    CardItem,
    Left,
    Right,
    Text,
    Icon,
    Grid, Col, Row, Thumbnail, Footer
} from "native-base";

export function DrawerContent(props) {
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <DrawerContentScrollView {...props}>
                <Image source={require('../assets/quiz.jpg')} style={{ height: 150, width: 150, margin: 10, flex: 1 }} />
                <View style={styles.drawerContent}>
                    <List style={{ backgroundColor: '#F0FFFF' }}>
                        <ListItem onPress={() => { props.navigation.navigate('home') }} block light>
                            <Icon name='home' /><Text> Home</Text>
                        </ListItem>
                    </List>
                    <List style={{ backgroundColor: '#F0FFFF' }}>
                        <ListItem onPress={() => { props.navigation.navigate('board') }} block light>
                        <Image source={require('../App/assets/edu.png')} style={{ height: 20, width: 20}} /><Text> Education Board</Text>
                        </ListItem>
                    </List>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        backgroundColor: '#F0FFFF'
    },
});