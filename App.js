
import { StatusBar, View } from 'react-native';
import { AppNavigator } from './components/AppNavigator';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <View>
      <StatusBar barStyle={'dark-content'}/>
      <AppNavigator/>
    </View> 
  );
}