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
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={username}
        placeholder="Username"
        valueUsername = {onChangeText}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassoword}
        value={passoword}
        placeholder="Password"
      />
      
      <Button
        
        onPress={ ()=> { 
          if(username === 'user1' && passoword === 'pass1' ){
            
              
            Alert.alert("Correct")
              
            
          }
          else{
            Alert.alert("Wrong username or password")
          }
        }}
        title="Log in"
        color="black"
        accessibilityLabel="Learn more about this purple button"
      />
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
    backgroundColor: 'pink', 
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
