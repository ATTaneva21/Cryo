import React from 'react';
import { StatusBar, StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView, TextProps, Image, ImageBackground,TouchableOpacity } from 'react-native';

export default function AddVechicleToWill({navigation}) {
    const [firstName, onChangeFirstName] = React.useState('');
    const [secondName, onChangeSecondName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [typeOfVechicle, onChangeTypeOfVechicle] = React.useState('');
    const [vechicleBrand, onChangeVechicleBrand] = React.useState('');
    const [vechicleModel, onChangeVechicleModel] = React.useState('');
    const [vechicleColor, onChangeVechicleColor] = React.useState('');
return (
    
    <ImageBackground source={require("../assets/mainBackground.png")} resizeMode="cover" style={{flex:1}}>
      <View style={{flexDirection:"row"}}>
        <Text style={styles.text}>Add to will</Text>
        <TouchableOpacity onPress={ ()=> { navigation.navigate("Main menu") }}  style={styles.profile}></TouchableOpacity>
      </View>
      
        <SafeAreaView style={styles.body}>
          
        
        
        <StatusBar style='light-content' />
        <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTypeOfVechicle}
          value={typeOfVechicle}
          placeholder="Enter the type of your vechicle"
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
            onChangeText={onChangeVechicleBrand}
            value={vechicleBrand}
            placeholder="Enter vehicle brand"
            placeholderTextColor={"#586571"}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeVechicleModel}
            value={vechicleModel}
            placeholder="Enter vehicle model"
            placeholderTextColor={"#586571"}
            
          />
        <TextInput
          style={styles.input}
          onChangeText={onChangeVechicleColor}
          value={vechicleColor}
          placeholder="Enter vehicle color"
          placeholderTextColor={"#586571"}
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
              }}>Send</Text>

          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  input:{
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 2,
    margin: 12,
    width: 310,
    padding: 5,
    color:'#FFFFFF'
    
  },

  text: {
    fontSize: 35,
    color: "#FFFFFF",
    marginTop: 60,
    marginBottom:70,
    marginLeft: 30
  },

  body:{
    marginLeft: 15
  },

  profile:{
    width: 50,
    height: 50,
    backgroundColor:"#FFFFFF",
    borderRadius: 100,
    marginTop: 40,
    marginLeft: 123
    
  },
  button1:{
    width: 60,
    height: 30,
    backgroundColor:"#468189",
    borderRadius: 65,
    marginTop:68,
    marginLeft:250
    
  },
  button2:{
    width: 60,
    height: 30,
    backgroundColor:"#468189",
    borderRadius: 65,
    marginTop:68,
    marginLeft: 10
  }

});
