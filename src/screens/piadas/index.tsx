import React, {useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {Ipiadas, Jokes} from '../home';
import {Card, Container, Emotions, Piada} from './styles';
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';

interface IIPiadas {
  data: Jokes;
}
const Piadas: React.FC<IIPiadas> = ({data}) => {
  const [id, setId] = useState(data.id);

  function Enviar(data: any) {
    setId(data.id);
    console.log(id);
    console.log(data.setup);
    firestore().collection('piadas_Curtidas').add({
      id,
      create_at: firestore.FieldValue.serverTimestamp(),
    });
  }

  const [show, setShow] = useState(false);
  function ShowPiada() {
    if (show == false) {
      return (
        <View>
          <Text>show joke</Text>
        </View>
      );
    } else if (show == true) {
      return (
        <View>
          <Text>{data.delivery}</Text>
        </View>
      );
    }
  }

  function Piadatype() {
    if (data.type == 'twopart') {
      return (
        <>
          <View>
            <Piada>{data.setup}</Piada>
          </View>
          <View>
            <TouchableOpacity onPress={() => setShow(!show)}>
              {ShowPiada()}
            </TouchableOpacity>
          </View>
        </>
      );
    } else if (data.type == 'single') {
      return (
        <>
          <View>
            <Text>server error</Text>
          </View>
        </>
      );
    }
  }

  return (
    <LinearGradient style={{flex: 1}} colors={['#FFEFD5', '#FFFACD']}>
      <Container>
        <TouchableOpacity>
          <Card>
            {Piadatype()}
            <Emotions>
              <View style={{marginRight: 30, marginTop: 10}}>
                <TouchableOpacity>
                  <Image source={require('../../assets/icons/dislike.png')} />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={() => Enviar(data)}>
                  <Image source={require('../../assets/icons/gostar.png')} />
                </TouchableOpacity>
              </View>
            </Emotions>
          </Card>
        </TouchableOpacity>
      </Container>
    </LinearGradient>
  );
};

export default Piadas;
