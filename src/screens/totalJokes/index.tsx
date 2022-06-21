import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import Piadas from '../piadas';
import api from '../../services/api';
import {Jokes} from '../home';
// import { Container } from './styles';

export interface Ipiadas {
  id: number;
  jokes: Jokes[];
}

const TotalJokes: React.FC = () => {
  const [piadas, setPiadas] = useState<Ipiadas>();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function Apiget() {
      const response = await api.get('/joke/Any?amount=20?type=twopart');
      setPiadas(response.data);
      console.log(response);
      setLoad(true);
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

export default TotalJokes;
