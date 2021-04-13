import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SvgUri } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import Service from "../service/service"

const Category = (props) => {
  const { item } = props;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Transfer", { item: item });
      }}
    >
      <View style={[s.card, { backgroundColor: item.color }]}>
        <SvgUri width="45" style={s.svg} uri={item.icon} />
        <Text style={s.money}>R$</Text>
        <Text style={s.value}>{Service.formatToBRL(item.value)}</Text>
        <Text style={s.name}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  card: {
    padding: 20,
    marginRight: 10,
    width: 140,
    borderRadius: 15,
  },

  money: {
    color: "#eee",
    marginTop: 30,
  },
  value: {
    color: "#fff",
    marginBottom: 30,
    fontSize: 19,
    fontWeight: "800",
  },
  name: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Category;
