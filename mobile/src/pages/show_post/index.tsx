import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import SyncStorage from 'sync-storage';

import Api from '../../services/api';
import Style from './style';

export default function ShowPost() {
    // Recuperando parametros da rota
    const route = useRoute();
    const post = route.params.post;

    // Dados da postagem
    const post_id = post.id;
    const author_id = SyncStorage.get('id');
    const [text, setText] = useState(post.text);

    const navigate = useNavigation();

    async function handleDelete() {
        const data = {
            'id': post_id,
            'author_id': author_id,
        };

        try{
            // Enviando dados da postagem ha ser deletada ao servidor
            await Api.post('/post/delete/', data).then((response) => (response.data));

        } catch(error) {
            alert('Desculpe ocorreu um erro, tente novamente mais tarde');
            console.log(error);
            return '';

        }

        navigate.navigate('Home');
    }

    async function handleUpdate() {
        

        try {
            const data = {
                "id": post_id,
                "author_id": author_id,
                "text": text,
            };

            // Enviando dados atualizados da postagem ao servidor
            await Api.post('/post/update/', data).then((response) => (response.data));
             
        } catch(error) {
            alert('Desculpe ocorreu um erro, tente novamente mais tarde');
            console.log(error);

        }

        navigate.navigate('Home');
    }

    return (
        <View style={Style.container}>
            <View style={Style.block}>
                <Text style={Style.title}>Menssagem:</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={10}
                    underlineColorAndroid='transparent'
                    value={text}
                    onChangeText={(e) => setText(e)}
                    style={Style.textarea} />
            </View>
            <View style={Style.action_container}>
                <TouchableOpacity
                    onPress={handleUpdate}
                    style={Style.action_button}>
                    <Text style={Style.text_button}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleDelete}
                    style={Style.action_button}>
                    <Text style={Style.text_button}>Deletar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}