import { Text, StyleSheet, View,SafeAreaView,ScrollView,Image } from 'react-native'
import React, { Component } from 'react'
import Main from './Main'

export default class Lamp extends Component {
  render() {
    return (
        <SafeAreaView>
        <ScrollView>
          <View style={styles.lower}>
          <View style={styles.cardOne}>
          <View style={styles.cardgm}>
            <View>
                <Text style={styles.head}>Smart Home</Text>
            </View>
            <View>
                <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1421/1421366.png'}} style={styles.image}/>
            </View>
        </View>
          </View>
          <Main headData="Smart Lamp" time="9 am" img2='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRatOJ_kYWXwwB6drSsMtMMCj7t3G8SjJE4BQ&usqp=CAU' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0C-vGT_V2awkoTxxrbqYgD6GhNVjg7oDsA&usqp=CAU'/>
          <Main headData="Air Conditioner" time="11 am" img2='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSohWh22csSf7Hf1IvXM0Xo55Ex2N06gN30gQ&usqp=CAU' img='https://thumbs.dreamstime.com/b/vector-illustration-flat-design-air-conditioner-split-air-conditioner-icon-vector-illustration-flat-design-139476655.jpg'/>
          <Main headData="Smart Lamp" time="8 am" img2='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRatOJ_kYWXwwB6drSsMtMMCj7t3G8SjJE4BQ&usqp=CAU' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0C-vGT_V2awkoTxxrbqYgD6GhNVjg7oDsA&usqp=CAU'/>
          <Main headData="television" time="8 am" img2='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSohWh22csSf7Hf1IvXM0Xo55Ex2N06gN30gQ&usqp=CAU' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3h5UAH1fmSGFis4UNjHT7dcVjMJbLtHZzQSQ0xA&s'/>
          </View>
        </ScrollView>
       </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    lower:{
        height:'100%',
         width: '100%',
          backgroundColor:'#f7f1e3',
      },
      cardOne: {
        width: '100%',
        height: 170,
        fontSize: 24,
        backgroundColor: '#8395a7',
        fontWeight: 'bold',
        //padding:20,
        justifyContent: 'space-between',
        borderBottomLeftRadius:50,
        flex:1,
        //flexDirection:"row"
        
    },
    head:{
        color:'white',
        fontWeight:'800',
        fontSize:24,
        
    },
    image:{
        width:40,
        height:40,
        //borderRadius:5,
        padding:8,
    },
    cardgm:{
        flex:1,
        flexDirection:"row",
        justifyContent: 'space-between',
        borderBottomLeftRadius:37,
        padding:20,
        fontSize: 24,
    },
})