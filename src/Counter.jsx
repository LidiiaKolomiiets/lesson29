import React from "react";
import './counter.css';


export default class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: props.initialValue
        }
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    };

    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    };

    reset = () => {
        this.setState({ count: this.props.initialValue })
    };


    render() {
        return (
            <div className="conteiner">
                <div className="block">
                    <button className="btn" onClick={this.decrement}>-</button>
                    <p className="count">{this.state.count}</p>
                    <button className="btn" onClick={this.increment}>+</button>
                </div>
                <button className="reset" onClick={this.reset}>Reset</button>
            </div>
        );
    }
}




