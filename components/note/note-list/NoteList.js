import { FlatList, SafeAreaView } from "react-native"
import { styles } from "./styles"
import * as note from '../index';
import { useState } from "react";



const TASK = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  

const NoteList = () => {
  const [tasks, setTasks] = useState(TASK);

  const completeTask = (id) => {
    const remainingTasks = tasks.filter(task => task.id !== id);
    setTasks(remainingTasks);
  }


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({item}) => <note.NoteItem item={item} completeTask={completeTask}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default NoteList;