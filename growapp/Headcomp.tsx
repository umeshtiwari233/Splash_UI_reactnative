import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class Headcomp extends Component {
  render() {
    return (
      <View style={styles.main}>
        
        <Image source={{uri:'data:image/jpeg;base64,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'}} style={{marginLeft:30,height:50,width:50, borderRadius:45}}/>
        <View style={{marginLeft:8}}>
            <Text style={styles.prehead}>Total Balance</Text>
            <Text style={styles.posthead}>AED 4,830.00</Text>
        </View>
        
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/54/54481.png'}} style={{marginLeft:65,marginTop:13,height:28,width:28}}/>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/1827/1827392.png'}} style={{marginLeft:20,marginRight:30,marginTop:11,height:30,width:30}}/>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    prehead:{
        color:'grey',
        fontSize:13,
        marginTop:2
        // fontWeight:'bold',
    },
    posthead:{
        fontSize:21,
        marginTop:-2,
        color:'#000000',
        fontWeight:'600'
    },
    main:{
        // backgroundColor:'red',
        marginTop:60,
        width:400,
        // flex:0.1,
        flexDirection:'row',
        justifyContent:'space-between',
    }
})