import React from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, SafeAreaView, Image, ImageBackground, TouchableOpacity, SectionList } from 'react-native';
import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = "https://lfuhwchxwksgmhwbbhap.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmdWh3Y2h4d2tzZ21od2JiaGFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3NTUxNjEsImV4cCI6MjAyMTMzMTE2MX0.hGBH4G60yeqRhf8CENjA4Oead2UPD9jTEUiCTk0eKPA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Register({navigation}) {
      const [fullName, onChangefullName] = React.useState('');
      const [userName, onChangeUserName] = React.useState('');
      const [password, onChangePassword] = React.useState('');
      const [email, onChangeEmail] = React.useState('');
      const [egn, onChangeEgn] = React.useState('');
      const [age, onChangeAge] = React.useState('');


      const handleRegister = async () => {
        try {
          const { data, error } = await supabase
            .from('users')
            .insert([{ fullName: fullName, username: userName, password: password, email: email, SSN : egn, Birthday: age }]);
    
          if (error) {
            console.error('Error registering user:', error.message);
            return;
          }
    
          console.log('User registered successfully:', data);
          
        } catch (error) {
          console.error('Error registering user:', error.message);
        }
      };

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
            onChangeText={onChangefullName}
            value={fullName}
            placeholder="Enter your full name"
            placeholderTextColor={"#24353E"}
          />

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
            placeholderTextColor={"#24353E"}
          />

          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Enter email"
            placeholderTextColor={"#24353E"}
            require={"@"}
          />
        </View>
        <View style={{flexDirection:"row"}}>
          <TextInput
            style={styles.inputDetail}
            onChangeText={onChangeEgn}
            value={egn}
            placeholder="EGN"
            placeholderTextColor={"#24353E"}
          />
          <TextInput
            style={styles.inputDetail}
            onChangeText={onChangeAge}
            value={age}
            placeholder="Date of birth"
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

          <TouchableOpacity onPress={ ()=> { handleRegister(),navigation.navigate("Main menu") }} style={styles.button2}>
         
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
    height: '55%',
    backgroundColor:"#468189",
    borderRadius: 65,
    marginTop:'1%',
    marginLeft: '35%'
    
  },
  button2:{
    width: '15%',
    height: '55%',
    backgroundColor:"#468189",
    borderRadius: 65,
    marginTop:'1%',
    marginBottom: '4%',
    marginLeft: '4%'
  }

});
