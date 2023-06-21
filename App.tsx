import {Text, View,StyleSheet ,SafeAreaView, ScrollView, StatusBar} from 'react-native';
import React, {Component} from 'react';
import Flatcards from './components/Flatcards';
import Rooms from './components/Rooms';

export default class App extends Component {
  render() {
    return (
       <SafeAreaView>
        <ScrollView>
          <StatusBar translucent backgroundColor={'transparent'}/>
          <View style={styles.lower}>
          <Flatcards/>
          <Rooms/>
          
          </View>
        </ScrollView>
       </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  lower:{
    flex:1,
    
      backgroundColor:'white',
  }
})
