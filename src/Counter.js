import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props); //Clomponent의 State 값을 쓰기 위해 상속을 받는 것

        this.state = {
            test: 12,
            number:0,
        };

    }
    render() {
        let { number } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <button onClick = {() => {
                        this.setState(prevState => {
                            return {
                                number: prevState.number + 1
                            }
                        }); 
                        this.setState(prevState => ({  //화살표 함수에서 바로 객체를 반환하도록 했기 때문에 ({}) 형태가 됨.
                            number: prevState.number + 1
                        }))
                    }}> test + 1 
                </button>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    }, function callback() {
                        console.log("콜백 실행됨.");
                        console.log(this.state);
                    })
                }}> 콜백 + 1</button>
            </div>
        );
    }
}

export default Counter;