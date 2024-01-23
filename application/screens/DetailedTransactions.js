import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Image,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Transactions({navigation}) {
  return (
    <LinearGradient colors={["#162d40", "#071012"]} style={{flex:1}}>
      <View>        
          <TouchableOpacity onPress={ ()=> { navigation.navigate("Profile") }}  style={styles.profile}>
            <Image source={require('../assets/profile.png')} />
          </TouchableOpacity>
      </View>

      <SafeAreaView style={styles.body}>
        
        <TouchableOpacity onPress={ ()=> { navigation.navigate("Home") }}  style={styles.back}>
          <Text>Back</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Transactions</Text>

        <Text style={styles.transactionDate}>27 January</Text>

        <View style = {styles.box}>

          <View style={{flexDirection:"row"}}>
                  <Text style={{ color:"white", fontSize: 17, fontWeight: "200"}}>Lidl</Text>
                  <Text style={{ color:"white", fontSize: 17, fontWeight: "100", color: "red", marginLeft: 210}}>-5 USD</Text>
          </View>

          <View style={{flexDirection:"row"}}>
                  <Text style={{ color:"white", fontSize: 17, fontWeight: "200"}}>Kaufland</Text>
                  <Text style={{ color:"white", fontSize: 17, fontWeight: "100", color: "red", marginLeft: 160}}>-20 USD</Text>
          </View>
        </View>
        
        <Text style={styles.transactionDate}>14 January</Text>

        <View style = {styles.box}>

          <View style={{flexDirection:"row"}}>
                  <Text style={{ color:"white", fontSize: 17, fontWeight: "200"}}>Lidl</Text>
                  <Text style={{ color:"white", fontSize: 17, fontWeight: "100", color: "red", marginLeft: 210}}>-5 USD</Text>
          </View>

          <View style={{flexDirection:"row"}}>
                  <Text style={{ color:"white", fontSize: 17, fontWeight: "200"}}>Kaufland</Text>
                  <Text style={{ color:"white", fontSize: 17, fontWeight: "100", color: "red", marginLeft: 160}}>-20 USD</Text>
          </View>

          <View style={{flexDirection:"row"}}>
                  <Text style={{ color:"white", fontSize: 17, fontWeight: "200"}}>Fred</Text>
                  <Text style={{ color:"white", fontSize: 17, fontWeight: "100", color: "green", marginLeft: 190}}>+17 USD</Text>
          </View>

        </View>

        <Text style={styles.transactionDate}>11 January</Text>

        <View style = {styles.box}>

          <View style={{flexDirection:"row"}}>
                  <Text style={{ color:"white", fontSize: 17, fontWeight: "200"}}>Lidl</Text>
                  <Text style={{ color:"white", fontSize: 17, fontWeight: "100", color: "red", marginLeft: 210}}>-5 USD</Text>
          </View>
          
        </View>

        <Text style={styles.transactionDate}>5 January</Text>

        <View style = {styles.box}>

          <View style={{flexDirection:"row"}}>
                  <Text style={{ color:"white", fontSize: 17, fontWeight: "200"}}>Metro</Text>
                  <Text style={{ color:"white", fontSize: 17, fontWeight: "100", textAlign: 'right'}}>Failed purchase</Text>
          </View>
          
        </View>
      </SafeAreaView>
    
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  text: {
      fontSize: 28,
      color: "#FFFFFF",
      marginLeft: -130,
      marginTop: -20,
      fontWeight: "bold"
  },
  body: {
      alignItems: 'center',
      flex: 1
  },

  box: {
    width: 320,
    padding: 20,
    backgroundColor: "#080C12",
    borderRadius: 12,
  },

  profile: {
    width: '10%',
    height: '10%',
    marginTop: '2.5%',
    marginLeft: '85%',
    marginBottom: '-15%'
  },

  back: {
    backgroundColor: "white",
    marginLeft: -320
  },

  transactionDate: {
    fontSize: 24,
    color: "#FFFFFF",
    marginLeft: -230,
    marginTop: 25
  }

});
