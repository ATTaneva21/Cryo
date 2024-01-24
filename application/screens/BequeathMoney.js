import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput, SafeAreaView, Image,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

//Allow access to database
const supabaseUrl = "https://lfuhwchxwksgmhwbbhap.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmdWh3Y2h4d2tzZ21od2JiaGFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3NTUxNjEsImV4cCI6MjAyMTMzMTE2MX0.hGBH4G60yeqRhf8CENjA4Oead2UPD9jTEUiCTk0eKPA';
const supabase = createClient(supabaseUrl, supabaseKey);

//Create function for bequeath money screen
export default function BequeathMoney({navigation}) {

    const [yourFirstName, onChangeYourFirstName] = React.useState('');
    const [yourSecondName, onChangeYourSecondName] = React.useState('');
    const [yourLastName, onChangeYourLastName] = React.useState('');
    const [rFirstName, onChangeRFirstName] = React.useState('');
    const [rSecondName, onChangeRSecondName] = React.useState('');
    const [rLastName, onChangeRLastName] = React.useState('');
    const [yourIBAN, onChangeYourIBAN] = React.useState('');
    const [rIBAN, onChangeRIBAN] = React.useState('');
    const [effectiveDay, onChangeEffectiveDay] = React.useState('');
    
    //Clear form inputs
    const ClearInput = () => {
      
        onChangeYourFirstName('');
        onChangeYourSecondName('');
        onChangeYourLastName('');
        onChangeRFirstName('');
        onChangeRSecondName('');
        onChangeRLastName('');
        onChangeYourIBAN('');
        onChangeRIBAN('');
        onChangeEffectiveDay('');
        
    };

    //Check if information was succsessfully added to database
    const BequeathMoney = async () => {
      try {
        const { data, error } = await supabase
          .from('bequeath_bank_account')
          .insert([{ yourFirstName: yourFirstName, yourSecondName: yourSecondName, yourLastName: yourLastName, rFirstName: rFirstName, rSecondName : rSecondName, rLastName: rLastName,yourIBAN:yourIBAN,rIBAN:rIBAN,effectiveDay: effectiveDay  }]);
  
        if (error) {
          console.error('Error:', error.message);
          return;
        }

      } catch (error) {
        console.error('Error:', error.message);
      }
    };

return (
    
  <LinearGradient colors={["#162d40", "#071012"]} style={{flex:1}}>

      <View style={{flexDirection:"row"}}>

      <Text style={styles.text}>Bequeath your bank account</Text>
               
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
          onChangeText={onChangeYourFirstName}
          value={yourFirstName}
          placeholder="Enter your first name"
          placeholderTextColor={"#586571"}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeYourSecondName}
          value={yourSecondName}
          placeholder="Enter your second name"
          placeholderTextColor={"#586571"}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeYourLastName}
          value={yourLastName}
          placeholder="Enter your third name"
          placeholderTextColor={"#586571"}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeRFirstName}
          value={rFirstName}
          placeholder="Enter recipient’s first name"
          placeholderTextColor={"#586571"}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeRSecondName}
          value={rSecondName}
          placeholder="Enter recipient’s second name"
          placeholderTextColor={"#586571"}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeRLastName}
          value={rLastName}
          placeholder="Enter recipient’s third name"
          placeholderTextColor={"#586571"}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeYourIBAN}
          value={yourIBAN}
          placeholder="Enter your IBAN"
          placeholderTextColor={"#586571"}
          
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeRIBAN}
          value={rIBAN}
          placeholder="Enter recipient’s IBAN"
          placeholderTextColor={"#586571"}
          
        />
        
        <TextInput
          style={styles.input}
          onChangeText={onChangeEffectiveDay}
          value={effectiveDay}
          placeholder="Enter the effective date of your will"
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
          <TouchableOpacity onPress={ ()=> {  BequeathMoney(),Alert.alert("You have successfully bequeathed your bank account"),navigation.navigate("Home"),ClearInput()  }} style={styles.button2}>

            <Text style={{
              color: "white",
              fontSize:16,
              textAlign: "center"
              }}>Send</Text>

          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

// Add stylization to file
const styles = StyleSheet.create({

  input:{
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 2,
    margin: '2%',
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
    fontSize: 22,
    color: "#FFFFFF",
    marginTop: '15%',
    marginBottom:'16%',
    marginLeft: '5%'
  },

  body:{
    marginLeft: '3%',
    height: '90%',
    width: '100%',
    position: 'absolute',
    marginTop: '30%'
  },

  card:{
    flexDirection:"row"
  },

  profile:{
    width: '10%',
    height: '10%',
    marginTop: '13%',
    marginLeft: '3%'  
  },

  button1:{
    width: '16%',
    height: '50%',
    backgroundColor:"#468189",
    borderRadius: 65,
    marginTop: '10%',
    marginLeft: '60%'
  },

  button2:{
    width: '16%',
    height: '50%',
    backgroundColor:"#468189",
    borderRadius: 65,
    marginTop: '10%',
    marginLeft: '1%'
  }

});
