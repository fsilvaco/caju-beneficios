import React from "react"
import { StyleSheet, SafeAreaView, View, Text, Button, Alert } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { ButtonGoBack } from "../components/Buttons"
import Title from "../components/Title"
import Service from "../service/service";
import { useCategories } from "../context/Categories"

import DATA from "../../data"

export default function Confirmation({ route, navigation }) {
    const { setCategory } = useCategories()
    const { category, item, tranferAmount } = route.params;
    console.log(`Screen:Confirmation: Categoria que irá receber [${category.title}]`)

    const subtract = (n1, n2) => {
        let total = parseInt(n1) - parseInt(n2)
        return total
    }

    const sum = (n1, n2) => {
        let total = parseInt(n1) + parseInt(n2)
        return total
    }

    const confirmTranfer = () => {
        for (var i = 0; i < DATA.length; i++) {
            if (DATA[i].id === item.id) {
                DATA[i].value = subtract(item.value, tranferAmount)
                break
            }
        }
        for (var i = 0; i < DATA.length; i++) {
            if (DATA[i].id === category.id) {
                DATA[i].value = sum(category.value, tranferAmount)
                break
            }
        }
        setCategory(DATA)
        console.log(`Screen:Confirmation:confirmTranfer: De [${item.title}] para [${category.title}] valor (R$ ${tranferAmount})`)

        Alert.alert(
            "Transação confirmada!",
            "Pronto já identificamos a sua transação. Aguarde alguns instantes e verifique os seus saldos.",
            [
                { text: "OK", onPress: () => { navigation.navigate('Home') } }
            ]
        );
    }

    return (
        <SafeAreaView>
            <View style={s.container}>
                <ButtonGoBack />
                <Title title="Confirme a transação" />
                <ScrollView>
                    <View style={s.card}>
                        <View>
                            <Text>Retirar de:</Text>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 18 }}>- R$ {Service.formatToBRL(tranferAmount)}</Text>
                        </View>
                    </View>
                    <View style={s.card}>
                        <View>
                            <Text>Depositar em:</Text>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{category.title}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 18 }}>+ R$ {Service.formatToBRL(tranferAmount)}</Text>
                        </View>
                    </View>
                    <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "bold" }}>Saldos</Text>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: "#eee", paddingBottom: 20 }}>
                        <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "bold" }}>{item.title}</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                            <Text>Saldo atualizado</Text>
                            <Text>R$ {subtract(item.value, tranferAmount)}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                            <Text>Saldo anterior</Text>
                            <Text>R$ {Service.formatToBRL(item.value)}</Text>
                        </View>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: "#eee", paddingBottom: 20 }}>
                        <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "bold" }}>{category.title}</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                            <Text>Saldo atualizado</Text>
                            <Text>R$ {sum(category.value, tranferAmount)}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                            <Text>Saldo anterior</Text>
                            <Text>R$ {Service.formatToBRL(category.value)}</Text>
                        </View>
                    </View>
                </ScrollView>
                <Button onPress={confirmTranfer} title="Confirmar"></Button>
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