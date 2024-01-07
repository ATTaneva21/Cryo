import React from 'react';
import { StatusBar, StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView, TextProps, Image, ImageBackground,TouchableOpacity } from 'react-native';

export default function HomeScreen({navigation}) {
      const [username, onChangeText] = React.useState('');
      const [passoword, onChangePassoword] = React.useState('');
      var valueUsername;
  return (
    <ImageBackground source={require("../assets/mainBackground.png")} resizeMode="cover" style={{flex:1}}>
    <View>        
        <TouchableOpacity onPress={ ()=> { navigation.navigate("Main menu") }}  style={styles.profile}></TouchableOpacity>
    </View>
    <SafeAreaView style={styles.body}>
    
        <View style = {styles.MoneyBox}>
            <Text style={styles.text}>Current balance</Text>
            
            <Text style={styles.transactionsText}>Transactions</Text>
            <TouchableOpacity onPress={ ()=> { navigation.navigate("Main menu") }} style={styles.button1}>

                <Text style={{
                    color: "white",
                    fontSize:10,
                    textAlign: "center"
                    }}>See more</Text>

            </TouchableOpacity>
        </View>
        
      
      
    
      <View style = {styles.DigitalWillBox}>
      
            
            <Text style={styles.digitalWillText}>Digital Will</Text>
            <TouchableOpacity onPress={ ()=> { navigation.navigate("Main menu") }} style={styles.button2}>

                <Text style={{
                    color: "white",
                    fontSize:10,
                    textAlign: "center"
                    }}>See more</Text>

            </TouchableOpacity>
      </View>
      
      
    </SafeAreaView>
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  

  text: {
    fontSize: 25,
    color: "#FFFFFF",
    marginLeft: 10
  },
  transactionsText:{
    fontSize: 25,
    color: "#FFFFFF",
    marginLeft: 10,
    marginTop:70
  },
  digitalWillText:{
    fontSize: 25,
    color: "#FFFFFF",
    marginLeft: 10,
    
  },

  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  MoneyBox: {
    width: 350,
    height: 250,
    backgroundColor: "#080C12",
    borderRadius: 12,
    justifyContent: 'flex-start',
    alignItems: 'left',
    opacity: 0.99,
    marginBottom: 30,
    padding: 15

  },

  DigitalWillBox:{
    width: 350,
    height: 360,
    backgroundColor: "#080C12",
    borderRadius: 12,
    padding: 15,
    marginBottom:50,
    justifyContent: 'flex-start',
    alignItems: 'left',
    opacity: 0.99
    
  },
  profile:{
    width: 50,
    height: 50,
    backgroundColor:"#FFFFFF",
    borderRadius: 100,
    marginTop: 10,
    marginLeft: 353,
    marginBottom: -40
    
  },
  button1:{
    width: 60,
    height: 30,
    marginTop: 50,
    marginLeft:250

  },
  button2:{
    width: 60,
    height: 30,
    marginTop: 280,
    marginLeft:250

  }

});
