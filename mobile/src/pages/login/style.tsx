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
    block: {
        marginVertical: 10,
    },
    input: {
        width: 300,
        borderColor: '#000000',
        borderWidth: 1,
        marginTop: 5,
        paddingLeft: 5,
        fontSize: 20,
    },
    input_label: {
        fontSize: 14,
    },
    button: {
        backgroundColor: '#000000',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 60,
        marginTop: 50,
    },
    button_text: {
        color: '#ffffff',
        fontSize: 16,
    },
    link_register: {
        marginTop: 30,
        alignSelf: 'center',
    },
    text_link: {
        fontSize: 14,
        color: 'blue'
    },
});

export default Style;