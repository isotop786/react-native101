import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Sandbox = () => {
  return (
   <>
   <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
    {/* <View style={styles.container2}>
      <Text>Sandbox</Text>
    </View> */}
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        // flex:1/6,
        paddingTop: 40,
        backgroundColor:'#ddd',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    container2:{
        flex:1/2,
        paddingTop: 40,
        backgroundColor:'#555'
    },
    boxOne:{
        flex:1,
        backgroundColor:'violet',
        padding:10
    },
    boxTwo:{
        backgroundColor:'skyblue',
        padding:10,
        flex:1
    },
    boxThree:{
        backgroundColor:'coral',
        padding:10,
        flex:1
    },
    boxFour:{
        backgroundColor:'teal',
        padding:10,
        flex:1
    },
   
})

export default Sandbox