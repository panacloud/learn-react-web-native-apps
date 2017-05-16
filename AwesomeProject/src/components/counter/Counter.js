import CounterBase from './CounterBase';
import Render from './CounterWeb';

export default class Counter extends CounterBase {
    constructor(props) {
        super(props);
    }

    render() {
        return Render.call(this, this.props, this.state);
    }
}