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
        
        <View style={{flexDirection: "row"}}>

          <TouchableOpacity onPress={ ()=> { navigation.navigate("Home") }}  style={styles.button}>
            <Image source={require('../assets/back.png')}/>
          </TouchableOpacity>

          <Text style={styles.text}>Transactions</Text>

        </View>
        
        <Text style={styles.transactionDate}>27 January</Text>

        <View style = {styles.box}>
          <TouchableOpacity onPress={()=> { navigation.navigate("Detailed")}}>
            <View style={styles.transaction}>
                    <Text style={styles.description}>Lidl</Text>
                    <Text style={{ color:"white", fontSize: 17, fontWeight: "100", color: "red", marginLeft: 210}}>-5 USD</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.transaction}>
                  <Text style={styles.description}>Kaufland</Text>
                  <Text style={{ color:"white", fontSize: 17, fontWeight: "100", color: "red", marginLeft: 160}}>-20 USD</Text>
          </View>
        </View>
        
        <Text style={styles.transactionDate}>14 January</Text>

        <View style = {styles.box}>

          <TouchableOpacity onPress={()=> { navigation.navigate("Detailed")}}>
            <View style={styles.transaction}>
                    <Text style={styles.description}>Lidl</Text>
                    <Text style={{ color:"white", fontSize: 17, fontWeight: "100", color: "red", marginLeft: 210}}>-5 USD</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.transaction}>
                  <Text style={styles.description}>Kaufland</Text>
                  <Text style={{ color:"white", fontSize: 17, fontWeight: "100", color: "red", marginLeft: 160}}>-20 USD</Text>
          </View>

          <View style={styles.transaction}>
                  <Text style={styles.description}>Fred</Text>
                  <Text style={{ color:"white", fontSize: 17, fontWeight: "100", color: "green", marginLeft: 190}}>+17 USD</Text>
          </View>

        </View>

        <Text style={styles.transactionDate}>11 January</Text>

        <View style = {styles.box}>

          <TouchableOpacity onPress={()=> { navigation.navigate("Detailed")}}>
            <View style={styles.transaction}>
                    <Text style={styles.description}>Lidl</Text>
                    <Text style={{ color:"white", fontSize: 17, fontWeight: "100", color: "red", marginLeft: 210}}>-5 USD</Text>
            </View>
          </TouchableOpacity>

        </View>

        <Text style={styles.transactionDate}>5 January</Text>

        <View style = {styles.box}>

          <View style={styles.transaction}>
                  <Text style={styles.description}>Metro</Text>
                  <Text style={{ color:"white", fontSize: 17, fontWeight: "100", marginLeft: 120}}>Failed purchase</Text>
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
      fontWeight: "bold",
      marginLeft: 20,
      right: 10,
      top: 15
  },
  
  body: {
      alignItems: 'center',
      flex: 1
  },

  box: {
    width: 320,
    padding: 17,
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

  button: {
    marginLeft: -170,
    top: -10
  },

  transactionDate: {
    fontSize: 24,
    color: "#FFFFFF",
    marginLeft: -230,
    marginTop: 25
  },

  transaction: {
    flexDirection:"row",
    paddingVertical: 4,
  },

  description: {
    color:"white",
    fontSize: 17,
    fontWeight: "200"
  }

});
