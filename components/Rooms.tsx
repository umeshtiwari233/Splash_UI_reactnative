import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Roomcard from './Roomcard'
import Activecard from './Activecard'

export default class Rooms extends Component {
  render() {
    return (
    <View>
      <View style={styles.roomcardhead}>
        <Text style={styles.head}>Rooms</Text>
        <Text style={styles.tail}>See All..</Text>
      </View>
      <View style={styles.roomcardrow}>
        <Roomcard headData="Living Room" img='https://cdn-icons-png.flaticon.com/512/5252/5252988.png'/>
        <Roomcard headData="Bedroom" img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4L9JPOul5ahHdWdQIE6e4M340sE5eJE7-A&usqp=CAU'/>
      </View>
      <View style={styles.roomcardhead}>
        <Text style={styles.head}>Active</Text>
        <Text style={styles.tail}>See All..</Text>
      </View>
      <View  style={styles.roomcardrow}>
        <Activecard/>
        <Activecard/>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    lower:{
        backgroundColor:'white',
    },
    head:{
        color:'#000000',
        fontSize:20,
        fontWeight:600,
        marginLeft:14,
    },
    tail:{
        paddingTop:6,
        color:'#33d9b2',
    },
    roomcardhead:{
        marginTop:18,
        margin:6,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    roomcardrow:{
        width:'100%',
        flex:1,
        flexDirection:'row',
    }
})