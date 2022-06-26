import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, ActivityIndicator, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import { Container } from './styles';
import api from '../../services/api';
import Piadas from '../piadas';

export interface Jokes {
  category: string;
  delivery: string;
  flags: [Object];
  id: number;
  lang: string;
  safe: boolean;
  setup: string;
  type: string;
  joker: string;
}

export interface Ipiadas {
  id: number;
  jokes: Jokes[];
}

const Home: React.FC = () => {
  const [piadas, setPiadas] = useState<Ipiadas>();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function Apiget() {
      try {
        const response = await api.get('/joke/Any?amount=10?type=twopart');
        setPiadas(response.data);
        console.log(response);
        setLoad(true);
      } catch (error) {
        Alert.alert('Error', 'Verifique se você esta conectado a internet');
        console.log(error);
      }
    }
    Apiget();
  }, []);

  if (load === false) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="#FFD700" size={40} />
      </View>
    );
  } else {
    return (
      <View>
        <FlatList
          data={piadas?.jokes}
          // keyExtractor={item => item}
          renderItem={({item, index}) => <Piadas key={index} data={item} />}
        />
      </View>
    );
  }
};

export default Home;
