import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Card, Container, Title} from './styles';
import LinearGradient from 'react-native-linear-gradient';

type CategoryJokesScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'TabBar'
>;

const CategoryJokes: React.FC = () => {
  const navigation = useNavigation<CategoryJokesScreenProp>();
  return (
    <LinearGradient style={{flex: 1}} colors={['#FFEFD5', '#FFFACD']}>
      <Container>
        <Title>Categorias</Title>
        <Card onPress={() => navigation.navigate('assustador')}>
          <Text>Assustador</Text>
        </Card>
        <Card onPress={() => navigation.navigate('escuro')}>
          <Text>Escuro</Text>
        </Card>
        <Card onPress={() => navigation.navigate('programacao')}>
          <Text>Programação</Text>
        </Card>
        <Card onPress={() => navigation.navigate('misc')}>
          <Text>Misc</Text>
        </Card>
        <Card onPress={() => navigation.navigate('trocadinhos')}>
          <Text>Trocadinhos</Text>
        </Card>
        <Card onPress={() => navigation.navigate('natal')}>
          <Text>Natal</Text>
        </Card>
      </Container>
    </LinearGradient>
  );
};

export default CategoryJokes;
