import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login/';
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
        options={{
          title: 'Scary jokes',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#363636',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="escuro"
        component={escuro}
        options={{
          title: 'Dark jokes',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#363636',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="misc"
        component={misc}
        options={{
          title: 'Mystic jokes',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#363636',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="natal"
        component={natal}
        options={{
          title: 'Christmas jokes',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#363636',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="programacao"
        component={programacao}
        options={{
          title: 'Programming jokes',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#363636',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="trocadinhos"
        component={trocadinhos}
        options={{
          title: 'Puns',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#363636',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default routes;
