import { Text, StyleSheet, View,Image } from 'react-native'
import React, { Component } from 'react'

export default class Bottom extends Component {
  render() {
    return (
        <View style={styles.main}>
        
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/9710/9710468.png'}} style={{marginLeft:30,height:30,width:30,marginTop:20}}/>
        
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/869/869118.png'}} style={{height:32,width:32,marginTop:20}}/>
        
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/10191/10191214.png'}} style={{height:35,width:35,marginTop:20}}/>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/3866/3866743.png'}} style={{marginRight:30,height:30,width:30,marginTop:20}}/>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    main:{
        // backgroundColor:'red',
        borderTopColor:'grey',
        // top
        borderTopWidth:0.2,
        marginTop:25,
        marginBottom:13,
        width:400,
        // flex:0.1,
        flexDirection:'row',
        justifyContent:'space-between',
        shadowColor: "black",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 3,
      width: 1
    }
    }
})