/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Header from "./src/native/components/header";

export default class step03 extends Component {
  render() {
    return (
      <Header />
    );
  }
}



AppRegistry.registerComponent('step04', () => step03);
