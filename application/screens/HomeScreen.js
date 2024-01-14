import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Image, ImageBackground,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({navigation}) {
      const [username, onChangeText] = React.useState('');
      const [passoword, onChangePassoword] = React.useState('');
      var valueUsername;
  return (
    <LinearGradient colors={["#264B6C","#22425E ","#101A1C", "#0D1B1E", "transparent"]} style={{flex:1}}>
    <View>        
        <TouchableOpacity onPress={ ()=> { navigation.navigate("Profile") }}  style={styles.profile}>
          <Image source={require('../assets/profile.png')} />
        </TouchableOpacity>
    </View>
    <SafeAreaView style={styles.body}>
    
        <View style = {styles.MoneyBox}>
            <Text style={styles.text}>Current balance</Text>
            
            <Text style={styles.transactionsText}>Transactions</Text>
            <TouchableOpacity onPress={ ()=> { navigation.navigate("Main menu") }} style={styles.button1}>

                <Text style={{
                    color: "white",
                    fontSize:10,
                    textAlign: "center"
                    }}>See more</Text>

            </TouchableOpacity>
        </View>
      <View style = {styles.DigitalWillBox}>
      
            
            <Text style={styles.digitalWillText}>Digital Will</Text>
            <TouchableOpacity onPress={ ()=> { navigation.navigate("Main menu") }} style={styles.button2}>

                <Text style={{
                    color: "white",
                    fontSize:10,
                    textAlign: "center"
                    }}>See more</Text>

            </TouchableOpacity>
      </View>
      
      
    </SafeAreaView>
    
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  

  text: {
    fontSize: 25,
    color: "#FFFFFF",
    marginLeft: '2%'
  },
  transactionsText:{
    fontSize: 25,
    color: "#FFFFFF",
    marginLeft: '2%',
    marginTop:'20%'
  },
  digitalWillText:{
    fontSize: 25,
    color: "#FFFFFF",
    marginLeft: '2%',
    
  },

  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  MoneyBox: {
    width: '87%',
    height: '32%',
    backgroundColor: "#080C12",
    borderRadius: 12,
    justifyContent: 'flex-start',
    alignItems: 'left',
    opacity: 0.99,
    marginBottom: '6%',
    padding: 15
  },

  DigitalWillBox:{
    width: '87%',
    height: '50%',
    backgroundColor: "#080C12",
    borderRadius: 12,
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'left',
    opacity: 0.99  
  },

  profile:{
    width: '10%',
    height: '10%',
    marginTop: '2.5%',
    marginLeft: '85%',
    marginBottom: '-15%'
  },

  button1:{
    width: '21%',
    height: '6%',
    marginTop: '15%',
    marginLeft: '80%'
  },

  button2:{
    width: '21%',
    height: '6%',
    marginTop: '87%',
    marginLeft: '80%'
  }

});
