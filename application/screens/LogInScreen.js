import React from 'react';
import { StatusBar, StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView, TextProps, Image, ImageBackground,TouchableOpacity } from 'react-native';

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
    <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={ ()=> { navigation.navigate("Main menu") }} style={styles.button1}>

          <Text style={{
            color: "white",
            fontSize:16,
            textAlign: "center"
            }}>Back</Text>

          </TouchableOpacity>
          <TouchableOpacity  
                onPress={ ()=> { 
                if(username === 'user1' && passoword === 'pass1' ){
                  navigation.navigate("HomeScreen") 
                }
                else{
                  Alert.alert("Wrong username or password")
                }
              }}
              title="Log in"
              style={styles.button2}
            >
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
    height: 425,
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
    marginTop: '13%',
    marginLeft: '35%'
  },

  button2:{
    width: '15%',
    height: '42%',
    backgroundColor:"#468189",
    borderRadius: 65,
    marginTop: '13%',
    marginLeft: '1%'
  }

});
