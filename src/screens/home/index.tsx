import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
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
}

export interface Ipiadas {
  id: number;
  jokes: Jokes[];
}

const Home: React.FC = () => {
  const [piadas, setPiadas] = useState<Ipiadas>();

  useEffect(() => {
    async function Apiget() {
      const response = await api.get('/joke/Any?amount=5');
      setPiadas(response.data);
      console.log(response);
    }
    Apiget();
  }, []);

  return (
    <View>
      <FlatList
        data={piadas?.jokes}
        // keyExtractor={item => item}
        renderItem={({item, index}) => <Piadas key={index} data={item} />}
      />
    </View>
  );
};

export default Home;
