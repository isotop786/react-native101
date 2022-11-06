import { View, Text, Alert } from 'react-native'
import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = () => {
  const [email, setEmail] = useState()

  const getData = async ()=>{
    try{
      const value = await AsyncStorage.getItem('@storage_key')
      // const jsonData = JSON.parse(value)
      Alert.alert(value)
      if(value !== null){
        setEmail(value)
      }
    }catch(e)
    {
      alert(e)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <View>
      <Text>{email}</Text>
    </View>
  )
}

export default Dashboard