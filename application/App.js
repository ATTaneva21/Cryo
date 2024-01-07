import React from 'react';
import { NavigationContainer, NavigationAction } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView, TextProps, Image, ImageBackground } from 'react-native';

import MainMenu from './screens/MainMenuScreen.js';
import LogIn from "../application/screens/LogInScreen.js"
import Register from '../application/screens/RegisterScreen.js';
import Home from './screens/HomeScreen.js';
import AddVechicle from '../application/screens/AddVechicleToWill.js';
import SendMoney from '../application/screens/SendMoneyScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name='Main menu' component={MainMenu}/>
        <Stack.Screen name="Log in" component={LogIn}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Add Vechicle' component={AddVechicle}/>
        <Stack.Screen name='Send Money' component={SendMoney}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}