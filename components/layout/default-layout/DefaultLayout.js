import { TouchableOpacity, View } from "react-native";
import {styles} from './styles';
import { AntDesign  } from '@expo/vector-icons';
const DefaultLayout = ({children}) => {
    return (
        <View style={styles.container}>
            <View style={styles.randomNumberText}>
                {children}

            </View>


            <View style={styles.plusButtonContainer}>
                <TouchableOpacity  style={styles.plusButton}>
                    <AntDesign name="plus" size={24} color="white" />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default DefaultLayout;