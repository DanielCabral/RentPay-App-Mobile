import React,{useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import {View , FlatList, Image, Text, TouchableOpacity, TextInput,  Alert} from 'react-native';
//import { Toolbar as MaterialToolbar } from 'react-native-material-design';

import logoImg from '../../assets/Logo.png';
import api from '../../services/api';
import styles from './styles';

export default function Incidents() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [incidents, setIncidents] = useState([]); 
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToDetail(incident){
        navigation.navigate('Detail', {incident});
    }

    async function navigateToHome(){
        //navigation.navigate('Detail', {incident});
        const response = await api.get('login',{
            params: { "email":email, "password":senha}
        });
        
        const response2 = await api.get('usuario',{
            params: { "id":1}
        });
        setEmail(response.data);
        Alert.alert(
            'Alert Title',
            `${JSON.stringify(response2.data)} ${JSON.stringify(response.data)}`,
            [
              {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed')
              },
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
          );
    }

    async function loadIncidents(){
        if (loading) {
            return;
        }

        if (total > 0 && incidents.length == total) {
            return;
        }

        setLoading(true);

       // const response = await api.get('incidents',{
        //   params: {page}
        //});

        //setIncidents([...incidents, ...response.data]);
        //setTotal(response.headers['x-total-count']); 
        setPage(page+1);
        setLoading(false);
    }

    useEffect (( ) => {
        loadIncidents();
    },[]);

    return (
        <View style ={styles.container}>
            
            <View style = {styles.header}>
                <Image source={logoImg} styles={styles.headerImage}/>
            </View>

            
            <Text style = {styles.title}>Bem-vindo Ao Rent Pay</Text>
            <Text style = {styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <Text>Bem-vindo Ao Rent Pay</Text>
            <Text>Escolha um dos casos abaixo e salve o dia.</Text>

                 
            <View>
                <TextInput >Digite o email</TextInput>
                <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text)=>(setEmail(text))}
                value={email}
                /> 
                <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text)=>(setSenha(text))}
               value={senha}
                />
                <TouchableOpacity>
                    <Text>Logar</Text>
                    <Feather name="arrow-right" size={16} color="#e02041" onPress={() => navigateToHome()} />
                </TouchableOpacity>
            </View>    
            <FlatList 
            
                data={incidents}
                style ={styles.incidentList}
                keyExtractor= {incident => String(incident.id)}
                //showsVerticalScrollIndicator = {false}
                onEndReached = {loadIncidents}
                onEndReachedThreshold = {0.3}
                renderItem={({ item: incident})=> (
                    <View style = {styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>Valor:</Text>
                        <Text style={styles.incidentValue}>
                            {Intl
                            .NumberFormat('pt-BR', {style: 'currency',  currency: 'BRL'})
                            .format(incident.value)
                            }
                        </Text>  

                        <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(incident)}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#e02041" />
                        </TouchableOpacity>
                    </View>
                )}          
            />
        </View>
    );
}