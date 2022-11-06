import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const TodoItem = ({item,pressHandler}) => {
  return (
    <TouchableOpacity style={styles.item} key={item.id} 
        onPress={()=> pressHandler(item.id)}
    >
      <Text>{item.text}</Text>
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
        flex:1
    }
})