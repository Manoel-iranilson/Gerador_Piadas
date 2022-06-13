import {View, Text} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  padding: 10px;
`;

export const Card = styled(View)`
  height: 200px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: gray;
`;

export const Piada = styled(Text)`
  font-size: 20px;
  color: white;
`;
