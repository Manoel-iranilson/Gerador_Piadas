import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Animated,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';
import {Container, TxtInput, Btn, Title} from './styles';
import auth from '@react-native-firebase/auth';

const Register: React.FC = () => {
  const navigation = useNavigation();
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [opacity] = useState(new Animated.Value(0));
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [passoword, setPassoword] = React.useState<string>('');

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 3,
        bounciness: 25,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 2,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  });

  function handleNewAccount() {
    auth()
      .createUserWithEmailAndPassword(email, passoword)
      .then(() => Alert.alert('Conta', 'Cadastrado com sucesso!!!'))
      .catch(error => console.log(error));
  }

  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#000000', '#363636', '#363636']}>
      <Container>
        <Animated.View style={{opacity: opacity}}>
          <Title>Registrar-se</Title>
        </Animated.View>
        <Animated.View
          style={[
            {alignItems: 'center'},
            {transform: [{translateY: offset.y}]},
          ]}></Animated.View>
        <TxtInput>
          <TextInput
            placeholder="Digite seu Nome"
            value={name}
            onChangeText={text => setName(text)}
            style={{width: 250, padding: 10, color: 'white'}}
            placeholderTextColor="white"
          />
        </TxtInput>
        <TxtInput>
          <TextInput
            placeholder="Digite seu Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={{width: 250, padding: 10, color: 'white'}}
            placeholderTextColor="white"
          />
        </TxtInput>
        <TxtInput>
          <TextInput
            placeholder="Digite sua senha"
            value={passoword}
            onChangeText={text => setPassoword(text)}
            style={{width: 250, padding: 10, color: 'white'}}
            placeholderTextColor="white"
          />
        </TxtInput>
        <TouchableOpacity onPress={() => handleNewAccount()}>
          <Btn>
            <Text>Registrar</Text>
          </Btn>
        </TouchableOpacity>
      </Container>
    </LinearGradient>
  );
};

export default Register;
