import { Text, StyleSheet, View,Image } from 'react-native'
import React, { Component } from 'react'

export default class Heading extends Component {
  render() {
    return (
        <View style={styles.cardOne}>
            <View style={styles.cardgm}>
            <View>
                <Text style={styles.head}>Power Usage</Text>
            </View>
            <View>
                <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1421/1421366.png'}} style={styles.image}/>
            </View>
        </View>
        <View style={styles.cardgm}>
        <View>
                <Text style={{color:'white',fontSize:16}}>Usage this week</Text>
            </View>
            <View>
            <Text style={{color:'white',fontSize:15, fontWeight:"bold"}}>2500 watt</Text>
            </View>

        </View>
            <View>
                <Image  source={require('../../assets/images/graph.jpeg')} style={{marginLeft:20,marginBottom:10,width:350,height:180}}/>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    image:{
        width:40,
        height:40,
        //borderRadius:5,
        padding:8,
    },
    cardOne: {
        width: '100%',
        height: 320,
        fontSize: 24,
        backgroundColor: '#8395a7',
        fontWeight: 'bold',
        //padding:20,
        justifyContent: 'space-between',
        borderBottomLeftRadius:37,
        flex:1,
        //flexDirection:"row"
        
    },
    cardgm:{
        flex:1,
        width: '100%',
        height: 100,
        flexDirection:"row",
        justifyContent: 'space-between',
        padding:10,
        fontSize: 24,
    },
   
    head:{
        color:'white',
        fontWeight:'800',
        fontSize:24,
        
    },
    body:{
        fontSize:13,
        color:'#000000'
    },
})