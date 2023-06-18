import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login'
import CreateAccount from '../pages/CreateAccount'
import Home from '../pages/Home';


const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}

export default Routes;