import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    container: {
        flex: 1,
    },
    form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 12,
        textAlignVertical: 'top'
    },
    button: {
        backgroundColor: '#000000',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 50,
        marginTop: 50,
    },
    button_text: {
        color: '#ffffff',
        fontSize: 14,
    },
});

export default Style;