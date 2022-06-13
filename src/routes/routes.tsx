import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login/';
import loginAdm from '../screens/loginAdm/index';
import register from '../screens/register/index';

import TabBar from './tabBar.routes';

const routes: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={TabBar}
        options={{headerShown: false}}
        initialParams={{TabBar}}
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
    </Stack.Navigator>
  );
};

export default routes;
