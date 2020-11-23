import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SyncStorage from 'sync-storage';

import Api from '../../services/api';
import Style from './style';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigation();

    async function handleSubmit() {
        // Validando se os campos não estão vazios
        if (email == '' || password == '') {
            alert('Por favor preencha os campos corretamente');
            return '';
        }
        
        const data = {
            'email': email.toLowerCase(),
            'password': password,
        };

        try {
            const response = await Api.post('/user/read', data).then((response) => (response.data));
            
            if (!response.error) {
                // Validando a resposta do servidor e armazenando os dados do usuario
                SyncStorage.set('name', response.name);
                SyncStorage.set('email', response.email);
                SyncStorage.set('id', response.id);

                navigate.navigate('Home');
            }

        } catch (error) {
            alert('Desculpe ocorreu um erro, tente novamente mais tarde');
            console.log(error);
            return '';
        }

        // Redefinindo os dados
        setEmail('');
        setPassword('');

        return '';
    }

    return (
        <View style={Style.container}>
            <View style={Style.form}>
                <View style={Style.block}>
                    <Text style={Style.input_label}>E-mail</Text>
                    <TextInput
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                        keyboardType={"email-address"} 
                        style={Style.input} />
                </View>
                <View style={Style.block}>
                    <Text style={Style.input_label}>Senha</Text>
                    <TextInput
                        value={password}
                        onChangeText={(e) => setPassword(e)}
                        secureTextEntry={true} 
                        style={Style.input} />
                </View>
                <View style={Style.block}>
                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={Style.button}>
                        <Text style={Style.button_text}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigate.navigate('Register')}
                        style={Style.link_register}>
                        <Text style={Style.text_link}>Não possui conta?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}