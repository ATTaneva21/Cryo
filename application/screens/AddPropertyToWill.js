import React from 'react';
import { StatusBar, StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView, TextProps, Image, ImageBackground,TouchableOpacity } from 'react-native';

export default function HomeScreen({navigation}) {
  
    const [firstName, onChangeFirstName] = React.useState('');
    const [secondName, onChangeSecondName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [typeOfProperty, onChangeTypeOfProperty] = React.useState('');
    const [addressOfProperty, onChangeAddressOfProperty] = React.useState('');

return (
    
    <ImageBackground source={require("../assets/mainBackground.png")} resizeMode="cover" style={{flex:1}}>

      <View style={{flexDirection:"row"}}>
        <Text style={styles.text}>Add to will</Text>
        
          <TouchableOpacity onPress={ ()=> { navigation.navigate("Profile") }}  style={styles.profile}>
            <Image source={require('../assets/profile.png')} />
          </TouchableOpacity>

        </View>
      
        <SafeAreaView style={styles.body}>

        <StatusBar style='light-content' />
        <View>

        <TextInput
          style={styles.input}
          onChangeText={onChangeTypeOfProperty}
          value={typeOfProperty}
          placeholder="Enter the type of your property"
          placeholderTextColor={"#586571"}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeFirstName}
          value={firstName}
          placeholder="Enter recipient’s first name"
          placeholderTextColor={"#586571"}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeSecondName}
          value={secondName}
          placeholder="Enter recipient’s second name"
          placeholderTextColor={"#586571"}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeLastName}
          value={lastName}
          placeholder="Enter recipient’s third name"
          placeholderTextColor={"#586571"}
        />

        <TextInput
            style={styles.input}
            onChangeText={onChangeAddressOfProperty}
            value={addressOfProperty}
            placeholder="Enter the address of your property"
            placeholderTextColor={"#586571"}
          />
          

        </View>

        <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={ ()=> { navigation.navigate("DigitalWillCategories") }}  style={styles.button1}>
            
            <Text style={{
              color: "white",
              fontSize:16,
              textAlign: "center"
            }}>Back</Text>

          </TouchableOpacity>

          <TouchableOpacity onPress={ ()=> { Alert.alert("You successfully added item to your digital will"),navigation.navigate("Home"); }} style={styles.button2}>

            <Text style={{
              color: "white",
              fontSize:16,
              textAlign: "center"
              }}>Add</Text>

          </TouchableOpacity>
          
          <View style={styles.box}>

            <Text style={{
              color: "black",
              fontSize:20,
              textAlign: "left",
              marginLeft: '10%'
              }}>Google Karta</Text>

        </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  input:{
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 2,
    margin: '3.1%',
    width: '84%',
    padding: 5,
    color:'#FFFFFF'
    
  },

  text: {
    fontSize: 35,
    color: "#FFFFFF",
    marginTop: '15%',
    marginBottom: '8%',
    marginLeft: '6%'
    
  },

  body:{
    marginLeft: '2.4%'
    
  },

  profile:{
    width: 50,
    height: 50,
    marginTop: 30,
    marginLeft: 135
    
    
  },
  box: {
    width: '85%',
    height: 200,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    justifyContent: 'center',
    position: 'absolute',
    marginTop: '12%',
    marginLeft: '2%'
  },
  button1:{
    width: '15%',
    height: '8%',
    backgroundColor:"#468189",
    borderRadius: 65,
    marginTop:'75%',
    marginLeft:'65%'
    
  },
  button2:{
    width: '15%',
    height: '8%',
    backgroundColor:"#468189",
    borderRadius: 65,
    marginTop:'75%',
    marginLeft: '2%'
  }

});
