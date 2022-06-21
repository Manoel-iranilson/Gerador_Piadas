import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  padding: 10px;

  justify-content: center;
  align-items: center;
`;

export const Card = styled(TouchableOpacity)`
  margin-top: 20px;
  padding: 20px;
  height: 100px;
  width: 200px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: white;
  elevation: 10;
`;

export const Title = styled(Text)`
  font-size: 30px;
  color: #2f4f4f;
`;
