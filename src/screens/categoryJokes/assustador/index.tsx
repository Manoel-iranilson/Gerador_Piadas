import React, {useEffect, useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import api from '../../../services/api';
import {Jokes} from '../../home';
import Piadas from '../../piadas';
import {Title} from '../styles';

// import { Container } from './styles';

export interface Ipiadas {
  id: number;
  jokes: Jokes[];
}

const Assustador: React.FC = () => {
  const [piadas, setPiadas] = useState<Ipiadas>();

  useEffect(() => {
    async function Apiget() {
      const response = await api.get('/joke/Miscellaneous?amount=10');
      setPiadas(response.data);
      console.log(response);
    }
    Apiget();
  }, []);
  return (
    <View>
      <Title>Miscellaneous</Title>
      <FlatList
        data={piadas?.jokes}
        // keyExtractor={item => item}
        renderItem={({item, index}) => <Piadas key={index} data={item} />}
      />
    </View>
  );
};

export default Assustador;
