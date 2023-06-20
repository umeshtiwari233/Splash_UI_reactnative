import {Text, View,StyleSheet ,SafeAreaView, ScrollView} from 'react-native';
import React, {Component} from 'react';
import Listtile from './Listtile';
import Heading from './Heading';

export default class Usage_main extends Component {
  render() {
    return (
      <SafeAreaView>
      <ScrollView>
        <View style={styles.lower}>
          <Heading/>
        <View style={styles.roomcardhead}>
          <Text style={styles.head}>Total Today <Text style={styles.num}>  4  </Text></Text>
          <Text style={styles.tail}>See All..</Text>
        </View>
        
        <Listtile textData="Lamp" midData="Kitchen-Bathroom" unitData="8unit  |  12 JAM" img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRucGlsX9CVRgXm98Pll-wBdtKVr83WKnAtHw&usqp=CAU'/>
        <Listtile textData="Air Conditioner" midData="Kitchen-Living room" unitData="8unit  |  12 JAM" img='https://thumbs.dreamstime.com/b/vector-illustration-flat-design-air-conditioner-split-air-conditioner-icon-vector-illustration-flat-design-139476655.jpg'/>
        <Listtile textData="Wireless Speaker" midData="Bedroom" unitData="2unit  |  3 JAM" img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKSVOvDge_5G2-ie52W-L-uUlTfKfUEqTXmyfNydylnF-wrYHajJPSaAcEZHo4HGWcxig&usqp=CAU'/>
        <Listtile textData="Telelvision" midData="Livingroom" unitData="1unit  |  12 JAM" img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3h5UAH1fmSGFis4UNjHT7dcVjMJbLtHZzQSQ0xA&s'/>
        {/* <Listtile textData="Radio" midData="Livingroom" unitData="8unit  |  12 JAM"  img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKSVOvDge_5G2-ie52W-L-uUlTfKfUEqTXmyfNydylnF-wrYHajJPSaAcEZHo4HGWcxig&usqp=CAU'/> */}
        
        </View>
        {/* </View> */}
      </ScrollView>
     </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  lower:{
    height:'100%',
     width: '100%',
      backgroundColor:'white',
  },
  head:{
    color:'#000000',
    fontSize:22,
    fontWeight:600,
    marginLeft:14,
},
num:{
  backgroundColor:'#8395a7',
  color:'white',
},
roomcardhead:{
  marginTop:18,
  margin:6,
  flex:1,
  flexDirection:'row',
  justifyContent:'space-between'
},
tail:{
    paddingTop:6,
    fontSize:16,
    color:'#33d9b2',
},
  cardOne: {
    width: '100%',
    height: 250,
    fontSize: 24,
    backgroundColor: '#8395a7',
    fontWeight: 'bold',
    //padding:20,
    justifyContent: 'space-between',
    borderBottomLeftRadius:37,
    flex:1,
    //flexDirection:"row"
    
},
})
