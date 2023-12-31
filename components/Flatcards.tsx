import { Text, StyleSheet, View, Image,SafeAreaView } from "react-native";
import React, {Component} from "react";
import First from "./First";
import Second from "./Second";

export default class Flatcards extends Component {
    render() {
        return (
            <SafeAreaView>
            <View>
                <View style={styles.cardOne}>
                    <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/616/616516.png'}} style={{height:100,width:100,position:'absolute',top:-11,left:-9}}/>
                    <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/616/616516.png'}} style={{height:100,width:100,position:'absolute',top:-36,right:-26}}/>
              
                <First/>
                <Second/>
                <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/439/439842.png'}} style={{height:60,width:60,position:'absolute',top:190,right:-11}}/>
                </View>
                <View style={styles.cardTwo}>
                    
                </View>
                
            </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
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
        marginTop:0,
        //flexDirection:"row"
        
    },
    cardgm:{
        flex:1,
        flexDirection:"row",
        justifyContent: 'space-between',
        borderBottomLeftRadius:37,
        padding:20,
        fontSize: 24,
    },
    cardTwo: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    head:{
        color:'white',
        fontWeight:'800',
        fontSize:24,
        
    },
    body:{
        fontSize:13,
        color:'#000000'
    },
    mid:{
        fontSize:24,
        fontWeight:"500",
        color:'#000000',
    },
    image:{
        width:40,
        height:40,
        borderRadius:20,
        padding:8,
    },
    image2:{
        width:60,
        height:60,
        borderRadius:30,
    },
    
    

});
