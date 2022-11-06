import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View,Image,Button,TextInput,TouchableOpacity,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({navigation}) {

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

  const onPress = ()=>{
    // Alert.alert('Login Action',password)
    storeLoginData('loginData',JSON.stringify({email,password}));
    navigation.navigate('Dashboard')
  }
  const storeLoginData = async (value)=>{
    try{
        await AsyncStorage.setItem('@storage_key',email)
    }catch(err)
    {
        alert(err)
    }
  }

  return (
   <View style={styles.container}>
      <Text style={[styles.textPrimary, styles.h1]}>Welcome to our app!</Text>
      <TextInput 
        onChangeText={onChangeEmail} 
        value={email}
        style={styles.input} placeholder="Email address" 
        placeholderStyle={{ fontFamily: "AnotherFont", borderColor: 'red',color:'#fff' }}/>
      <TextInput
       onChangeText={onChangePassword} 
       value={password}
       style={styles.input} 
       placeholder="Password" 
       secureTextEntry={true}/>
      <TouchableOpacity
        style={styles.btn}
        onPress={onPress}
      >
        <Text style={styles.textPrimary}>Login</Text>
      </TouchableOpacity>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',  
    backgroundColor: '#5c78e7',
    color:'#fff'
  },
  input:{
    height: 40,
    width:300,
    margin:12,
    borderWidth:0.75,
    borderColor:'#fff',
    padding:10,
    color:'#fff'
  },
  textPrimary:{
    color:'#fff'
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#4c566a",
    padding: 10,
    width:100
  },
  h1:{
    fontSize:20,
  }
});
