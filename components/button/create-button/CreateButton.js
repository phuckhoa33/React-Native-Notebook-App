import { TouchableOpacity } from "react-native"
import { AntDesign  } from '@expo/vector-icons';
import {styles} from './styles';
const CreateButton = () => {
    return (
        <TouchableOpacity  style={styles.addButton}>
            <AntDesign name="plus" size={24} style={styles.addButtonText}/>
        </TouchableOpacity>
    )
}

export default CreateButton;