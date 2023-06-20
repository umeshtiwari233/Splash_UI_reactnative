import { Text, StyleSheet, View,SafeAreaView,ScrollView,Image } from 'react-native'
import React, { Component } from 'react'
import Main from '../Smarthome/Main'

export default class Lampmain extends Component {
  render() {
    return (
        <SafeAreaView>
        <ScrollView>
          <View style={styles.lower}>
          
          <View style={styles.cardOne}>
            
          <View style={styles.cardgm}>
          <View>
                <Text style={styles.tail}> Back </Text>
                
            </View>
            <View >
                <Text style={styles.head}>Lamp</Text>
            </View>
            <View >
                <Text style={styles.head}></Text>
            </View>
          </View>
          <Text style={{color:'white', marginLeft:15}}>Dining room</Text>
          <Image
                style={{width : 81 , height : 42, marginLeft:15,borderRadius:22}}
                source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSohWh22csSf7Hf1IvXM0Xo55Ex2N06gN30gQ&usqp=CAU'}}
            />
          <Text style={{color:'white',fontSize:48,fontWeight:'bold',paddingTop:15, marginLeft:10}}>80%</Text>
          <Text style={{color:'white',fontSize:15, marginLeft:15}}>Brightness</Text>
          <Text style={{color:'white',fontSize:15,fontWeight:'bold',paddingTop:15, marginLeft:15}}>Intensity</Text>
          <Text style={{color:'white',fontSize:15,fontWeight:'bold',paddingTop:15, marginLeft:15}}>Usages</Text>
          <View style={styles.viewer}>
            <Text style={{marginLeft:15}}>Use today</Text>
            <Text>50 watt</Text>
          </View>
          <View style={styles.viewer}>
            <Text  style={{marginLeft:15}}>Use Week</Text>
            <Text >500 watt</Text>
          </View >
          <View style={styles.viewer}>
            <Text  style={{marginLeft:15}}>Use Month</Text>
            <Text>5000 watt</Text>
          </View>
          
          </View>
          <View style={styles.roomcardhead}>
          <Text style={{color:'black',fontWeight:'bold',fontSize:20,marginLeft:10}}>Schedule <Text style={styles.num}>  4  </Text></Text>
          <Text style={{color:'black',fontSize:25}}>+</Text>
        </View>
          <Main headData="Smart Lamp" time="9 am" img2='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRatOJ_kYWXwwB6drSsMtMMCj7t3G8SjJE4BQ&usqp=CAU' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0C-vGT_V2awkoTxxrbqYgD6GhNVjg7oDsA&usqp=CAU'/>
          <Main headData="Air Conditioner" time="11 am" img2='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSohWh22csSf7Hf1IvXM0Xo55Ex2N06gN30gQ&usqp=CAU' img='https://thumbs.dreamstime.com/b/vector-illustration-flat-design-air-conditioner-split-air-conditioner-icon-vector-illustration-flat-design-139476655.jpg'/>
          <Main headData="Smart Lamp" time="8 am" img2='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRatOJ_kYWXwwB6drSsMtMMCj7t3G8SjJE4BQ&usqp=CAU' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0C-vGT_V2awkoTxxrbqYgD6GhNVjg7oDsA&usqp=CAU'/>
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
        backgroundColor:'#CAD5E2',
    },
    img: {
        width: '50%',
        position: 'absolute',
        left: 0,
      },
    viewer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:15,
    },
    head:{
      color:'white',
      fontSize:22,
      fontWeight:600,
      marginLeft:14,
      //alignSelf: 'center',
  },
  num:{
    backgroundColor:'#8395a7',
    color:'white',
    fontSize:18,
  },
  roomcardhead:{
    marginTop:18,
    margin:6,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  cardgm:{
    flex:1,
    flexDirection:"row",
    justifyContent: 'space-between',
    borderBottomLeftRadius:37,
    padding:20,
    fontSize: 24,
},
  tail:{
      paddingTop:6,
      fontSize:16,
      color:'#33d9b2',
  },
    cardOne: {
      width: '100%',
      height: 480,
      fontSize: 24,
      backgroundColor: '#8395a7',
      fontWeight: 'bold',
      //padding:20,
    //   justifyContent: 'space-between',
      borderBottomLeftRadius:37,
      
      //flexDirection:"row"
      
  },
  })