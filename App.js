import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

const img = require('./imgs/logo.png');

const showPhrase = () => {
  randomNumber = Math.floor(Math.random() * 5);
  const phrases = Array();

  phrases[0] = 'With the new day comes new strength and new thoughts.'; 
  phrases[1] = 'With the new day comes new strength and new thoughts.';
  phrases[2] = 'Beauty is power; a smile is its sword.';
  phrases[3] = 'The past cannot be changed. The future is yet in your power.';
  phrases[4] = 'You will never win if you never begin.';
  
  alert(phrases[randomNumber]);
};

export default class App extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Image source={img} />
        <TouchableOpacity onPress={showPhrase} style={styles.button}>
          <Text style={styles.buttonText}>New phrase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
