import React, {useState} from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,TextInput,TouchableOpacity, Keyboard} from 'react-native';
import Task from './components/Tasks'

export default function App() {


  

const [task,setTask] = useState()
const[taskItems,setTaskItems] = useState([])
const handleAddTask = () => {
  Keyboard.dismiss()  
  setTaskItems([...taskItems,task])
  setTask(null)
}

const completeTask = (index)=>{
  let itemsCopy = [...taskItems]
  itemsCopy.splice(index,1)
  setTaskItems(itemsCopy)
}

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}>Today's Tasks</Text>
        <Text style = {styles.tasks}></Text>
        {
          taskItems.map((item, index ) => {
            return (
               <TouchableOpacity key = {index} onPress = {() => completeTask(index)}>
                 <Task  text = {item} />
               </TouchableOpacity>
                
            )

            
          })
        }
        
      </View>

      <KeyboardAvoidingView 
        behaviour = {"height"}
        style= {styles.textavoid}>
           <TextInput style = {styles.inputText} placeholder = {'Type a Task'} value ={task} onChangeText = {text => setTask(text)}/>
      

      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style = {styles.addWrapper}>
          <Text style = {styles.addText}>+</Text>
        </View>

      </TouchableOpacity>
      </KeyboardAvoidingView> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
    
  },

   tasksWrapper:{
     paddingTop : 80,
     paddingHorizontal : 30
   },
   sectionTitle : {
     fontSize : 20,
     fontWeight : 'bold',
     
   },

   textavoid : {
    position : 'absolute',
    bottom : 60,
    width : '100%',
    flexDirection : 'row',
    justifyContent :'space-around',
    alignItems : 'center'
    
   
   },
   inputText :{
    paddingVertical : 15,
    paddingHorizontal : 15,
    backgroundColor : '#FFF',
    width :250,
    borderRadius : 60,
    borderWidth : 1,
    borderColor : '#C0C0C0',
    marginRight : 20
   },
   addWrapper : {
    
    height : 60,
    width :60,
    borderRadius : 60,
    backgroundColor : '#FFF',
    justifyContent : 'center',
    alignItems : 'center',
    borderColor : '#C0C0C0',
    borderWidth : 1
   },
   addText : {}

  
});
