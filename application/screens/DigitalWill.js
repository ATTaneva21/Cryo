import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//Create function for digital will screen
export default function DigitalWill({navigation}) {
      
  return (
    <LinearGradient colors={["#162d40", "#071012"]} style={{flex:1}}>

    <View>

        {/*Open profile on press */}
        <TouchableOpacity onPress={ ()=> { navigation.navigate("Profile") }}  style={styles.profile}>
          <Image source={require('../assets/profile.png')} />
        </TouchableOpacity>
    </View>

    <SafeAreaView style={styles.body}>
        <Text style={styles.text}>Digital will</Text>
        <View style = {styles.box}></View>
    </SafeAreaView>

      <LinearGradient colors={["#3C5882", "#0C1028"]} style={styles.button}>

        {/*Open categories menu on press */}
        <TouchableOpacity onPress={ ()=> { navigation.navigate("DigitalWillCategories") }} >

            <Text style={{
                  color: "white",
                  fontSize:16,
                  textAlign: "center"
              }}>Add</Text>

        </TouchableOpacity>
      </LinearGradient>
    </LinearGradient>
  );
}

// Add stylization to file
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
    height: 550,
    backgroundColor: "#080C12",
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop:70
  },

  
  profile:{
    width: '10%',
    height: '10%',
    marginTop: '2.5%',
    marginLeft: '85%',
    marginBottom: '-15%'
  },

  button:{
    width: '17%',
    height: '4%',
    backgroundColor:"#468189",
    borderRadius: 65,
    marginBottom: '4%',
    marginLeft: '77%'
  }

});
