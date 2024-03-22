import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import {styles} from './styles';
const Today = () => {
    const {height} = useWindowDimensions();
    const [number, setNumber] = useState(0);
  
    function handlePress() {
      setNumber(parseInt(Math.random() * 10000, 10) % 100);
    }
  
    return (
      <View style={[styles.container, {height}, StyleSheet.absoluteFill]}>
        <Text>Random number: {number}</Text>
        <View style={styles.br} />
        <Pressable
          style={({pressed}) => [
            {
              opacity: pressed ? 0.7 : 1,
            },
            styles.btn,
          ]}
          onPress={handlePress}>
          <Text style={styles.btnText}>Generate a number</Text>
        </Pressable>
      </View>
    )
}


export default Today;