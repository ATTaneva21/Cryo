import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Image,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function DetailedTransactions({navigation}) {
  return (
    <LinearGradient colors={["#162d40", "#071012"]} style={{flex:1}}>
      <View>        
          <TouchableOpacity onPress={ ()=> { navigation.navigate("Profile") }}  style={styles.profile}>
            <Image source={require('../assets/profile.png')} />
          </TouchableOpacity>
      </View>

      <SafeAreaView style={styles.body}>
        
      <View style={{flexDirection: "row"}}>

            <TouchableOpacity onPress={ ()=> { navigation.navigate("Transactions") }}  style={styles.button}>
                <Text style={{ fontSize: 17, color: "white"}}>Back</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Transactions</Text>

        </View>

        <View style = {styles.box}>

          <View style={{flexDirection:"row"}}>
                  <Text style={styles.description}>Lidl</Text>
                  <Text style={{ color:"white", fontSize: 17, fontWeight: "100", marginLeft: 210}}>-5 USD</Text>
          </View>

          
        </View>

        <View style = {styles.box}>

            <View style={{flexDirection:"row"}}>
                    <Text style={styles.description}>Status</Text>
                    <Text style={{ color:"white", fontSize: 17, fontWeight: "100", marginLeft: 170}}>Pending</Text>
            </View>

        </View>

        <View style = {styles.box}>

            <View style={{flexDirection:"row"}}>
                    <Text style={styles.description}>Card used:</Text>
                    <Text style={{ color:"white", fontSize: 17, fontWeight: "100", marginLeft: 130}}>Visa 1655</Text>
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
        marginLeft: 15,
        right: 10
    },

    body: {
        alignItems: 'center',
        flex: 1
    },
    box: {
    top: 30,
    width: 320,
    padding: 17,
    backgroundColor: "#080C12",
    borderRadius: 12,
    margin: 15
    },

    profile: {
        width: '10%',
        height: '10%',
        marginTop: '2.5%',
        marginLeft: '85%',
        marginBottom: '-15%'
    },

    button: {
        marginLeft: -160,
        top: -20
    },

    description: {
        color:"white",
        fontSize: 17,
        fontWeight: "200"
    },
    
    transaction: {
        flexDirection:"row",
        paddingVertical: 4,
    },
});
