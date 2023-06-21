import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import React, { Component } from 'react'

export default class Scroll extends Component {
  render() {
    return (
        <ScrollView horizontal>
      <View style={styles.main}>
        <View style={{flexDirection:'row'}}>
        <Image source={{uri:'https://www.iconsdb.com/icons/preview/gray/mastercard-xxl.png'}} style={{height:20,width:45,marginTop:20,marginLeft:20}}/>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/5566/5566931.png'}} style={{height:25,width:30,marginTop:15,marginLeft:70}}/>
        
        </View>{/* <Text style={{color:'black'}}>Scroll</Text> */}
        <View style={{marginLeft:18,marginTop:40}}>
        <Text style={{fontSize:21,fontWeight:500}}>AED 285.00</Text>
        <Text style={{fontSize:17,fontWeight:500}}>Education</Text>
      <Text style={{fontSize:12,fontWeight:500,marginTop:25}}>CARD NO.</Text>
      <Text style={{fontSize:18,fontWeight:500}}>XXXX 7251</Text>
      </View>
      </View>
      <View style={styles.main2}>
      <View style={{flexDirection:'row'}}>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/39/39134.png'}} style={{height:22,width:50,marginTop:20,marginLeft:20}}/>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/5566/5566931.png'}} style={{height:25,width:30,marginTop:15,marginLeft:70}}/>
        
        </View>{/* <Text style={{color:'black'}}>Scroll</Text> */}
        <View style={{marginLeft:18,marginTop:40}}>
        <Text style={{fontSize:21,fontWeight:500,color:'black'}}>AED 1,820.00</Text>
        <Text style={{fontSize:17,fontWeight:500,color:'grey'}}>Scholarship</Text>
      <Text style={{fontSize:12,fontWeight:500,marginTop:25,color:'black'}}>CARD NO.</Text>
      <Text style={{fontSize:18,fontWeight:500,color:'grey'}}>XXXX 2281</Text>
      </View>
        {/* <Text style={{color:'black'}}>Scroll</Text> */}
      </View>
      
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    main:{
        height:213,
        width:183,
        marginTop:30,
        marginLeft:20,
        backgroundColor:'#2ed573',
        borderRadius:20,
        textShadowColor:'black',
        shadowColor:'black',
        shadowRadius:50
    },
    main2:{
        height:213,
        width:183,
        marginTop:30,
        marginLeft:20,
        backgroundColor:'#f1f2f6',
        borderRadius:20,
        textShadowColor:'black',
        shadowColor:'black',
        shadowRadius:50
    }
})