import { Text, StyleSheet, View,Image } from 'react-native'
import React, { Component } from 'react'

export default class Listtile extends Component {
  render() {
    const {textData,midData,unitData,img}=this.props
    return (
      <View>
        <View style={styles.main}>
                        <View>
                            <Image source={{uri:img}} style={styles.image2}/>
                        </View>
                        <View>
                            <Text style={styles.mid}>{textData}</Text>
                            <Text style={styles.body}>{midData}</Text>
                            <Text style={styles.body}>{unitData}</Text>
                        </View>
                        <View>
                            <Text style={styles.tailhead}>1000Kw/h</Text>
                            <Text style={styles.tailbody}>-11.2%</Text>
                        </View>
                    </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    weather:{
        padding:8,
        width: 335,
        height: 150,
        marginLeft:30,
        marginBottom:30,
        backgroundColor:'#d1ccc0',
        justifyContent:'center',
        borderRadius:16
    },
    listcard:{
        height:70,
        width:335,
        flex:1,
        flexDirection:'row',
    },
    main:{
        borderRadius:20,
        padding:14,
        height:82,
        margin:8,
        marginLeft:15,
        marginRight:15,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#d1d8e0'
    
    },
    image2:{
        width:60,
        height:60,
        borderRadius:30,
    },
    head:{
        color:'white',
        fontWeight:'800',
        fontSize:24,
        
    },
    body:{
        fontSize:12,
        color:'#808e9b'
    },
    mid:{
        fontSize:18,
        fontWeight:"500",
        color:'#000000',
    },
    tailhead:{
        paddingTop:3,
        fontSize:14,
        fontWeight:'600',
        color:'#00d8d6'
    },
    tailbody:{
        fontSize:12,
        //fontWeight:600,
        color:'black'
    },
    temp:{
        fontSize:37,
        color:'#000000',
        fontWeight:'700'
    }
})