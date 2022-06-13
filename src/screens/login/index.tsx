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
import {Container, Btn, TxtInput} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [opacity] = useState(new Animated.Value(0));
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

  function handleSingin() {
    auth()
      .signInWithEmailAndPassword(email, passoword)
      .then(() => {
        navigation.navigate('Tab');
      })
      .catch(() =>
        Alert.alert('Conta invalida', 'Verifique os dados e tente novamente'),
      );
  }

  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#000000', '#363636', '#363636']}>
      <Container>
        <Animated.View style={{opacity: opacity}}>
          <Text style={{color: 'white', fontSize: 30}}>haha</Text>
          <Text style={{color: 'white', fontSize: 30}}>haha</Text>
          <Text style={{color: 'white', fontSize: 30}}>hahaha</Text>
          <Text style={{color: 'white', fontSize: 30}}>hahaha</Text>
          <Text style={{color: 'white', fontSize: 30}}>hahaha</Text>
          <Text style={{color: 'white', fontSize: 30}}>hahaha</Text>
          <Text style={{color: 'white', fontSize: 30}}>Piadas</Text>
        </Animated.View>
        <Animated.View
          style={[
            {alignItems: 'center'},
            {transform: [{translateY: offset.y}]},
          ]}>
          <TxtInput>
            <TextInput
              style={{width: 250, padding: 10, color: 'white'}}
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="Email"
              placeholderTextColor="white"
            />
          </TxtInput>
          <TxtInput>
            <TextInput
              style={{width: 250, padding: 10, color: 'white'}}
              value={passoword}
              onChangeText={text => setPassoword(text)}
              placeholder="Senha"
              placeholderTextColor="white"
            />
          </TxtInput>

          <TouchableOpacity onPress={() => handleSingin()}>
            <Btn>
              <Text style={{color: 'white', fontSize: 20}}>Entrar</Text>
            </Btn>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('register')}>
            <View>
              <Text style={{color: 'white'}}>Registra-se</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </Container>
    </LinearGradient>
  );
};

export default Login;
