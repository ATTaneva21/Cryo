import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput, SafeAreaView, Image, ImageBackground,TouchableOpacity } from 'react-native';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://lfuhwchxwksgmhwbbhap.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmdWh3Y2h4d2tzZ21od2JiaGFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3NTUxNjEsImV4cCI6MjAyMTMzMTE2MX0.hGBH4G60yeqRhf8CENjA4Oead2UPD9jTEUiCTk0eKPA';
const supabase = createClient(supabaseUrl, supabaseKey);

//Create function for adding a property to will
export default function AddPropertyToWillScreen({navigation}) {

    const [firstName, onChangeFirstName] = React.useState('');
    const [secondName, onChangeSecondName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [typeOfProperty, onChangeTypeOfProperty] = React.useState('');
    const [addressOfProperty, onChangeAddressOfProperty] = React.useState('');

    //Clear form inputs
     const ClearInput = () => {

      onChangeFirstName('');
      onChangeSecondName('');
      onChangeLastName('');
      onChangeLastName('');
      onChangeTypeOfProperty('');
      onChangeAddressOfProperty('');
    
    };

    const BequeathProperty = async () => {
      try {
        const { data, error } = await supabase
          .from('bequeath_property')
          .insert([{ firstName: firstName, secondName: secondName, lastName: lastName, typeOfProperty: typeOfProperty, addressOfProperty : addressOfProperty}]);
  
        if (error) {
          console.error('Error:', error.message);
          return;
        }
        
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
return (
    
    <ImageBackground source={require("../assets/mainBackground.png")} resizeMode="cover" style={{flex:1}}>

      <View style={{flexDirection:"row"}}>

        <Text style={styles.text}>Add to will</Text>

          {/*Open profile on press */}
          <TouchableOpacity onPress={ ()=> { navigation.navigate("Profile") }}  style={styles.profile}>

            <Image source={require('../assets/profile.png')} />

          </TouchableOpacity>

        </View>
      
        <SafeAreaView style={styles.body}>
          <View>

            {/*Allow user to input information into database */}
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

            {/*Return to categories menu */}
            <TouchableOpacity onPress={ ()=> { navigation.navigate("DigitalWillCategories") }}  style={styles.button1}>
              
              {/*Add stylization to text */}
              <Text style={{
                color: "white",
                fontSize:16,
                textAlign: "center"
              }}>Back</Text>

            </TouchableOpacity>
            
            {/*Give feedback to user */}
            <TouchableOpacity onPress={ ()=> { BequeathProperty(),Alert.alert("You successfully added item to your digital will"),navigation.navigate("Home"),ClearInput(); }} style={styles.button2}>

              <Text style={{
                color: "white",
                fontSize:16,
                textAlign: "center"
                }}>Add</Text>

            </TouchableOpacity>

          </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

// Add stylization to file
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
