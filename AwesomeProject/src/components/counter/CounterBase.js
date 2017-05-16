import { Component } from 'react';

export default class CounterBase extends Component {

    constructor(props) {
        super(props);

        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);

        this.state = {
            'test': 123
        }
    }

    componentDidMount() { }

    componentWillUnmount() { }

    add() {
        alert('add 1323232324224234234' + this.state.test)
    }

    sub() {
        alert('sub ' + this.state.test)
    }

}