import React from 'react';
import { StatusBar, StyleSheet, Text, View, Button, TextInput, SafeAreaView, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';

export default function Settings() {

  return (
    <ImageBackground source={require("../assets/mainBackground.png")} resizeMode="cover" style={{flex:1}}>


        <Text style={styles.text}>Settings</Text>
        <TouchableOpacity onPress={ ()=> { Alert.alert("Currently not working") }}  style={styles.button}>

                <Text style={{
                color: "#4293f5",
                fontSize: 20,
                }}>Edit</Text>
            <StatusBar style='light-content' />

          </TouchableOpacity>
          <SafeAreaView style={styles.body}>
            <Image style={styles.profile}
              source={require("../assets/profile.png")}
              />
              <Text style={styles.textName}>User's name</Text>

        <View>

            <Text style={styles.textInfo}>Resides in</Text>
            <Text style={styles.textInfo}>DateOfBirth</Text>
            <Text style={styles.textInfo}>Password</Text>
            <Text style={styles.textInfo}>Email</Text>
            <Text style={styles.textInfo}>SSN</Text>
        </View>
      </SafeAreaView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "#FFFFFF",
    marginTop: 10,
    marginBottom:70,
    marginLeft: 30
  },
  textName:{
    fontSize: 25,
    color: "#FFFFFF",
    marginLeft: 10
  },
  textInfo: {
    fontSize: 20,
    color: "#FFFFFF",
    marginLeft: -180,
    marginTop: 30
  },

  body: {
    alignItems: 'center',

    flex: 1,

  },
  profile:{
    width : 100,
    height: 100
  },

  button:{
    width: 60,
    height: 30,
    marginTop: -110,
    marginBottom: 70,
    marginLeft: '85%'
  }
 
});