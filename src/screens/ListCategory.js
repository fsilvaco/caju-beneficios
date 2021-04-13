import React from "react"
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { ButtonGoBack } from "../components/Buttons";
import { SvgUri } from "react-native-svg";
import categories from "../../data"
import Service from "../service/service";

export default function ListCategory({ route, navigation }) {
    const { TranferAmount } = route.params;

    return (
        <SafeAreaView>
            <View style={s.container}>
                <ButtonGoBack />
                <Text style={s.title}>Selecione a categoria para transferir o saldo</Text>
                <Text style={{ fontSize: 16, marginBottom: 10 }}>Quero transferir R${Service.formatToBRL(TranferAmount)} para...</Text>
                <ScrollView>
                    {categories.map(c => (
                        <TouchableOpacity onPress={() => navigation.navigate("Confirmation", { category: c })}>
                            <View style={s.card}>
                                <View style={[s.svg, { backgroundColor: c.color }]}>
                                    <SvgUri width="30" uri={c.icon} />
                                </View>
                                <View>
                                    <Text style={s.titleCategory}>{c.title}</Text>
                                    <Text style={s.value}>R$ {Service.formatToBRL(c.value)}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
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
        paddingVertical: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    svg: {
        backgroundColor: "green",
        marginRight: 10,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    value: {
        color: "#666"
    },
    titleCategory: {
        fontSize: 17,
        fontWeight: "500"
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15
    },
})