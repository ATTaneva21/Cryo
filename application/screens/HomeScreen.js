import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//Create function for home screen
export default function HomeScreen({navigation}) {

  return (
    <LinearGradient colors={["#162d40", "#071012"]} style={{flex:1}}>

      <View>        
          {/*Open profile on press */}
          <TouchableOpacity onPress={ ()=> { navigation.navigate("Profile") }}  style={styles.profile}>
            <Image source={require('../assets/profile.png')} />
          </TouchableOpacity>
      </View>

      <SafeAreaView style={styles.body}>
      
          <View style = {styles.MoneyBox}>

              {/*Display current balance */}
              <Text style={styles.text}>Current balance</Text>
              
              <Text style={{ color:"white", fontSize: 20, marginLeft: 15, marginTop: 10, fontWeight: "200"}}>75.03 USD</Text>

              {/*Display last transactions and their values */}
              <Text style={styles.transactionsText}>Transactions</Text>

              <View style={{flexDirection:"row"}}>
                <Text style={{ color:"white", fontSize: 17, marginLeft: 15, marginTop: 10, fontWeight: "200"}}>Lidl</Text>
                <Text style={{ color:"white", fontSize: 17, marginLeft: 15, marginTop: 10, fontWeight: "100", color: "red", marginLeft: 210}}>-5 USD</Text>
              </View>

              <View style={{flexDirection:"row"}}>
                <Text style={{ color:"white", fontSize: 17, marginLeft: 15, marginTop: 5, fontWeight: "200"}}>Kaufland</Text>
                <Text style={{ color:"white", fontSize: 17, fontWeight: "100", color: "red", marginLeft: 160}}>-20 USD</Text>
              </View>

              {/*Open transactions menu*/}
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
              {/*Display last items added will */}
              <Text style={styles.digitalWillText}>Digital Will</Text>
              
              <View style={{flexDirection:"column"}}>
                <Text style={styles.will}>Bank account</Text>
                <Text style={styles.will}>Porsche</Text>
                <Text style={styles.will}>Ferrari</Text>
                <Text style={styles.will}>Cat</Text>
                <Text style={styles.will}>House 1</Text>
                <Text style={styles.will}>House 2</Text>
                <Text style={styles.will}>Crypto wallet</Text>
              </View>

          </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

// Add stylization to file
const styles = StyleSheet.create({

  text: {
    fontSize: 25,
    color: "#FFFFFF",
    marginLeft: '2%',
    fontWeight: "bold"
  },

  transactionsText: {
    fontSize: 25,
    color: "#FFFFFF",
    marginLeft: '2%',
    marginTop:'5%',
    fontWeight: "bold"
  },

  digitalWillText: {
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

  DigitalWillBox: {
    width: '87%',
    height: '50%',
    backgroundColor: "#080C12",
    borderRadius: 12,
    padding: 15,
    opacity: 0.99  
  },

  profile: {
    width: '5%',
    height: '10%',
    marginTop: '2.5%',
    marginLeft: '85%',
    marginBottom: '-15%'
  },

  button: {
    width: '21%',
    height: '6%',
    marginLeft: '80%'
  },

  will: {
    color:"white",
    fontSize: 17,
    marginLeft: 15,
    marginTop: 10,
    fontWeight: "200"
  }
});
