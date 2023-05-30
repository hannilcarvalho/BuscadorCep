import React, {useState} from "react"
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from "react-native"
import { FontAwesome5 } from 'react-native-vector-icons'

export default function Home({ navigation }) {
    return(
    <View style={styles.containerPrincipal}>

<View style={styles.card}>
            <Image
            style={styles.logo}
            source={require('../assets/casa.png')}
            />
        </View>


        <View style={styles.topBar}>
      <Text style={styles.title}>Buscador de Cep</Text>
        </View>

        

        <TouchableOpacity style={styles.Botao} onPress={ () => navigation.navigate('Pesquisa') }>
        <Text style={styles.textoBotaoPesquisa}>Pesquisar</Text>
        </TouchableOpacity>

    </View>
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
      flex: 1,
      flexDirection: "column",
        color: "#018786",
        backgroundColor: "#018786"

    },
    topBar: {
      flexDirection: "row",
      height: 90,
      backgroundColor: "#018786",
      justifyContent: "center"
    },
    title: {
        color: "#FFFFFF",
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center",
        margin: 20,
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
    card: {
        backgroundColor: "#018786",
        height: 550,
        margin: 30,
        borderRadius: 10,
        padding: 20,
        paddingTop: 40,
        alignSelf: "center"
    },
    textoCard: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center"
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: "#E0FFFF"
    },

  
});