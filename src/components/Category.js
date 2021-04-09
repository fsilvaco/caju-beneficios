import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SvgUri } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

const Category = (props) => {
  const { name, value, background, icon } = props;

  const navigation = useNavigation();

  const formatToBRL = (number) => {
    let value = new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);

    return value;
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Transfer", { name: name });
      }}
    >
      <View style={[s.card, { backgroundColor: background }]}>
        <SvgUri width="45" style={s.svg} uri={icon} />
        <Text style={s.money}>R$</Text>
        <Text style={s.value}>{formatToBRL(value)}</Text>
        <Text style={s.name}>{name}</Text>
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
