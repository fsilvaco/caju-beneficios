import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SvgUri } from "react-native-svg";

const Category = (props) => {
  const { name, value, background, icon } = props;

  const formatter = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <TouchableOpacity
      onPress={() => {
        console.log(name, "was pressed");
      }}
    >
      <View style={[s.card, { backgroundColor: background }]}>
        <SvgUri width="45" style={s.svg} uri={icon} />
        <Text style={s.money}>R$</Text>
        <Text style={s.value}>{formatter.format(value)}</Text>
        <Text style={s.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  card: {
    padding: 20,
    marginRight: 10,
    width: 130,
    borderRadius: 15,
  },

  money: {
    color: "#ccc",
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
    fontWeight: "800",
  },
});

export default Category;
