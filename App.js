import React,{useState,useEffect} from 'react'
import {StyleSheet,Text,View, Alert,Statusbar, FlatList, TouchableOpacity,ScrollView,TouchableWithoutFeedback,Keyboard} from 'react-native'
import { Header,TodoItem, AddTodo } from './Component'

const App = ()=>{

    const [text,setText] = useState('')

    const [todos, setTodos] = useState([
        {text:'buy coffee', id:1},
        {text:'Create an app', id:2},
        {text:'play on the switch', id:3},
    ])
    
    const pressHandler = (id)=>{
       console.log(id);
        setTodos((prevTodos)=>{
            return prevTodos.filter(todo => todo.id !== id)
        })
    }

    const changeHandler = (text)=>{
        setText(text)
    }

    const addTodo = (txt)=>{
        setTodos((prevTodos)=>{
            return [
                    {text:txt, id: Math.random().toString()}, 
                    ...prevTodos
                ]
        })
        setText('')
        console.log(todos)
    }


    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.container}>
            {/* header */}
            <Header text="My Todos"/>
            <View style={styles.content}>
                {/* to form */}
                <AddTodo 
                changeHandler={changeHandler}
                addTodo={addTodo}
                />
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({item})=>(
                        <TodoItem item={item} pressHandler={pressHandler} />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    content:{
        padding:40,

    }
})

export default App;