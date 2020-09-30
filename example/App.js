/**
 * LiveBundle demo application
 */

import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import livebundle from 'react-native-livebundle';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>LiveBundle Demo</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => livebundle.launchUI()}>
          <Text style={styles.buttonText}>Launch LiveBundle Menu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgb(65,136,214)',
    borderColor: 'rgb(25,96,174)',
    borderRadius: 3,
    borderWidth: 0.3,
    alignItems: 'center',
    margin: 5,
    width: 220,
    padding: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
