import { Text, StyleSheet, View,Image } from 'react-native'
import React, { Component } from 'react'

export default class Listcard extends Component {
  render() {
    const{img,top,bottom,last,vlast}=this.props
    return (
      <View style={styles.main}>
        <Image source={{uri:img}} style={{marginLeft:22,height:50,width:50, borderRadius:45}}/>
       
        <View style={{marginLeft:8}}>
            <Text style={styles.posthead}>{top}</Text>
            <Text style={styles.prehead}>{bottom}</Text>
        </View>
        <View style={{flexDirection:'row',marginLeft:20,marginTop:16,marginRight:28}}>
        <Text  style={{color:'black',fontSize:13,marginTop:4}}>{last}</Text>
        <Text style={{ marginLeft:-1,fontSize:18,marginTop:-2,color:'#000000',fontWeight:'600'}}>{vlast}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    prehead:{
        color:'grey',
        fontSize:16,
        marginTop:2
        // fontWeight:'bold',
    },
    posthead:{
        paddingTop:5,
        marginBottom:-3,
        fontSize:18,
        marginTop:-2,
        color:'#000000',
        fontWeight:'600'
    },
    main:{
        // backgroundColor:'red',
        marginTop:35,
        width:400,
        // flex:0.1,
        flexDirection:'row',
        justifyContent:'space-between',
    }
})