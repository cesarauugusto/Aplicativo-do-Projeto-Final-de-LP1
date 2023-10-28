import React from 'react';
import {View, Text, ImageBackground,SafeAreaView,StyleSheet} from 'react-native';

export default function Sobre (){

    return (

      < SafeAreaView style={styles.container}>
      <ImageBackground
      style={styles.wall}
      source={require('../../assets/wallhome.png')}    
      >
    
        </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:0,
    paddingLeft:0,
    paddingRight:0,

    
  },
  wall:{
    flex:1,
    width:'100%',
    paddingHorizontal:0,

},
})
