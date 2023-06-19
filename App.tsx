import {Text, View,StyleSheet ,SafeAreaView, ScrollView} from 'react-native';
import React, {Component} from 'react';
import Flatcards from './components/Flatcards';
import Rooms from './components/Rooms';

export default class App extends Component {
  render() {
    return (
       <SafeAreaView>
        <ScrollView>
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
    height:'100%',
     width: '100%',
      backgroundColor:'white',
  }
})
