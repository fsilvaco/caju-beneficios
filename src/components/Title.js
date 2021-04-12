import React from "react"
import { StyleSheet, Text } from "react-native"

const Title = (props) => {
    return (
        <Text style={s.title}>{props.title}</Text>
    )
}

const s = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15
    },
})

export default Title