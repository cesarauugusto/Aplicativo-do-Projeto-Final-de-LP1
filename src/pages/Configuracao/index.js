import React,{useState} from 'react';
import {Text, ImageBackground, SafeAreaView, StyleSheet} from 'react-native'
 
export default function Configuracao (){

    return(
     < SafeAreaView style={styles.container}>  
      <ImageBackground
      style={styles.wall}
      source={require('../../assets/wallhome.png')}
      >
        <Text> ola </Text>

        </ImageBackground>
        </SafeAreaView>
    )
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    wall:{
        flex:1,
        width:'100%',
        paddingHorizontal:0,

    },
  })

