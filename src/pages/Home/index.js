import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, Button, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';
import Configuracao from '../Configuracao';

import CircularProgress from 'react-native-circular-progress-indicator'

//desativar a mensagem de notificação de atualização do fire base
console.disableYellowBox = true;

export default function Home() {
    const [corrente, setCorrente] = useState('...')
    const [potencia, setPotencia] = useState('...')
    const [temperatura, setTemperatura] = useState('...')
    const [tensao, setTensao] = useState('...')
    const [dgas, setDGas] = useState('...')
    const [agas, setAGas] = useState('...')
    const [value, setValue] = useState(0);

    const navigation = useNavigation();

    useEffect(() => { //função para buscar o banco de dados no fire base

        async function dados() {

            //Pegando mais de um banco de dados
            await firebase.database().ref('controlador').on('value', (snapshot) => {
                setCorrente(snapshot.val().corrente);
                setPotencia(snapshot.val().potencia);
                setTemperatura(snapshot.val().temperatura);
                setTensao(snapshot.val().tensao);
                setDGas(snapshot.val().dgas);
                setAGas(snapshot.val().agas);

                /* //pegando apenas um banco de dados
                await firebase.database().ref('nome').on('value', (snapshot)=> {//se mudar o .on para .once ele busca apenas uma vez
                setNome(snapshot.val());*/
            })
        }

        dados();
    }, []);

    return (
      
            <SafeAreaView style={styles.container}>
                <ImageBackground
                    style={styles.wall}
                    source={require('../../assets/wallhomeapp.png')}
                >
                     
                    <CircularProgress
                    
                        radius={100}
                        value={dgas}
                        maxValue={1}
                        textColor='#222'
                        fontSize={20}
                        valueSuffix={''}
                        inActiveStrokeColor={'#2ecc71'}
                        inActiveStrokeOpacity={0.2}
                        inActiveStrokeWidth={6}
                        duration={1000}
                       onAnimationComplete={() =>Alert.alert(
                        "Alerta de vazemento de gás",
                        "Vazamento de gás na cozinha",
                        [
                          {
                            text: "Cancel"
                          },
                          { 
                            text: "Ligar para bombeiros"
                          }
                        ]
                  )}
                        title={"Digital"}
                        titleColor={'#2ecc71'}
                        titleStyle={{ fontWeight: "bold" }}
                    />

                <CircularProgress    
                    radius={100}
                    value={agas}
                    maxValue={3000}
                    textColor='#222'
                    fontSize={20}
                    valueSuffix={''}
                    inActiveStrokeColor={'#2ecc71'}
                    inActiveStrokeOpacity={0.2}
                    inActiveStrokeWidth={6}
                    duration={1000}
                    onAnimationComplete={() => setValue(agas)}
                    title={"Analógico"}
                    titleColor={'#2ecc71'}
                    titleStyle={{ fontWeight: "bold" }}
                />
                    
                   
                </ImageBackground>

            </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
 flex: 1,

    },
    
    wall: {
        alignItems:'center',
        justifyContent:'flex-end',
        marginVertical:0,
        marginHorizontal:0,
        marginTop:0,
        marginBottom:0,
        borderRadius: 0,
        height: '100%',
        width: '100%',
        padding: 0,
        borderWidth:0,
        borderColor: '#141414',
    },
})

/*
        <Button style={{fontSize: 80, color: '#334'}}
                     styleDisabled={{color: 'red'}}
                     onPress={() => navigation.navigate('Configuracao')}
                     title="LIGAR"
            />  
*/


/*

<CircularProgress
                        style={styles.corre}
                        radius={80}
                        value={corrente}
                        textColor='#222'
                        fontSize={20}
                        valueSuffix={' A'}
                        inActiveStrokeColor={'#2ecc71'}
                        inActiveStrokeOpacity={0.2}
                        inActiveStrokeWidth={6}
                        duration={3000}
                        onAnimationComplete={() => setValue(50)}
                        title={"Corrente"}
                        titleColor={'#2ecc71'}
                        titleStyle={{ fontWeight: "bold" }}
                    />



                    <CircularProgress
                        radius={80}
                        value={potencia}
                        textColor='#222'
                        fontSize={20}
                        valueSuffix={' W'}
                        inActiveStrokeColor={'#2ecc71'}
                        inActiveStrokeOpacity={0.2}
                        inActiveStrokeWidth={6}
                        duration={3000}
                        onAnimationComplete={() => setValue(50)}
                        title={"Potência"}
                        titleColor={'#2ecc71'}
                        titleStyle={{ fontWeight: "bold" }}

                    />


                    <CircularProgress
                        radius={80}
                        value={temperatura}
                        textColor='#222'
                        fontSize={19}
                        valueSuffix={' ºC'}
                        inActiveStrokeColor={'#2ecc71'}
                        inActiveStrokeOpacity={0.2}
                        inActiveStrokeWidth={6}
                        duration={3000}
                        onAnimationComplete={() => setValue(50)}
                        title={"Temperatura"}
                        titleColor={'#2ecc71'}
                        titleStyle={{ fontWeight: "bold" }}
                    />



*/