import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Image,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({navigation}) {
  return (
    <LinearGradient colors={["#162d40", "#071012"]} style={{flex:1}}>
      <View>        
          <TouchableOpacity onPress={ ()=> { navigation.navigate("Profile") }}  style={styles.profile}>
            <Image source={require('../assets/profile.png')} />
          </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.body}>
      
          <View style = {styles.MoneyBox}>
              <Text style={styles.text}>Current balance</Text>

              <Text style={{ color:"white", fontSize: 20, marginLeft: 15, marginTop: 10, fontWeight: "200"}}>75.03 USD</Text>

              <Text style={styles.transactionsText}>Transactions</Text>

              <View style={{flexDirection:"row"}}>
                <Text style={{ color:"white", fontSize: 17, marginLeft: 15, marginTop: 10, fontWeight: "200"}}>Lidl</Text>
                <Text style={{ color:"white", fontSize: 17, marginLeft: 15, marginTop: 10, fontWeight: "100", color: "red"}}>-5 USD</Text>
              </View>

              <View style={{flexDirection:"row"}}>
                <Text style={{ color:"white", fontSize: 17, marginLeft: 15, marginTop: 5, fontWeight: "200"}}>Kaufland</Text>
                <Text style={{ color:"white", fontSize: 17, fontWeight: "100", color: "red", marginLeft: 160}}>-20 USD</Text>
              </View>

              <TouchableOpacity onPress={ ()=> { navigation.navigate("Transactions") }} style={styles.button}>

                  <Text style={{
                      color: "#8CBAFF",
                      fontSize:11,
                      fontWeight: "300",
                      top: 5,
                    }}>See more</Text>

              </TouchableOpacity>
          </View>
          
          <View style = {styles.DigitalWillBox}> 
              <Text style={styles.digitalWillText}>Digital Will</Text>
              
              <View style={{flexDirection:"column"}}>
                <Text style={{ color:"white", fontSize: 17, marginLeft: 15, marginTop: 10, fontWeight: "200"}}>Bank account</Text>
                <Text style={{ color:"white", fontSize: 17, marginLeft: 15, marginTop: 10, fontWeight: "200"}}>Porsche</Text>
                <Text style={{ color:"white", fontSize: 17, marginLeft: 15, marginTop: 10, fontWeight: "200"}}>Ferrari</Text>
                <Text style={{ color:"white", fontSize: 17, marginLeft: 15, marginTop: 10, fontWeight: "200"}}>Cat</Text>
                <Text style={{ color:"white", fontSize: 17, marginLeft: 15, marginTop: 10, fontWeight: "200"}}>House 1</Text>
                <Text style={{ color:"white", fontSize: 17, marginLeft: 15, marginTop: 10, fontWeight: "200"}}>House 2</Text>
                <Text style={{ color:"white", fontSize: 17, marginLeft: 15, marginTop: 10, fontWeight: "200"}}>Crypto wallet</Text>
              </View>

          </View>

      </SafeAreaView>
    
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  text: {
    fontSize: 25,
    color: "#FFFFFF",
    marginLeft: '2%',
    fontWeight: "bold"
  },

  transactionsText:{
    fontSize: 25,
    color: "#FFFFFF",
    marginLeft: '2%',
    marginTop:'5%',
    fontWeight: "bold"
  },

  digitalWillText:{
    fontSize: 25,
    color: "#FFFFFF",
    marginLeft: '2%',
    fontWeight: "bold"
  },

  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  MoneyBox: {
    width: '87%',
    backgroundColor: "#080C12",
    borderRadius: 12,
    opacity: 0.99,
    marginBottom: '6%',
    padding: 12,
  },

  DigitalWillBox:{
    width: '87%',
    height: '50%',
    backgroundColor: "#080C12",
    borderRadius: 12,
    padding: 15,
    opacity: 0.99  
  },

  profile:{
    width: '5%',
    height: '10%',
    marginTop: '2.5%',
    marginLeft: '85%',
    marginBottom: '-15%'
  },

  button:{
    width: '21%',
    height: '6%',
    marginLeft: '80%'
  },
});
