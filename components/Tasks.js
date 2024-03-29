import React from 'react'
import {View, Text, StyleSheet } from 'react-native'



const Task = (props) => {
    return (
        <View style = {styles.item}>
         <View style = {styles.itemL}>
          <View style = {styles.square}></View>
          <Text style = {styles.itemText}>{props.text}</Text>
          
         </View>
         <View style = {styles.circle}></View>
        
       
       
       
        </View>
        
        
          
    
    )
}

const styles = StyleSheet.create({
    
    item : {
        backgroundColor :'#FFF',
        padding : 15,
        borderRadius : 10,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginBottom : 10


    },
    
    itemL : {

        flexDirection : 'row',
        alignItems : 'center',
        flexWrap : 'wrap',
        
    },
    itemText : {
      maxWidth : '80%'

    },

   square : {
       width : 24,
       height : 24,
       backgroundColor : '#55BCF6',
       opacity : 0.4 ,
       borderRadius : 5,
       marginRight : 15
    },

    circle : {
      width : 12, 
      height : 12, 
      borderWidth : 2,
      borderRadius : 5,
      borderColor : '#55BCF6'
    }
   
})

export default Task