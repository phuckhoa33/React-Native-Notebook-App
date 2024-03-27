import { FlatList, SafeAreaView } from "react-native"
import { styles } from "./styles"
import * as note from '../index';
import { useState } from "react";
import { useNoteContext } from "../../../context/NoteContext";




  

const NoteList = () => {
  const {notes} = useNoteContext();

  console.log(notes);

  const completeTask = (id) => {
    const remainingTasks = tasks.filter(task => task.id !== id);
    setTasks(remainingTasks);
  }


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notes.notes}
        renderItem={({item}) => <note.NoteItem item={item} completeTask={completeTask}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default NoteList;