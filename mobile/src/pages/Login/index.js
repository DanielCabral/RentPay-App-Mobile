import React,{useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import {View , FlatList, Image, Text, TouchableOpacity, TextInput, Button, inputpas} from 'react-native';
//import { Toolbar as MaterialToolbar } from 'react-native-material-design';

import logoImg from '../../assets/Logo.png';
import styles from './styles';
//import api from '../../services/api';


export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    function navigateToHome(incident){
        //navigation.navigate('Detail', {incident});
    }

    return (
        <View style ={styles.container}>
            
            <Image source={logoImg} styles={styles.headerImage}/>

            <Text>Bem-vindo Ao Rent Pay</Text>
            <Text>Escolha um dos casos abaixo e salve o dia.</Text>

            <View style={styles2.labelContainer}>
                <TextInput >Digite o email</TextInput>
                <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={()=>(email)}
                value={value}
                /> 
                <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={()=>(senha)}
                value={value}
                />
                <TouchableOpacity onPress={() => navigateToDetail(incident)}>
                    <Text>Logar</Text>
                    <Feather name="arrow-right" size={16} color="#e02041" />
                </TouchableOpacity>
            </View>           
        </View>
    );
    const styles2 = StyleSheet.create({
        labelContainer: {
            marginBottom: 20
        }
    });
}

