import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function MainMenu({navigation}) {
  return (
    <ImageBackground source={require("../assets/loginBackground.png")} resizeMode="cover" style={{flex: 1}}>

         {/*Display container box*/}
        <View style = {styles.box}></View>
          
        {/*Display starting screen text*/}
        <Text style={styles.text}>Welcome to</Text>
        <Text style={styles.boldness}>Cryo</Text>

        <Image source={require("../assets/placeholder.png")} style={{marginBottom: 30, marginTop: 10}}/>

        {/*Add gradient to button background*/}
        <LinearGradient colors={["#468189", "#77ACA2"]} style={styles.buttons}>

          {/*Upon clicking the register button, enter register screen*/}
          <TouchableOpacity onPress={ ()=> { navigation.navigate("Register") }}>
            
            {/*Add stylization to text*/}
            <Text style={{
              color: "white",
              fontSize:16,
              textAlign: "center"
            }}>Register an account</Text>
          
          </TouchableOpacity>
        </LinearGradient>

        {/*Add gradient to button background*/}
        <LinearGradient colors={["#468189", "#77ACA2"]} style={styles.buttons}>

          {/*Upon clicking the login button, enter login screen*/}
          <TouchableOpacity onPress={ ()=> { navigation.navigate("Log in") }}>
            
            {/*Add stylization to text*/}
            <Text style={{
              color: "white",
              fontSize:16,
              textAlign: "center"
              }}>Log into an existing account</Text>

          </TouchableOpacity>
        </LinearGradient>
    </ImageBackground>
  );
}

//Add stylization to file
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
