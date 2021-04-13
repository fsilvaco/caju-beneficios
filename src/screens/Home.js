import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Button, View } from "react-native";
import Category from "../components/Category";
import Header from "../components/Header";
import DATA from "../../data";

export default function Home({ navigation }) {
  const renderItem = ({ item }) => (
    <Category
      item={item}
    />
  );

  return (
    <SafeAreaView>
      <View style={[styles.container, styles.resetPadding]}>
        <Header />
        <FlatList horizontal data={DATA} renderItem={renderItem} />
        <View />
        <View style={styles.container}>
          <StatusBar style="auto" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 28,
    paddingTop: 35,
  },
  resetPadding: {
    paddingRight: 0,
  },
});
