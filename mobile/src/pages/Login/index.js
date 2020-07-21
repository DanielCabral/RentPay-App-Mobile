import React,{useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import {View , FlatList, Image, Text, TouchableOpacity, TextInput, Button, inputpas} from 'react-native';
//import { Toolbar as MaterialToolbar } from 'react-native-material-design';

import logoImg from '../../assets/Logo.png';
//import styles from './styles';
//import api from '../../services/api';


export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    const styles = StyleSheet.create({
        labelContainer: {
            marginBottom: 20
        },
        container: {
            flex: 1,
            paddingHorizontal: 24,
            paddingTop: Constants.statusBarHeight + 20,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#14213D',
        },
        headerImage: {
            width: '70%',
            backgroundColor: '#14213D',
        },
    });
   // function navigateToHome(incident){
        //navigation.navigate('Detail', {incident});
    //}

    return (
        <View style ={styles.container}>
            
            <Image source={logoImg} styles={styles.headerImage}/>

            <Text>Bem-vindo Ao Rent Pay</Text>
            <Text>Escolha um dos casos abaixo e salve o dia.</Text>

            <View style={styles2.labelContainer}>
                <TextInput >Digite o email</TextInput>
                <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text)=>(setEmail(text))}
                value={value}
                /> 
                <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text)=>(setSenha(text))}
                value={value}
                />
                <TouchableOpacity>
                    <Text>Logar</Text>
                    <Feather name="arrow-right" size={16} color="#e02041" />
                </TouchableOpacity>
            </View>           
        </View>

        

    );
    
}


