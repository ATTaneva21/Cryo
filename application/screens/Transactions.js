import React from 'react';
import { StatusBar, StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView, TextProps, Image, ImageBackground,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Transactions({navigation}) {
  return (
    <LinearGradient colors={["#162d40", "#071012"]} style={{flex:1}}>
      <View>        
          <TouchableOpacity onPress={ ()=> { navigation.navigate("Profile") }}  style={styles.profile}>
            <Image source={require('../assets/profile.png')} />
          </TouchableOpacity>
      </View>

      <SafeAreaView style={styles.body}>
        
        <TouchableOpacity onPress={ ()=> { navigation.navigate("Home") }}  style={styles.back}>
          <Text>Back</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Transactions</Text>

        <Text style={styles.transactionDate}>27 January</Text>

        <View style = {styles.box}></View>

        <Text></Text>
        
        

      </SafeAreaView>
    
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  text: {
      fontSize: 28,
      color: "#FFFFFF",
      marginLeft: -130,
      marginTop: -20
  },
  body: {
      alignItems: 'center',
      flex: 1
  },

  box: {
    width: 320,
    height: 200,
    backgroundColor: "#080C12",
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop:100
  },

  profile: {
    width: '10%',
    height: '10%',
    marginTop: '2.5%',
    marginLeft: '85%',
    marginBottom: '-15%'
  },

  back: {
    backgroundColor: "white",
    marginLeft: -320
  },

  transactionDate: {
    fontSize: 26,
    color: "#FFFFFF",
    marginLeft: -230,
    marginTop: 25
  }

});
