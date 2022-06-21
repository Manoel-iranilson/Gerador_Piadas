import {View, Image, ImageBackground} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageBack = styled(ImageBackground)`
  width: 100%;
`;

export const TxtInput = styled(View)`
  width: 250px;
  border-width: 2px;
  border-radius: 8px;
  border-color: #808080;
  align-items: center;
  margin-top: 20px;
`;

export const Btn = styled(View)`
  width: 250px;
  height: 40px;
  justify-content: center;
  border-width: 2px;
  border-radius: 8px;
  border-color: #87cefa;
  align-items: center;
  margin-top: 20px;
  background-color: #87cefa;
  margin-bottom: 5px;
`;
