import React from "react";
import { Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <Text style={s.hello}>
      Oi, <Text style={s.name}>Flávio</Text>
    </Text>
  );
};

const s = StyleSheet.create({
  hello: {
    fontSize: 28,
    marginBottom: 10,
  },
  name: {
    fontWeight: "bold",
  },
});

export default Header;
