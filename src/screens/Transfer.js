import React from "react";
import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Service from "../service/service"
import { ButtonAction, ButtonGoBack } from "../components/Buttons"

function Transfer({ route }) {
  const { value } = route.params;

  return (
    <SafeAreaView>
      <View style={s.container}>
        <ButtonGoBack />
        <Text style={s.title}>Quanto retirar deste benefícios?</Text>
        <TextInput style={s.input} value={Service.formatToBRL(value)} />
        <ButtonAction text="Continuar" />
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingTop: 35,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  input: {
    marginVertical: 40,
    fontSize: 24,
  }
});

export default Transfer;
