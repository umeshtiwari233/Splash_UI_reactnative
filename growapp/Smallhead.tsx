import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class  extends Component {
  render() {
    const {textData,img}=this.props
    return (
      <View style={styles.main}>
        <Text style={{color:'black',fontWeight:600,fontSize:23,marginLeft:20}}>{textData}</Text>
        <Image source={{uri:img}} style={{marginRight:25,height:30,width:30}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    main:{
        // backgroundColor:'red',
        marginTop:35,
        width:400,
        // flex:0.1,
        flexDirection:'row',
        justifyContent:'space-between',
    }
})