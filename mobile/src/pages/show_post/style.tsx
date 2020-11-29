import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    block: {
        minWidth: 320,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    textarea: {
        width: 300,
        height: 150,
        justifyContent: "flex-start",
        borderColor: '#000000',
        borderWidth: 1,
        marginTop: 5,
        padding: 5,
        fontSize: 20,
        textAlignVertical: 'top'
    },
    action_container: {
        width: 320,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    action_button: {
        width: 120,
        backgroundColor: '#000000',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 20,
        marginTop: 50,
    },
    text_button: {
        color: '#ffffff',
        fontSize: 12,
        textAlign: 'center',
    },
});

export default Style;