import React, { Component } from 'react';
import { TouchableOpacity, View, Text,StyleSheet } from 'react-native';
import {Audio} from 'expo-av';
import AppHeader from './components/AppHeader'
import DJButton from './components/DJButton'



export default class App extends Component {
  render() {
    return (
      <View style={{marginTop:10}} >
      <AppHeader />
      <DJButton
      uri='http://soundcavern.free.fr/guitar/Acoustic_Guitar_Chords%20-%20Emajup.wav'
      text='Sound 1'
      bgcolor="red"
      />
      <DJButton
      uri='http://soundcavern.free.fr/guitar/Acoustic_Guitar_Chords%20-%20Emajup.wav'
      text='Sound 2'
      bgcolor="blue"
      />
      <DJButton
      uri='http://soundcavern.free.fr/guitar/Acoustic_Guitar_Chords%20-%20Emajup.wav'
      text='Sound 3'
      bgcolor="green"
      />
      <DJButton
      uri='http://soundcavern.free.fr/guitar/Acoustic_Guitar_Chords%20-%20Emajup.wav'
      text='Sound 4'
      bgcolor="yellow"
      />
      <TouchableOpacity style={styles.forButton} onPress={()=>{
        Audio.setIsEnabledAsync(false);
      }}>
      <Text style={styles.forText}>
      Stop Music
      </Text>
      </TouchableOpacity>
      </View>
      
    );
  }
}

const styles=StyleSheet.create({
  forButton:{
marginLeft: 60,
          borderWidth: 1,
          borderColor: 'rgb(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 200,
          height: 100,
          backgroundColor: 'red',
          borderRadius: 100,
          marginTop:20,
  },
  forText:{
fontWeight: 'bold',
fontSize: 20,
  }
})