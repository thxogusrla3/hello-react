import React, { Component } from 'react';

class MyTestComponent extends Component {
    render() {
        const {name, qwer} = this.props;
        return (
            <div className="MytestComponent" id="mytestComponent">
                <h2>Name 값이야 {name}</h2>
                <h1>{qwer} 이 값은 내가 직접 넣어준건데 이건</h1>
            </div>
        );
    }
};

export default MyTestComponent;