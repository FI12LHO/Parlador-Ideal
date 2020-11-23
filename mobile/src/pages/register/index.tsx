import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Api from '../../services/api';
import Style from './style';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conf_password, setConfPassword] = useState('');

    const navigate = useNavigation();

    async function handleSubmit() {
        // Validando se os campos não estão vazios
        if (name == '' || email == '' || password == '' || conf_password == '') {
            alert('Por favor preencha os campos corretamente');
            return '';
        }

        // Validando se as senhas são iguais
        if (password != conf_password) {
            alert('As senhas precisam coincidir');
            setPassword('');
            setConfPassword('');    
            return '';
        }

        const data = {
            'name': name.toLowerCase(),
            'email': email.toLowerCase(),
            'password': password,
        };

        try {
            const response = await Api.post('/user/create', data).then((response) => (response.data));

            // Validando a resposta do servidor
            if (response.status == 'success') {
                navigate.navigate('Login');
            } 

        } catch (error) {
            alert('Desculpe ocorreu um erro, tente novamente mais tarde');
            console.log(error);
            return '';

        }

        // Redefinindo campos
        setName('');
        setEmail('');
        setPassword('');
        setConfPassword('');
    }

    return (
        <View style={Style.container}>
            <View style={Style.form}>
                <ScrollView>
                    <View style={Style.block}>
                        <Text style={Style.input_label}>Qual seu nome?</Text>
                        <TextInput
                            value={name}
                            onChangeText={(e) => setName(e)}
                            style={Style.input} />
                    </View>
                    <View style={Style.block}>
                        <Text style={Style.input_label}>Qual seu e-mail?</Text>
                        <TextInput
                            value={email}
                            onChangeText={(e) => setEmail(e)}
                            keyboardType={"email-address"} 
                            style={Style.input} />
                    </View>
                    <View style={Style.block}>
                        <Text style={Style.input_label}>Digite uma senha</Text>
                        <TextInput
                            value={password}
                            onChangeText={(e) => setPassword(e)}
                            secureTextEntry={true} 
                            style={Style.input} />
                    </View>
                    <View style={Style.block}>
                        <Text style={Style.input_label}>Confirme a senha</Text>
                        <TextInput
                            value={conf_password}
                            onChangeText={(e) => setConfPassword(e)}
                            secureTextEntry={true} 
                            style={Style.input} />
                    </View>
                    <View style={Style.block}>
                        <TouchableOpacity
                            onPress={handleSubmit}
                            style={Style.button}>
                            <Text style={Style.button_text}>Cadastrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigate.navigate('Login')}
                            style={Style.link_login}>
                            <Text style={Style.text_link}>Já possui conta?</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}