import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainMenu from './screens/MainMenuScreen.js';
import LogIn from "../application/screens/LogInScreen.js"
import Register from '../application/screens/RegisterScreen.js';
import Home from './screens/HomeScreen.js';
import AddVechicle from '../application/screens/AddVechicleToWill.js';
import SendMoney from '../application/screens/SendMoneyScreen.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false}}>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Add Vechicle' component={AddVechicle}/>
        <Tab.Screen name='Send Money' component={SendMoney}/>
      </Tab.Navigator>
  );
}

export default function Main(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name='Main menu' component={MainMenu}/>
        <Stack.Screen name="Log in" component={LogIn}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
