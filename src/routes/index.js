import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
 
import StackRoutes from './stackRoutes';
import Configuracao from '../pages/Configuracao';
import Feather from 'react-native-vector-icons/Feather';
import Irradiancia from '../pages/Irradiancia';
import Home from '../pages/Home';
import Carregamento from '../Carregamento';


 
const Tab = createBottomTabNavigator();
 
export default function Routes () {
  return (
      <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true, //desabilita a barra quando o teclado abrir
        tabBarShowLabel: false, // tirar o nome de baixo dos icons
        tabBarStyle:{
          backgroundColor:'#2ecc71', //muda a cor da barra
          borderTopWidth:0
        }
      }}
      >
        <Tab.Screen
        name= "Tela de Monitoramento"
        component={Home}
        
        options={{
          headerShown:true, // tirar a tag de cima      
         //tabBarLabel :INICIO
         headerTintColor:'#fff',
         headerTitleAlign:'center',
         headerStyle:{
          backgroundColor: '#2ecc71',
          
         },
         tabBarIcon: ({color, size})=>{
           return <Feather name= "slack" color={'#2ecc71'} size={size}/>
         },
        }}
        />
         
         <Tab.Screen
        name= "Configuração"
        component={Configuracao}
        options={{
          //tabBarLabel :INICIO
          headerShown:true,
          headerTintColor:'#fff',
          headerTitleAlign:'center',
          headerStyle:{
          backgroundColor: '#2ecc71',
          
         },
          tabBarIcon: ({color, size})=>{
            return <Feather name= "settings" color={'#2ecc71'} size={size}/>
          },
         }}
        />

       
      </Tab.Navigator>
  )
 
}



/*
<Tab.Screen
        name= "Irradiância"
        component={Irradiancia}
        options={{
          //tabBarLabel :INICIO
          headerShown:true,
          headerTintColor:'#fff',
         headerTitleAlign:'center',
         headerStyle:{
          backgroundColor: '#2ecc71',
          
         },
          tabBarIcon: ({color, size})=>{
            return <Feather name= "sunrise" color={'#fff'} size={size}/>
          },
         }}
        />
       
        
*/
