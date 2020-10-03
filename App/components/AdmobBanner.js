import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { AdMobBanner } from "expo-ads-admob";

export default class Ads extends Component {
  render() {
    return (
      <View style={styles.hs}>
        <AdMobBanner
          bannerSize="banner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hs: {
    marginTop: 5,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});
