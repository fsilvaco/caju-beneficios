import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, RefreshControl, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Category from "../components/Category";
import Header from "../components/Header";
import { useCategories } from "../context/Categories"


export default function Home() {

  const navigation = useNavigation()

  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = React.useCallback(() => {
    console.log("Screen:Home:onRefresh: Recebendo novo saldo...")
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    console.log("Screen:Home:onRefresh: Saldo atualizado com sucesso!")
  }, []);

  const { category } = useCategories()

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      onRefresh()
    });
    return unsubscribe;
  }, [navigation]);

  const renderItem = ({ item }) => (
    <Category
      item={item}
      onPress={() => {
        navigation.navigate("Transfer", { item: item });
      }}

    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView refreshControl={<RefreshControl
        refreshing={refreshing}
      />} >
        <View style={[styles.container, styles.resetPadding]}>
          <Header />
          <FlatList key={category.id} horizontal data={category} renderItem={renderItem} />
          <View />
          <View style={styles.container}>
            <StatusBar style="auto" />
          </View>
        </View>
      </ScrollView>
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
