import React from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native';

export default function Register({navigation}) {
      const [userName, onChangeUserName] = React.useState('');
      const [password, onChangePassword] = React.useState('');
      const [confirmPassword, onChangeConfirmPassword] = React.useState('');
      
  return (
    <ImageBackground source={require("../assets/loginBackground.png")} resizeMode="cover" style={{flex:1}}>

      <SafeAreaView style={styles.body}>
        <View style = {styles.box}></View>
          <Image
          source={require("../assets/placeholder.png")}
          />
        <Text style={styles.text}>Sign up</Text>
        
        <StatusBar style='light-content' />
        <View>
        
          <TextInput
            style={styles.input}
            onChangeText={onChangeUserName}
            value={userName}
            placeholder="Enter an username"
            placeholderTextColor={"#24353E"}
          />

          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Enter a password"
            secureTextEntry={true}
            placeholderTextColor={"#24353E"}
          />

          <TextInput
            style={styles.input}
            onChangeText={onChangeConfirmPassword}
            value={confirmPassword}
            placeholder="Confirm your password"
            secureTextEntry={true}
            placeholderTextColor={"#24353E"}
          />

        </View>
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={ ()=> { navigation.navigate("Main menu") }}  style={styles.button1}>
            
            <Text style={{
              color: "white",
              fontSize:16,
              textAlign: "center"
            }}>Back</Text>

          </TouchableOpacity>

          <TouchableOpacity onPress={ ()=> { navigation.navigate("Log in") }} style={styles.button2}>

            <Text style={{
              color: "white",
              fontSize:16,
              textAlign: "center"
              }}>Next</Text>

          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  input:{
    borderBottomColor: '#24353E',
    borderBottomWidth: 2,
    margin: '2.4%',
    width: 250,
    padding: 5,
    color: "#FFFFFF"
  },
  
  inputDetail:{
    borderBottomColor: '#24353E',
    borderBottomWidth: 2,
    margin: 12,
    width: '25%',
    padding: 5,
    color: "#FFFFFF"
  },

  text: {
    fontSize: 30,
    color: "#FFFFFF",
    marginBottom: '10%'
  },

  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  box: {
    width: 320,
    height: 525,
    backgroundColor: "#89ADB9",
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    opacity:0.42
  },

  button1:{
    width: '15%',
    height: '22%',
    backgroundColor:"#468189",
    borderRadius: 65,
    marginTop:'20%',
    marginLeft: '35%'
    
  },
  button2:{
    width: '15%',
    height: '22%',
    backgroundColor:"#468189",
    borderRadius: 65,
    marginTop:'20%',
    marginBottom: '4%',
    marginLeft: '4%'
  }

});
