import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView, TextProps } from 'react-native';

export default function HomeScreen() {
      const [username, onChangeText] = React.useState('');
      const [passoword, onChangePassoword] = React.useState('');
      var valueUsername;
  return (
    <SafeAreaView style={styles.body}>

      <Text style={styles.text}>Cryo</Text>

      <StatusBar style="auto" />
      
      <View>
        styles = {styles.view}

        <TextInput
          
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
      </View>

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
        accessibilityLabel="Learn more about this button"
      />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({

  view:{
    flexDirection: 'row',
    borderBottomColor: '#24353E',
    borderBottomWidth: 2,
  },

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
