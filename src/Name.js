import React, { useEffect, useState } from "react"
import { Button, Text, TextInput, View, StyleSheet, TouchableOpacity, SafeAreaView, Linking} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Name({ navigation }) {

    return(
        <View style={styles.containerPrincipal}>
            <View style={styles.topBar}>
                <Text style={styles.title}>Buscador de Cep</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.textStyle}>BuscaCep é o seu app buscador de Cep. Com apenas o Cep você pode obter o logradouro, cidade, Estado e Bairro</Text>
                <Text style={styles.textStyle}>App feito para a diciplina de Desenvolvimento para dispositivos móveis</Text>
                <Text style={styles.textStyle}>
                Visite o{' '}
                <Text
                    style={styles.hyperlinkStyle}
                    onPress={() => {
                    Linking.openURL('https://github.com/hannilcarvalho/BuscaCep');
                    }}>
                    Diretorio no Github
                </Text>
                </Text>
                <Text style={styles.textStyle}>Desenvolvido por Hanniel Luiz e Luiz Fernando</Text>
            </View>
        </View>
        )}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: "row",
        height: 90,
        backgroundColor: "#018786",
        justifyContent: "center",
      },
      title: {
        color: "#FFFFFF",
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center",
        margin: 25,
      },
    containerPrincipal: {
        flex: 1,
        flexDirection: "column",
          color: "#018786",
          backgroundColor: "#018786"
  
      },
      container: {
        flex: 1,
        margin: 40,
        alignItems: 'center',
      },
      textStyle: {
        color: "#FFFFFF",
        fontSize: 20,
        margin: 10,
      },
      hyperlinkStyle: {
        color: 'blue',
      },
    caixaTexto: {
        borderColor: "#000000",
        borderWidth: 2,
        padding: 15,
        fontSize: 18,
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 20,
      },
      Botao: {
        backgroundColor: "#E0FFFF",
        height: 70,
        margin: 30,
        borderRadius: 10,
        padding: 20
    },
    textoBotaoPesquisa: {
        color: "#018786",
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center"
    },
})