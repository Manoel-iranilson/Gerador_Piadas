import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// import { Container } from './styles';

const CategoryJokes: React.FC = () => {
  return (
    <View>
      <Text>Categorias</Text>
      <TouchableOpacity>
        <Text>Misc</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Programação</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Escuro</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Trocadinhos</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Assustador</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Natal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryJokes;
