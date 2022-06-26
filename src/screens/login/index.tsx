import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Animated,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, Btn, TxtInput, ImageBack} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import {RootStackParamList} from '../../routes/routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type CategoryJokesScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'TabBar'
>;

const Login: React.FC = () => {
  const navigation = useNavigation<CategoryJokesScreenProp>();
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
    if (email != '' || passoword != '') {
      auth()
        .signInWithEmailAndPassword(email, passoword)
        .then(() => {
          navigation.navigate('TabBar');
        })
        .catch(() =>
          Alert.alert('Invalid account', 'Check the data and try again'),
        );
    } else {
      Alert.alert('Invalid data', 'Check the data and try again');
    }
  }
  return (
    <LinearGradient style={{flex: 1}} colors={['#F0E68C', '#FFFACD']}>
      <Container>
        <Animated.View style={{opacity: opacity}}>
          <Text style={{fontSize: 50}}>JOKES</Text>
        </Animated.View>
        <Animated.View
          style={[
            {alignItems: 'center'},
            {transform: [{translateY: offset.y}]},
          ]}>
          <TxtInput>
            <TextInput
              style={{width: 250, padding: 10}}
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="Email"
            />
          </TxtInput>
          <TxtInput>
            <TextInput
              style={{width: 250, padding: 10}}
              value={passoword}
              onChangeText={text => setPassoword(text)}
              placeholder="Password"
            />
          </TxtInput>

          <TouchableOpacity onPress={() => handleSingin()}>
            <Btn>
              <Text style={{fontSize: 20}}>Log in</Text>
            </Btn>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('register')}>
            <View>
              <Text>Register</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </Container>
    </LinearGradient>
  );
};

export default Login;
