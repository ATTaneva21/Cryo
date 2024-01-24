import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput, SafeAreaView, Image,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

//Allow access to database
const supabaseUrl = "https://lfuhwchxwksgmhwbbhap.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmdWh3Y2h4d2tzZ21od2JiaGFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3NTUxNjEsImV4cCI6MjAyMTMzMTE2MX0.hGBH4G60yeqRhf8CENjA4Oead2UPD9jTEUiCTk0eKPA';
const supabase = createClient(supabaseUrl, supabaseKey);

//Create function for send money screen
export default function SendMoney({navigation}) {

    const [firstName, onChangeFirstName] = React.useState('');
    const [secondName, onChangeSecondName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [iban, onChangeIBAN] = React.useState('');
    const [card, onChangeCard] = React.useState('');
    const [cvv, onChangeCVV] = React.useState('');
    const [money, onChangeMoney] = React.useState('');
    const [description, onChangeDescription] = React.useState('');

     //Clear form inputs
    const ClearInput = () => {
      
      onChangeFirstName('');
      onChangeSecondName('');
      onChangeLastName('');
      onChangeIBAN('');
      onChangeCard('');
      onChangeCVV('');
      onChangeMoney('');
      onChangeDescription('');
    };

    //Check if information was succsessfully added to database
    const SendMoney = async () => {
      try {
        const { data, error } = await supabase
          .from('transfer_money')
          .insert([{ firstName: firstName, secondName: secondName, lastName: lastName, iban: iban, card : card, cvv: cvv, money: money,description: description  }]);
  
        if (error) {
          console.error('Error:', error.message);
          return;
        }

      } catch (error) {
        console.error('Error registering user:', error.message);
      }

    };


return (
  <LinearGradient colors={["#162d40", "#071012"]} style={{flex:1}}>
      <View style={styles.body}>
      <View style={{flexDirection:"row"}}>

        {/*Display main text on Send money screen*/}
        <Text style={styles.text}>Send money</Text>
               
        {/*Upon click, enter profile screen*/}
        <TouchableOpacity onPress={ ()=> { navigation.navigate("Profile") }}  style={styles.profile}>
          <Image source={require('../assets/profile.png')} />
        </TouchableOpacity>
        
      </View>

        <View>
        
        {/*Allow user to input information */}
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
            value={card}
            placeholder="Enter your card's number"
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
            onChangeText={onChangeMoney}
            value={money}
            placeholder="Enter how much money you want to send"
            placeholderTextColor={"#586571"}
          />

          <TextInput
            style={styles.input}
            onChangeText={onChangeDescription}
            value={description}
            placeholder="Enter description (Optional)"
            placeholderTextColor={"#586571"}
          />
        </View>

        <View>
          {/*Add gradient to button background*/}
          <LinearGradient colors={["#3C5882", "#0C1028"]} style={styles.button}>

            {/*Get feedback and clear form*/}
            <TouchableOpacity onPress={ ()=> {  SendMoney(),Alert.alert("You have successfully sent money"),navigation.navigate("Home"),ClearInput()  }}>

              <Text style={{
                color: "white",
                fontSize:16,
                textAlign: "center"
                }}>Send</Text>

            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </LinearGradient>
  );
}

//Add stylization to file
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
  
  button:{
    width: '16%',
    height: '16%',
    backgroundColor:"#468189",
    borderRadius: 65,
    marginTop: '27%',
    marginLeft: '75%'
  }

});
