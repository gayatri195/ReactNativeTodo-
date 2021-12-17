import React, {useState} from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, StyleSheet, Text, View, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();

  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
   <View style={styles.container}>
     <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Today's Task</Text>
       <View style={styles.items}>
       {
         taskItems.map((item, index) => {
           return (
             <TouchableOpacity  key = {index} onPress={() => completeTask(index)}>
             <Task text = {item}/>

             </TouchableOpacity>
           )

         })
       }
       

      </View>
     </View>
     <KeyboardAvoidingView style={styles.writeTaskWrapper} >
       <TextInput style={styles.input} placeholder={'Write a task'} value = {task} onChangeText={text=> setTask(text)}/>
     <TouchableOpacity onPress = {() => handleAddTask()}>
       <View style={styles.addWrapper}>
       <Text style={styles.addText}>+</Text>

       </View>
     </TouchableOpacity>
     </KeyboardAvoidingView>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000'
  },
  items: {
    fontSize: 18,
    fontWeight: 'normal',
    marginTop: 30,

  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 60,
    borderColor: '#C0C0C0',
    width: 250,
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFf',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,

  },
  addText: {

  },

});
