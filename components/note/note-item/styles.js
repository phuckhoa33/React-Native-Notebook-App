import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 1,
    },
    itemTask: {
        flexDirection: 'row'
    },
    itemTaskTitle: {
        marginTop: 8
    },
    itemSeparator: {
        height: 1,
        width: '80%',
        backgroundColor: '#cccccc',
        marginLeft: '10%',
    },
    itemDesciption: {
        marginLeft: '10%'
    },
    itemExtraInformation: {
        marginLeft: '10%',
        flexDirection: 'row'
    },
    itemSubTasks: {
        flexDirection: 'row'
    },
    itemScheduleTime: {
        flexDirection: 'row'
    },
    itemRootSource: {
        flexDirection: 'row'
    }
})