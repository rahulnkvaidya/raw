import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from "react-native";

import {
  Body,
  Title,
  Button,
  Container,
  Header,
  Content,
  List,
  Card,
  CardItem,
  Left,
  Right,
  Text,
  Icon,
  Grid, Col, Row, Thumbnail, Footer
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { AppLoading } from "expo";
import { RowItem } from "../components/RowItem";
import * as fetchHome from "../../store/actions/categoryAction";
import AdsBanner from "../components/AdmobBanner";
import * as fetchResult from "../../store/actions/resultAction";
import _ from 'lodash';

const HomeList = ({ props, navigation }) => {
  var screenWidth = (Dimensions.get('window').width) - 40;
  var screenHeight = Dimensions.get('window').height;
  const [data, detail] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHome.fetchlist(1, 10));
    dispatch(fetchResult.resetResult());

  }, [dispatch, fav]);
  var fav = useSelector((state) => state.category);
  // console.log(fav);
  useEffect(() => {
    detail(fav);
  }, [fav]);

  const renderItem = ({ item }) => {
    return (
      <RowItem
        name={item.name}
        onPress={() => {
          navigation.navigate('Subcategory', {
            params: {
              id: item._id
            }
          });
        }}
      />
    );
  };
  if (_.isEmpty(data)) {
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={() => navigation.toggleDrawer()} transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Quiz Pro</Title>
          </Body>
        </Header>
        <Content>
          <CardItem cardBody>
            <Image source={require('../assets/loading.gif')} style={{ height: 200, width: screenWidth, flex: 1 }} />
          </CardItem>
          <AppLoading />
        </Content>
      </Container>
    );
  } else {
    var cat = data[0].category
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={() => navigation.toggleDrawer()} transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Quiz Pro</Title>
          </Body>
        </Header>
        <AdsBanner />
        <FlatList
          data={cat}
          renderItem={renderItem}
          keyExtractor={({ _id }, index) => _id.toString()}
        // extraData={{ navigation: navigation }}
        />
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default HomeList;
