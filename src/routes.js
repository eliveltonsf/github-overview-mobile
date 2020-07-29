import * as React from 'react';
import { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          title: 'Usuários',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}

export default Routes;
