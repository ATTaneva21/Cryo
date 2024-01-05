import React from 'react';
import { StatusBar, StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView, TextProps, Image, ImageBackground } from 'react-native';

export default function HomeScreen({navigation}) {
      const [username, onChangeText] = React.useState('');
      const [passoword, onChangePassoword] = React.useState('');
      var valueUsername;
  return (
    <ImageBackground source={require("../assets/loginBackground.png")} resizeMode="cover" style={{flex:1}}>
    <SafeAreaView style={styles.body}>
      <View style = {styles.box}></View>
        <Image
        source={require("../assets/placeholder.png")}
        />
      <Text style={styles.text}>Log in</Text>
      
      <StatusBar style='light-content' />
      
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={username}
        placeholder="Enter email"
        valueUsername = {onChangeText}
        placeholderTextColor={"#24353E"}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassoword}
        value={passoword}
        placeholder="Enter password"
        secureTextEntry={true}
        placeholderTextColor={"#24353E"}
      />
      
      <Button
        
        onPress={ ()=> { 
          if(username === 'user1' && passoword === 'pass1' ){
            Alert.alert("jj")
          }
          else{
            Alert.alert("Wrong username or password")
          }
        }}
        title="Log in"
        color="black"
      />
      
      <Button
        
        onPress={ ()=> { navigation.navigate("Main menu");}}
        title="Back"
        color="black"
      />

    </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  input:{
    flexDirection: 'row',
    borderBottomColor: '#24353E',
    borderBottomWidth: 2,
    margin: 12,
    width: 250,
    padding: 10,
    

  },

  text: {
    fontSize: 30,
    color: "#FFFFFF",
  },

  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  box: {
    width: 296,
    height: 358,
    backgroundColor: "#89ADB9",
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    opacity:0.42
  }

});
