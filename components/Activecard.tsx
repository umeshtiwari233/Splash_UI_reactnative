import { Text, StyleSheet, View, Image, ImageBackground } from 'react-native'
import React, { Component } from 'react'

export default class Roomcard extends Component {
  render() {
    return (
        <View>
            
      <View style={styles.roomcard}>
     
        <Text style={styles.temp}>white</Text>
        <View>
        <ImageBackground source={{uri:'https://cdn-icons-png.flaticon.com/512/8620/8620069.png'}} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>  </Text>
    
      <View>
        <Text style={styles.roomhead}>LAMP</Text>
        <Text style={styles.roomtail}>Dining room</Text>
      </View>
      </ImageBackground></View>
      </View>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
    roomcard:{
        height:150,
        width:160,
        marginLeft:20,
        backgroundColor:'#e66767',
        borderRadius:20,

    },
    image:{
            width:120,
            height:120,
            borderRadius:20,
            marginLeft:20,
            paddingTop:5,
    },
    temp:{
        marginLeft:10,
        marginTop:10,
        width:45,
        fontWeight:600,
        borderRadius:6,
        backgroundColor:'#8395a7',
        color:'white',
    },
    roomhead:{
        alignSelf:'center',
        color:'#000000',
        fontSize:16,
        fontWeight:600,
    },
    roomtail:{
        alignSelf:'center',
        color:'#000000',
        fontSize:12,
        fontWeight:500,
    }
})