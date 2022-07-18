import React from "react";

export class Calculator extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            a: this.props.a,
            b: this.props.b
        }
    }

     sum = () => {
        let n1 = this.state.a;
        let n2 = this.state.b;

        return n1 + n2;
    }

    render() {
        return <h2>Sum: {this.sum()}</h2>
    }
}