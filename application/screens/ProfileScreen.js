import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { createClient } from '@supabase/supabase-js';
import { useEffect } from 'react';

//Allow access to database
const supabaseUrl = "https://lfuhwchxwksgmhwbbhap.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmdWh3Y2h4d2tzZ21od2JiaGFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3NTUxNjEsImV4cCI6MjAyMTMzMTE2MX0.hGBH4G60yeqRhf8CENjA4Oead2UPD9jTEUiCTk0eKPA';
const supabase = createClient(supabaseUrl, supabaseKey);

//Create function to access information to database
export default function Settings() {

  const [name, setName] = React.useState('');
  const [birth, setBirth] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [ssn, setSSN] = React.useState('');

  useEffect(() => {

    const fetchData = async () => {

      try {
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .limit(1)

        if (error) {
          console.error('Error fetching data from Supabase:', error.message);
          return;
        }

        if (data && data.length > 0) {
          const firstRow = data[0];
          setName(firstRow.fullName);
          setBirth(firstRow.Birthday);
          setPassword(firstRow.password);
          setEmail(firstRow.email);
          setSSN(firstRow.SSN);
        } else {
          console.log('No data found in the specified table and columns.');
        }
      } catch (error) {
        console.error('Error fetching data from Supabase:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <ImageBackground source={require("../assets/mainBackground.png")} resizeMode="cover" style={{flex:1}}>

        {/*Display text on settings screen*/}
        <Text style={styles.text}>Settings</Text>

        <TouchableOpacity onPress={ ()=> { Alert.alert("Currently not working") }}  style={styles.button}>

            <Text style={{
              color: "#4293f5",
              fontSize: 20,
            }}>Edit</Text>

          </TouchableOpacity>

          <View style={styles.body}>

              <Image style={styles.profile}
                source={require("../assets/profile.png")}
              />
                <Text style={styles.textName}>{name}</Text>

              <View>
                <Text style={styles.textInfo}>Date of Birth: {birth} </Text>
                <Text style={styles.textInfo}>Password: {password}</Text>
                <Text style={styles.textInfo}>Email: {email}</Text>
                <Text style={styles.textInfo}>SSN: {ssn}</Text>
              </View>

          </View>
    </ImageBackground>
  );
}

//Add stylization to file
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "#FFFFFF",
    marginTop: 10,
    marginBottom:70,
    marginLeft: 30
  },
  
  textName:{
    fontSize: 25,
    color: "#FFFFFF",
    marginLeft: 10
  },

  textInfo: {
    fontSize: 20,
    color: "#FFFFFF",
    marginLeft: -80,
    marginTop: 30
  },

  body: {
    alignItems: 'center',
    flex: 1,
  },
  
  profile:{
    width : 100,
    height: 100
  },

  button:{
    width: 60,
    height: 30,
    marginTop: -110,
    marginBottom: 70,
    marginLeft: '85%'
  }
 
});