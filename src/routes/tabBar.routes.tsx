import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import TotalJokes from '../screens/totalJokes';

import CategoryJokes from '../screens/categoryJokes';
import {Animated, Image, View} from 'react-native';

const TabBar: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FFD700',
        tabBarStyle: {backgroundColor: '#363636', padding: 5},
        tabBarLabel: '',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Highlight jokes',
          headerShown: true,
          headerTitleAlign: 'center',
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <View>
                    <Image
                      source={require('../assets/icons/distintivo2.png')}
                    />
                  </View>
                ) : (
                  <Image source={require('../assets/icons/distintivo.png')} />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="TotalJokes"
        component={TotalJokes}
        options={{
          title: 'All Jokes',
          headerShown: true,
          headerTitleAlign: 'center',
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <View>
                    <Image source={require('../assets/icons/tudo2.png')} />
                  </View>
                ) : (
                  <Image source={require('../assets/icons/tudo.png')} />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="CategoryJokes"
        component={CategoryJokes}
        options={{
          title: 'Category Jokes',
          headerShown: true,
          headerTitleAlign: 'center',
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <View>
                    <Image source={require('../assets/icons/categoria2.png')} />
                  </View>
                ) : (
                  <Image source={require('../assets/icons/categoria.png')} />
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
