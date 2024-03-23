
import { StatusBar } from 'react-native';
import { AppNavigator } from './components/navigator/AppNavigator';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <StatusBar barStyle={'dark-content'}/>
      <AppNavigator/>  
    </>
  );
}