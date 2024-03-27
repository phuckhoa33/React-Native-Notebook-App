import {  View } from "react-native";
import {styles} from './styles';
import * as buttons from '../../button';
import { useState } from "react";
import * as note from '../../note';

const DefaultLayout = ({children}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            

            <View style={styles.contentContainer}>
                {children}

            </View>
            <note.DetailNote modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            
            <buttons.CreateButton setModalVisible={setModalVisible}/>
        </View>
    )
}

export default DefaultLayout;