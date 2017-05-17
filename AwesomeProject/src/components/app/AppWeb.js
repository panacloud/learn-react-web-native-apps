import React, { Component } from 'react';
// import Render from './AppWeb';
import CounterWebRender from '../counter/CounterWeb';

export default class App extends Component {

    render() {
        // return Render.call(this, this.props, this.state);
        return (
            <div>
                Test App Web Render !!!
                <CounterWebRender />
            </div>
        )
    }
}