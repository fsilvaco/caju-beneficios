import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = (props) => {
    return (
        <TouchableOpacity style={s.btn}>
            <Text style={s.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const s = StyleSheet.create({
    btn: {
        backgroundColor: "#6560f8",
        alignItems: "center",
        paddingVertical: 18,
        borderRadius: 25
    },

    text: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    }

});

export default Button