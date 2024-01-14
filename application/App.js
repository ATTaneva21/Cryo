import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import MainMenu from './screens/MainMenuScreen.js';
import LogIn from "../application/screens/LogInScreen.js"
import Register from '../application/screens/RegisterScreen.js';
import Home from './screens/HomeScreen.js';
import AddVechicle from '../application/screens/AddVechicleToWill.js';
import SendMoney from '../application/screens/SendMoneyScreen.js';
import Profile from '../application/screens/ProfileScreen.js';
import DigitalWill from '../application/screens/DigitalWill.js';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeScreen() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false}} initialRouteName='Home'>
      <Tab.Screen name="Send Money" component={SendMoney} 
          options={{tabBarIcon: ({ color, size }) => (<Ionicons name="swap-horizontal-outline" color={color} size={size} />)}}
      />
      <Tab.Screen name="Home" component={Home} 
          options={{tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />)}}
      />
      <Tab.Screen name="DigitalWill" component={DigitalWill} 
          options={{tabBarIcon: ({ color, size }) => (<Ionicons name="reader-outline" color={color} size={size} />)}}
      />
       
      
    </Tab.Navigator>
  );
}




export default function Main(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name='Main menu' component={MainMenu}/>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name="Log in" component={LogIn}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}



