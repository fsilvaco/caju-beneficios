import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Service from "../service/service"
import { Button, ButtonAction, ButtonGoBack } from "../components/Buttons"
import { useNavigation, useRoute } from "@react-navigation/core";

function Transfer() {
  const router = useRoute();
  const navigation = useNavigation()

  const { item } = router.params;

  console.log(`Screen:Tranfer: Categoria selecionada: [${item.title}]`)

  const [transferAmount, setTransferAmount] = useState(0)

  return (
    <SafeAreaView>
      <View style={s.container}>
        <ButtonGoBack />
        <Text style={s.title}>Quanto retirar deste benefícios?</Text>
        <TextInput onChangeText={text => setTransferAmount(text)} style={s.input} placeholder={Service.formatToBRL(item.value)} />
        <Button
          onPress={() => navigation.navigate("ListCategory", { TranferAmount: transferAmount, item: item })}
          text="Continuar" />
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
