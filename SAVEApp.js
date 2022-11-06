import React,{useState,useEffect} from 'react'
import { StyleSheet, ScrollView,Text,FlatList, View,Image,Button,TextInput,TouchableOpacity,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login, Dashboard} from './Component'

const Home = ()=>{

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [people, setPeople] = useState([])

  useEffect(()=>{
    setPeople([
      {name:'shaun', id:1},
      {name:'Plun', id:2},
      {name:'sharko', id:3},
      {name:'suki', id:4},
      {name:'haun', id:5},
      {name:'john', id:6},
      {name:'Vhaun', id:7},
    ])
  },[])

  const  pressHandler = (id)=>{
    console.log(id)
    setPeople(()=>{
      return people.filter(person => person.id !== id)
    })
  }

  return(
    <View style={styles.container}>

      {/* Rendering in Flatlist */}
      
        <FlatList
          data={people}
          numColumns={2}
          renderItem={({item}) =>(
            <TouchableOpacity style={{flex:1,justifyContent:'center',textAlign:'center'}}
            onPress={()=> pressHandler(item.id)}
            >
              <Text style={styles.item}
              >{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />

      {/* Rendering in ScrollView */}
      {/* <ScrollView>
      {people.map(p=>(
        <View key={p.id}>
          <Text style={styles.item}>{p.name}</Text>
        </View>
      ))}
      </ScrollView> */}

      {/* <View style={{justifyContent:'center',alignItems:'center'}}>
        <TextInput placeholder="Enter name" style={styles.txtInput} onChangeText={(value)=> setName(value)} value={name}/>
        <TextInput keyboardType='numeric' placeholder="Enter age" style={styles.txtInput} onChangeText={(value)=> setAge(value)} value={age}/>
      </View>
      {name !== '' ? (<Text>My name is <Text style={{fontWeight:"bold",color:'#fff'}}>{name}</Text></Text>) : null}
      {age > 0  ? (<Text>I am <Text style={{fontWeight:"bold",color:'#fff'}}>{age}</Text> years old</Text>) : null}
      
      <View style={styles.buttonContainer}></View> */}
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {

  const onPress = ()=>{
    Alert.alert('Login Action','Loggin in...')
  }

  return (
    <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      {/* <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/> */}
    </Stack.Navigator>
  </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor:'#666',
    padding:10,
    borderRadius:5
  },
  boldText:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
  },   
  container: {
    flex: 1,
    paddingTop:40,
    paddingHorizontal:20
,    // alignItems: 'center',
    // justifyContent: 'center',  
    // backgroundColor: '#5c78e7',
    color:'#fff'
  },
  input:{
    height: 40,
    width:300,
    margin:12,
    borderWidth:0.25,
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
    padding: 10
  },
  txtInput:{
    borderWidth:1,
    borderColor:'#c3c3c3',
    color:'#fff',
    padding:8,
    margin:10,
    width:200
  },
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'#555',
    color:'#fff',
    fontSize:18,
    marginHorizontal:10,
    

  }
});
