import React from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native';

export default function Register({navigation}) {
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
        <Text style={styles.text}>Sign up</Text>
        
        <StatusBar style='light-content' />
        
        
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={username}
          placeholder="Enter first name"
          valueUsername = {onChangeText}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={username}
          placeholder="Enter surname"
          valueUsername = {onChangeText}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={username}
          placeholder="Enter last nameh"
          valueUsername = {onChangeText}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={username}
          placeholder="Enter email"
          valueUsername = {onChangeText}
        />
        <View style={{flexDirection:"row"}}>
        <TextInput
          style={styles.inputDetail}
          onChangeText={onChangeText}
          value={username}
          placeholder="Egn"
          valueUsername = {onChangeText}
        />
        <TextInput
          style={styles.inputDetail}
          onChangeText={onChangeText}
          value={username}
          placeholder="Age"
          valueUsername = {onChangeText}
        />
        </View>
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={ ()=> { navigation.navigate("Register") }}  style={styles.buttons}>
            
            <Text style={{
              color: "white",
              fontSize:16,
              textAlign: "center"
            }}>Back</Text>

          </TouchableOpacity>

          <TouchableOpacity onPress={ ()=> { navigation.navigate("Log in") }} style={styles.buttons}>

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
    margin: 12,
    width: 250,
    padding: 5,
  },
  
  inputDetail:{
    borderBottomColor: '#24353E',
    borderBottomWidth: 2,
    margin: 12,
    width: 58,
    padding: 5,
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
    height: 435,
    backgroundColor: "#89ADB9",
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    opacity:0.42
  },

  buttons:{
    width: 60,
    height: 30,
    backgroundColor:"#468189",
    borderRadius: 65,
    marginBottom: 20,
  }

});
