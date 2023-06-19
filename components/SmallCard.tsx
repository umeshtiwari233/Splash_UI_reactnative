import { Text, StyleSheet, View ,Image} from 'react-native'
import React, { Component } from 'react'

export default class SmallCard extends Component {
  render() {
   const {textData,headData,img}=this.props
    return (
      <View style={styles.small}>
        <View style={styles.innerCard}>
            <View>
            <Image source={{uri:img}} style={styles.image2}/>
            </View>
            <View>
                <Text style={styles.mid}>{headData}</Text>
            </View>
        </View>
        <View>
                <Text style={styles.body}>{textData}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    body:{
        fontSize:13,
        color:'#000000',
        marginLeft:13
    },
    image2:{
        width:30,
        height:30,
        borderRadius:15,
    },
    small:{
        marginLeft:15,
        height:60,
        width:85,
        backgroundColor:'#f7f1e3',
        borderRadius:12,
        
    },
    mid:{
        fontSize:17,
        fontWeight:"500",
        color:'#000000',
    },
    innerCard:{
        margin:6,
        flex:1,
        flexDirection:'row',
    }
})