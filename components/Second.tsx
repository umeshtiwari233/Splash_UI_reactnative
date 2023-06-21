import { Text, StyleSheet, View,Image } from 'react-native'
import React, { Component } from 'react'
import SmallCard from './SmallCard'

export default class Second extends Component {
  render() {
    return (
      <View style={styles.weather}>
                    <View style={styles.main}>
                        <View>
                            <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/3222/3222801.png'}} style={styles.image2}/>
                        </View>
                        <View>
                            <Text style={styles.body}>May 16,2023 10:05 am</Text>
                            <Text style={styles.mid}>Cloudy</Text>
                            <Text style={styles.body}>Jakarta, Indonesia</Text>
                        </View>
                        <View>
                            <Text style={styles.temp}>19°C</Text>
                        </View>
                    </View>
                    <View style={styles.listcard}>
                        <SmallCard textData="Humidity" headData="97%" img='data:image/png;base64,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'/>
                        <SmallCard textData="visibility" headData="7km" img='https://media.istockphoto.com/id/845329690/vector/eye-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=1SnGiyGCXd83V7m2hX0EsghFSqtmApJ6Qyy2b8Y3L1k='/>
                        <SmallCard textData="NE Wind" headData="3km/h" img='https://cdn-icons-png.flaticon.com/512/3731/3731279.png'/>
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
        marginBottom:15,
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
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    
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
        fontSize:10,
        color:'#000000'
    },
    mid:{
        fontSize:24,
        fontWeight:"500",
        color:'#000000',
    },
    temp:{
        fontSize:37,
        color:'#000000',
        fontWeight:'700'
    }
})