import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import TotalJokes from '../screens/totalJokes';
import CategoryJokes from '../screens/categoryJokes';

const TabBar: React.FC = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="TotalJokes"
        component={TotalJokes}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="CategoryJokes"
        component={CategoryJokes}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
