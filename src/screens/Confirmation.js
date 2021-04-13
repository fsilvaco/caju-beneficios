import React from "react"
import { StyleSheet, SafeAreaView, View, Text } from "react-native"
import { ButtonGoBack } from "../components/Buttons"
import Title from "../components/Title"

export default function Confirmation({ route }) {
    const { category } = route.params;

    return (
        <SafeAreaView>
            <View style={s.container}>
                <ButtonGoBack />
                <Title title="Confirme a transação" />
                <View style={s.card}>
                    <View>
                        <Text>Retirar de:</Text>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>xxx</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 18 }}>- R$ xx,xx</Text>
                    </View>
                </View>
                <View style={s.card}>
                    <View>
                        <Text>Depositar em:</Text>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{category.title}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 18 }}>+ R$ xx,xx</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const s = StyleSheet.create({
    container: {
        paddingHorizontal: 28,
        paddingTop: 35,
    },

    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        paddingBottom: 10,
        marginTop: 10
    },

})