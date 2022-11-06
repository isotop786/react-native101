import { StyleSheet, Text, View ,TextInput,Button,Alert,Keyboard} from 'react-native'
import React, {useState,useEffect} from 'react'

const AddTodo = ({addTodo}) => {

    const [text,setText] = useState('')
    const changeHandler = (val)=>{  
        setText(val)
    }

    const handleOnPress = ()=>{
        if(text.length >= 3)
        {
            addTodo(text)
            setText('')
            Keyboard.dismiss();
        }
        else{
            Alert.alert('Error','Text can not be less than 3 character')
        }
        

    }


  return (
    <View >
      <TextInput
        placeholder="New todo..."
        onChangeText={(value)=>changeHandler(value)}
        style={styles.input}
        value={text}
      />
      <Button
       title="Add todo"
       color="#5c78e7"  
       onPress={handleOnPress}/>
    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({
    input:{
        margintBottom: 10,
        paddingHorizontal: 8,
        paddingVerticle: 6,
        borderBottomWidth:1,
        borderBottomColor:'#555'
    },
    container:{
        // flex:1,
        flexDirection:'row',
        // justifyContent:'space-between'
    }
})