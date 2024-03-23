import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      },
      randomNumberText: {
        fontSize: 50,
        marginBottom: 20,
      },
      plusButtonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
      },
      plusButton: {
        backgroundColor: 'orange',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
      },
})
