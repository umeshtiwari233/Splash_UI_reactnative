import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class Roomcard extends Component {
  render() {
    const {headData,img}=this.props
    return (
        <View>
            
      <View style={styles.roomcard}>
     
        <Text style={styles.temp}>19°C</Text>
        <View>
        <Image source={{uri:img}} style={styles.image}/>
      </View>
      <View>
        <Text style={styles.roomhead}>{headData}</Text>
        <Text style={styles.roomtail}>5 devices</Text>
      </View>
      </View>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
    roomcard:{
        height:200,
        width:160,
        marginLeft:20,
        backgroundColor:'#f7f1e3',
        borderRadius:20,
        textShadowColor:'black',
        shadowColor:'black',
        shadowRadius:50

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