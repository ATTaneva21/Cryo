import React from 'react';
import { StatusBar, StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView, TextProps, Image, ImageBackground,TouchableOpacity } from 'react-native';

export default function SendMoney({navigation}) {
    const [firstName, onChangeFirstName] = React.useState('');
    const [secondName, onChangeSecondName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [iban, onChangeIBAN] = React.useState('');
    const [card, onChangeCard] = React.useState('');
    const [cvv, onChangeCVV] = React.useState('');
    const [description, onChangeDescription] = React.useState('');
return (
    
    <ImageBackground source={require("../assets/mainBackground.png")} resizeMode="cover" style={{flex:1}}>
      <View style={{flexDirection:"row"}}>
        <Text style={styles.text}>Send money</Text>
               
        <TouchableOpacity onPress={ ()=> { navigation.navigate("Profile") }}  style={styles.profile}>
          <Image source={require('../assets/profile.png')} />
        </TouchableOpacity>
        

      </View>
      
        <SafeAreaView style={styles.body}>
          
        
        
        <StatusBar style='light-content' />
        <View>
        
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
          onChangeText={onChangeIBAN}
          value={iban}
          placeholder="Enter recipient’s IBAN"
          placeholderTextColor={"#586571"}
          
        />
        </View>
        <View style={styles.card}>
          <TextInput
            style={styles.inputCard}
            onChangeText={onChangeCard}
            value={iban}
            placeholder="Enter recipient’s IBAN"
            placeholderTextColor={"#586571"}
            
          />
          <TextInput
            style={styles.inputCVV}
            onChangeText={onChangeCVV}
            value={cvv}
            placeholder="CVV"
            placeholderTextColor={"#586571"}
            
          />
        </View>
        <View>
        
        <TextInput
          style={styles.input}
          onChangeText={onChangeDescription}
          value={description}
          placeholder="Enter description (Optional)"
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
    margin: '3%',
    width: '78%',
    padding: 5,
    color: "#FFFFFF"
  },

  inputCard:{
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 2,
    margin: '3%',
    width: '53%',
    padding: 5,
    color: "#FFFFFF"
  },
  
  inputCVV:{
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 2,
    margin: '3%',
    width: '19%',
    padding: 5,
    color: "#FFFFFF"
  },
  
  text: {
    fontSize: 35,
    color: "#FFFFFF",
    marginTop: '15%',
    marginBottom:'14%',
    marginLeft: '8%'
  },

  body:{
    marginLeft: '3%'
  },

  card:{
    flexDirection:"row"
  },
  profile:{
    width: '10%',
    height: '10%',
    marginTop: '10%',
    marginLeft: '22%'
    
  },
  button1:{
    width: '16%',
    height: '16%',
    backgroundColor:"#468189",
    borderRadius: 65,
    marginTop: '40%',
    marginLeft: '62%'
    
  },
  button2:{
    width: '16%',
    height: '16%',
    backgroundColor:"#468189",
    borderRadius: 65,
    marginTop: '40%',
    marginLeft: '2%'
  }

});
