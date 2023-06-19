import { Text, StyleSheet, View,Image } from 'react-native'
import React, { Component } from 'react'
import SmallCard from './SmallCard'

export default class Second extends Component {
  render() {
    return (
      <View style={styles.weather}>
                    <View style={styles.main}>
                        <View>
                            <Image source={{uri:'data:image/png;base64,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'}} style={styles.image2}/>
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