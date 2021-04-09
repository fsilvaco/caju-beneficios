import React from "react";
import { Button, SafeAreaView, Text, View, StyleSheet } from "react-native";

function Transfer({ navigation, route }) {
  const { name } = route.params;

  return (
    <SafeAreaView>
      <View style={s.container}>
        <Button onPress={() => navigation.goBack()} title="Voltar" />
        <Text>Você deseja transferir da categoria {name}</Text>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingTop: 35,
  },
});

export default Transfer;
