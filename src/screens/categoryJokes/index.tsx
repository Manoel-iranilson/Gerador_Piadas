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
    <LinearGradient style={{flex: 1}} colors={['#F0E68C', '#FFFACD']}>
      <Container>
        <Card onPress={() => navigation.navigate('assustador')}>
          <Text>Scary</Text>
        </Card>
        <Card onPress={() => navigation.navigate('escuro')}>
          <Text>Dark</Text>
        </Card>
        <Card onPress={() => navigation.navigate('programacao')}>
          <Text>Programming</Text>
        </Card>
        <Card onPress={() => navigation.navigate('misc')}>
          <Text>Misc</Text>
        </Card>
        <Card onPress={() => navigation.navigate('trocadinhos')}>
          <Text>Puns</Text>
        </Card>
        <Card onPress={() => navigation.navigate('natal')}>
          <Text>Christmas</Text>
        </Card>
      </Container>
    </LinearGradient>
  );
};

export default CategoryJokes;
