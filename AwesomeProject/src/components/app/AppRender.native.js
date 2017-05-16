'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import CounterNativeRender from '../counter/Counter.native';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Test js</Text>
        <CounterNativeRender />
      </View>
    );
  }
}

// var styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   screen: {
//     flex: 3,
//     flexDirection: 'row',
//     alignItems: Platform.OS === 'android' ? 'center' : 'flex-end',
//     justifyContent: 'flex-end',
//     backgroundColor: '#68cef2',
//     padding: 18
//   },
//   formulae: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     backgroundColor: '#4c4c4c',
//     padding: 20
//   },
//   keyboard: {
//     height: 420
//   }
// });