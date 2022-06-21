import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login/';
import loginAdm from '../screens/loginAdm/index';
import register from '../screens/register/index';
import assustador from '../screens/categoryJokes/assustador';
import escuro from '../screens/categoryJokes/escuro';
import misc from '../screens/categoryJokes/misc';
import natal from '../screens/categoryJokes/natal';
import programacao from '../screens/categoryJokes/programacao';
import trocadinhos from '../screens/categoryJokes/trocadinhos';
import TabBar from './tabBar.routes';

export type RootStackParamList = {
  Login: undefined;
  loginAdm: undefined;
  register: undefined;
  assustador: undefined;
  escuro: undefined;
  misc: undefined;
  natal: undefined;
  programacao: undefined;
  trocadinhos: undefined;
  TabBar: undefined;
};

const routes: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabBar"
        component={TabBar}
        options={{headerShown: false}}
        initialParams={{name: 'TabBar'}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="register"
        component={register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="assustador"
        component={assustador}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="escuro"
        component={escuro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="misc"
        component={misc}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="natal"
        component={natal}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="programacao"
        component={programacao}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="trocadinhos"
        component={trocadinhos}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default routes;
