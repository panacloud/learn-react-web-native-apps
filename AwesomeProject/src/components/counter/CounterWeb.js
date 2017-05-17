import React from 'react';
import CounterBase from './CounterBase';
// import Render from './CounterWeb';

export default class Counter extends CounterBase {
    constructor(props) {
        super(props);
    }

    render() {
        // return Render.call(this, this.props, this.state);
        return(
            <div>
                <button type="button" onClick={this.add}>Add ++</button>
                {" "}
                <button type="button" onClick={this.sub}>Sub --</button>
            </div>
        )
    }
}