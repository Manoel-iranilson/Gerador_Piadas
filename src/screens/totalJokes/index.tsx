import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import Piadas from '../piadas';
import api from '../../services/api';
// import { Container } from './styles';

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

const TotalJokes: React.FC = () => {
  const [piadas, setPiadas] = useState<Ipiadas>();

  useEffect(() => {
    async function Apiget() {
      const response = await api.get('/joke/Any?amount=10');
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

export default TotalJokes;
