import React, { Component } from 'react';

class Counter extends Component {
    constructor(qwer) {
        super(qwer); //Component의 State 값을 쓰기 위해 상속을 받는 것

        this.state = {
            number:0,
            test: 12,
        };

    }
    render() {
        let { number, test } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={() => {
                    this.setState({ number: number + 1});
                }}> + 1
                </button>
                <button onClick={() => { this.setState({ number: number - 1}); }}> - 1 </button>
                <br></br>
                <h1>{test}</h1>
                <button onClick={() => { this.setState({ test: number + 1}); }}> test + 1 </button>
            </div>
        );
    }
}

export default Counter;