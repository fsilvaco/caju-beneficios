import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Category from "./src/components/Category";
import Header from "./src/components/Header";
import DATA from "./data";

export default function App() {
  const renderItem = ({ item }) => (
    <Category
      name={item.title}
      value="0"
      background={item.color}
      icon={item.icon}
    />
  );

  return (
    <SafeAreaView>
      <View style={[styles.container, styles.resetPadding]}>
        <Header />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={DATA}
          renderItem={renderItem}
        />
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
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  resetPadding: {
    paddingRight: 0,
  },
});
