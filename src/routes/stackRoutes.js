import React from 'react';
import {  StyleSheet  } from 'react-native'
//import { createNativeStackNavigator } from '@react-navigation/stack';
//import { createNativeStackNavigator } from '@react-navigation/native';
 
import Home from '../pages/Home';
import { createStackNavigator } from '@react-navigation/stack';
import Configuracao from '../pages/Configuracao';


const Stack = createStackNavigator ();
 
export default function StackRoutes(){
 
    <Stack.Screen
    name = "Configuração"
    component={Configuracao}
    options={{
        headerShown:false,
    }}
    />

    return(
        <Stack.Navigator>
            <Stack.Screen
            name = "Tela de Monitoramento"
            component={Configuracao}
            options={{
                headerShown:false,
            }}
            />
 
 
        </Stack.Navigator>
    )
}


