import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login'
import CreateAccount from '../pages/CreateAccount'
import Home from '../pages/Home';


const Tab = createBottomTabNavigator();



function Tabs() {
  return (
    <Tab.Navigator

      screenOptions={{
        tabBarStyle: {
          height: 80,
          paddingHorizontal: 35,
          paddingBottom: 20,
          

        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#000",
      }}
    >
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarStyle: {
            display: 'none'
          },
          headerShown: false,
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image
              style={{ width: 36, height: 41, marginBottom:100 }}
              source={require('../assets/MenuHome.png')}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="CreateAccount"
        component={CreateAccount}

        options={{
          tabBarButton: () => null,
          tabBarStyle: {
            display: 'none'
          },
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="Resume"
        component={Resume}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image
              style={{ width: 16, height: 21 }}
              source={require('../assets/MenuTrade.png')}
            />
          ),
          tabBarButton: () => null,
          headerShown: false,
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default Tabs;