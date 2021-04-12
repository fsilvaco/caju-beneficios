import React from "react"
import { StyleSheet, SafeAreaView, View, Text } from "react-native"
import { ButtonGoBack } from "../components/Buttons"
import Title from "../components/Title"

export default function Confirmation() {
    return (
        <SafeAreaView>
            <View style={s.container}>
                <ButtonGoBack />
                <Title title="Confirme a transação" />
            </View>
        </SafeAreaView>
    )
}

const s = StyleSheet.create({
    container: {
        paddingHorizontal: 28,
        paddingTop: 35,
    },
})