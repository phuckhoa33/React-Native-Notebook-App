
import { StatusBar } from 'react-native';
import { AppNavigator } from './components/navigator/AppNavigator';
import 'react-native-gesture-handler';
import { NoteProvider } from './context/NoteContext';

export default function App() {
  return (
    <NoteProvider>
      <StatusBar barStyle={'dark-content'}/>
      <AppNavigator/>  
    </NoteProvider>
  );
}