import React, {useState} from 'react';
import {Text, StyleSheet, TextInput, 
TouchableOpacity, ImageBackground, 
KeyboardAvoidingView, ScrollView
} from 'react-native'; 
import firebase from '../../services/firebaseConnection';

const imginterface = './src/assets/interfaceapp.png';
 
export default function Login ({ changeStatus }){
     
    const [type, setType] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    function handleLogin(){
       
        if (type === 'login'){
            //aqui fazemos o login
            const user = firebase.auth().signInWithEmailAndPassword(email,password)
            .then((user)=> {
                changeStatus(user.user.uid)
            })
            .catch((err)=>{
                console.log(err);
                alert('Ops parece que deu algum erro.');
                return;
            })
 
        }else{
            //Aqui cadastramos o usuario
            const user = firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user)=>{
                changeStatus(user.user.uid)
            })
            .catch((err)=>{
                console.log(err);
                alert('Ops parece que algo está errado!');
                return;
            })
        }
 }
    return (
      
        <ScrollView style={styles.container}>
            <KeyboardAvoidingView>
                <ImageBackground
                    style={styles.wall}
                    source={require('../../assets/interfaceapp.png')}
                    >

                    <TextInput
                        placeholder="Seu e-mail"
                        style= {styles.inputEmail}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
        
                    <TextInput
                        placeholder="************"
                        style= {styles.inputPassoword}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
        
                    <TouchableOpacity
                        style={[styles.handleLogin,
                        { backgroundColor: type === 'login' ? '#eead2d' : '#2ecc71'}]}
                        onPress={handleLogin}
                    >
                        <Text style ={styles.loginText}>
                        {type === 'login' ? 'Acessar' : 'Cadastrar'}
                        </Text>
        
                    </TouchableOpacity>
        
                    <TouchableOpacity onPress ={ () => setType (type => type === 'login' ? 'Cadastrar' : 'login')}>
                         <Text style={styles.conatainerCriarAcc}>
                            {type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta'}
                         </Text>
                            
                    </TouchableOpacity>
                </ImageBackground>
            </KeyboardAvoidingView>
           </ScrollView>
            
       
    );
}
 
const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor: '#f2f6fc',
},

wall:{
    flex:1,
    },
 
inputEmail:{
    marginVertical:550,
    marginBottom:10,
    marginHorizontal:30,
    backgroundColor: '#fff',
    borderRadius: 4,
    height: 45,
    padding: 10,
    borderWidth:1,
    borderColor: '#141414'
},
 
inputPassoword:{
    marginHorizontal:30,
    marginVertical:5,
    marginBottom:10,
    backgroundColor: '#fff',
    borderRadius: 4,
    height: 45,
    padding: 10,
    borderWidth:1,
    borderColor: '#141414'
},
 
handleLogin:{
 
    marginHorizontal:90,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    marginBottom:3,
    borderWidth:1,
},
loginText:{
   
    borderRadius: 4,
    color: '#FFF',
    fontSize:17,
 
},
containerInterface:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover'
 
},
conatainerCriarAcc:{
 
    textAlign: 'center',
    marginVertical:12,
    marginHorizontal:90,
    marginBottom:30,
    backgroundColor: '#fff',
    borderRadius: 4,
    height: 45,
    padding: 10,
    borderWidth:1,
    borderColor: '#141414'
 
    },
})
