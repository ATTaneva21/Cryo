import React from 'react';
import { StatusBar, StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView, TextProps, Image, ImageBackground,TouchableOpacity } from 'react-native';

export default function HomeScreen({navigation}) {
      const [username, onChangeText] = React.useState('');
      const [passoword, onChangePassoword] = React.useState('');
      var valueUsername;
  return (
    <ImageBackground source={require("../assets/mainBackground.png")} resizeMode="cover" style={{flex:1}}>
    <View>        
        <TouchableOpacity onPress={ ()=> { navigation.navigate("Profile") }}  style={styles.profile}>
          <Image source={require('../assets/profile.png')} />
        </TouchableOpacity>
    </View>
    <SafeAreaView style={styles.body}>
        <Text style={styles.text}>Digital will</Text>
        <View style = {styles.box}></View>
    </SafeAreaView>
    <TouchableOpacity onPress={ ()=> { navigation.navigate("Log in") }} style={styles.button2}>

            <Text style={{
              color: "white",
              fontSize:16,
              textAlign: "center"
              }}>Send</Text>

    </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 28,
        color: "#FFFFFF",
        marginLeft: -220
        
        
    },
    body: {
        alignItems: 'center',
        
        flex: 1
      },

    box: {
        width: 360,
        height: 500,
        backgroundColor: "#080C12",
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginTop:50
        },

  
  profile:{
    width: '10%',
    height: '10%',
    marginTop: '2.5%',
    marginLeft: '85%',
    marginBottom: '-15%'
  },

  button2:{
    width: '17%',
    height: '4%',
    backgroundColor:"#468189",
    borderRadius: 65,
    marginBottom: '2%',
    marginLeft: '77%'
  }

});
