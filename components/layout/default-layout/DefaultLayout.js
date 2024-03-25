import {  View } from "react-native";
import {styles} from './styles';
import * as buttons from '../../button';


const DefaultLayout = ({children}) => {
    return (
        <View style={styles.container}>
            

            <View style={styles.contentContainer}>
                {children}

            </View>
            
            <buttons.CreateButton/>
        </View>
    )
}

export default DefaultLayout;