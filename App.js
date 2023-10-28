import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import Login from './src/components/Login';

export default function App() {


  const [user, setUser] = useState(null);//null nao abre e numeros abre


  if (!user) { //if não tiver login
    return <Login changeStatus={(user) => setUser(user)} />//entra na pagina login

  }

  //se tiver logado ja entra pra pagina home

  return (

    <NavigationContainer>

      <Routes />
    </NavigationContainer>

  )
}