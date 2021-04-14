import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Service from "../service/service"
import { ButtonAction, ButtonGoBack } from "../components/Buttons"

function Transfer({ route }) {
  const { item } = route.params;
  console.log(`Screen:Tranfer: Categoria selecionada: [${item.title}]`)

  const [transferAmount, setTransferAmount] = useState(0)

  return (
    <SafeAreaView>
      <View style={s.container}>
        <ButtonGoBack />
        <Text style={s.title}>Quanto retirar deste benefícios?</Text>
        <TextInput onChangeText={text => setTransferAmount(text)} style={s.input} placeholder={Service.formatToBRL(item.value)} />
        <ButtonAction item={item} TranferAmount={transferAmount} text="Continuar" />
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
