import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = ({text}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
        backgroundColor:'#5c78e7',
    },

    title:{
        textAlign:'center',
        color:'#fff',
        fontSize: 20,
        fontWeight:'bold'
    }


})

export default Header;

