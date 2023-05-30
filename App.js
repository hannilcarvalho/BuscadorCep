import React, {useState} from "react"
import { View, StyleSheet, Text } from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/Home'
import Pesquisa from './src/Pesquisa'
import Nome from './src/Name'

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        options={{
          tittle: '',
          headerTransparent: true,
          headerShown: false
        }}

        name="Home" component={Home} />
        <Stack.Screen 
        options={{
          tittle: '',
          headerTransparent: true,
          headerShown: false
        }}

        name="Pesquisa" component={Pesquisa} />

        <Stack.Screen 
        options={{
          tittle: '',
          headerTransparent: true,
          headerShown: false
        }}

        name="Nome" component={Nome} />

      </Stack.Navigator>

      
    </NavigationContainer>
  )
}