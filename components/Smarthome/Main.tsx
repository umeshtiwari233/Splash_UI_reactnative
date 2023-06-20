
import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

 
export default class Main extends Component {
  render() {
    const {headData, time, img,img2} =this.props
    return (
      <View style={styles.cardContainer} >
       <View style={styles.cardHeadingContainer} >
            <View style={styles.cardHeading} >
                    <Text style={{fontSize : 22 , fontWeight : 'bold' , color : 'black'}} >{headData} </Text>
                    <Text style={{fontSize : 12 , color : 'black' }} >Dining Room | Tue Thu</Text>
            </View>
            <View style={{marginTop:10}}>
            <Image
                style={{width : 46 , height : 25}}
                source={{uri:img2}}
            />
            </View>
       </View>
       <View style={styles.timeContainer} >
         <View style={styles.cardTimeLeft} >
            <Image
                style={{width : 30 , height : 40}}
                source={{uri:img}}
            />
            <View style={{ marginLeft : 20  , height : 30, display : 'flex' , flexDirection : 'column' , justifyContent : 'space-between'}} >
                <Text style={{fontSize : 12 ,  color : 'black'}} >from</Text>
                <Text style={{fontSize : 20 , fontWeight : 'bold' , color : 'black'}} >{time}</Text>
            </View>
         </View>
         <View style={{height : 40 , width : 1 , backgroundColor : 'grey' , marginTop : 5 , marginLeft : 30}} >

         </View>
         <View style={styles.cardTimeRight} >
            <View style={{ marginTop : 5 , marginRight : 10 , height : 60 }} >
                <Text style={{fontSize : 12 ,color : 'black'}} >to</Text>
                <Text style={{fontSize : 20 , fontWeight : 'bold' , color : 'black'}} >8 am</Text>
            </View>
            <View style={{height : 40 , width : 1 , backgroundColor : 'grey' , marginTop : 5 , marginRight : 5}} >

            </View>
            <View style={{ marginTop : 5 , height : 35, display : 'flex' , flexDirection : 'column' , justifyContent : 'space-between'}} >
                <Text style={{fontSize : 12}} >✏️</Text>
                <Text style={{fontSize : 12}} >✏️</Text>
            </View>
         </View>
       </View>
      </View>
    )
  }
}




const styles = StyleSheet.create({
    cardContainer : {
        backgroundColor : '#FFFFFF',
        width : 360 , 
        height : 115 , 
        borderRadius : 20 ,
        padding : 20 , 
        margin : 5,
        marginLeft:20,
    } , 
    cardHeadingContainer : {
        marginTop:-18,
        display : 'flex' , 
        flexDirection : 'row' , 
        justifyContent : 'space-between'
    },
    cardHeading : {

    } , 
    cardTimeLeft : {
        margin : 0 ,
        display : 'flex' , 
        flexDirection : 'row' , 
        width : 120 , 
        justifyContent : 'flex-start' , 
    } , 
    timeContainer : {
        marginTop : 10,
        display : 'flex' , 
       flexDirection  : 'row' ,
       justifyContent : 'space-between'
    }  , 
    cardTimeRight : {
        width : 120 , 
         display : 'flex' , 
        flexDirection : 'row' , 
        justifyContent : 'flex-end'
    }
})