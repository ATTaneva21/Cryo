import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView, TextProps } from 'react-native';

export default function HomeScreen() {
      const [username, onChangeText] = React.useState('');
      const [passoword, onChangePassoword] = React.useState('');
      var valueUsername;
  return (
    <SafeAreaView style={styles.body}>

      <Text style={styles.text}>Digital will</Text>

      <StatusBar style="auto" />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    top: -50,
  },

  body: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray', 
    flex: 1
  },

  input: {
    margin: 12,
    borderWidth: 1,
    width: 250,
    padding: 10,
  },

  accout: {
    backgroundColor: 'pink', 
  }
  
});
