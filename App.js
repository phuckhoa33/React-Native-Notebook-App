import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppNavigator } from './components/AppNavigator';

export default function App() {
  return (
    <View>
      <AppNavigator/>
    </View> 
  );
}