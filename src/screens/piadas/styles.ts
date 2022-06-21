import {View, Text} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  padding: 10px;

  justify-content: center;
  align-items: center;
`;

export const Card = styled(View)`
  padding: 20px;
  height: 220px;
  width: 350px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: white;
  elevation: 10;
`;

export const Piada = styled(Text)`
  font-size: 20px;
  color: black;
`;

export const Emotions = styled(View)`
  margin-left: 170px;
  flex-direction: row;
  padding: 22px;
`;
