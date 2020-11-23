import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    list_container: {
        flex: 1,
    },
    post_container: {
        minWidth: 320,
        padding: 20,
        marginVertical: 10,
        flexDirection: 'column',
        backgroundColor: '#ffffff90',
        borderColor: '#ccc',
        borderWidth: 1,
    },
    post_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    action: {},
    action_button: {},
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text_header: {
        margin: 5,
        fontSize: 12,
        fontWeight: 'bold',
    },
    post_body: {
        marginVertical: 10,
    },
    text_body: {
        flexWrap: 'wrap',
        textAlign: 'left',
        fontSize: 12,
    },
    control_container: {
        width: 320,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    add_button: {
        marginHorizontal: 50,
        borderWidth: 1,
        borderColor: '#00000010',
        borderRadius: 30,
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    log_out_button: {
        borderWidth: 1,
        borderColor: '#00000010',
        borderRadius: 30,
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
});

export default Style;