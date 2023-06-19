import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#353535',
        borderWidth: 1,
        marginVertical: 10,
        marginHorizontal: 5,
    },
    buttonActive: {
        backgroundColor: '#009CA5',
        borderWidth: 1,
        borderColor: '#009CA5'
    },
    buttonText: {
        color: '#000',
        fontSize: 17,
    },
});