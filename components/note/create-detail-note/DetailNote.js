import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { useNoteContext } from "../../../context/NoteContext";

const DetailNote = ({modalVisible, setModalVisible}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const {addTask} = useNoteContext();

    const handleSaveTask = () => {
        // Handle saving the task here
        console.log('Task name:', taskName);
        console.log('Description:', description);
        addTask({id: taskName, title: description})
        setModalVisible(false);
    };
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false);
            }}
            >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                <Text style={styles.title}>Create New Task</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Task Name"
                    value={taskName}
                    onChangeText={setTaskName}
                />
                <TextInput
                    style={[styles.input, styles.descriptionInput]}
                    placeholder="Description"
                    value={description}
                    onChangeText={setDescription}
                    multiline={true}
                />
                <TouchableOpacity onPress={handleSaveTask} style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
                </View>
            </View>
            </Modal>
    )
}

export default DetailNote;