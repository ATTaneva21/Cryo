import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native';

export default function MainMenu({navigation}) {
  return (
    <ImageBackground source={require("../assets/loginBackground.png")} resizeMode="cover" style={{flex: 1}}>

      <SafeAreaView style={styles.body}>

        <View style = {styles.box}></View>
          
        <Text style={styles.text}>Welcome to</Text>
        <Text style={styles.boldness}>Cryo</Text>

        <Image source={require("../assets/placeholder.png")} style={{top: -18}}/>
        
        <StatusBar style='light-content' />

        <TouchableOpacity onPress={ ()=> { navigation.navigate("Register1") }}  style={styles.buttons}>
          
          <Text style={{
            color: "white",
            fontSize:16,
            textAlign: "center"
          }}>Register an account</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={ ()=> { navigation.navigate("Log in") }} style={styles.buttons}>

          <Text style={{
            color: "white",
            fontSize:16,
            textAlign: "center"
            }}>Log into an existing account</Text>

        </TouchableOpacity>

      </SafeAreaView>
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: "#FFFFFF",
  },

  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  box: {
    width: '78%',
    height: '45%',
    backgroundColor: "#89ADB9",
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    opacity:0.42
  },

  buttons:{
    width: '65%',
    height: '3.5%',
    backgroundColor:"#468189",
    borderRadius: 65,
    marginBottom: '4%',
   
  },
  boldness:{
    fontSize: 25,
    color: "#FFFFFF",
    fontWeight: "bold"
  }

});
