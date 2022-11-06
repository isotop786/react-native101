import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 

const TodoItem = ({item,pressHandler}) => {
  return (
    <TouchableOpacity style={styles.item} key={item.id} 
        onPress={()=> pressHandler(item.id)}
    >
    <MaterialIcons name="delete" size={18} color="#333" />
      <Text style={styles.itemText}>{item.text}</Text>
    </TouchableOpacity>
  )
}

export default TodoItem

const styles = StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderColor:'#ddd',
        backgroundColor:'#ddd',
        borderWidth:1,
        borderRadius:10,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    itemText:{
        marginLeft:10,
        
    }
})