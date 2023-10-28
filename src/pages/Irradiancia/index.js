import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, SafeAreaView, ImageBackground, StyleSheet, Text } from "react-native";

export default function Detalhes() {
 
  const [isLoading, setLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);


  useEffect(() => {

    const getData = async () => {
      const data = await axios.get( 
        "http://localhost:3000/perDay"
      );

      setFetchedData(data);
      setLoading(false);
    };

    getData();
  }, []);

  if (isLoading) {
    return (
      <ImageBackground
        style={styles.wall}
        source={require('../../assets/wallhome.png')}
      >
        <Text>
          Carregando...
        </Text>
      </ImageBackground>

    )
  }

  var data = fetchedData.data;
  var pot1 = data.TEMP
  var pot2 = data.DNI

  return (

    <View style={styles.containerdois}>
      <ImageBackground
        style={styles.wall}
        source={require('../../assets/wallhome.png')}
      >
        <Text>
          {pot1}
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerdois: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  wall: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 0,
    justifyContent: 'center',
  },
})





/*import React from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView, ImageBackground} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator'

 
export default function Irradiancia (){

    return(
      <SafeAreaView style={styles.container}>  
        <ImageBackground
          style={styles.wall}
          source={require('../../assets/wallhome.png')}
          >
            <CircularProgress
            radius={80}
            value={56}
            textColor='#222'
            fontSize={20}
            valueSuffix={' A'}
            inActiveStrokeColor={'#2ecc71'}
            inActiveStrokeOpacity={0.2}
            inActiveStrokeWidth={6}
            duration={3000}
            onAnimationComplete={( ) => setValue (50)}
            title={"Corrente"}
            titleColor = {'#2ecc71'}
            titleStyle={{fontWeight: "bold"}}
            />

           

            <CircularProgress
            radius={80}
            value={25}
            textColor='#222'
            fontSize={20}
            valueSuffix={' W'}
            inActiveStrokeColor={'#2ecc71'}
            inActiveStrokeOpacity={0.2}
            inActiveStrokeWidth={6}
            duration={3000}
            onAnimationComplete={( ) => setValue (50)}
            title={"Potência"}
            titleColor = {'#2ecc71'}
            titleStyle={{fontWeight: "bold"}}
            
            />
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
*/
