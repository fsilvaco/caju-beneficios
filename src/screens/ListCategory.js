import React from "react"
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { ButtonGoBack } from "../components/Buttons";
import categories from "../../data"

export default function ListCategory({ route }) {
    const { TranferAmount } = route.params;
    return (
        <SafeAreaView>
            <View style={s.container}>
                <ButtonGoBack />
                <Text>Vou tranferir {TranferAmount}</Text>
                {categories.map(c => (
                    <TouchableOpacity onPress={() => console.warn(`Categoria ${c.title} clicada!`)}>
                        <Text>{c.title}</Text>
                    </TouchableOpacity>
                ))}
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