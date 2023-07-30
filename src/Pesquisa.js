import React, {useEffect, useState} from "react"
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import Api from './services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Feather} from 'react-native-vector-icons'


export default function Pesquisa ({navigation}){

  const [cep, setCep] = useState("")
  const [logradouro, setLogradouro] = useState("")
  const [bairro, setBairro] = useState("")
  const [localidade, setLocalidade] = useState("")
  const [uf, setUF] = useState("")

  useEffect(function() {
    // (async () => {})()
    (async function() {
     const cepAntigo = await AsyncStorage.getItem('@cep')
     if(cepAntigo)
     setCep(cepAntigo)
    }) ()

  }, [])

 useEffect(function() {
     (async () => {
    await AsyncStorage.setItem('@cep', cep.toString())
 })()
 }, [cep])



async function buscarCep() {
  if(cep == "") {
    Alert.alert("Favor digitar um Cep no campo")
    setCep("")
  }

  try{
    const response = await Api.get(`/${cep}/json/`)
    setLogradouro(response.data.logradouro)
    setBairro(response.data.bairro)
    setLocalidade(response.data.localidade)
    setUF(response.data.uf)
  }catch(error){
    if(cep == "") {
      Alert.alert("Favor digitar um Cep no campo")
      setCep("") }
      else
    Alert.alert("Cep inválido")
    setCep("")
  }

}


  return(
    <View style={styles.containerPrincipal}>
      
    <View style={styles.topBar}>
      <Text style={styles.title}>Buscador de Cep</Text>
    </View>

    <View style={styles.containerCep}>
      <TextInput
        placeholderTextColor="#FFFFFF"
       keyboardType="numeric"
       style={{
          borderColor: "#E0FFFF", borderWidth: 2, width: 200,
          fontSize: 18, marginTop: 30, marginEnd: 20, borderRadius: 10, padding: 15

        }}
       value={cep}
       onChangeText={(texto) => setCep(texto)}
       placeholder="Cep"
      />
      <TouchableOpacity style={styles.botaoBuscar} onPress={buscarCep}>
        <Text style={styles.textoBotaoBuscar}>Buscar</Text>
      </TouchableOpacity>

    </View>

          <TextInput
            placeholderTextColor="#FFFFFF"
            style={styles.caixaTexto}
            value={logradouro}
            onChangeText={(texto) => setLogradouro(texto)}
            placeholder="Logradouro"/>

          <TextInput
            placeholderTextColor="#FFFFFF"
            style={style=styles.caixaTexto}
            value={bairro}
            onChangeText={(texto) => setBairro(texto)}
            placeholder="Bairro"/>

          <TextInput
            placeholderTextColor="#FFFFFF"
            style={style=styles.caixaTexto}
            value={localidade}
            onChangeText={(texto) => setLocalidade(texto)}
            placeholder="Cidade"/>

          <TextInput
            placeholderTextColor="#FFFFFF"
            style={{
              borderColor: "#E0FFFF", borderWidth: 2, width: 100,
              fontSize: 18, marginTop: 10, marginEnd: 20, borderRadius: 10, padding: 15, marginHorizontal: 20
            }}
          value={uf}
          onChangeText={(texto) => setUF(texto)}
          placeholder="Estado"/>



      <TouchableOpacity style={{
        backgroundColor: "#E0FFFF",
        width: 70,
        height: 70,
        margin: 20,
        marginTop: 230,
        borderRadius: 100,
        padding: 20,

        }} 
        onPress={ () => navigation.navigate('Nome') }>
        <Feather name="info" size={31} color="black" />
        </TouchableOpacity>
  

    </View>
  )
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#018786",
  },
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
  containerCep: {
    flexDirection: "row",
    height: 100,
    marginHorizontal: 20,
    marginTop: 20
  },
  botaoBuscar: {
    backgroundColor: "#E0FFFF",
    width: 120,
    height: 70,
    marginTop: 30,
    marginEnd: 20,
    borderRadius: 10,
    padding: 20,

  },
  textoBotaoBuscar: {
    color: "#018786",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center"
    
  },
  caixaTexto: {
    borderColor: "#E0FFFF",
    borderWidth: 2,
    padding: 15,
    fontSize: 18,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 20,
  },

})
