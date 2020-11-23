import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SyncStorage from 'sync-storage';
import { format } from 'date-fns';

import Api from '../../services/api';
import Style from './style';

export default function Login() {
    const [text, setText] = useState('');
    const [textCount, setTextCount] = useState(0);

    // Recuperando dados do usuario de dentro do SyncStorage 
    const author_id = SyncStorage.get('id');
    const author = SyncStorage.get('name');

    const navigate = useNavigation();

    async function handleSubmit() {
        // Validando o texto
        if (text == '') {
            alert('Por favor preencha o campo corretamente');
            return '';
        }

        // Recuperando e formatando a data atual
        const date = new Date();
        const now = format(date, 'dd/MM/yyyy HH:mm');
        
        // Criando objeto com os dados necessarios para gerar um novo post
        const data = {
            'author_id': author_id,
            'author': author,
            'text': text,
            'date': now,
        };


        try {
            const response = await Api.post('/post/create', data).then((response) => (response.data));

            // Mudando para pagina principal (Home)
            navigate.navigate('Home');

        } catch (error) {
            alert('Desculpe ocorreu um erro, tente novamente mais tarde');
            console.log(error);
            return '';
        }

        // Redefinindo texto (campo texto)
        setText('');

        return '';
    }

    function changeText(text: string, lenght: number) {
        setText(text);
        setTextCount(lenght);
    }

    return (
        <View style={Style.container}>
            <View style={Style.form}>
                <View>
                    <Text style={Style.title}>Menssagem</Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={10}
                        maxLength={280}
                        underlineColorAndroid='transparent'
                        value={text}
                        onChangeText={(e) => changeText(e, e.length)}
                        style={Style.textarea} />
                        <Text>{textCount}/280</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={Style.button}>
                        <Text style={Style.button_text}>Postar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}