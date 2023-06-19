import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import ProductDetails from './src/pages/ProductDetails';
import Products from './src/pages/Products';
import Profile from './src/pages/Profile';

function StackScreen() {
     return (
          <Stack.Navigator>
               <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}></Stack.Screen>
               <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}></Stack.Screen>
               <Stack.Screen name="Products" component={Products} options={{ headerShown: false }}></Stack.Screen>
               <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }}></Stack.Screen>
          </Stack.Navigator>
     )
}
const Stack = createStackNavigator()

export default function App() {

     const Tab = createBottomTabNavigator();
     return (
          <>
               <NavigationContainer>
                    <Tab.Navigator
                         screenOptions={{
                              headerTitleStyle: {
                                   color: '#fff',
                                   fontSize: 23
                              },
                              tabBarStyle: {

                              },
                              headerStyle: {
                                   backgroundColor: '#008C8B',
                              },
                              tabBarActiveTintColor: "#8A8A8A",
                              tabBarInactiveTintColor: "#8A8A8A",
                         }}
                    >
                         <Tab.Screen name="Home" component={Home}
                              options={{
                                   tabBarIcon: ({ size, color }) => (
                                        <MaterialIcons
                                             name='home'
                                             size={25}
                                             color="#8A8A8A"
                                        />
                                   ),
                              }}
                         ></Tab.Screen>
                         <Tab.Screen name="Inicio" component={StackScreen} options={{
                              tabBarButton: () => null,
                              tabBarStyle: {
                                   display: 'none'
                              },
                              headerShown: false,

                         }}></Tab.Screen>
                         <Tab.Screen name="shop" component={Products} options={{
                              headerRight: () => (
                                   <TouchableOpacity>
                                        <MaterialIcons
                                             name='shopping-cart'
                                             size={26}
                                             color="#fff"
                                             style={{ marginRight: 15, alignContent: 'center', marginTop: 5 }}
                                        />
                                   </TouchableOpacity>
                              ),
                              tabBarIcon: ({ size, color }) => (
                                   <MaterialIcons
                                        name='shopping-bag'
                                        size={22}
                                        color={'#8A8A8A'}
                                   />
                              ),
                         }}></Tab.Screen>
                         <Tab.Screen
                              name="ProductDetails"
                              component={ProductDetails}
                              options={({ navigation }) => ({
                                   title: 'Detalhes do Produto',
                                   headerRight: () => (
                                        <TouchableOpacity>
                                             <MaterialIcons
                                                  name='shopping-cart'
                                                  size={26}
                                                  color="#ffff"
                                                  style={{ marginRight: 15, alignContent: 'center', marginTop: 5 }}
                                             />
                                        </TouchableOpacity>
                                   ),
                                   headerLeft: () => (
                                        <TouchableOpacity onPress={() => navigation.navigate('shop')}>
                                             <MaterialIcons
                                                  name='chevron-left'
                                                  size={40}
                                                  color="#ffff"
                                             />
                                        </TouchableOpacity>
                                   ),
                                   tabBarButton: () => null,
                              })}
                         ></Tab.Screen>
                          <Tab.Screen name="Profile" component={Profile}
                              options={{
                                   title:'Perfil',
                                   tabBarIcon: ({ size, color }) => (
                                        <MaterialIcons
                                             name='person'
                                             size={25}
                                             color="#8A8A8A"
                                        />
                                   ),
                              }}
                         ></Tab.Screen>
                    </Tab.Navigator>
               </NavigationContainer>
          </>
     );
}
