import React, {useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {Ipiadas, Jokes} from '../home';
import {Card, Container, Piada} from './styles';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IIPiadas {
  data: Jokes;
}
const Piadas: React.FC<IIPiadas> = ({data}) => {
  const [id, setId] = useState(data.id);

  function Enviar(data: any) {
    setId(data.id);
    console.log(id);
    firestore().collection('piada').add({
      id,
      create_at: firestore.FieldValue.serverTimestamp(),
    });
  }

  return (
    <Container>
      <TouchableOpacity onPress={() => Enviar(data)}>
        <Card>
          <Text>{id}</Text>
          <Text>{data.id}</Text>
          <View>
            <Piada>{data.setup}</Piada>
          </View>
          <Text>{data.delivery}</Text>
          <View>
            <Icon name="users" size={60} color="#900" />
          </View>
        </Card>
      </TouchableOpacity>
    </Container>
  );
};

export default Piadas;
