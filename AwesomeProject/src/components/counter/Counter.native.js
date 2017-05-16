'use strict';
import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import CounterBase from './CounterBase';

export default class Counter extends CounterBase {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableHighlight onPress={this.add} underlayColor='#cdcdcd'>
                    <Text>Add ++</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.sub} underlayColor='#cdcdcd'>
                    <Text>Sub --</Text>
                </TouchableHighlight>
            </View>
        );
    }
}