import React, { Component } from 'react';
import { 
  StyleSheet, 
  Image, 
  View,
  TouchableOpacity,
  Text, 
} from 'react-native';

const img = require('./imgs/logo.png');

export default class App extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Image source={img} />
        <TouchableOpacity style={styles.button}>
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
