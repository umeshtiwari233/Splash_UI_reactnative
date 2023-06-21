import { Text, StyleSheet, View ,Image} from 'react-native'
import React, { Component } from 'react'

export default class First extends Component {
  render() {
    return (
        <View style={styles.cardgm}>
            <View>
                <Text style={styles.head}>Good Morning,</Text>
                <Text style={styles.body}>Kimberly Mastrangelo,</Text>
            </View>
            <View>
                <Image source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAh1BMVEX///8SEzEAAChcXGkPEDB3d4EUFCzm5uoAAAAAACIAACqPj5gAABwAACQAABMAAB7t7e8AABkAAA7Cwsb4+PnOztKurrKXl57h4eMAAAZSUmAPECtMTFhYWGFKSlra2t1PT1afn6dvb3s5OUu4uL1+foUvL0IaGi9mZnEjJDVsbHIjIzmGho2bcLAtAAACzUlEQVRoge2ajXaiMBBGTYgKlIiAoFjUgr/d+v7Pt7HIWbeLkMwktHtO7gN4zxcnyYRkNLJYLJZvZJUts9V3iK98Fs74y/DiZc4IIcwthxbPXfIJyxcDm8uoNpPZYWDzi3c3e0P/09ZszUaZVvRuptV0OGvpBC4nDdwNnHI+gDdZxyFl5BFGw3ibGPYe9iElbdBgb3IxS4qg3Vu7i9SQdzGO/KfeT3d0NCLencJO741gb6BVOLjPB/oPfqy90sqc9XsFLM70ipe5lPdGrrVLKQNpMWGhxtRJKDfUdzXXNrvmnopYzK6zrt5sLVPVj/CLHnEmX10Nrpa5tVD6k2uYlvG+ev2mf4iWePGKq0cWoSf4Hfvav1q3hkavJ/MTJLKYWVvsP53EILE49WCXE0d1LjfwMU4MHWxRY3ucOYXV183MdyhzCTaTANcRXni/4gneFWXeQwtMzCsHZX6HFpgwo0psfoab2QfGvHpFmN8xq9h0gjCfMZsGyjzBHG+t2Zqt2Zqt+f8yo3bJV4w5gZzmGjzMUbaAt2GiHSrg4hR6tKmJ4QecdffXxj78NTiyixIT4kJDO7jIIjSw5UZHBodGR4aGTmdoMfD8Dj6zPwI5XKVR/+9KEKmH3uiILEJvlCPDj+x/E6qG3uqJfPs8pSZOdEUWodW2rAI/lxt8pS1Ly1xuUJrTW32R1UJrWLEfUVi9j/BvUW1w+UtDZEfwFV9+Nbnomsw19Je0udRZ2qK4Fa7OPnSGpiofxlaniFM98OikdDO8yCpHD1U29GMqi8Uiw64ad1Hh7om6mE66VjaO+jDSQ9W1cfPKnHiUdrzuYIG5wR513pwZjSxq7OkNPKOG3zVnz5oGle0fxrVdHQ/wBPLY0hIzF3f9KUkZf+2VqPmhrtlt4ofXj4zmm+EezScOnXm+gHoxc0w9PGxnejg6b8WbczwM98TVYrFYfg6/AWwzMDTefYqLAAAAAElFTkSuQmCC'}} style={styles.image}/>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    cardOne: {
        width: '100%',
        height: 90,
        fontSize: 24,
        backgroundColor: '#33d9b2',
        fontWeight: 'bold',
        //padding:20,
        justifyContent: 'space-between',
        borderBottomLeftRadius:37,
        flex:1,
        //flexDirection:"row"
        
    },
    cardgm:{
        flex:1,
        width: '100%',
        height: 100,
        flexDirection:"row",
        justifyContent: 'space-between',
        borderBottomLeftRadius:37,
        padding:20,
        fontSize: 24,
        marginTop:12
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