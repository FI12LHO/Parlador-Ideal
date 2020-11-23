import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import SyncStorage from 'sync-storage';
import { Feather } from '@expo/vector-icons';

import Api from '../../services/api';
import Style from './style';

export default function Home() {
    // Variavel que guarda um Array com as postagens (objetos)
    const [posts, setPosts] = useState([]);

    const navigate = useNavigation();

    interface PostObject {
        id: number,
        author_id: number,
        author: String,
        date: String,
        text: String,
    }

    useEffect(() => {
        getData();
    }, [posts]);

    async function getData() {
        // Recuperando as postagens
        try {
            await Api.get('/post').then((response) => {setPosts(response.data)});

        } catch (error) {
            console.log(error);
        }

        return 0;
    }
    
    function renderItems(post: PostObject) {
        // Renderizando as postagens

        if (!post) {
            return 0;
        }

        return (
            <View style={Style.post_container} key={post.id}>
                <View style={Style.post_header}>
                    <View style={Style.title}>
                        <Text style={Style.text_header}>{post.author}</Text>
                        <Text style={Style.text_header}>{post.date}</Text>
                    </View>
                    
                    <View style={Style.action}>
                        <TouchableOpacity
                            onPress={() => {navigateToShowPost(post)}}
                            style={Style.action_button}>
                            <Feather name='more-vertical' color='#000' size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Style.post_body}>
                    <Text style={Style.text_body}>{post.text}</Text>
                </View>
            </View>
        );
    }

    function navigateToShowPost(post: PostObject) {
        // Criando navegação para pagina de edição e remoção da postagem
        const user_id = SyncStorage.get('id');

        // Validando se o usuario atual é o autor da postagem
        if (post.author_id.toString() == user_id) {
            navigate.navigate('ShowPost', { post: post });
        }

        return 0;
    }

    function logout() {
        // Reiniciando sessão
        SyncStorage.remove('name');
        SyncStorage.remove('email');
        SyncStorage.remove('id');

        navigate.navigate('Login');
        return 0;
    }

    return (
        <View style={Style.container}>
            <FlatList
                data={posts}
                renderItem={(post) => (renderItems(post['item']))} 
                style={Style.list_container} />
            
            <View style={Style.control_container}>
                <TouchableOpacity
                    onPress={logout}
                    style={Style.log_out_button}>
                    <Feather name='log-out' color='#000' size={16} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {navigate.navigate('CratePost')}}
                    style={Style.add_button}>
                    <Feather name='plus' color='#000' size={32} />
                </TouchableOpacity>
            </View>
        </View>
    );
}