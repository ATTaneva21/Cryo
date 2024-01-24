import React from 'react';
import { StatusBar, StyleSheet, Text, View, Alert, TextInput, SafeAreaView, Image, ImageBackground,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';


const supabaseUrl = "https://lfuhwchxwksgmhwbbhap.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmdWh3Y2h4d2tzZ21od2JiaGFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3NTUxNjEsImV4cCI6MjAyMTMzMTE2MX0.hGBH4G60yeqRhf8CENjA4Oead2UPD9jTEUiCTk0eKPA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function LogIn({navigation}) {
  const [userName, onChangeUserName] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const checkCredentials = async () => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', userName)
      .eq('password', password);

    if (error) {
      console.error(error);
      return;
    }

    if (data.length > 0) {
      navigation.navigate("HomeScreen");
    } else {
      Alert.alert("Wrong username or password");
    }
  };

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
          onChangeText={onChangeUserName}
          value={userName}
          placeholder="Enter your username"
          placeholderTextColor={"#24353E"}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Enter password"
          secureTextEntry={true}
          placeholderTextColor={"#24353E"}
        />
        <View style={{flexDirection:"row"}}>
        <LinearGradient colors={["#468189", "#77ACA2"]} style={styles.button1}>
          <TouchableOpacity onPress={() => navigation.navigate("Main menu")}>
            <Text style={{
              color: "white",
              fontSize:16,
              textAlign: "center"
            }}>Back</Text>
          </TouchableOpacity>
          </LinearGradient>
          <LinearGradient colors={["#468189", "#77ACA2"]} style={styles.button2}>
          <TouchableOpacity onPress={checkCredentials}>
            <Text style={{
              color: "white",
              fontSize:16,
              textAlign: "center"
            }}>Next</Text>
          </TouchableOpacity>
          </LinearGradient>
          
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  input:{
    flexDirection: 'row',
    borderBottomColor: '#24353E',
    borderBottomWidth: 2,
    margin: '2.3%',
    width: '58%',
    padding: 10,
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
    width: 296,
    height: 400,
    backgroundColor: "#89ADB9",
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    opacity:0.42
  },
  button1:{
    width: '15%',
    height: '42%',
    backgroundColor:"#468189",
    borderRadius: 65,
    marginTop: '10%',
    marginLeft: '35%'
  },
  button2:{
    width: '15%',
    height: '42%',
    backgroundColor:"#468189",
    borderRadius: 65,
    marginTop: '10%',
    marginLeft: '1%'
  }
});
