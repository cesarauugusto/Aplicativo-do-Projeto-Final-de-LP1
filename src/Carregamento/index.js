import React from 'react';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import {Text,View} from 'react-native'

export default function Carregamento () {
    const navigation = useNavigation()

    return(
        <View>
         <LottieView 
         source={require('../assets/carregamento.json')} 
         autoPlay
          loop={false}
          onAnimationFinish={()=> navigation.navigate('Home')}
          />
          </View>
  )
}