import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import * as note from '../../components/note';
import { convertDateIntoFormat } from '../../utils/dateFunction';

const Today = () => {
  
  
    return (
      <View style={styles.container}>
        <Text style={styles.currentDay}>{convertDateIntoFormat()}</Text>
        <View style={styles.seperator}/>
        <note.NoteList/>
      </View>
    )
}


export default Today;