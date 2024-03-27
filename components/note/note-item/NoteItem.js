import { Text, View } from "react-native"
import { styles } from "./styles";
import { RadioButton } from 'react-native-paper';
import { useState } from "react";
import { Feather, MaterialIcons, AntDesign } from '@expo/vector-icons';

const NoteItem = ({item, completeTask}) => {
    const [checked, setChecked] = useState(false);



    return (
        <View style={styles.item}>
            <View style={styles.itemTask}>
                <RadioButton
                    value="first"
                    status={ checked ? 'checked' : 'unchecked' }
                    onPress={() => completeTask(item.id)}
                />
                <Text style={styles.itemTaskTitle} key={item.id}>{item.title}</Text>
            </View>

            <View style={styles.itemDesciption}>
                <Text>{"sssssssssssssssssss"}</Text>
            </View>


            <View style={styles.itemExtraInformation}>
                <View style={styles.itemSubTasks}>
                    <Feather name="git-branch" size={16} color="black" /> 
                    <Text>{"0/3"}</Text>
                </View>
                <View style={styles.itemScheduleTime}>
                    <MaterialIcons name="schedule" size={16} color="black" />
                    <Text>{"15:00"}</Text>
                </View>
                <View style={styles.itemRootSource}>
                    <Text>{"Inbox"}</Text>
                    <AntDesign name="folder1" size={16} color="black" />
                </View>
            </View>

            <View style={styles.itemSeparator}/>
        </View>
    )
}


export default NoteItem;