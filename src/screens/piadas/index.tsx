import React, {useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {Ipiadas, Jokes} from '../home';
import {Card, Container, Emotions, Piada} from './styles';
import firestore from '@react-native-firebase/firestore';
import Like from '../../assets/icons/like2.svg';

interface IIPiadas {
  data: Jokes;
}
const Piadas: React.FC<IIPiadas> = ({data}) => {
  const [id, setId] = useState(data.id);

  function Enviar(data: any) {
    setId(data.id);
    console.log(id);
    console.log(data.setup);
    firestore().collection('piada').add({
      id,
      create_at: firestore.FieldValue.serverTimestamp(),
    });
  }

  function ShowPiada() {
    const [show, setShow] = useState(0);

    if (show == 0) {
      return (
        <View>
          <Text>da</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text>ggg</Text>
        </View>
      );
    }
  }

  return (
    <Container>
      <TouchableOpacity onPress={() => Enviar(data)}>
        <Card>
          <View>
            <Piada>{data.setup}</Piada>
          </View>
          <TouchableOpacity onPress={() => ShowPiada()}></TouchableOpacity>
          <Emotions>
            <View style={{marginRight: 30, marginTop: 10}}>
              <TouchableOpacity>
                <Image source={require('../../assets/icons/dislike.png')} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image source={require('../../assets/icons/gostar.png')} />
              </TouchableOpacity>
            </View>
          </Emotions>
        </Card>
      </TouchableOpacity>
    </Container>
  );
};

export default Piadas;
