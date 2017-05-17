import React, { Component } from 'react';

export default class CounterBase extends Component {

    constructor(props) {
        super(props);

        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);

        this.state = {
            'test': 'component state 123'
        };
    }

    componentDidMount() { }

    componentWillUnmount() { }

    add() {
        alert('called add++ func. ' + this.state.test);
    }

    sub() {
        alert('called sub-- func. ' + this.state.test);
    }

}